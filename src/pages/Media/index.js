
import { useState } from "react"

import axios from "axios";


export default function Index() {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [media, setMedia] = useState(0);


    async function Calcular() {
       const resp= await axios.post('http://localhost:5000/media', {
            nota1: nota1,
            nota2: nota2,
            nota3: nota3
        })
        setMedia(resp.data.media);
    }
  
    return (
        <main>
            <h1>Media</h1>
            <div>
                Nota 1: <input type="text" value={nota1} onChange={e => setNota1 (Number(e.target.value))}/>
            </div>
                <div>
                    Nota 2: <input type="text" value={nota2} onChange={e => setNota2 (Number(e.target.value))}/>
                </div>
                    <div>
                    Nota 3: <input type="text" value={nota3} onChange={e => setNota3 (Number(e.target.value))}/>
                </div>
            <div>
               <button onClick={Calcular}> Verificar </button>
            </div>
        <div>
            A média é:{media}
        </div>    
    </main> 
    )
}