"use client";  // Este componente precisa rodar no cliente

import { putEventosQueroParticipar } from "@/lib/userLogin";

export default function BotaoSalvarEvento({ usuarioId, eventoId, token }) {
    async function handleClick() {
        try {
            await putEventosQueroParticipar(token, usuarioId, eventoId);
            alert("Evento salvo com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar evento:", error.message);
            alert("Erro ao salvar evento!");
        }
    }

    return <button onClick={handleClick}>Salvar evento</button>;
}
