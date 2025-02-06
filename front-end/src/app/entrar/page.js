"use client";
import FormEntrar from "@/components/Form/formEntrar";
import { use, useEffect, useState } from "react";
import pageStyles from "@/styles/page.module.css";
import FormCriarUsuaio from "@/components/Form/formCriarUsuaio";
import styles from "@/app/entrar/entrar.module.css";
import { cadastrarUsuario, logarUsuario } from "@/lib/userLogin";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Page() {
    const [values, setValues] = useState({});
    const [message, setMessage] = useState("");
    const [entrarCriar, setEntrarCriar] = useState("entrar");

    const router = useRouter();
    useEffect(() => {
        if (Cookies.get('token') !== undefined) {
            router.push('/');
        }
    }, [router]);

    //Lida com a mudança de valores nos inputs
    function handleChange(e) {
        const { id, value } = e.target
        setValues({ ...values, [id]: value });
    }
    //Lida com o envio do formulário de entrar
    async function handleSubmitEntrar(e) {
        e.preventDefault();
        try {
            const response = await logarUsuario(values);
            if (response) {
                setMessage(response.message);
            }
            if (response.message == 'User logged in successfully') {
                Cookies.set('token', response.token);
                router.push('/');
                router.refresh();
            }
        } catch (error) {
            setMessage(response.message);
            
        }
    }

    //Lida com o envio do formulário de criar conta
    async function handleSubmitCriar(e) {
        e.preventDefault();
        try {
            const response = await cadastrarUsuario(values);
            if (response) {
                setMessage(response.message);
                setEntrarCriar("entrar");
            }
        } catch (error) {
            setMessage(response.message);
            console.error("Erro ao cadastrar usuário:", error);
        }
    }

    return (
        <section className={pageStyles.page}>
            <section className={styles.container}>
                <div className={styles.botoes}>
                    <button
                        className={[styles.botao, entrarCriar === "entrar" ? styles.active : ""].join(" ")}
                        onClick={() => {
                            setEntrarCriar("entrar");
                            setValues({});
                        }}
                    >
                        Entrar
                    </button>

                    <button
                        className={[styles.botao, entrarCriar === "criar" ? styles.active : ""].join(" ")}
                        onClick={() => {
                            setEntrarCriar("criar");
                            setValues({});
                        }}
                    >
                        Criar Conta
                    </button>

                </div>
                <div className={styles.forms}>
                    <p className={styles.message}>{message}</p>
                    {entrarCriar === "entrar" ? <FormEntrar handleChange={handleChange} handleSubmit={handleSubmitEntrar} /> : <FormCriarUsuaio handleChange={handleChange} handleSubmit={handleSubmitCriar} />}
                </div>
            </section>
        </section>
    );
}