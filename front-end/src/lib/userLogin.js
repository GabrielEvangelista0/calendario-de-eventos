import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { putData } from "./eventosCRUD";
export async function pegarUsuarioLogado(token) {
    const response = await fetch("http://localhost:5000/api/users/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        credentials: "include" // Isso garante que o cookie seja enviado
    });
    const dados = await response.json();
    console.log("Resposta do servidor:", response);
    return dados;
}

export async function cadastrarUsuario(data) {
    const { userName, email, password } = data;

    if (!userName || !email || !password) {
        throw new Error("One or more fields are empty");
    }

    const response = await fetch("http://localhost:5000/api/users/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, email, password })
    });

    return await response.json();
}

export async function logarUsuario(dados) {
    const { userName, password } = dados;

    if (!userName || !password) {
        throw new Error("Um ou mais campos estão vazios");
    }

    const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password })
    });

    const responseData = await response.json();
    

    return responseData;
}

export async function putEventosQueroParticipar(token, usuarioId, eventos) {
    if (!usuarioId || !eventos) {
        throw new Error("Usuário ID e eventos são obrigatórios");
    }

    const response = await fetch(`http://localhost:5000/api/users/${usuarioId}/eventos`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ eventosQuerParticipar: [eventos] }) // Envia como array
    });

    if (!response.ok) {
        throw new Error(`Erro ao salvar eventos: ${response.statusText}`);
    }

    return await response.json();
}

export async function getEventosQueroParticipar(token, usuarioId) {
    if (!usuarioId) {
        throw new Error("Usuário ID é obrigatório");
    }

    const response = await fetch(`http://localhost:5000/api/users/${usuarioId}/eventos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        credentials: "include" // Isso garante que o cookie seja enviado
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Erro ao buscar eventos: ${errorData.error || response.statusText}`);
    }

    return await response.json();
}



export async function deslogarUsuario(){
    Cookies.remove('token');
    redirect('/eventos');
} 