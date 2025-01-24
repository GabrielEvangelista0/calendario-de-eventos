import Menu from '@/components/Menu/menu';
import styles from '@/styles/page.module.css';
import style from "@/app/eventos/eventos.module.css";
import CardEvento from '@/components/CardEvento/cardEvento';
import Link from 'next/link';

export default function Page() {
    return (
        <div className={styles.page}>
            <section className={style.criarEvento}> 
                <Link className={style.botao} href="/criarEvento/">
                    Criar evento
                </Link>
            </section>
            <section className={style.eventos}>
                <h2>Lista de eventos</h2>
                <CardEvento evento={{
                    titulo: 'Evento 1',
                    descripcion: 'Descripción del evento 1',
                    endereco: 'Endereço: Rua 1, 1234',
                    fecha: 'Fecha: 20:00',
                    abre: "Abre: 10:00"
                }} />
                <CardEvento evento={{
                    titulo: 'Evento 2',
                    descripcion: 'Descripción del evento 2',
                    endereco: 'Endereço: Rua 1, 1234',
                    fecha: 'Fecha: 20:00',
                    abre: "Abre: 10:00"
                }} />
                <CardEvento evento={{
                    titulo: 'Evento 3',
                    descripcion: 'Descripción del evento 3',
                    endereco: 'Endereço: Rua 1, 1234',
                    fecha: 'Fecha: 20:00',
                    abre: "Abre: 10:00"
                }} />
            </section>
        </div>
    );
}