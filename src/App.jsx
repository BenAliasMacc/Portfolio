import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Mobile/Header';
import Informations from './components/Informations/Informations';
import Profil from './components/Profil/Profil';
import TransitionPage from './components/TransitionPage';

function App() {

  const [navBlack, setNavBlack] = useState(false);
  const [page, setPage] = useState(1);

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
      <main className=" overflow-y-scroll relative bg-homeBg h-screen bg-no-repeat bg-center bg-cover dark:bg-homeTwoBg-dark sm:px-4 md:pb-16 w-full">
        <Header navBlack={navBlack} setPage={setPage} />
        <section id='section' className="lg:container h-screen mx-auto grid grid-cols-12 md:gap-10 justify-between  pt-12 lg:py-4">
          <Profil setNavBlack={setNavBlack} page={page}/>
          <Informations page={page} setPage={setPage} />
        </section>
      </main>  
    </div>
  )
};

export default App;
