import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import {getCurrentYear, getWhatsappNumber, getWindowSize} from "../../functions/General";
import imgLogo from "../../../../public/img/profile-photo-2.jpg";

const MyLinks = ({}) => {
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

    const redesSociales = [
        {icon: 'fab fa-facebook-square', label: 'HappyDentss en Facebook', link: 'https://www.facebook.com/HappyDentssodontologia'},
        {icon: 'fab fa-instagram', label:'HappyDentss en Instagram', link: 'https://www.instagram.com/happy_dentss/'},
        {icon: 'fab fa-tiktok', label:'HappyDentss en TikTok', link: 'https://www.tiktok.com/@happydentss?_t=8kSuhP9SHMU&_r=1'},
        {icon: 'fab fa-whatsapp', label:'Hablar por WhatsApp', link: 'https://api.whatsapp.com/send?phone=' + getWhatsappNumber()},
        {icon: 'fas fa-mobile-alt', label:'Llamar por teléfono', link: 'tel:+5113144615'},
    ]

    return(
        <section className={'MyLinksSection'} style={{minHeight: (windowSize.innerHeight + 'px'), height: 'fit-content'}}>
            <div className={'row mx-0 justify-content-center py-4'}>
                <div className={'col-11 col-sm-10 col-md-8 col-lg-7 py-4 panel'}>
                    <div className={'profilePhoto'}>
                        <img src={imgLogo} />
                    </div>
                    <h1 className={'profileName'}>Happy Dentss</h1>
                    <div className={'profileButtons'}>
                        <ul className={'list-unstyled py-2'}>
                            {redesSociales.map((rs, key) => {
                                return(
                                    <li className={'pt-3'}>
                                        <a className={'button btn btn-lg'} href={rs.link} target={'_blank'}>
                                            <i className={rs.icon}></i>{rs.label}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className={'col-12 LoneCoder'}>
                    <i className="fa-regular fa-copyright pe-1"></i>{getCurrentYear() + ' HappyDentss || Diseñado'}
                    <a className={'ps-1 fp-link'} href={'https://api.whatsapp.com/send?phone=51955172889&text=Hola%2C%20estoy%20interesado%20en%20que%20me%20crees%20una%20p%C3%A1gina%20web%20%F0%9F%99%82'} target={'_blank'}><i className="fas fa-less-than"></i>Lone/Coder<i className="fas fa-greater-than"></i></a>
                </div>
            </div>
        </section>
    )
};

export default MyLinks;

const element = document.getElementById('my-links');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<MyLinks {...props} />, element);
}
