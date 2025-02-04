import React from 'react';
import { InputContainer, StyledLabel, StyledInput, ErrorText } from './Input.styled';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange, error, disabled }) => {
  return (
    <InputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
