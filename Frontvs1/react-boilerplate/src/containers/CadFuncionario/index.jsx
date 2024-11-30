import React, { useState } from 'react';
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
  BloomBackground,
} from './styles';

function Funcionarios() {
  const [formValues, setFormValues] = useState({
    nomeFuncionario: '',
    cpfFuncionario: '',
    contato: '',
    cargo: '',
    especialidade: '',
    email: '',
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
      nomeFuncionario: '',
      cpfFuncionario: '',
      contato: '',
      cargo: '',
      especialidade: '',
      email: '',
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
      const response = await fetch('http://localhost:8080/api/funcionarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        alert('Funcionário cadastrado com sucesso!');
        handleClear();
      } else {
        alert('Erro ao cadastrar funcionário. Verifique os dados e tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao cadastrar funcionário. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <>
      <BloomBackground />
      <FormContainer>
        <h1>Cadastro de Funcionários</h1>
        <Form>
          {/* Primeira linha */}
          <Row>
            <LargeFormGroup>
              <Label>Nome do Funcionário</Label>
              <Input
                type="text"
                name="nomeFuncionario"
                placeholder="Digite o nome completo"
                value={formValues.nomeFuncionario}
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
                name="cpfFuncionario"
                placeholder="Digite o CPF"
                value={formValues.cpfFuncionario}
                onChange={handleChange}
              />
            </FormGroup>
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
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Digite o email"
                value={formValues.email}
                onChange={handleChange}
              />
            </FormGroup>
          </Row>

          {/* Terceira linha */}
          <Row>
            <FormGroup>
              <Label>Cargo</Label>
              <Input
                type="text"
                name="cargo"
                placeholder="Digite o cargo"
                value={formValues.cargo}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Especialidade</Label>
              <Input
                type="text"
                name="especialidade"
                placeholder="Digite a especialidade"
                value={formValues.especialidade}
                onChange={handleChange}
              />
            </FormGroup>
          </Row>

          {/* Quarta linha */}
          <Row>
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

export default Funcionarios;
