import { useEffect, useState } from "react";
import { dateParser } from "../utils/utils";
import square from '../assets/square.svg'

const TransitionPage = () => {
    const [hidden, setHidden] = useState(false);
    const phrase = "Bienvenue dans la matrice...";
    const [text, setText] = useState("");

    function rand(min, max) {
      return min + Math.random() * (max - min) | 0;
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
          setText(phrase.slice(0, text.length + 1));
        }, rand(30, 150));
        return () => clearTimeout(timeout); 
    }, [text]);

    setTimeout(() => {
      setHidden(true);
    }, 6000);

    return (
        <div className={`transition-page ${hidden && "transition-hidden"}`}>            
                <p className="transition-font pl-16 pr-2 text" id='typewriter'>{dateParser(new Date)}: {text}</p>
                <p className="transition-font cursor-blink pointer-events-none pt-3"><img src={square} style={{boxShadow: "0px 0px 13px 2px #0F0"}} alt="curseur" /></p>
                <div className="scanlines"></div>
        </div>
    );
};

export default TransitionPage;