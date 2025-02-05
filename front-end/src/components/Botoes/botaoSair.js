"use client";

import { deslogarUsuario } from "@/lib/userLogin";

export default function BotaoSair() {
    return <button onClick={deslogarUsuario}>Sair</button>
}