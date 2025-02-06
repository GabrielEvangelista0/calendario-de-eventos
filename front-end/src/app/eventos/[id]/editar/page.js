"use client";
import FormEditarEvento from "@/components/Form/formEditarEvento";
import { deleteData, getDataFromId, putData } from "@/lib/eventosCRUD";
import pageStyles from "@/styles/page.module.css";
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const [values, setValues] = useState({});
    const [message, setMessage] = useState("");
    console.log(values);

    useEffect(() => {
        async function fetchData() {
            const data = await getDataFromId(params.id);
            setValues(data);
        }
        fetchData();
    }, []);

    function handleChange(e) {
        const { id, value } = e.target
        setValues({ ...values, [id]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const data = await putData("http://localhost:5000/api/eventos", values._id, values);
        setMessage(data.message);
    }

    async function handleDelete(e) {
        e.preventDefault()
        const data = await deleteData("http://localhost:5000/api/eventos", values._id);
        setMessage(data.message);
    }
    return (
        <section className={pageStyles.page}>
            <h1>Editar evento {values.nome}</h1>
            {message && <p>{message}</p>}
            <FormEditarEvento
                nome={values.nome}
                local={values.local}
                dataInicio={values.dataInicio}
                dataFim={values.dataFim}
                horaInicio={values.horaInicio}
                horaFim={values.horaFim}
                descricao={values.descricao}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
            />
        </section>
    )
}