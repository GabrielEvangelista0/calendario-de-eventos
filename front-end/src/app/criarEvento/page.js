"use client";
import FormCriarEvento from "@/components/Form/formCriarEvento";
import pageStyle from "@/styles/page.module.css"
import styles from "@/app/criarEvento/criarEvento.module.css";
import { getData, postData } from "@/utils/crud";
import { useState } from "react";

export default function Page() {
    const [values, setValues] = useState({})
    console.log(values);
    
    //Lida com a mudança de valores nos inputs
    function handleChange(e) {
        const { id, value } = e.target
        setValues({ ...values, [id]: value })
    }

    //Lida com o envio do formulário
    function handleSubmit(e) {
        e.preventDefault()
        console.log(postData("http://localhost:5000/api/eventos", values))
    }
    return (
        <div className={pageStyle.page}>
            <h1>Criar Evento</h1>
            <div className={styles.criarEvento}>
                <FormCriarEvento 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}