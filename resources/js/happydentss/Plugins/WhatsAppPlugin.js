import React from 'react';
import ReactDOM from "react-dom";
import {getWhatsappNumber} from "../../functions/General";

const WhatsAppPlugin = ({url}) => {

    document.addEventListener('contextmenu', event => {
        event.preventDefault();
    });

    return(
        <a href={'https://api.whatsapp.com/send?phone=' + getWhatsappNumber()} target="_blank" className="whatsapp-plugin">
            <p><i className="whatsapp-icon fab fa-whatsapp"></i></p>
        </a>
    )
};
export default WhatsAppPlugin;

const element = document.getElementById('whatsappplugin');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<WhatsAppPlugin {...props} />, element);
}
