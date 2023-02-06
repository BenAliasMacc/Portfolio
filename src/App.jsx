import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Informations/Home/Home';
import Informations from './components/Informations/Informations';
import Resume from './components/Informations/Resume';
// import Layout from './components/Informations/Layout';
import Profil from './components/Profil/Profil';

function App() {

  return (
    <div className='dark'>
      <main className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark md:pb-16 w-full">
        <section className="container mx-auto grid grid-cols-12 md:gap-10 justify-between">
          <Profil />
          <Informations />
        </section>
      </main>  
    </div>
  )
};

export default App;
