import { useState, useEffect } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`O contador mudou para: ${contador}`);
  }, [contador]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}
