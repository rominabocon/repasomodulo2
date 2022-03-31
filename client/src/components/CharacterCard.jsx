import React from "react";
import { Link } from "react-router-dom";
import s from '../cssModules/CharacterCard.module.css';

/* Aqui van a tomar cada una de la data que se envio desde Cards y van a mostrarla como si fuese una tarjeta
en el orden que les guste */

export default function CharacterCard({ id, name, img }) {
    return(
        <div className={s.container}>
            <Link className={s.link} to={`/${id}`}>{name}</Link>
            <img className={s.img} src={img} />
        </div>
    );
}