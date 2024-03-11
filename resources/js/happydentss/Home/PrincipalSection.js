import React, {useEffect, useState} from 'react';
import {getWindowSize} from "../../functions/General";
import logoImg from "../../../../public/img/logo.png";

const PrincipalSection = ({handleClick}) => {
    const [windowSize, setWindowSize] = useState(getWindowSize);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return(
        <section className={'PrincipalSect ScrollDownPlugin'} style={{height: (windowSize.innerHeight + 'px')}}>
            <div>
                <img src={logoImg} />
                <h1 className={'d-none'}>Happy Dentss</h1>
                <h2 className={'d-none'}>Transformando sonrisas, cambiando vidas</h2>
                <p className={'content pt-3 m-0'}>Transformando sonrisas, cambiando vidas</p>
            </div>
            <a onClick={(e) => handleClick(e)}>
                <span></span>
                Iniciar
            </a>
        </section>
    )
};

export default PrincipalSection;
