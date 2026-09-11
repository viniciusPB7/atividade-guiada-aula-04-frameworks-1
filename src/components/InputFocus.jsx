import { useRef } from 'react';

export default function InputFocus() {
  const inputRef = useRef(null);

  const focarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Atividade 6: useRef</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Digite algo aqui..."
        style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button onClick={focarInput} style={{ marginLeft: '10px' }}>
        Focar no Input
      </button>
    </div>
  );
}
