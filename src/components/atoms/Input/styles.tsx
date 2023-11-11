import styled from "styled-components";
import icono from "/map-pin.png";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 65px;
  border: 1px solid lightgray;
  border-radius: 0;
  box-shadow: 2px 2px 5px #a59f9f;
  background-color: white;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 12px 12px 12px 50px;
  border: none;
  border-radius: 0;
  box-shadow: none;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  background: url(${icono}) no-repeat 10px center, white;
  background-size: 18px 20px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
