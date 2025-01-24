import "./globals.css";
import { Roboto } from "next/font/google";

const fonts = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Calendario de Eventos",
  description: "Calendario de eventos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        {children}
      </body>
    </html>
  );
}
