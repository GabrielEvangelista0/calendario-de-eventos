import Form from "@/components/Form/form";
import pageStyle from "@/styles/page.module.css"
import styles from "@/app/criarEvento/criarEvento.module.css";

export default function Page() {
    return (
        <div className={pageStyle.page}>
            <h1>Criar Evento</h1>
            <div className={styles.criarEvento}>
                <Form />
            </div>
        </div>
    );
}