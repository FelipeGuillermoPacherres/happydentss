import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import WhatsAppPlugin from "../Plugins/WhatsAppPlugin";
import {getCurrentYear} from "../../functions/General";

const Footer = ({url}) => {

    let contactLinks = [
        {icon: 'fab fa-whatsapp', content: '+51 959 543 051', link: 'https://api.whatsapp.com/send?phone=51959543051'},
        {icon: 'fas fa-mobile-alt', content: '+51 1 314 4615', link: 'tel:+5113144615'},
        {icon: 'fa-regular fa-envelope', content: 'citas@happydentss.pe', link: 'mailto:citas@happydentss.pe'},
    ];

    let branchLinks = [
        {icon: 'fas fa-map-marker-alt', content: 'Av. Caminos del Inca 3535 - Santiago de Surco', link: 'https://maps.app.goo.gl/zx6KEvbprdEyBpAv5'},
        {icon: 'fas fa-map-marker-alt', content: 'Av. Belisario Suarez 1120 - San Juan de Miraflores', link: 'https://maps.app.goo.gl/f3UYLqj9MQEMgCeE7'},
    ];

    return(
        <>
            <footer className={'HappyDentssFooter'}>
                <div className={'container py-4'}>
                    <div className={'row mx-0'}>

                        <div className={'col-12 col-md-6 col-lg-3 py-3 py-lg-0'}>
                            <div className={'footer-title'}>
                                Contacto
                            </div>

                            <ul className={'list-unstyled footer-list my-2'}>
                                {contactLinks.map((cL,key) => {
                                    return(
                                        <li className="pt-2">
                                            <a className="nav-link-footer" href={cL.link} target="_blank">
                                                <i className={cL.icon}></i> {cL.content}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className={'col-12 col-md-6 col-lg-5 py-3 py-lg-0'}>
                            <div className={'footer-title'}>
                                Locales
                            </div>

                            <ul className={'list-unstyled footer-list my-2'}>
                                {branchLinks.map((cL,key) => {
                                    return(
                                        <li className="pt-2">
                                            <a className="nav-link-footer" href={cL.link} target="_blank">
                                                <i className={cL.icon}></i> {cL.content}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className={'col-12 col-md-6 col-lg-4 py-3 py-lg-0'}>
                            <div className={'footer-title'}>
                                Horario de atención
                            </div>

                            <ul className={'list-unstyled footer-list my-2'}>
                                <li className="pt-2">
                                    <p className='mb-0'>Lunes a Sábados:</p>
                                    <p className='ms-3'>09:00AM a 09:00PM</p>
                                </li>
                                <li className="pt-2">
                                    <p className='mb-0'>Domingos:</p>
                                    <p className='ms-3'>PREVIA CITA</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <section className={'cr-label'}>
                    <div className={'container'}>
                        <div className="py-1 footer-title-text text-center">
                            <i className="fa-regular fa-copyright pe-1"></i>{getCurrentYear() + ' HappyDentss || Diseñado por'}
                            <a className={'ps-1 fp-link'} href={'https://api.whatsapp.com/send?phone=51955172889&text=Hola%2C%20estoy%20interesado%20en%20que%20me%20crees%20una%20p%C3%A1gina%20web%20%F0%9F%99%82'} target={'_blank'}><i className="fas fa-less-than"></i>Lone/Coder<i className="fas fa-greater-than"></i></a>
                        </div>
                    </div>
                </section>
            </footer>

            <WhatsAppPlugin url={url}/>
        </>
    )
};

export default Footer;

const element = document.getElementById('footer');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<Footer {...props} />, element);
}
