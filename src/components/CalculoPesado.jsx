import { useState, useMemo } from 'react';

function calcularFatorial(n) {
  console.log('Calculando fatorial...');
  if (n <= 1) return 1;
  return n * calcularFatorial(n - 1);
}

export default function CalculoPesado() {
  const [numero, setNumero] = useState(5);
  const [contador, setContador] = useState(0);

  // useMemo evita recalcular o fatorial se "numero" não mudar
  const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Atividade 9: useMemo</h2>
      <p>Fatorial de {numero}: {fatorial}</p>
      <button onClick={() => setNumero(numero + 1)}>Aumentar Número</button>
      <button onClick={() => setNumero(numero - 1)}>Diminuir Número</button>

      <p>Contador simples: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar Contador</button>
    </div>
  );
}
