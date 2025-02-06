
"use client";
import styles from "@/components/Form/form.module.css";
export default function FormEditarEvento({ handleChange, handleSubmit, handleDelete, nome, dataInicio, dataFim, horaInicio, horaFim, local, descricao }) {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label to="nome">Nome:</label>
            <input id="nome" type="text" placeholder={nome} onChange={handleChange} />
            <label to="dataInicio">Data de Inicio: {dataInicio}</label>
            <input id="dataInicio" type="date" placeholder={dataInicio} onChange={handleChange} />
            <label to="dataFim">Data de Fim: {dataFim}</label>
            <input id="dataFim" type="date" placeholder={dataFim} onChange={handleChange} />
            <label to="horaInicio">Hora de Inicio: {horaInicio}</label>
            <input id="horaInicio" type="time" placeholder={horaInicio} onChange={handleChange} />
            <label to="horaFim">Hora de Fim: {horaFim}</label>
            <input id="horaFim" type="time" placeholder={horaFim} onChange={handleChange} />
            <label to="local">Local:</label>
            <input id="local" type="text" placeholder={local} onChange={handleChange} />
            <label to="descricao">Descricao:</label>
            <textarea id="descricao" placeholder={descricao} onChange={handleChange}></textarea>
            <div className={styles.form_botoes}>
                <button type="submit">Editar Evento</button>
                <button onClick={handleDelete} >Deletar Evento</button>
            </div>
        </form>
    )
}