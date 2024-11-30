import styled from 'styled-components';

export const AGA1 = styled.h1`
text-align: center;
`;

export const FormContainer = styled.div`  
  background-color: lightcoral;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 1.1);  
  max-width: 600px; /* Ajustado para largura maior */
  margin: 20px auto;
  width: 110%; /* Preenche a largura disponível */
`;

export const Input = styled.input`
  width: 100%; /* Garante que o input ocupe a largura total do container */
  padding: 10px; /* Ajusta o espaçamento interno */
  font-size: 16px; /* Aumenta a legibilidade */
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%; /* Garante o preenchimento da largura */
  padding: 10px; /* Ajusta o espaçamento interno */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff; /* Garante boa visibilidade */
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const FormGroup = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;  
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; /* Espaçamento entre os botões */
  min-width: 100px; /* Define um tamanho mínimo */  
`;

export const TableContainer = styled.div`
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: lightgray;
  padding: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 1.1);
  width: 90%; /* Ajusta a largura para combinar com o formulário */
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center; /* Centraliza o texto */
  margin-bottom: 10px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between; /* Espaçamento uniforme entre as tabelas */
  align-items: flex-start; /* Alinha ambas as tabelas no topo */
  width: 90%; /* Define a largura do container geral */
  max-width: 1100px; /* Limita a largura total */
  margin: 0 auto; /* Centraliza a seção na página */
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 10px;
  max-width: 48%; /* Garante que ambas as colunas tenham o mesmo tamanho */
  min-width: 300px; /* Define um limite mínimo */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo */
  overflow: hidden; /* Impede o estouro do conteúdo */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse; /* Remove espaços entre células */
  table-layout: fixed; /* Garante que as colunas tenham larguras fixas */
`;

export const TableRow = styled.tr`
  border-bottom: 0px solid #ddd;
  
`;

export const TableHeader = styled.th`
  background-color: lightgray;
  padding: 8px;
  text-align: left; /* Alinhamento do texto */
  font-size: 14px;
  white-space: nowrap; /* Impede quebra de linha */
`;

export const TableCell = styled.td`
  padding: 5px;
  font-size: 14px;
  text-align: left; /* Alinhamento consistente com o cabeçalho */
  white-space: nowrap; /* Impede quebra de linha */
  overflow: hidden; /* Esconde conteúdo que ultrapasse */
  text-overflow: ellipsis; /* Adiciona reticências ao conteúdo longo */
  background-color: whitesmoke;   
`;

export const CounterButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 3px 5px; /* Botão menor */
  cursor: pointer;
  border-radius: 4px;
  margin: 0 5px;
  font-size: 10px; /* Reduz o tamanho da fonte */

  &:hover {
    background-color: #2980b9;
  }
`;

export const CounterValue = styled.span`
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px; /* Reduz o tamanho do botão */
  cursor: pointer;
  border-radius: 4px;
  font-size: 12px; /* Reduz o tamanho do texto */

  &:hover {
    background-color: red;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;  
`;



