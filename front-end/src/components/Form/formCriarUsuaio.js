import styles from "@/components/Form/form.module.css";

export default function FormCriarUsuaio({ handleChange, handleSubmit }) {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>          
            <input required id="userName" type="text" placeholder="Nome de Usuario" onChange={handleChange} /> 
            <input required id="email" type="email" placeholder="Email" onChange={handleChange} />      
            <input required id="password" type="password" placeholder="Senha" onChange={handleChange} /> 
            <input required id="confirmPassword" type="password" placeholder="Confirmar Senha" onChange={handleChange} />           
            <button type="submit">Criar Conta</button>
        </form>
    )
}