import React, { useState } from "react";
import Tarefa from "./Tarefa.jsx";
import ExcludeDialog from "./Dialogs/ExcludeDialog.jsx";
import RenameDialog from "./Dialogs/RenameDialog.jsx";
import "./Lista.css";
import { Button, IconButton, Tooltip, Dialog } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Lista({
	data,
	deleteCategoria,
	deleteTarefa,
	renameCategoria,
	mensagem,
	changeStatus,
}) {
	const [openDialog, setOpenDialog] = useState("none");
	return (
		<div className="Lista-div">
			<header className="Lista-header">
				<h1 className="Lista-titulo">{data.name}</h1>
			</header>

			<p className="Lista-tarefas">
				{data.tasks.map((tarefa) => (
					<Tarefa
						data={tarefa}
						deleteTarefa={deleteTarefa}
						deleteCategoria={deleteCategoria}
						renameCategoria={renameCategoria}
						changeStatus={changeStatus}
						categoriaId={data.id}
						tarefaId={tarefa.id}
					/>
				))}
			</p>
			
		</div>
	);
}

export default Lista;
