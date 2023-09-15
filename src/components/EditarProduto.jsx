import { useParams, useNavigate } from "react-router-dom"

export default function EditarProduto(){

    const lista = listaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const produto = proc[0]

    const salvar = ()=>{
        
        return navegacao('/VisualizarAparelhos')

    }

    return(
        <main>
            <h1>Deseja ver detalhes do produto a baixo?</h1>
            <p>{produto.nome}</p>
            <button onClick={salvar}>Ver Detalhes</button>
        </main>
    )
}