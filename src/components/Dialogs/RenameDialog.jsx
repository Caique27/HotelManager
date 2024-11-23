import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	MenuItem,
	TextField
} from "@mui/material";
import "./RenameDialog.css";

function RenameDialog(props) {
	const [nome, setNome] = useState("");
	const valoresQuantidade = Array.from({ length: 10 }, (_, i) => i + 1);


	return (
		<Dialog open={props.open}>
			<DialogTitle className="dialog-style">
				{"Alterar Quantidade"}
			</DialogTitle>

			<DialogContent className="dialog-style">
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
					//label="Quantidade"
					variant="outlined"
					className="RenameDialog-input"
					color="fourth"
					sx={{
						color: "white" ,
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
    					}
					}}
					onChange={(event) => {
						setNome(event.target.value);
					}}
					value={nome}
					select
					focused
				>	
					{valoresQuantidade.map((quantidade) => (
						<MenuItem value={quantidade}>{quantidade}</MenuItem>
				))}</TextField>
				<div className="Lista-dialog-buttons">
					<Button
						color="fourth"
						onClick={() => {
							props.closeDialog();
							setNome("");
						}}
					>
						Cancelar
					</Button>
					<Button
						color="fourth"
						variant="outlined"
						onClick={() => {
							props.renameCategoria()

							props.closeDialog();


							setNome("");
						}}
					>
						Atualizar
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default RenameDialog;
