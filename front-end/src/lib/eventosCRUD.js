export async function getData(url) {
    if (typeof url !== "string") {
        console.error("Url deve ser uma string");
        throw new TypeError("Url deve ser uma string");
    }
    try {
        const response = await fetch(url);
        const dados = await response.json();
        return dados;
    } catch (error) {
        console.error(error);
        return {dados: null, message: "Erro ao buscar os dados, Recarregue a pagina"};
    }
}

export async function getDataFromId(url, id) {
    if (typeof url !== "string" || !id) {
        console.error("Url deve ser uma string e id deve ser um valor diferente de nulo ou indefinido");
        throw new TypeError("Url deve ser uma string e id deve ser um valor diferente de nulo ou indefinido");
    }
    try {
        const response = await fetch(`${url}/${id}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar o dado com id ${id}, Status: ${response.status}`);
        }
        const dados = await response.json();
        return dados;
    } catch (error) {
        console.error(error);
        return {dados: null, message: `Erro ao buscar o dado com id ${id}`};
    }
}

export async function postData(url, data) {
    if (!data) {
        throw new Error("Data is empty");
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const dados = await response.json();
    return dados;
}

export async function putData(url, id, data) {
    if (!data) {
        throw new Error("Data is empty");
    }
    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const dados = await response.json();
    return dados;
}

export async function deleteData(url, id) {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    });
    const dados = await response.json();
    return dados;
}

export async function getEventoByCreatorId(creatorId) {
    const response = await fetch(`http://localhost:5000/api/eventos/criador/${creatorId}`);
    const dados = await response.json();
    return dados;
}