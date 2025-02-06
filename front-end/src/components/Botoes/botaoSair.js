"use client";

import { deslogarUsuario } from "@/lib/userLogin";
import { useRouter } from "next/navigation";

export default function BotaoSair() {
    const router = useRouter();
    async function sair() {
        await deslogarUsuario()
        router.push('/entrar');
        router.refresh();
    }
    return <button onClick={sair}>
        Sair
    </button>
}