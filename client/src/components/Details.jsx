import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getCharacter } from "../actions";
import s from "../cssModules/Details.module.css";
import gif from "../assets/img/loading.gif"

/* Commponente de detalles, en el cual renderizaran los datos del personaje que se desee, se toma el
id del personaje el cual viene por url y a partir de una action pasandole como parametro el id del personaje
se deberia poder ver en la pagina un h1 con el nombre, un img con la imagen y dos p con el nickname y las occupations */

export default function Details() {

    const [ loading, setLoading ] = useState(true);

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getCharacter(id));
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    },[]);

    const character = useSelector(state => state.details)


    return(
        <div className={s.container}>
            {
                loading || !character.length
                ? (
                    <img src={gif} />
                )
                : (
                    <div>
                        <Link to='/'>go back</Link>
                        <h1>I am {character[0]?.name}</h1>
                        <div>
                            <img className={s.img} src={character[0]?.img} />
                            <div>
                                <p>Occupations: {character[0]?.occupation}</p>
                                <label>Nickname: {character[0]?.nickname}</label>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}