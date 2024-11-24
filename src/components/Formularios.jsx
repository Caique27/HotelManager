import "./Formularios.css";
import React, { useState } from "react";
import { Fab, TextField, Select, MenuItem, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Formularios(props) {
	const [acomodacaoEscolhida, setAcomodacaoEscolhida] = useState("");
	const [produtoEscolhido, setProdutoEscolhido] = useState("");

	function enviarConsumo(id, acomodacaoEscolhida) {
		props.addConsumo(id, acomodacaoEscolhida);
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
						<MenuItem value={produto}>{produto.nome}</MenuItem>
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
					value={acomodacaoEscolhida}
					label="Acomodação"
					variant="outlined"
					onChange={(event) => {
						setAcomodacaoEscolhida(event.target.value);
					}}
					select
					focused

				>
					{props.numerosAcomodacoes.map((categoria) => (
						<MenuItem value={categoria}>{categoria}</MenuItem>
					))}
				</TextField>
				<Tooltip title="Criar Produto">
					<Fab
						className="Formularios-addButton"
						color="fourth"
						aria-label="add"
						onClick={(event) => {
							enviarConsumo(produtoEscolhido.id, acomodacaoEscolhida);
							setProdutoEscolhido('')
							setAcomodacaoEscolhida('')
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
