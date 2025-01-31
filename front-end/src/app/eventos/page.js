import pageStyle from '@/styles/page.module.css';
import style from "@/app/eventos/eventos.module.css";
import CardEvento from '@/components/CardEvento/cardEvento';
import Link from 'next/link';
import { getData } from '@/lib/eventosCRUD';

export default async function Page() {
    const dados = await getData("http://localhost:5000/api/eventos");
    console.log(dados);

    return (
        <div className={pageStyle.page}>
            <section className={style.eventos}>
                <h2>Lista de eventos</h2>
                <div className={style.lista_eventos}>
                    {Array.isArray(dados) ? dados.map((evento) => {
                        return (
                            <Link href={`/eventos/${evento._id}`} key={evento._id}>
                                <CardEvento
                                    titulo={evento.nome}
                                    endereco={evento.local}
                                    inicia={evento.dataInicio}
                                    termina={evento.dataFim}
                                    das={evento.horaInicio}
                                    ate={evento.horaFim}
                                />
                            </Link>
                        );
                    }) : <p>{dados.message}</p>}
                </div>
            </section>
        </div>
    );
}