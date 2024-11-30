import styled from 'styled-components';

export const BloomBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 192, 203, 0.4), rgba(255, 105, 180, 0.8));
  z-index: -1;
  filter: blur(8px);
`;

export const FormContainer = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px; 
  padding: 20px;
  border-radius: 8px;
  background-color: lightcoral;
  gap: 10px;
  margin: 0 auto; 
  border: 0.01px solid black;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`;

export const LargeFormGroup = styled(FormGroup)`
  flex: 2;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  min-height: 60px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  margin-top: 20px;
`;

export const ClearButton = styled(SubmitButton)`
  background-color: gray;
  margin-left: 10px;
`;
