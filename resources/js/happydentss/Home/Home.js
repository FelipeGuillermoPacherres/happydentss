import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from "react-dom";
import PrincipalSection from "./PrincipalSection";
import AniosDeExperiencia from "./AniosDeExperiencia";
import Especialidades from "./Especialidades";
import PhotoCarrousel from "./PhotoCarrousel";

const Home = ({url}) => {

    const ref = useRef(null);

    function handleClick(e){
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <>
            <PrincipalSection handleClick={handleClick}/>
            <AniosDeExperiencia sectionRef={ref}/>
            <PhotoCarrousel />
            <Especialidades />
        </>
    )
};

export default Home;

const element = document.getElementById('home');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<Home {...props} />, element);
}
