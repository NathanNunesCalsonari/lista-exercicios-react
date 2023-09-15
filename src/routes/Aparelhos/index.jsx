import { Link } from "react-router-dom"
import { listaProdutos } from "../../components/ListaProdutos"

export default function Aparelhos(){
    
    return(
        <main>
            <h1 className="promocoes">APARELHOS DISPONÍVEIS</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/Aparelhos/editar/${prod.id}`}>
                        Visualizar o produto: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    
    )



}