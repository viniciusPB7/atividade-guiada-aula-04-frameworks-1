import styles from './Alerta.module.css';

export default function Alerta({ tipo, mensagem }) {
  const classeTipo = tipo === 'sucesso' ? styles.sucesso : styles.erro;

  return (
    <div className={`${styles.alerta} ${classeTipo}`}>
      {mensagem}
    </div>
  );
}
