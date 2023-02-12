import icon1 from '../../../assets/whatIDo/icon-1.svg';
import icon2 from '../../../assets/whatIDo/icon-2.svg';
import icon3 from '../../../assets/whatIDo/icon-3.svg';
import icon4 from '../../../assets/whatIDo/icon-4.svg';
import icon5 from '../../../assets/whatIDo/icon-5.svg';
import icon6 from '../../../assets/whatIDo/icon-6.svg';
import Card from './Card';

const WhatIDo = () => {
    return (
        <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">Ma Stack</h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
                <Card icon={icon1} title="Ui/Ux Design" >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                </Card>
                <Card icon={icon2} title="Ui/Ux Design" >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                </Card>
                <Card icon={icon3} title="Ui/Ux Design" >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                </Card>
                <Card icon={icon4} title="Ui/Ux Design" >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                </Card>
                <Card icon={icon5} title="Ui/Ux Design" >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                </Card>
                <Card icon={icon6} title="Ui/Ux Design" >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                </Card>
            </div>
        </section> 
    );
};

export default WhatIDo;