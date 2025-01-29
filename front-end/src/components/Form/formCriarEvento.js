import styles from "@/components/Form/form.module.css";

export default function FormCriarEvento({ handleChange, handleSubmit }) {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input id="nome" type="text" placeholder="Nome Do evento" onChange={handleChange} />
            <input id="dataInicio" type="text" placeholder="Data do Inicio Do Evento" onChange={handleChange} />
            <input id="dataFim" type="text" placeholder="Data do Fim Do evento" onChange={handleChange}/>
            <input id="horaInicio" type="text" placeholder="Hora Do evento" onChange={handleChange} />
            <input id="horaFim" type="text" placeholder="Fim Do evento" onChange={handleChange} />
            <input id="local" type="text" placeholder="Local Do evento" onChange={handleChange} />
            <textarea id="descricao" placeholder="Descrição Do evento" onChange={handleChange}></textarea>
            <button type="submit">Criar Evento</button>
        </form>
    )
}