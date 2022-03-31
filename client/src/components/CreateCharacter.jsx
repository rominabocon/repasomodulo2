import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCharacter } from "../actions";
import s from "../cssModules/CreateCharacter.module.css";

/* En este componente tendran que hacer un formulario controlado en el cual tendra que validarse
que todos los inputs tengan algo dentro. Es opcional mostrar un mensaje de error */

export default function CreateCharacter() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ character, setCharacter ] = useState({
        name: '',
        img: '',
        nickname: ''
    });

    const [ disabled, setDisabled ] = useState(true);

    const validate = () => {
        if(character.name && character.img && character.nickname) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    useEffect(() => {
        validate();
    },[character])

    const handleChange = e => {
        setCharacter({
            ...character,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createCharacter(character));
        history.push('/');
    };

    return(
        <div className={s.container}>
            <h1 className={s.title}>Create Your Character</h1>
            <button className={s.button}><Link className={s.link} to='/'>go back</Link></button>
            <form className={s.form} onSubmit={e => handleSubmit(e)}>
                <div className={s.contName}>
                    <label>Name: </label>
                    <input
                        type='text'
                        name="name"
                        value={character.name}
                        onChange={e => handleChange(e)}
                        className={s.input}
                        required={true}
                    />
                </div>
                <div className={s.contName}>
                    <label>Image: </label>
                    <input
                        type='text'
                        name="img"
                        value={character.img}
                        onChange={e => handleChange(e)}
                        className={s.input}
                        required={true}
                    />
                </div>
                <div>
                    <label className={s.contNick}>NickName: </label>
                    <input
                        type='text'
                        name="nickname"
                        value={character.nickname}
                        onChange={e => handleChange(e)}
                        className={s.input}
                        required={true}
                    />
                </div>
                <button type="submit" disabled={disabled}>Submit</button>
            </form>
        </div>
    );
}