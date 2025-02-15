
import pageStyles from "@/styles/page.module.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import styles from "@/app/home.module.css"
import CardEvento from "@/components/CardEvento/cardEvento";
import { getEventosQueroParticipar, pegarUsuarioLogado } from "@/lib/userLogin.js";
import Link from "next/link";
import { getEventoByCreatorId } from "@/lib/eventosCRUD";
import BotaoSair from "@/components/Botoes/botaoSair";

export default async function Home() {
  const cookie = cookies();
  let token = undefined;
  let dados = undefined;
  let eventosCriados = [];
  let queroParticipar = [];
  if (cookie.get('token') === undefined) {
    redirect('/entrar');
  } else {
    token = cookie.get('token').value;
    dados = await pegarUsuarioLogado(token);
    eventosCriados = await getEventoByCreatorId(dados._id);
    queroParticipar = await getEventosQueroParticipar(token, dados._id);
  }
  console.log(queroParticipar);

  return (
    <div className={pageStyles.page}>
      <h1>Calendario de Eventos</h1>
      <section className={styles.criarEvento}>
        <Link className={styles.botao} href="/criarEvento/">
          Criar evento
        </Link>
      </section>
      <section className={styles.eventos}>
        <div className={styles.lista_eventos}>
          <h2>Eventos criados</h2>
          <ul>
            {Array.isArray(eventosCriados) ? eventosCriados.map((evento) => {
              return (
                <li key={evento._id}>
                  <Link href={`/eventos/${evento._id}`}>
                    <CardEvento
                      titulo={evento.nome}
                      endereco={evento.local}
                      inicia={evento.dataInicio}
                      termina={evento.dataFim}
                      das={evento.horaInicio}
                      ate={evento.horaFim}
                    />
                  </Link>
                </li>
              );
            }) : <p>Nemhum evento criado</p>}
          </ul>
        </div>
        <div className={styles.lista_eventos}>
          <h2>Eventos que eu quero participar</h2>
          <ul>
            {Array.isArray(queroParticipar) ? queroParticipar.map((evento) => {
              return (
                <li key={evento._id}>
                  <Link href={`/eventos/${evento._id}`}>
                    <CardEvento
                      titulo={evento.nome}
                      endereco={evento.local}
                      inicia={evento.dataInicio}
                      termina={evento.dataFim}
                      das={evento.horaInicio}
                      ate={evento.horaFim}
                    />
                  </Link>
                </li>
              );
            }) : <p>Nemhum evento salvo</p>}
          </ul>
        </div>
      </section>
      <section className={styles.sair}>
        <BotaoSair />
      </section>
    </div>
  );
}
