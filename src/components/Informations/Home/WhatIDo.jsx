import nodejs from '../../../assets/stack/nodejs.svg';
import javascript from '../../../assets/stack/javascript.svg';
import reactjs from '../../../assets/stack/reactjs.svg';
import redux from '../../../assets/stack/redux.svg';
import bootstrap from '../../../assets/stack/bootstrap.svg';
import tailwindcss from '../../../assets/stack/tailwindcss.svg';
import sass from '../../../assets/stack/sass.svg';
import Card from './Card';

const WhatIDo = () => {
    return (
        <section className="pb-12 px-2 sm:px-5 mt-8 md:px-10 lg:px-14">
            <h3 className="text-[35px] dark:text-white font-medium pb-8">Ma Stack</h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
                <Card icon={javascript} title="Javascript" >
                    Langage de programmation de scripts côté client utilisé pour dynamiser les sites web.
                </Card>
                <Card icon={nodejs} title="Node Js" >
                    Environnement d'exécution JavaScript côté serveur.
                </Card>
                <Card icon={reactjs} title="React Js" >
                    Bibliothèque JavaScript open-source pour la création d'interfaces utilisateur
                </Card>
                <Card icon={redux} title="Redux" >
                    Bibliothèque open-source JavaScript de gestion d'état pour applications web.
                </Card>
                <Card icon={bootstrap} title="Bootstrap" >
                    Framework CSS open-source qui facilite la création et le design de applications web.
                </Card>
                <Card icon={tailwindcss} title="Tailwind CSS" >
                    Framework permettant de personnaliser totalement le design d'applications web. 
                </Card>
                <Card icon={sass} title="Sass" >
                    Langage de script préprocesseur qui est compilé ou interprété en CSS. 
                </Card>
            </div>
        </section> 
    );
};

export default WhatIDo;