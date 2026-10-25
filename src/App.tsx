import { useState } from 'react'

export default function App() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex(index + 1);
  }
  function handleBackClick() {
    setIndex(index - 1);
  }
  return (
    <div>
      <p>Sala atual: {index}</p>
      <button onClick={handleBackClick}>Voltar</button>
      <button onClick={handleNextClick}>Avançar</button>
    </div>
  );
}
