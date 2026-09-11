import { useState } from 'react';

export default function useContadorPersonalizado(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetar = () => setContador(valorInicial);

  return { contador, incrementar, decrementar, resetar };
}
