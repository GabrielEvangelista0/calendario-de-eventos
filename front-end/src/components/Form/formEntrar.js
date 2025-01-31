import styles from "@/components/Form/form.module.css";

export default function FormEntrar({ handleChange, handleSubmit }) {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>          
            <input id="userName" type="text" placeholder="Nome de Usuario" onChange={handleChange} />       
            <input id="password" type="password" placeholder="Senha" onChange={handleChange} />            
            <button type="submit">Entrar</button>
        </form>
    )
}