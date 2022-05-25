import axios from 'axios'
import { useState } from 'react'


export default function Index() {
    const[numero, setNumero] = useState(0);
    const[resposta, setResposta]= useState(0);
    
   async function CalcularDobro (){
        const resp= await axios.get('http://localhost:5000/dobro/' + numero);
        setResposta (resp.data.dobro)
        
        
    }



    return (
        <main>
            <h1>Dobro</h1>
            <div>
                O dobro de: <input type='text' value={numero} onChange={e => setNumero(e.target.value)}></input>
            </div>
                <div>
                    <button onClick={CalcularDobro}> Verificar </button>
                </div>
                    <div>
                        O resultado é:{resposta}
                    </div>
        </main>
    )
}