import axios from 'axios'
import { useState } from 'react'




export default function Index() {
const [temp, setTemp] = useState('');
const [resposta, setResposta]= useState('');


 async function VerificarTemperatura( ) {
    const resp= await axios.get('http://localhost:5000/temperatura?temp=' + temp);
    
    if (resp.data.febre === true) {
        setResposta('Sim');
    }else {
        setResposta('Não');
    }
}

    return (
        <main>
            <h1>Febre</h1>
            <div>
                Temperatura: <input type='text' value={temp} onChange={e => setTemp(e.target.value)}></input>
            </div>
                <div>
                    <button onClick={VerificarTemperatura}> Verificar </button>
                </div>
                    <div>
                        Está com febre?{resposta}
                    </div>
        </main>
    )
}