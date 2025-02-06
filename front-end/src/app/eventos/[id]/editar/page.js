"use client";
import FormEditarEvento from "@/components/Form/formEditarEvento";
import { deleteData, getDataFromId, putData } from "@/lib/eventosCRUD";
import { validaData, validaHora } from "@/lib/validaData";
import pageStyles from "@/styles/page.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const [values, setValues] = useState({});
    const [message, setMessage] = useState("");
    const router = useRouter();

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
        if (!validaData(values.dataInicio, values.dataFim)) {
            setMessage("A data de inicio nao pode ser menor que a data atual ou a data de fim nao pode ser menor que a data de inicio");
            return
        }
        if (!validaHora(values.horaInicio, values.horaFim)) {
            setMessage("A hora de inicio nao pode ser maior que a hora de fim");
            return
        }
        try {
            const data = await putData(values._id, values);
            setMessage(data.message);
            router.push(`/eventos/${values._id}`);
            router.refresh();
        } catch (error) {
            console.error(error);
            setMessage("Erro ao editar evento, tente novamente mais tarde");
        }
    }

    async function handleDelete(e) {
        e.preventDefault()
        const data = await deleteData(values._id);
        setMessage(data.message);
        router.push('/');
        router.refresh();
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