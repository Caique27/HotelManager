import "./Formularios.css";
import React, { useState } from "react";
import { Fab, TextField, Select, MenuItem, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Formularios(props) {
	const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
	const [produtoEscolhido, setProdutoEscolhido] = useState("");

	function enviarTarefa(nome, categoriaEscolhida) {
		props.addTarefa(nome, categoriaEscolhida);
	}
	function enviarCategoria(nome) {
		props.addCategoria(nome);
	}
	return (
		<section className="Formularios-section">
			<form className="Formularios-form">
				<TextField
					SelectProps={{
  				  		MenuProps: {
      						sx: {
        						'& .MuiPaper-root': {
          						backgroundColor: '#24333b', // Change dropdown background
          						color: 'white', // Change text color
        						},
        						'& .MuiMenuItem-root:hover': {
          						backgroundColor: '#1e2a30', // Change hover background
        						},
      						},
    						},
  						}}	
					labelStyle={{ color: "#BBE1FA" }}
					color="fourth"
					sx={{
						
						width: "30rem",
						marginLeft: "-1rem",
						color: "white",
						".MuiOutlinedInput-notchedOutline": {
							borderColor: "#BBE1FA",
						},
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "#BBE1FA",
						},
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "#BBE1FA",
						},
						".MuiSvgIcon-root ": {
							fill: "#BBE1FA !important",
						},
				'.MuiSelect-select': {
      						color: 'white', // Set the text color here
    					},
					}}
					value={produtoEscolhido}
					label="Produto"
					variant="outlined"
					onChange={(event) => {
						setProdutoEscolhido(event.target.value);
					}}
					select
					focused
				>
					{props.nomesProdutos.map((produto) => (
						<MenuItem value={produto}>{produto}</MenuItem>
				))}
				</TextField>
				<TextField
					SelectProps={{
  				  	MenuProps: {
      					sx: {
        					'& .MuiPaper-root': {
          					backgroundColor: '#24333b', // Change dropdown background
          					color: 'white', // Change text color
        					},
        					'& .MuiMenuItem-root:hover': {
          					backgroundColor: '#1e2a30', // Change hover background
        					},
      					},
    					},
  					}}	
					labelStyle={{ color: "#BBE1FA" }}
					color="fourth"
					sx={{
						width: "13rem",
						color: "white",
						".MuiOutlinedInput-notchedOutline": {
							borderColor: "#BBE1FA",
						},
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "#BBE1FA",
						},
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "#BBE1FA",
						},
						".MuiSvgIcon-root ": {
							fill: "#BBE1FA !important",
						},
					 	'.MuiSelect-select': {
      						color: 'white', // Set the text color here
    					},
					}}
					value={categoriaEscolhida}
					label="Acomodação"
					variant="outlined"
					onChange={(event) => {
						setCategoriaEscolhida(event.target.value);
					}}
					select
					focused

				>
					{props.nomesCategorias.map((categoria) => (
						<MenuItem value={categoria}>{categoria}</MenuItem>
					))}
				</TextField>
				<Tooltip title="Criar Produto">
					<Fab
						className="Formularios-addButton"
						color="fourth"
						aria-label="add"
						onClick={(event) => {
							enviarTarefa('nomeproduto', categoriaEscolhida);
							event.preventDefault();
						}}
					>
						<AddIcon color="primary" />
					</Fab>
				</Tooltip>
			</form>
			
		</section>
	);
}
export default Formularios;
