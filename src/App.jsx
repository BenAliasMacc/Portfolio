import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Informations from './components/Informations/Informations';
import Profil from './components/Profil/Profil';
import TransitionPage from './components/TransitionPage';

function App() {

  const [navBlack, setNavBlack] = useState(false);
  const [page, setPage] = useState(1);
  
  console.log(page);
  useEffect(() => {
    const handleScroll = () => {
        const section = document.getElementById('section');
        const scrollPosition = section.scrollTop;
        if (scrollPosition > 100) {
            setNavBlack(true);
        } else {
            setNavBlack(false);
        }
    };
    const section = document.getElementById('section');
    section.addEventListener('scroll', handleScroll);
    return () => {
        section.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='dark'>
      {/* <TransitionPage /> */}
      <main className="relative bg-homeBg h-screen bg-no-repeat bg-center bg-cover dark:bg-homeTwoBg-dark md:pb-16 w-full">
        <Header navBlack={navBlack} setPage={setPage} />
        <section id='section' className="scrollbar lg:container h-screen mx-auto grid grid-cols-12 md:gap-10 justify-between overflow-x-hidden overflow-y-scroll py-4">
          <Profil setNavBlack={setNavBlack} page={page}/>
          <Informations page={page} setPage={setPage} />
        </section>
      </main>  
    </div>
  )
};

export default App;
