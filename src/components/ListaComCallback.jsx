import { useState, useCallback } from 'react';

function Lista({ adicionarItem }) {
  const itens = ['Item A', 'Item B', 'Item C'];

  return (
    <div>
      <h3>Lista de Itens</h3>
      {itens.map((item, index) => (
        <button key={index} onClick={() => adicionarItem(item)}>
          Adicionar {item}
        </button>
      ))}
    </div>
  );
}

export default function ListaComCallback() {
  const [listaSelecionada, setListaSelecionada] = useState([]);

  // useCallback evita recriar a função em cada render
  const adicionarItem = useCallback((item) => {
    setListaSelecionada((prev) => [...prev, item]);
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Atividade 10: useCallback</h2>
      <Lista adicionarItem={adicionarItem} />
      <p>Itens selecionados: {listaSelecionada.join(', ') || 'Nenhum'}</p>
    </div>
  );
}
