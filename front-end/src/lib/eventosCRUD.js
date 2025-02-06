
const url = "http://localhost:5000/api/eventos";
export async function getData() {
    try {
        const response = await fetch(`${url}`);
        const dados = await response.json();
        return dados;
    } catch (error) {
        console.error(error);
        return {dados: null, message: "Erro ao buscar os dados, Recarregue a pagina"};
    }
}

export async function getDataFromId(id) {
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

export async function postData(data) {
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

export async function putData(id, data) {
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

export async function deleteData(id) {
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