import React, { useState } from "react";
import "./Consumo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import {
	Tooltip,
	IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import RenameDialog from "./Dialogs/RenameDialog";
import ExcludeDialog from "./Dialogs/ExcludeDialog";

function Consumo({ data, deleteConsumo, changeQuantidade, consumoId }) {
	const [openDialog, setOpenDialog] = useState(false);
	return (
		<section className="Consumo-section">
			<div>
				<h1
					className={
			      	"Consumo-titulo"
					}
				>
					{data.nome}
					<h1 className="Consumo-description Consumo-amount"> ({data.quantidade} unidades)</h1>
				</h1>
				<h2 className="Consumo-description Consumo-date">
				{`${data.dia.split('T')[0]} ${data.horario}`}
				</h2>
			</div>

			<div className="Consumo-buttons">
				<Tooltip title="Alterar Quantidade" arrow>
					<IconButton
							color="fourth"
							onClick={() => {
								setOpenDialog("change");
							}}
						>
							<EditIcon />
					</IconButton>
				</Tooltip>
				
				<Tooltip title="Excluir Consumo" arrow>
					<IconButton
						color="fourth"
						onClick={() => {
							setOpenDialog("exclude");
						}}
					>																																																																																																																																																																																																																																																																																																																																																																																																																																										
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			</div>
			<ExcludeDialog
				open={openDialog == "exclude"}
				closeDialog={() => {
					setOpenDialog(false);
				}}
				deleteConsumo={deleteConsumo}
				idConsumo={consumoId}
			/>
			<RenameDialog
				open={openDialog == 'change'}
				closeDialog={() => {
					setOpenDialog(false);
				}}
				quantidade = {data.quantidade}
				changeQuantidade={changeQuantidade}
				idConsumo={consumoId}
//				mensagem={message}	
			>


			</RenameDialog>
		</section>
	);
}

export default Consumo;
