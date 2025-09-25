import { useState, useEffect } from 'react'
import './produtos.css'
import axios from 'axios'
const CadastroProduto = ()=>{
    const [dados, setDados] = useState({})
    const montaJson = () => {
        setDados({
            "nome":nome.value,
            "descricao":descricao.value,
            "tipo":tipo.value,
            "categoria_id":1
        })
    }
    useEffect(()=>{
        axios.post("http://172.19.0.49/pizzariateste/api/v1/produto", {dados})
        .then(response=>console.log(response.data.status))
        .catch(errors=>console.log(errors))
    }, [dados])
    return (
        <div className="CadastroProduto">

            <input type="text" id="id" placeholder="0" disabled />
            <input type="text" id="nome" className="nome" placeholder="nome do produto"  />
            <input type="text" id="descricao" placeholder="descrição"  />
            <input type="text" id="tipo" placeholder="tipo do produto"  />
            <input type="text" id="categoria_id" value="1" disabled  />

            <input type="button" value={"Cadastrar"} 
                onClick={()=>montaJson()}/>
        </div>
    )
}
export default CadastroProduto