import React, { useState } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	Button,
} from "@mui/material";

function ExcludeDialog(props) {
	return (
		<Dialog open={props.open}>
			<DialogTitle className="dialog-style">
				{"Excluir Produto"}
			</DialogTitle>

			<DialogContent className="dialog-style">
				<DialogContentText color="fourth" className="dialog-style">
					Tem certeza que deseja apagar o produto?
				</DialogContentText>
				<div className="Lista-dialog-buttons">
					<Button
						color="fourth"
						onClick={() => {
							props.closeDialog();
						}}
					>
						Não
					</Button>
					<Button
						color="fourth"
						variant="outlined"
						onClick={() => {
						props.deleteConsumo(props.idConsumo)
							props.closeDialog();
						}}
					>
						Sim, excluir
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default ExcludeDialog;
