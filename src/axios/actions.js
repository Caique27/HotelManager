import { busca, adicionar, atualizar, excluir } from "./api.js";

export function buscarDados() {
	return [
    {
        "id": 10,
        "name": "Acomodação 343",
        "tasks": [
            {
                "id": 5,
                "category_id": 10,
                "title": "Refrigerante",
                "status": "Undone"
            }
        ]
    },
    {
        "id": 13,
        "name": "Acomodação 568",
        "tasks": []
    }, {
        "id": 10,
        "name": "Acomodação 215",
        "tasks": [
            {
                "id": 5,
                "category_id": 10,
                "title": "Refrigerante",
                "status": "Undone"
            },    
            {
                "id": 5,
                "category_id": 10,
                "title": "Chocolate",
                "status": "Undone"
            },
            {
                "id": 5,
                "category_id": 10,
                "title": "Chocolate",
                "status": "Undone"
            },
            {
                "id": 5,
                "category_id": 10,
                "title": "Chocolate",
                "status": "Undone"
            }
        ]
    }];
}

export async function buscarCategorias() {
	return [
    {
        "id": 10,
        "name": "Acomodação 343"
    },
    {
        "id": 13,
        "name": "Acomodação 568"
    }
]
}
export async function buscarProdutos() {
	return [
    {
        "id": 10,
        "name": "Refrigerante"
    },
    {
        "id": 13,
        "name": "Chocolate"
    }
]
}

export async function listaCategorias() {
	var data = await buscarCategorias();
	return data;
}
export async function listaProdutos() {
	var data = await buscarProdutos();
	return data;
}
export async function criarCategoria(nome) {
	
		return {
			open: true,
			error: false,
			message: `A nova categoria foi criada`,
		};
	}

export async function criarTarefa(nome, categoria) {
			return {
			open: true,
			error: false,
			message: "O produto foi registrado com sucesso",
		};
}

export async function excluirCategoria(id) {
	
	return {
		open: true,
		error: false,
		message: "O produto foi apagado com sucesso",
	};
}

export async function excluirTarefa(idTarefa) {
	
	return {
		open: true,
		error: false,
		message: "O produto foi apagado com sucesso",
	};
}

export async function renomearCategoria(id, novoNome) {
	
	return {
		open: true,
		error: false,
		message: "Quantidade atualizada com sucesso",
	};
}
export async function mudarStatus(idTarefa) {
		return {
			open: true,
			error: true,
			message: `Erro ao atualizar tarefa`,
		};
	
}
