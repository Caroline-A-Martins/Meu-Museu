import { useState } from 'react'
import { salas } from '../data/salas'
import Navegacao from './components/Navegacao'

export default function App() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    if (index < salas.length - 1) {
      setIndex(index + 1);
    }
  }

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <p>Sala atual: {salas[index]}</p>
      <Navegacao onVoltar={handleBackClick} onAvancar={handleNextClick} />
    </div>
  );
}