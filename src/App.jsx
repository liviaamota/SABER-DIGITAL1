import { useState } from 'react'
import Pandemia from "./components/Pandemia";
import Problematicas from "./components/Problematicas/indexp";
import './style.css'


export default function App(){
    const [botao, setBotao] = useState(true)
    const [botao2, setBotao2] = useState(true)
    const fraseMotivacional = ['Aprender em tempos difíceis nos torna mais fortes. Cada obstáculo superado é um passo rumo ao conhecimento.',' pandemia testou a educação, mas também revelou o poder da resiliência de quem ensina e de quem aprende.','Entre telas e incertezas, nasceu uma geração que aprendeu a vencer obstáculos com criatividade e coragem.', 'A educação atravessou a tempestade e descobriu novas formas de florescer.']
    const pagina = () => {
        setBotao(!botao)
    }

    const motivacional = () => {
        setBotao2(
            alert(fraseMotivacional[Math.floor(Math.random() * 4)])         
        )

    }
    return (
        <div>
            {botao ? <Pandemia /> : <Problematicas />}
            <div className='botao'>
                <button onClick={pagina}>{botao ? 'PRÓXIMA PÁGINA' : 'PÁGINA ANTERIOR'} </button>
            </div>
            <div className='motivacional'>
                <button onClick={motivacional}>GERAR FRASE MOTIVACIONAL</button>
            </div>
        </div>
    )
}
