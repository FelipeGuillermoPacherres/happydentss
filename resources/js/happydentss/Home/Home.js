import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import PrincipalSection from "./PrincipalSection";

const Home = ({url}) => {
    return(
        <>
            <PrincipalSection />
        </>
    )
};

export default Home;

const element = document.getElementById('home');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<Home {...props} />, element);
}
