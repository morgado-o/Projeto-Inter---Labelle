import styled from 'styled-components';


export const Dropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 10px;
  background-color: white;
  color: #333
  `;  

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const FormContainer = styled.div`
  background-color: #ff6666;
  padding: 20px;
  border-radius: 8px;
  width: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 15px;  
  color: black;
  text-align: center;
`;

export const Input = styled.input`
  width: 48%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #fff;
`;

export const Select = styled.select`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const ProcedimentosTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 13px;
  background-color: whitesmoke;  
  
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  background-color: #3174ad;
  color: white;
  padding: 8px;
  text-align: center;
`;

export const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;  
`;

export const AgendaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;  
`;

export const AgendaContainer = styled.div`
  flex: 2; /* A agenda ocupa duas partes em relação ao procedimento */
  background-color: lightgray;
  padding: 20px;
  margin-right: 20px;
  min-height: 600px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  border: 1px solid black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 1.1);  

  .rbc-calendar {
    border-radius: 8px;
    overflow: hidden;
  }

  .rbc-time-slot {
    height: 80px !important;
  }

  .rbc-time-header {
    background-color: #f0f0f0;
  }

  .rbc-day-bg {
    background-color: whitesmoke !important;
  }

  .rbc-day {
    padding: 10px;
  }

  .rbc-event {
    background-color: #3174ad;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rbc-selected {
    background-color: #6fa3e9 !important;
  }
`;

export const ProcedimentosContainer = styled.div`
  flex: 1;
  background-color: lightgray;
  padding: 15px;
  border-radius: 8px;
  display: flexbox;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 1.1);  

  h3 {
    margin-bottom: 15px;
  }

  select {
    width: 100%;
  }

  button {
    background-color: #3174ad;
    color: white;
    padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-size: 14px;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #245b8c;
    }
  }
`;

export const Button = styled.button`
  background-color: #3174ad;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: green;
  }
`;

export const ActionButton = styled.button`
  background-color: #ff6347;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0503e;
  }
`;

