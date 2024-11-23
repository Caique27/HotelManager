import React, { useState } from "react";
import "./Tarefa.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import {
	Tooltip,
	IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import RenameDialog from "./Dialogs/RenameDialog";
import ExcludeDialog from "./Dialogs/ExcludeDialog";

function Tarefa({ data, deleteCategoria, renameCategoria, tarefaId }) {
	const [openDialog, setOpenDialog] = useState(false);
	console.log(data.status);
	return (
		<section className="Tarefa-section">
			<div>
				<h1
					className={
			      	"Tarefa-titulo"
					}
				>
					{data.title}
					<h1 className="Tarefa-description Tarefa-amount"> (5 unidades)</h1>
				</h1>
				<h2 className="Tarefa-description Tarefa-date">
				11/01/2024 18:44	
				</h2>
			</div>

			<div className="Tarefa-buttons">
				<Tooltip title="Excluir Tarefa" arrow>
					<IconButton
							color="fourth"
							onClick={() => {
								setOpenDialog("rename");
							}}
						>
							<EditIcon />
					</IconButton>
				</Tooltip>
				
				<Tooltip title="Excluir Tarefa" arrow>
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
				deleteCategoria={deleteCategoria}
			/>
			<RenameDialog
				open={openDialog == 'rename'}
				closeDialog={() => {
					setOpenDialog(false);
				}}
				renameCategoria={renameCategoria}
				idCategoria={1}
				mensagem={'message'}	
			>


			</RenameDialog>
		</section>
	);
}

export default Tarefa;
