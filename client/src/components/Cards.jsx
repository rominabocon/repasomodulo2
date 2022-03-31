import React from "react";
import CharacterCard from "./CharacterCard";
import s from '../cssModules/Cards.module.css';

/* En este componente lo que tendran que hacer es mapear todas las CharacterCard pasandole por props la data que necesita
(vayan al componente para ver que necesita) */

export default function Cards({ characters }) {
    return(
        <div className={s.container}>
            {
                characters?.map(c => <CharacterCard key={c.id} id={c.id} name={c.name} img={c.img} occupation={c.occupation} />)
            }
        </div>
    );
}