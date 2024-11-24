import React, { useState, useEffect } from "react";
import "./App.css";
import Lista from "./components/Lista";
import { ThemeProvider, Snackbar, Alert } from "@mui/material";
import Formularios from "./components/Formularios";
import theme from "./assets/themes/theme.js";
import {
	listaAcomodacoes,
	listaProdutos,
	buscarDados,
	criarConsumo,
	excluirConsumo,
	alterarQuantidade,
} from "./backend/actions.js";

function App() {
	//const [dados,setDados] = useState("")
	const [acomodacoes, setAcomodacoes] = useState([]);
	const [numerosAcomodacoes, setNumerosAcomodacoes] = useState([]);
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

	async function listaNumerosAcomodacoes() {
		var dados = await listaAcomodacoes();

		var lista = [];
		for (var c = 0; c < dados.length; c++) {
			lista.push(dados[c].numero);
		}
		return lista;
	}
	

	useEffect(() => {
		const atualizarDados = async () => {
			setAcomodacoes(await buscarDados());

			setNumerosAcomodacoes(await listaNumerosAcomodacoes());
			setNomesProdutos(await listaProdutos())
		};

		atualizarDados();
	}, [mensagem]);

	async function adicionarConsumo(nome, acomodacao) {
		setMensagem(await criarConsumo(nome, acomodacao));
	}

	async function apagarConsumo(idConsumo) {
		setMensagem(await excluirConsumo(idConsumo));
	}
	async function changeQuantidade(id, novaQuantidade) {
		setMensagem(await alterarQuantidade(id, novaQuantidade));
	}
	

	return (
		<ThemeProvider theme={theme}>
			<div>
				<header>
					<h1 className="App-titulo">Consumo do frigobar</h1>
				</header>
				<section>
					<Formularios
						numerosAcomodacoes={numerosAcomodacoes}
						nomesProdutos={nomesProdutos}
						data={acomodacoes}
						addConsumo={adicionarConsumo}
					/>
				</section>
				<main className="App-main">
					{acomodacoes.map((acomodacao) => (
						<Lista
							data={acomodacao}
							deleteConsumo={apagarConsumo}
							changeQuantidade={changeQuantidade}
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
