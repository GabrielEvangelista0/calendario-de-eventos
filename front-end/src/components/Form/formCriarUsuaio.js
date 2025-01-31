import styles from "@/components/Form/form.module.css";

export default function FormCriarUsuaio({ handleChange, handleSubmit }) {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>          
            <input id="userName" type="text" placeholder="Nome de Usuario" onChange={handleChange} /> 
            <input id="email" type="email" placeholder="Email" onChange={handleChange} />      
            <input id="password" type="password" placeholder="Senha" onChange={handleChange} />            
            <button type="submit">Criar Conta</button>
        </form>
    )
}