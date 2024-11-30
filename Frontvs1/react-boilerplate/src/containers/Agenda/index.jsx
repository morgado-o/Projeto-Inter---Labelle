import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container, FormContainer, Title, Input, Select, AgendaContainer, ProcedimentosContainer, ProcedimentosTable, TableRow, TableHeader, TableCell, Button } from './styles';

const localizer = momentLocalizer(moment);

function Agenda() {
  const mockClientes = [
    { id: 1, nomeCompleto: 'João da Silva', cpf: '123.456.789-00', dataNascimento: '1990-05-15' },
    { id: 2, nomeCompleto: 'Maria Oliveira', cpf: '987.654.321-00', dataNascimento: '1985-10-12' },
    { id: 3, nomeCompleto: 'Carlos Souza', cpf: '111.222.333-44', dataNascimento: '1993-02-20' },
  ];

  const mockItensCompras = [
    { id: 1, descricao: 'Limpeza de Pele', tempoMinimo: '00:30', quantidade: 2 },
    { id: 2, descricao: 'Massagem Relaxante', tempoMinimo: '01:00', quantidade: 3 },
    { id: 3, descricao: 'Hidratação Facial', tempoMinimo: '00:45', quantidade: 1 },
  ];

  const [clientes] = useState(mockClientes);
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [itensCompras, setItensCompras] = useState(mockItensCompras);
  const [eventos, setEventos] = useState([]);
  const [procedimentoSelecionado, setProcedimentoSelecionado] = useState(null);

  const handleSelectCliente = (e) => {
    const clienteId = e.target.value;
    setClienteSelecionado(clienteId);

    const cliente = mockClientes.find((c) => c.id === parseInt(clienteId, 10));
    if (cliente) {
      setCpf(cliente.cpf);
      setDataNascimento(cliente.dataNascimento);
    }
  };

  const handleSelectProcedimento = (procedimento) => {
    setProcedimentoSelecionado(procedimento);
  };

  const handleSlotSelect = ({ start }) => {
    if (!procedimentoSelecionado) {
      alert('Selecione um procedimento para agendar!');
      return;
    }

    if (procedimentoSelecionado.quantidade <= 0) {
      alert('Este procedimento não tem mais sessões disponíveis.');
      return;
    }

    // Decrementa a quantidade do procedimento
    setItensCompras(prevItens => {
      return prevItens.map((item) =>
        item.id === procedimentoSelecionado.id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      );
    });

    const [horas, minutos] = procedimentoSelecionado.tempoMinimo.split(':').map(Number);
    const end = new Date(start);
    end.setHours(start.getHours() + horas, start.getMinutes() + minutos);

    const novoEvento = {
      title: `${procedimentoSelecionado.descricao} - ${mockClientes.find((c) => c.id === parseInt(clienteSelecionado, 10)).nomeCompleto}`,
      start,
      end,
    };

    setEventos([...eventos, novoEvento]);
  };

  return (
    <Container>
      <FormContainer>
        <Title>Dados do Cliente</Title>
        <Select value={clienteSelecionado} onChange={handleSelectCliente}>
          <option value="">Selecione um cliente</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nomeCompleto}
            </option>
          ))}
        </Select>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Input type="text" placeholder="CPF do cliente" value={cpf} readOnly />
          <Input type="text" placeholder="dd/mm/aaaa" value={dataNascimento} readOnly />
        </div>
      </FormContainer>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* Calendário maior à esquerda */}
        <AgendaContainer style={{ width: '70%' }}>
          <Calendar
            localizer={localizer}
            events={eventos}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSlotSelect}
            style={{
              height: '80vh', // Agora ocupa 80% da altura da tela
              backgroundColor: 'lightgray',
            }}
            eventPropGetter={() => ({
              style: { backgroundColor: 'green', color: 'white' },
            })}
            dayPropGetter={() => ({
              style: { backgroundColor: 'whitesmoke' },
            })}
            culture="pt-BR" // Idioma em português
            step={30} // Passo de 30 minutos
            timeslots={2} // Dois slots de tempo por hora
            defaultView="week" // Exibição semanal
            formats={{
              dayFormat: 'ddd DD/MM',
              eventTimeRangeFormat: 'HH:mm',
              eventTimeFormat: 'HH:mm',
            }}
            min={new Date(0, 0, 0, 6, 0)} // Início das 6h da manhã
            max={new Date(0, 0, 0, 23, 0)} // Finalizando às 23h
          />
        </AgendaContainer>

        {/* Procedimentos Adquiridos - Menu pequeno à direita */}
        <ProcedimentosContainer>
          <Title>Procedimentos Adquiridos</Title>
          <ProcedimentosTable>
            <thead>
              <TableRow>
                <TableHeader>Procedimento</TableHeader>
                <TableHeader>Tempo Mínimo</TableHeader>
                <TableHeader>Quant. Sessões</TableHeader>
                <TableHeader>Ação</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {itensCompras.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.descricao}</TableCell>
                  <TableCell>{item.tempoMinimo}</TableCell>
                  <TableCell>{item.quantidade}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleSelectProcedimento(item)}>
                      {procedimentoSelecionado?.id === item.id ? 'Selecionado' : 'Selecionar'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </ProcedimentosTable>
        </ProcedimentosContainer>
      </div>
    </Container>
  );
}

export default Agenda;
