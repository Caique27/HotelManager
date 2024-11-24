import axios from "axios"

async function query(queryString){
  const queryResponse = await axios.post(process.env.API_URL,{
    query:queryString
  })
  return queryResponse.data
}

export async function buscarDados() {

const data = await query(`select c.idconsome, p.nome, c.quantidade, c.dia, c.horario, c.numero from consome c join produto_frigobar p on c.id = p.id order by c.idconsome`)
console.log(data)
const formattedData = []
data.forEach(consumo => {
    const index = formattedData.findIndex(item => item.numero === consumo.numero);
    if(index==-1){
        formattedData.push({numero:consumo.numero,produtos:[consumo]})


    }else{
        formattedData[index].produtos.push(consumo)
    }

})
return formattedData
}

export async function buscarAcomodacoes() {
  const acomodacoes = await query('select distinct numero from acomodacao')
  return acomodacoes
}
export async function buscarProdutos() {
  const produtos = await query('select distinct(nome), id from produto_frigobar;')
  return produtos
}

export async function listaAcomodacoes() {
	var data = await buscarAcomodacoes();
	return data;
}
export async function listaProdutos() {
	var data = await buscarProdutos();
	return data;
}

export async function criarConsumo(idProduto, acomodacao) {
    if(idProduto=='' || acomodacao==''){
			return {
			open: true,
			error: true,
			message: "Os campos produto e acomodação são obrigatorios"
		};
  }
  try{
    const now = new Date()
    await query(`
    INSERT INTO consome (
    idconsome, numero, id, dia, horario, quantidade
)
SELECT 
    LPAD(CAST(MAX(idconsome)::INTEGER + 1 AS TEXT), LENGTH(MAX(idconsome)), '0'),
    '${acomodacao}', 
    '${idProduto}', 
    '${new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(now)}', 
    '${new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })
    .format(now)
    .replace(':', ':') + 'h'}', 
    1
FROM consome;
    `)
    return {
			open: true,
			error: false,
			message: `Produto adicionado com sucesso`,
		};

  }catch{
		return {
			open: true,
			error: true,
			message: `Erro ao adicionar produto`,
		};
  }

	  
}

export async function excluirConsumo(idConsumo) {
	
	try{
    await query(`
    delete from consome where 
    idconsome = '${idConsumo}';
    `)
    return {
			open: true,
			error: false,
			message: `Produto apagado com sucesso`,
		};

  }catch{
		return {
			open: true,
			error: true,
			message: `Erro ao apagar produto`,
		};
  }
}

export async function alterarQuantidade(quantidade, idConsumo) {
  try{
    await query(`
    update consome set 
    quantidade = ${quantidade} where 
    idconsome = '${idConsumo}';
    `)
    return {
			open: true,
			error: false,
			message: `Quantidade atualizada com sucesso`,
		};

  }catch{
		return {
			open: true,
			error: true,
			message: `Erro ao atualizar quantidade`,
		};
  }

	
}
