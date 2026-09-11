import BotaoDinamico from './components/BotaoDinamico.jsx';
import Alerta from './components/Alerta.jsx';
import CardStyled from './components/CardStyled.jsx';
import Contador from './components/Contador.jsx';
import ContadorPersonalizado from './components/ContadorPersonalizado.jsx';
import InputFocus from './components/InputFocus.jsx';
import TemaProvider from './components/TemaProvider.jsx';
import ExibirTema from './components/ExibirTema.jsx';
import ContadorReducer from './components/ContadorReducer.jsx';
import CalculoPesado from './components/CalculoPesado.jsx';
import ListaComCallback from './components/ListaComCallback.jsx';
import LayoutEffectDemo from './components/LayoutEffectDemo.jsx';
import InputImperativo from './components/InputImperativo.jsx';
import CardProdutoMUI from './components/CardProdutoMUI.jsx';

export default function App() {
  return (
    <TemaProvider>
      <h1>Atividades React com Hooks e Estilos</h1>

      {/* Atividade 1: Botão Dinâmico */}
      <BotaoDinamico />

      {/* Atividade 2: Alertas com CSS Modules */}
      <Alerta tipo="sucesso" mensagem="Operação realizada com sucesso!" />
      <Alerta tipo="erro" mensagem="Falha ao processar a requisição." />

      {/* Atividade 3: Styled Components */}
      <CardStyled tipo="info" mensagem="Este é um card informativo." />
      <CardStyled tipo="aviso" mensagem="Atenção: verifique os dados antes de enviar." />

      {/* Atividade 4: useEffect */}
      <Contador />

      {/* Atividade 5: Hook Personalizado */}
      <ContadorPersonalizado />

      {/* Atividade 6: Material-UI (imagem fixa) */}
      <CardProdutoMUI
        imagem="https://images.unsplash.com/photo-1511920170033-f8396924c348"
        nome="Xícara de Café"
        descricao="Uma xícara de café de alta qualidade para começar bem o seu dia."
        preco="25,00"
      />

      {/* Atividade 7: useRef */}
      <InputFocus />

      {/* Atividade 8: useContext */}
      <ExibirTema />

      {/* Atividade 9: useReducer */}
      <ContadorReducer />

      {/* Atividade 10: useMemo */}
      <CalculoPesado />

      {/* Atividade 11: useCallback */}
      <ListaComCallback />

      {/* Atividade 12: useLayoutEffect */}
      <LayoutEffectDemo />

      {/* Atividade 13: useImperativeHandle */}
      <InputImperativo />
    </TemaProvider>
  );
}
