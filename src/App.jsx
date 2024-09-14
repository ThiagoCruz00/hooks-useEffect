import Accordion from "./class/hooks/useState/accordion";
import Count from "./class/hooks/useState/count";
import Example from "./class/hooks/useEffect/example";
import CountEffect from "./class/hooks/useHooks/countEffect";
import PokemonApi from "./class/hooks/pokemonApi";
import './App.css'

export default function App(){
  return(
    <div className="app-container">
      <PokemonApi />
    </div>
  )
}