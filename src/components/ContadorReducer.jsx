import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'decrementar':
      return { contador: state.contador - 1 };
    case 'resetar':
      return { contador: 0 };
    default:
      return state;
  }
}

export default function ContadorReducer() {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Atividade 8: useReducer</h2>
      <p>Contador: {state.contador}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'resetar' })}>Resetar</button>
    </div>
  );
}
