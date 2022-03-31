import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters } from "../actions";
import Cards from "./Cards";
import s from '../cssModules/Home.module.css';

/* Dentro de este componente tendran que crear y renderizar un titulo que indique donde estas (en este caso seria en home),
un Link el cual deberia redirigir a la ruta '/create' con un texto que diga su accion y el componente Cards pasandole
por props el estado global hecho en el reducer. */

/* recuerda que ni bien se renderiza el componente necesitara que se ejecute una accion para obtener los personajes.
Lo cual puedes realizarlo mas adelante */

export default function Home() {
    const characters = useSelector(state => state.characters);
    const charactersCreated = useSelector(state => state.charactersCreated);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
    }, []);

    return(
        <div className={s.container}>
            <h1>You are in home</h1>
            <Link className={s.link} to={'/create'}>Create Your Character</Link>
            <Cards characters={characters} />
            <Cards characters={charactersCreated} />
        </div>
    );
}