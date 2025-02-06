"use client";
import FormCriarEvento from "@/components/Form/formCriarEvento";
import pageStyle from "@/styles/page.module.css"
import styles from "@/app/criarEvento/criarEvento.module.css";
import { postData } from "@/lib/eventosCRUD";
import { useEffect, useState } from "react";
import { pegarUsuarioLogado } from "@/lib/userLogin";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { validaData, validaHora } from "@/lib/validaData";

export default function Page() {
    const [values, setValues] = useState({})
    const [message, setMessage] = useState("");
    const [usuario, setUsuario] = useState()
    const router = useRouter();
    useEffect(() => {
        async function fetchData() {
            const token = Cookies.get('token');
            const data = await pegarUsuarioLogado(token);
            setUsuario(data);
        }
        fetchData();
    }, []);

    //Lida com a mudança de valores nos inputs
    function handleChange(e) {
        const { id, value } = e.target
        setValues({ ...values, [id]: value, })
    }

    //Lida com o envio do formulário
    async function handleSubmit(e) {
        e.preventDefault()
        if (!validaData(values.dataInicio, values.dataFim)) {
            setMessage("A data de inicio nao pode ser menor que a data atual ou a data de fim nao pode ser menor que a data de inicio");
            return
        }
        if (!validaHora(values.horaInicio, values.horaFim)) {
            setMessage("A hora de inicio nao pode ser maior que a hora de fim");
            return
        }
        const response = await postData({ ...values, criador: usuario._id });
        setMessage(response.message);

        router.push('/');
        router.refresh();

    }
    return (
        <div className={pageStyle.page}>
            <h1>Criar Evento</h1>
            <p>{message}</p>
            {usuario == undefined ? <p>Carregando...</p> : (
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
            )}
            <p>{message}</p>
        </div>
    );
}