import React from "react";
import teethBg from "../../../../public/img/teeth-background.png";
import ReactSlide from "../Plugins/ReactSlide";

const PhotoCarrousel = ({}) => {


    return(
        <>
            <div >
                <img src={teethBg} className={'teethBg rotate blue-bg'}/>
            </div>
            <section className={'BrindandoSonrisasContainer HappyDentssContainer py-5'}>
                    <div className={'titulo text-center pb-5'}>Contamos con especialista de primer nivel en el ambito dental y nuestros pacientes pueden garantizarlo:</div>
                    <ReactSlide />
            </section>
            <div>
                <img src={teethBg} className={'teethBg blue-bg'}/>
            </div>
        </>
    )
};

export default PhotoCarrousel;
