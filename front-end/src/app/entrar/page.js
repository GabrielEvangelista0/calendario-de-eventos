"use client";
import FormEntrar from "@/components/Form/formEntrar";
import { useState } from "react";
import pageStyles from "@/styles/page.module.css";
import FormCriarUsuaio from "@/components/Form/formCriarUsuaio";
import styles from "@/app/entrar/entrar.module.css";

export default function Page() {
    const [values, setValues] = useState({});
    const [entrarCriar, setEntrarCriar] = useState("entrar");
    //Lida com a mudança de valores nos inputs
    function handleChange(e) {
        const { id, value } = e.target
        setValues({ ...values, [id]: value });
    }
    //Lida com o envio do formulário
    function handleSubmit(e) {
        e.preventDefault()
        console.log("enviei")
        setValues({})
    }
    return (
        <section className={pageStyles.page}>
            <section className={styles.container}>
                <div className={styles.botoes}>
                    <button
                        className={[styles.botao, entrarCriar === "entrar" ? styles.active : ""].join(" ")}
                        onClick={() => setEntrarCriar("entrar")}
                    >
                        Entrar
                    </button>

                    <button
                        className={[styles.botao, entrarCriar === "criar" ? styles.active : ""].join(" ")}
                        onClick={() => setEntrarCriar("criar")}
                    >
                        Criar Conta
                    </button>

                </div>
                <div className={styles.forms}>
                    {entrarCriar === "entrar" ? <FormEntrar handleChange={handleChange} handleSubmit={handleSubmit} /> : <FormCriarUsuaio handleChange={handleChange} handleSubmit={handleSubmit} />}
                </div>
            </section>
        </section>
    );
}