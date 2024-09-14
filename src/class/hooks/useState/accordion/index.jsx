import { useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'
import './style.css'
import Cris from '../../../../assets/img/Cris.webp'


export default function Accordion() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordion-container">
            <div className="accordion-title">
                <p>Novidades</p>
                <button onClick={() => setIsOpen(!isOpen)}
                > {isOpen ? <ArrowUp size={16} /> : <ArrowDown size={16} />}      </button>
            </div>

            {isOpen && (
                <div className="accordion-content">
                    <p>Sei fazer um accordion jsx com hook</p>
                    <img src={Cris} alt="" />
                </div>
            )}
        </div>
    )
}