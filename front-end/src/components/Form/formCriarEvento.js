import styles from "@/components/Form/form.module.css";

export default function FormCriarEvento({ handleChange, handleSubmit, nome, dataInicio, dataFim, horaInicio, horaFim, local, descricao }) {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label to="nome">Nome:</label>
            <input required id="nome" type="text" placeholder={nome} onChange={handleChange} />
            <label to="dataInicio">Data de Inicio:</label>
            <input required id="dataInicio" type="date" placeholder={dataInicio} onChange={handleChange} />
            <label to="dataFim">Data de Fim:</label>
            <input required id="dataFim" type="date" placeholder={dataFim} onChange={handleChange}/>
            <label to="horaInicio">Hora de Inicio:</label>
            <input required id="horaInicio" type="time" placeholder={horaInicio} onChange={handleChange} />
            <label to="horaFim">Hora de Fim:</label>
            <input required id="horaFim" type="time" placeholder={horaFim} onChange={handleChange} />
            <label to="local">Local:</label>
            <input required id="local" type="text" placeholder={local} onChange={handleChange} />
            <label to="descricao">Descricao:</label>
            <textarea required id="descricao" placeholder={descricao} onChange={handleChange}></textarea>
            <button type="submit">Criar Evento</button>
        </form>
    )
}