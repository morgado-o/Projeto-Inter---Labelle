import React, { useState, useEffect } from 'react';
import { ProcedimentoService } from '../../services/procedimentoService';
import {
  MainContainer, // Novo contêiner principal
  FormContainer,
  Form,
  Row,
  FormGroup,
  LargeFormGroup,
  Label,
  Input,
  SubmitButton,
  ClearButton,
  BloomBackground,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  DeleteButton,
  EditButton,
  TableContainer,
} from './styles';


function CadProcedimentos() {
  const [formValues, setFormValues] = useState({
    descricao: '',
    valorSessao: '',
    tempoMinimo: '',
  });

  const [procedimentos, setProcedimentos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);


  const listarProcedimentos = new ProcedimentoService();
  // Carregar procedimentos ao montar o componente
  useEffect(() => {
    listarProcedimentos.listarTodos()
    .then((response) => {
      console.log(response.data)
      setProcedimentos(response.data)
    }).catch((error) => {
      console.log(error);
    })

    fetchProcedimentos();
  }, []);

  const fetchProcedimentos = async () => {
    try {
      const response = await fetch('http://localhost:8080/procedimento');
      if (!response.ok) throw new Error('Erro ao buscar procedimentos');
      const data = await response.json();
      setProcedimentos(data || []);
    } catch (error) {
      console.error('Erro ao buscar procedimentos:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFormValues({
      descricao: '',
      valorSessao: '',
      tempoMinimo: '',
    });
    setIsEditing(false);
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing
      ? `http://localhost:8080/procedimento/${editId}`
      : 'http://localhost:8080/procedimento';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        alert(isEditing ? 'Procedimento atualizado com sucesso!' : 'Procedimento cadastrado com sucesso!');
        fetchProcedimentos();
        handleClear();
      } else {
        alert('Erro ao salvar o procedimento. Verifique os dados e tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      alert('Erro ao salvar procedimento. Por favor, tente novamente mais tarde.');
    }
  };

  const handleEdit = (id) => {
    const procedimento = procedimentos.find((proc) => proc.id === id);
    if (!procedimento) return;
    setFormValues({
      descricao: procedimento.descricao,
      valorSessao: procedimento.valorSessao,
      tempoMinimo: procedimento.tempoMinimo,
    });
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este procedimento?')) return;

    try {
      const response = await fetch(`http://localhost:8080/procedimento/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Procedimento excluído com sucesso!');
        fetchProcedimentos();
      } else {
        alert('Erro ao excluir o procedimento. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao excluir procedimento:', error);
      alert('Erro ao excluir procedimento. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <>
      <BloomBackground />
      <MainContainer> {/* Novo contêiner principal */}
        <FormContainer>
          <h1>{isEditing ? 'Editar Procedimento' : 'Cadastro de Procedimentos'}</h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <LargeFormGroup>
                <Label>Descrição</Label>
                <Input
                  type="text"
                  name="descricao"
                  placeholder="Digite a descrição do procedimento"
                  value={formValues.descricao}
                  onChange={handleChange}
                />
              </LargeFormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label>Valor da Sessão</Label>
                <Input
                  type="number"
                  name="valorSessao"
                  placeholder="Digite o valor da sessão"
                  value={formValues.valorSessao}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Tempo Mínimo</Label>
                <Input
                  type="time"
                  name="tempoMinimo"
                  value={formValues.tempoMinimo}
                  onChange={handleChange}
                />
              </FormGroup>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <SubmitButton type="submit">{isEditing ? 'Atualizar' : 'Cadastrar'}</SubmitButton>
              <ClearButton type="button" onClick={handleClear}>
                Limpar
              </ClearButton>
            </Row>
          </Form>
        </FormContainer>

        <TableContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Descrição</TableHeader>
                <TableHeader>Valor</TableHeader>
                <TableHeader>Tempo Mínimo</TableHeader>
                <TableHeader></TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {procedimentos.map((proc) => (
                <TableRow key={proc.id || proc.descricao}>
                  <TableCell>{proc.descricao}</TableCell>
                  <TableCell>R$ {proc.valorSessao}</TableCell>
                  <TableCell>{proc.tempoMinimo}</TableCell>
                  <TableCell>
                    <EditButton onClick={() => handleEdit(proc.id)}>Editar</EditButton>
                    <DeleteButton onClick={() => handleDelete(proc.id)}>Excluir</DeleteButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </MainContainer>
    </>
  );
}

export default CadProcedimentos;
