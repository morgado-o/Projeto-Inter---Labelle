import React, { useState } from 'react';
import { ClienteService } from '../../services/ClienteService';
import {
  FormContainer,
  Form,
  Row,
  FormGroup,
  LargeFormGroup,
  Label,
  Input,
  SubmitButton,
  ClearButton,
  Textarea,
  BloomBackground,
} from './styles';

function Clientes() {
  const [formValues, setFormValues] = useState({
    nomeCompleto: '',
    cpf: '',
    rg: '',
    dataNascimento: '',
    contato: '',
    observacoes: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    complemento: '',
    numero: '',
    cep: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFormValues({
      nomeCompleto: '',
      cpf: '',
      rg: '',
      dataNascimento: '',
      contato: '',
      observacoes: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      complemento: '',
      numero: '',
      cep: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        alert('Cliente cadastrado com sucesso!');
        handleClear();
      } else {
        alert('Erro ao cadastrar cliente. Verifique os dados e tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao cadastrar cliente. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <>
      <BloomBackground/>
      <FormContainer>
        <h1>Cadastro de Clientes</h1>
        <Form>
          {/* Primeira linha */}
          <Row>
            <LargeFormGroup>
              <Label>Nome Completo</Label>
              <Input
                type="text"
                name="nomeCompleto"
                placeholder="Digite o nome completo"
                value={formValues.nomeCompleto}
                onChange={handleChange}
              />
            </LargeFormGroup>
          </Row>

          {/* Segunda linha */}
          <Row>
            <FormGroup>
              <Label>CPF</Label>
              <Input
                type="text"
                name="cpf"
                placeholder="Digite o CPF"
                value={formValues.cpf}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>RG</Label>
              <Input
                type="text"
                name="rg"
                placeholder="Digite o RG"
                value={formValues.rg}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Data de Nascimento</Label>
              <Input
                type="date"
                name="dataNascimento"
                value={formValues.dataNascimento}
                onChange={handleChange}
              />
            </FormGroup>
          </Row>

          {/* Terceira linha */}
          <Row>
            <FormGroup>
              <Label>Contato</Label>
              <Input
                type="tel"
                name="contato"
                placeholder="Digite o número de contato"
                value={formValues.contato}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Logradouro</Label>
              <Input
                type="text"
                name="logradouro"
                placeholder="Digite o logradouro"
                value={formValues.logradouro}
                onChange={handleChange}
              />
            </FormGroup>
          </Row>

          {/* Quarta linha */}
          <Row>
            <FormGroup>
              <Label>Bairro</Label>
              <Input
                type="text"
                name="bairro"
                placeholder="Digite o bairro"
                value={formValues.bairro}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Cidade</Label>
              <Input
                type="text"
                name="cidade"
                placeholder="Digite a cidade"
                value={formValues.cidade}
                onChange={handleChange}
              />
            </FormGroup>
          </Row>

          {/* Quinta linha */}
          <Row>
            <FormGroup>
              <Label>Complemento</Label>
              <Input
                type="text"
                name="complemento"
                placeholder="Digite o complemento"
                value={formValues.complemento}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Número</Label>
              <Input
                type="text"
                name="numero"
                placeholder="Digite o número"
                value={formValues.numero}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>CEP</Label>
              <Input
                type="text"
                name="cep"
                placeholder="Digite o CEP"
                value={formValues.cep}
                onChange={handleChange}
              />
            </FormGroup>
          </Row>

          {/* Sexta linha */}
          <Row>
            <LargeFormGroup>
              <Label>Observações</Label>
              <Textarea
                name="observacoes"
                placeholder="Digite observações adicionais (opcional)"
                value={formValues.observacoes}
                onChange={handleChange}
              />
            </LargeFormGroup>
          </Row>

          {/* Botões */}
          <Row style={{ justifyContent: 'center' }}>
            <SubmitButton type="submit" onClick={handleSubmit}>
              Cadastrar
            </SubmitButton>
            <ClearButton type="button" onClick={handleClear}>
              Limpar
            </ClearButton>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
}

export default Clientes;
