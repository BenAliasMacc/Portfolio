import education from '../../../assets/resume/education.svg';
import medal from '../../../assets/resume/medal.svg';
import diplome from '../../../assets/resume/diplome.pdf';
import Header from './Header';
import Card from './CardTraining';

const Training = () => {
    
    return (
        <div>
            <Header icon={education} altText="education" title="Formation" />
            <div>
                <Card year='2021-2022' formation="Développeur d'application Front-end" place="OpenClassroom - Formation à distance" >
                    <a href={diplome} target="_blank"><img src={medal} alt="Lien diplôme" /></a>
                </Card>
                <Card year='2009-2011' formation="DEESMA" place="Ecole internationale Tunon - Paris" description='Formation tourisme et événementiel' />
                <Card year='2021-2023' formation="Bachelor en commerce international" place="Coventry University" />                        
            </div>
        </div>
    );
};

export default Training;