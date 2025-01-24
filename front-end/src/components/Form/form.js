"use client";
import styles from "@/components/Form/form.module.css";
import { useState } from "react";

export default function Form() {
    const [values, setValues] = useState({})

    //Lida com a mudança de valores nos inputs
    function handleChange(e) {
        const { id, value } = e.target
        setValues({ ...values, [id]: value })
    }

    //Lida com o envio do formulário
    function handleSubmit(e) {
        e.preventDefault()
        console.log(values)
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input id="nome" type="text" placeholder="Nome Do evento" onChange={handleChange} />
            <input id="inicio" type="text" placeholder="Inicio Do Evento" onChange={handleChange} />
            <input id="fim" type="text" placeholder="Fim Do evento" />
            <input id="local" type="text" placeholder="Local Do evento" onChange={handleChange} />
            <textarea id="descricao" placeholder="Descrição Do evento" onChange={handleChange}></textarea>
            <button type="submit">Criar Evento</button>
        </form>
    )
}