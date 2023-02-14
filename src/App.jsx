import './App.css';
import Informations from './components/Informations/Informations';
import Profil from './components/Profil/Profil';
import TransitionPage from './components/TransitionPage';

function App() {

  return (
    <div className='dark'>
      <TransitionPage />
      <main className="relative bg-homeBg h-screen bg-no-repeat bg-center bg-cover bg-scroll dark:bg-homeTwoBg-dark md:pb-16 w-full">
        <section className="container h-screen mx-auto grid grid-cols-12 md:gap-10 justify-between overflow-scroll py-4">
          <Profil />
          <Informations />
        </section>
      </main>  
    </div>
  )
};

export default App;
