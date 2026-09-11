import styled from 'styled-components';

const Card = styled.div`
  background-color: ${(props) => (props.tipo === 'info' ? '#3B82F6' : '#F59E0B')};
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
  font-weight: bold;
`;

export default function CardStyled({ tipo, mensagem }) {
  return <Card tipo={tipo}>{mensagem}</Card>;
}
