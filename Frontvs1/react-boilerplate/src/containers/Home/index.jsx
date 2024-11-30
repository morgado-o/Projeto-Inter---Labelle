import React, { useState } from 'react';
import {
  Navbar,
  NavItem,
  BackgroundContainer,
  ContentContainer,
  FormContainer,
} from './styles';
import CadCliente from '../CadCliente';
import CadFuncionario from '../CadFuncionario';
import CadProcedimentos from '../CadProcedimentos';
import Compras from '../Compras';
import Agenda from '../Agenda'; // Importa o componente Agenda

function Home() {
  const [showClientForm, setShowClientForm] = useState(false);
  const [showFuncionarioForm, setShowFuncionarioForm] = useState(false);
  const [showProcedimentoForm, setShowProcedimentoForm] = useState(false);
  const [showComprasForm, setShowComprasForm] = useState(false);
  const [showAgenda, setShowAgenda] = useState(false); // Novo estado para Agenda

  const handleClientClick = () => {
    setShowClientForm(true);
    setShowFuncionarioForm(false);
    setShowProcedimentoForm(false);
    setShowComprasForm(false);
    setShowAgenda(false);
  };

  const handleFuncionarioClick = () => {
    setShowFuncionarioForm(true);
    setShowClientForm(false);
    setShowProcedimentoForm(false);
    setShowComprasForm(false);
    setShowAgenda(false);
  };

  const handleProcedimentoClick = () => {
    setShowProcedimentoForm(true);
    setShowClientForm(false);
    setShowFuncionarioForm(false);
    setShowComprasForm(false);
    setShowAgenda(false);
  };

  const handleComprasClick = () => {
    setShowComprasForm(true);
    setShowClientForm(false);
    setShowFuncionarioForm(false);
    setShowProcedimentoForm(false);
    setShowAgenda(false);
  };

  const handleAgendaClick = () => {
    setShowAgenda(true);
    setShowClientForm(false);
    setShowFuncionarioForm(false);
    setShowProcedimentoForm(false);
    setShowComprasForm(false);
  };

  const handleHomeClick = () => {
    setShowClientForm(false);
    setShowFuncionarioForm(false);
    setShowProcedimentoForm(false);
    setShowComprasForm(false);
    setShowAgenda(false);
  };

  return (
    <>
      <Navbar>
        <NavItem onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          HOME
        </NavItem>
        <NavItem onClick={handleFuncionarioClick} style={{ cursor: 'pointer' }}>
          FUNCIONÁRIO
        </NavItem>
        <NavItem onClick={handleClientClick} style={{ cursor: 'pointer' }}>
          CLIENTE
        </NavItem>
        <NavItem onClick={handleProcedimentoClick} style={{ cursor: 'pointer' }}>
          PROCEDIMENTOS
        </NavItem>
        <NavItem onClick={handleComprasClick} style={{ cursor: 'pointer' }}>
          COMPRAS
        </NavItem>
        <NavItem onClick={handleAgendaClick} style={{ cursor: 'pointer' }}>
          AGENDA
        </NavItem>
      </Navbar>

      <BackgroundContainer>
        <ContentContainer>
          {showClientForm && (
            <FormContainer>
              <CadCliente />
            </FormContainer>
          )}
          {showFuncionarioForm && (
            <FormContainer>
              <CadFuncionario />
            </FormContainer>
          )}
          {showProcedimentoForm && (
            <FormContainer>
              <CadProcedimentos />
            </FormContainer>
          )}
          {showComprasForm && (
            <FormContainer>
              <Compras />
            </FormContainer>
          )}
          {showAgenda && (
            <FormContainer>
              <Agenda /> {/* Componente da Agenda */}
            </FormContainer>
          )}
        </ContentContainer>
      </BackgroundContainer>
    </>
  );
}

export default Home;
