import { useContext } from 'react';
import { TemaContext } from '../context/TemaContext.jsx';

export default function ExibirTema() {
  const { tema, alternarTema } = useContext(TemaContext);

  const estilo = {
    backgroundColor: tema === 'claro' ? '#F3F4F6' : '#1F2937',
    color: tema === 'claro' ? '#000' : '#FFF',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '20px'
  };

  return (
    <div style={estilo}>
      <h2>Atividade 7: useContext</h2>
      <p>Tema atual: {tema}</p>
      <button onClick={alternarTema}>Alternar Tema</button>
    </div>
  );
}
