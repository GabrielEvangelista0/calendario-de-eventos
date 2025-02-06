import { getDataFromId } from "@/lib/eventosCRUD";
import pageStyles from "@/styles/page.module.css";
import styles from "@/app/eventos/[id]/evento.module.css";
import { cookies } from "next/headers";
import { pegarUsuarioLogado } from "@/lib/userLogin";
import Link from "next/link";
import BotaoSalvarEvento from "@/components/Botoes/botaoSalvar";

export default async function Page({ params }) {
    const id = params.id;
    const dados = await getDataFromId(id);
    const tokenCookie = await cookies().get("token");
    const token = tokenCookie ? tokenCookie.value : null; // Verifica se o token existe

    const usuario = await pegarUsuarioLogado(token);
    
    return (
        <section className={pageStyles.page}>
            <section className={styles.cabecalho}>
                <h1>{dados.nome}</h1>
                <p className={styles.descricao}>{dados.descricao}</p>
            </section>
            <section className={styles.informacoes}>
                <p>Local: {dados.local}</p>
                <div className={styles.informacoes_data}>
                    <p>Data de inicio: {dados.dataInicio}</p>
                    <p>Data de termino: {dados.dataFim}</p>
                    <p>Das: {dados.horaInicio}</p>
                    <p>Ate: {dados.horaFim}</p>
                </div>
            </section>
            <section className={styles.botoes}>
                {dados.criador == usuario._id ? (
                    <>
                        <BotaoSalvarEvento usuarioId={usuario._id} eventoId={id} token={token} />
                        <Link className={styles.editar} href={`/eventos/${id}/editar`}>
                            Editar evento
                        </Link>
                    </>
                ) : (
                    <BotaoSalvarEvento usuarioId={usuario._id} eventoId={id} token={token} />
                )}
            </section>
        </section>
    );
}