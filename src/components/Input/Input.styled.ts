import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px; /* Largura máxima */
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  padding: 0.75rem;
  border: 2px solid #4caf50;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  outline: none;

  &:focus {
    border-color: #388e3c; /* Borda verde mais escura no foco */
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }

  &:disabled {
    background-color: #f0f0f0;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  font-size: 0.875rem;
  color: #ff6347; /* Cor do erro */
`;
