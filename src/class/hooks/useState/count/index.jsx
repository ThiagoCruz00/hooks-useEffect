import { useState } from 'react'
import './style.css'


export default function Count(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <p>Você clicou {count} vezes</p>
            {/* Jeito preguiçoso */}
            <button className='count' onClick={() => setCount(count + 1)}>
                Clique aqui
            </button>
        </div>
    )
}

// Função tradicional

function handleCount(){
    setCount(count + 1)
}