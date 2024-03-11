import React from "react";

const AniosDeExperiencia = ({sectionRef}) =>{
    return(
        <section className={'AniosExperienciaSection HappyDentssContainer py-5'} ref={sectionRef}>
            <h4 className={'titulo'}>Más de 20 años de experiencia</h4>
            <p className={'contenido pt-4'}>Diseñando sonrisas y brindando alegria con calidad a precios módicos. Trabajamos con especialistas de primer nivel</p>
            <div className={'pt-2'}>
                <p className={'contenido pb-3'}>¿Y tú qué estas esperando para lucir una sonrisa más brillante?</p>
                <a className={'btn button-white'}>
                    Agendar cita
                </a>
            </div>
        </section>
    )
};

export default AniosDeExperiencia;
