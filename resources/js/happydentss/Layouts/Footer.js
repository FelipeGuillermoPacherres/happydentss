import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import moment from "moment";

const Footer = ({url}) => {
    const year = moment().format('YYYY');

    return(
        <>
            <footer className={'HappyDentssFooter'}>
                <div className={'container pb-1'}>

                </div>

                <section className={'cr-label'}>
                    <div className={'container'}>
                        <div className="py-1 footer-title-text text-center">
                            <i className="fa-regular fa-copyright pe-1"></i>{ year + ' HappyDentss || Developed by'} <a className={'fp-link'} href={'https://api.whatsapp.com/send?phone=51955172889&text=Hola%2C%20estoy%20interesado%20en%20que%20me%20crees%20una%20p%C3%A1gina%20web%20%F0%9F%99%82'} target={'_blank'}>Lone/Coder</a>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
};

export default Footer;

const element = document.getElementById('footer');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<Footer {...props} />, element);
}
