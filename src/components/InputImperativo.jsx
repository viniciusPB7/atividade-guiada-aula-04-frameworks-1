import { useRef, forwardRef, useImperativeHandle } from 'react';

// Componente filho que expõe funções personalizadas via ref
const InputCustom = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focar: () => {
      inputRef.current.focus();
    },
    limpar: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} type="text" placeholder="Digite algo..." />;
});

export default function InputImperativo() {
  const refInput = useRef();

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Atividade 12: useImperativeHandle</h2>
      <InputCustom ref={refInput} />
      <button onClick={() => refInput.current.focar()}>Focar no Input</button>
      <button onClick={() => refInput.current.limpar()}>Limpar Input</button>
    </div>
  );
}
