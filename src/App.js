import React, { useState, useEffect } from "react";
import "./App.css";
import Lista from "./components/Lista";
import { ThemeProvider, Snackbar, Alert } from "@mui/material";
import Formularios from "./components/Formularios";
import theme from "./assets/themes/theme.js";
import {
	listaCategorias,
	listaProdutos,
	buscarDados,
	criarCategoria,
	criarTarefa,
	excluirCategoria,
	excluirTarefa,
	renomearCategoria,
	mudarStatus,
} from "./axios/actions.js";

function App() {
	//const [dados,setDados] = useState("")
	const [categorias, setCategorias] = useState([]);
	const [nomesCategorias, setNomesCategorias] = useState([]);
	const [nomesProdutos, setNomesProdutos] = useState([]);
	const [mensagem, setMensagem] = useState({
		open: false,
		error: false,
		message: "",
		helperText: {
			show: false,
			text: "",
		},
	});

	async function listaNomesCategorias() {
		var dados = await listaCategorias();

		var lista = [];
		for (var c = 0; c < dados.length; c++) {
			lista.push(dados[c].name);
		}
		return lista;
	}
	async function listaNomesProdutos() {
		var dados = await listaProdutos();

		var lista = [];
		for (var c = 0; c < dados.length; c++) {
			lista.push(dados[c].name);
		}
		return lista;
	}

	useEffect(() => {
		const atualizarDados = async () => {
			setCategorias(await buscarDados());

			setNomesCategorias(await listaNomesCategorias());
			setNomesProdutos(await listaNomesProdutos())
		};

		atualizarDados();
	}, [mensagem]);

	async function adicionarCategoria(nome) {
		setMensagem(await criarCategoria(nome));
	}

	async function adicionarTarefa(nome, categoriaEscolhida) {
		setMensagem(await criarTarefa(nome, categoriaEscolhida));
	}

	async function apagarCategoria(id) {
		setMensagem(await excluirCategoria(id));
	}
	async function apagarTarefa(idTarefa) {
		setMensagem(await excluirTarefa(idTarefa));
	}
	async function renameCategoria(id, novoNome) {
		setMensagem(await renomearCategoria(id, novoNome));
	}
	async function changeStatus(idTarefa) {
		setMensagem(await mudarStatus(idTarefa));
	}

	return (
		<ThemeProvider theme={theme}>
			<div>
				<header>
					<h1 className="App-titulo">Consumo do frigobar</h1>
				</header>
				<section>
					<Formularios
						nomesCategorias={nomesCategorias}
						nomesProdutos={nomesProdutos}
						data={categorias}
						addCategoria={adicionarCategoria}
						addTarefa={adicionarTarefa}
					/>
				</section>
				<main className="App-main">
					{categorias.map((categoria) => (
						<Lista
							data={categoria}
							deleteCategoria={apagarCategoria}
							deleteTarefa={apagarTarefa}
							renameCategoria={renameCategoria}
							changeStatus={changeStatus}
							mensagem={mensagem}
						/>
					))}
				</main>
				<Snackbar
					open={mensagem.open}
					autoHideDuration={2500}
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					onClose={() =>
						setMensagem({ open: false, error: false, message: "" })
					}
				>
					<Alert
						onClose={() =>
							setMensagem({
								open: false,
								error: false,
								message: "",
							})
						}
						severity={mensagem.error ? "error" : "success"}
						sx={{ width: "100%" }}
					>
						{mensagem.message}
					</Alert>
				</Snackbar>
			</div>
		</ThemeProvider>
	);
}

export default App;
