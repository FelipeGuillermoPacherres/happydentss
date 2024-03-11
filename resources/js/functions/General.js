import {useEffect, useState} from "react";
import moment from "moment";

export function getCurrentYear(){
    return moment().format('YYYY');
}

export function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

export function getWhatsappNumber(){
    let numbersList = ['51959543051'];

    return get_random(numbersList);
}
export function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
};
