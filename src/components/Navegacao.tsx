type NavegacaoProps = {
  onVoltar: () => void;
  onAvancar: () => void;
};

export default function Navegacao({ onVoltar, onAvancar }: NavegacaoProps) {
  return (
    <div>
      <button onClick={onVoltar}>Voltar</button>
      <button onClick={onAvancar}>Avançar</button>
    </div>
  );
}