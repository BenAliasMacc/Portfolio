import experience from '../../../assets/resume/experience.svg';
import Header from './Header';
import Card from './CardExperience';

const Experience = () => {
    
    return (
        <div>
            <Header icon={experience} altText="expérience" title="Expérience" />
            <div>
                <Card year='2022' project="Call Direct" description="Site interne pour l'entreprise de secrétariat call Direct, gestion des profils clients, gestion des appels et messags pour le client." />                
                <Card year='2022' project="Atem Rénovation" description="Site vitrine de la société Atem Rénovation avec Reacts JS." />                
                <Card year='2021 - 2023' project="Side project" description="Projets de formation Openclassroom et projets personnels. Consultable dans le portfolio." />                
            </div>
        </div>
    )
};

export default Experience;