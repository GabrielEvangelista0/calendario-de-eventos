import Menu from "@/components/Menu/menu";
import "./globals.css";
import { Roboto } from "next/font/google";
import { cookies } from "next/headers";
import { pegarUsuarioLogado } from "@/lib/userLogin.js";
import { Footer } from "@/components/Footer/footer";

const fonts = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Calendario de Eventos",
  description: "Calendario de eventos",
};

export default async function RootLayout({ children }) {

  const cookie = cookies();
    let token = undefined;
    let dados = undefined;
    let userName = "";
    if (cookie.get('token') === undefined) {
      console.log('Token nao encontrado');
    }else{
      token = cookie.get('token').value;
      dados = await pegarUsuarioLogado(token);
      userName = dados.userName
    }
    
  return (
    <html lang="en">
      <body className={fonts}>
        <Menu
          userName={userName}
        />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
