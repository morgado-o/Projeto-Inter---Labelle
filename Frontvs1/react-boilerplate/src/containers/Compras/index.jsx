import React, { useState, useEffect } from 'react';
import {
  AGA1,
  Container,
  Header,
  Section,
  Title,
  Column,
  Select,
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableContainer,
  CounterContainer,
  CounterButton,
  CounterValue,
  FormContainer,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  
} from './styles';

function Compras() {
  const mockClientes = [
    { id: 1, nomeCompleto: 'João da Silva', cpf: '123.456.789-00', dataNascimento: '1990-01-01' },
    { id: 2, nomeCompleto: 'Maria Oliveira', cpf: '987.654.321-00', dataNascimento: '1985-05-20' },
    { id: 3, nomeCompleto: 'Carlos Souza', cpf: '111.222.333-44', dataNascimento: '2000-09-15' },
    { id: 4, nomeCompleto: 'Fabio Souza', cpf: '111.222.333-44', dataNascimento: '2000-09-15' },
    { id: 5, nomeCompleto: 'Ferna Souza', cpf: '111.222.333-44', dataNascimento: '2000-09-15' },
  ];

  const mockProcedimentos = [
    { id: 1, descricao: 'Limpeza de Pele', valorSessao: 120.0 },
    { id: 2, descricao: 'Massagem Relaxante', valorSessao: 200.0 },
    { id: 3, descricao: 'Hidratação Facial', valorSessao: 150.0 },
    { id: 4, descricao: 'Terapia com Argila', valorSessao: 180.0 },
  ];

  const [clientes] = useState(mockClientes);
  const [procedimentos] = useState(mockProcedimentos);
  const [clienteSelecionado, setClienteSelecionado] = useState(null); // Cliente selecionado
  const [procedimentosCliente, setProcedimentosCliente] = useState([]);
  const [contador, setContador] = useState({});

  const handleSelectCliente = (clienteId) => {
    const cliente = clientes.find((c) => c.id === Number(clienteId));
    setClienteSelecionado(cliente);
  };

  const handleAddProcedimento = (procedimento) => {
    setProcedimentosCliente([...procedimentosCliente, procedimento]);
    setContador({
      ...contador,
      [procedimento.id]: 1,
    });
  };

  const handleRemoveProcedimento = (id) => {
    setProcedimentosCliente(procedimentosCliente.filter((p) => p.id !== id));
    const updatedContador = { ...contador };
    delete updatedContador[id];
    setContador(updatedContador);
  };

  const handleCounterChange = (id, delta) => {
    setContador({
      ...contador,
      [id]: Math.max(1, (contador[id] || 0) + delta),
    });
  };

  const handleFinalizarCompra = () => {
    if (!clienteSelecionado || procedimentosCliente.length === 0) {
      alert('Selecione um cliente e adicione ao menos um procedimento.');
      return;
    }

    const compra = {
      cliente: clienteSelecionado,
      procedimentos: procedimentosCliente.map((p) => ({
        ...p,
        quantidade: contador[p.id],
      })),
    };

    console.log('Compra Finalizada:', compra);
    alert('Compra finalizada com sucesso!');
    setClienteSelecionado(null);
    setProcedimentosCliente([]);
    setContador({});
  };

  return (
    <Container>
      {/* Cabeçalho com os dados do cliente */}
      <FormContainer>
        <AGA1>Dados do Cliente</AGA1>
        <Form>
          <Row>
            <FormGroup>
              <Label>Nome</Label>
              <Select
                value={clienteSelecionado?.id || ''}
                onChange={(e) => handleSelectCliente(e.target.value)}
              >
                <option value="">Selecione um cliente</option>
                {clientes.map((cliente) => (
                  <option key={cliente.id} value={cliente.id}>
                    {cliente.nomeCompleto}
                  </option>
                ))}
              </Select>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label>CPF</Label>
              <Input
                type="text"
                placeholder="CPF do cliente"
                value={clienteSelecionado?.cpf || ''}
                readOnly
              />
            </FormGroup>
            <FormGroup>
              <Label>Data de Nascimento</Label>
              <Input
                type="date"
                value={clienteSelecionado?.dataNascimento || ''}
                readOnly
              />
            </FormGroup>
          </Row>
        </Form>
      </FormContainer>

      {/* Colunas de procedimentos */}
      <Section>
        <Column>
          <Title>PROCEDIMENTOS DO CLIENTE</Title>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader style={{ width: '50%' }}>Procedimento</TableHeader>
                  <TableHeader style={{ width: '30%' }}>Sessão/Sessões</TableHeader>
                  <TableHeader style={{ width: '20%' }}>Ações</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {procedimentosCliente.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell style={{ width: '50%' }}>{p.descricao}</TableCell>
                    <TableCell style={{ width: '30%' }}>
                      <CounterContainer>
                        <CounterButton onClick={() => handleCounterChange(p.id, -1)}>-</CounterButton>
                        <CounterValue>{contador[p.id]}</CounterValue>
                        <CounterButton onClick={() => handleCounterChange(p.id, 1)}>+</CounterButton>
                      </CounterContainer>
                    </TableCell>
                    <TableCell style={{ width: '20%' }}>
                      <Button onClick={() => handleRemoveProcedimento(p.id)}>Remover</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </Column>

        <Column>
          <Title>PROCEDIMENTOS</Title>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Procedimento</TableHeader>
                  <TableHeader>Valor</TableHeader>
                  <TableHeader>Ações</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {procedimentos.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>{p.descricao}</TableCell>
                    <TableCell>R$ {p.valorSessao}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleAddProcedimento(p)}>Adicionar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </Column>
      </Section>

      {/* Botão para finalizar compra */}
      <Button onClick={handleFinalizarCompra} style={{ marginTop: '20px', alignSelf: 'center' }}>
        Finalizar Compra
      </Button>
    </Container>
  );
}

export default Compras;
