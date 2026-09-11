import useContadorPersonalizado from '../hooks/useContadorPersonalizado.js';

export default function ContadorPersonalizado() {
  const { contador, incrementar, decrementar, resetar } = useContadorPersonalizado(5);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Contador Personalizado: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}
