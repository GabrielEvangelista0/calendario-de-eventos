
"use client";
import styles from "@/components/Form/form.module.css";
export default function FormEditarEvento({ handleChange, handleSubmit, handleDelete, nome, dataInicio, dataFim, horaInicio, horaFim, local, descricao }) {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input id="nome" type="text" placeholder={nome} onChange={handleChange} />
            <input id="dataInicio" type="text" placeholder={dataInicio} onChange={handleChange} />
            <input id="dataFim" type="text" placeholder={dataFim} onChange={handleChange} />
            <input id="horaInicio" type="text" placeholder={horaInicio} onChange={handleChange} />
            <input id="horaFim" type="text" placeholder={horaFim} onChange={handleChange} />
            <input id="local" type="text" placeholder={local} onChange={handleChange} />
            <textarea id="descricao" placeholder={descricao} onChange={handleChange}></textarea>
            <div className={styles.form_botoes}>
                <button type="submit">Editar Evento</button>
                <button onClick={handleDelete} >Deletar Evento</button>
            </div>
        </form>
    )
}