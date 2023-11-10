import { ReactNode, FC } from "react";
import { ButtonStyled } from "./styles";

interface IButton {
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
