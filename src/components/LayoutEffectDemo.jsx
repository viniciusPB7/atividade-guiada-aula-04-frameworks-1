import { useState, useLayoutEffect, useRef } from 'react';

export default function LayoutEffectDemo() {
  const [largura, setLargura] = useState(0);
  const caixaRef = useRef(null);

  // useLayoutEffect roda antes da tela ser pintada
  useLayoutEffect(() => {
    if (caixaRef.current) {
      setLargura(caixaRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Atividade 11: useLayoutEffect</h2>
      <div
        ref={caixaRef}
        style={{
          backgroundColor: '#3B82F6',
          color: 'white',
          padding: '20px',
          width: '50%'
        }}
      >
        Caixa Azul
      </div>
      <p>Largura calculada antes da renderização: {largura}px</p>
    </div>
  );
}
