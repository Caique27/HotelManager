import React, { useState } from "react";
import Consumo from "./Consumo.jsx";

import "./Lista.css";


function Lista({
	data,
	deleteConsumo,
	changeQuantidade,
	mensagem
}) {
	return (
		<div className="Lista-div">
			<header className="Lista-header">
				<h1 className="Lista-titulo">Acomodação {data.numero}</h1>
			</header>

			<p className="Lista-tarefas">
				{data.produtos.map((produto) => (
					<Consumo
						data={produto}
						deleteConsumo={deleteConsumo}
						changeQuantidade={changeQuantidade}
						//acomodacaoNumero={data.numero}
					consumoId={produto.idconsome}
					/>
				))}
			</p>
			
		</div>
	);
}

export default Lista;
