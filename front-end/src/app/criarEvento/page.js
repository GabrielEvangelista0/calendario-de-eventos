"use client";
import FormCriarEvento from "@/components/Form/formCriarEvento";
import pageStyle from "@/styles/page.module.css"
import styles from "@/app/criarEvento/criarEvento.module.css";
import { postData } from "@/lib/eventosCRUD";
import { useEffect, useState } from "react";
import { pegarUsuarioLogado } from "@/lib/userLogin";
import Cookies from "js-cookie";

export default function Page() {
    const [values, setValues] = useState({})
    const [usuario, setUsuario] = useState()
    useEffect(() => {
        async function fetchData() {
            const token = Cookies.get('token');
            const data = await pegarUsuarioLogado(token);
            setUsuario(data);
        }
        fetchData();
    },[])
    //Lida com a mudança de valores nos inputs
    function handleChange(e) {
        const { id, value } = e.target
        setValues({ ...values, [id]: value })
    }

    //Lida com o envio do formulário
    function handleSubmit(e) {
        e.preventDefault()
        console.log(postData("http://localhost:5000/api/eventos", {...values, criador: usuario._id}));
    }
    return (
        <div className={pageStyle.page}>
            <h1>Criar Evento</h1>
            <div className={styles.criarEvento}>
                {usuario == undefined ? <p>Carregando...</p> : 
                <FormCriarEvento 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                nome="Nome do Evento"
                dataInicio="Data de inicio"
                dataFim="Data de termino"
                horaInicio="Hora de inicio"
                horaFim="Hora de termino"
                local="Local"
                descricao="Descricao"
                />}
            </div>
            <div className={styles.criarEvento}>
                {usuario == undefined ? <p>Carregando...</p> : <p>Usuario: {usuario._id}</p>}
            </div>
        </div>
    );
}