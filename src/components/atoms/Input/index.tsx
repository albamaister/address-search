import { InputContainer, InputField } from "./styles";
import { FC } from 'react';

interface IInput {
  value: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input:FC<IInput> = ({value, handleInputChange}) => {
  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder="Search for a location"
        value={value}
        onChange={handleInputChange}
        id="autocomplete"
      />
    </InputContainer>
  );
};

export default Input;
