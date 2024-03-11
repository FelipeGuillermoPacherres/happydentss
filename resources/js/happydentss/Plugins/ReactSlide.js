import React, {Component} from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import photo1 from "../../../../public/img/clientes-gallery/foto-1.jpg";
import photo2 from "../../../../public/img/clientes-gallery/foto-2.jpg";
import photo3 from "../../../../public/img/clientes-gallery/foto-3.jpg";
import photo4 from "../../../../public/img/clientes-gallery/foto-4.jpg";
import photo5 from "../../../../public/img/clientes-gallery/foto-5.jpg";
import photo6 from "../../../../public/img/clientes-gallery/foto-6.jpg";
import photo7 from "../../../../public/img/clientes-gallery/foto-7.jpg";

export default class ReactSlide extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                    }
                }
            ]
        };

        let photos = [photo1,photo2,photo3,photo4,photo5,photo6,photo7];

        return(
            <div className="container ReactSlide">

                <Slider {...settings}>
                    {photos.map((t, key) => (
                        <div className="slot" key={key}>

                            <div className="card shadow-sm">
                                <img src={t} className="imgCard" alt="Revisión bucal de paciente en el consultorio de Happy Dentss" />
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        );
    }
};

const element = document.getElementById('react-slide');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<ReactSlide {...props} />, element);
}
