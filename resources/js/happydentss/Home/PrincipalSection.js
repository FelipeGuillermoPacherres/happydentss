import React, {useEffect, useState} from 'react';
import {getWindowSize} from "../../functions/General";

const PrincipalSection = ({}) => {
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
                {/*<img src={logoImg} />*/}
            </div>
            <a href="#ourFrames"><span></span>Iniciar</a>
        </section>
    )
};

export default PrincipalSection;
