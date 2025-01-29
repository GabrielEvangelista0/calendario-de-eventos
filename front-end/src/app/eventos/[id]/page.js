import { getDataFromId } from "@/utils/crud";
import pageStyles from "@/styles/page.module.css";

export default async function Page({ params }) {
    const id = params.id
    const dados = await getDataFromId("http://localhost:5000/api/eventos", id);
    return (
        <section className={pageStyles.page}>
            <h1>{dados.nome}</h1>
            <p>{dados.descricao}</p>
            <section>
                <p>{dados.local}</p>
                <p>{dados.dataInicio}</p>
                <p>{dados.dataFim}</p>
                <p>{dados.horaInicio}</p>
                <p>{dados.horaFim}</p>
            </section>
        </section>
    );
}