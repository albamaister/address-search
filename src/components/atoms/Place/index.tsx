import {
  TextBlockWrapper,
  Icon,
  PrimaryText,
  SecondaryText,
  AdressContainer,
} from "./styles";
import icono from "/map-pin-gray.png";
import { FC } from "react";
import { IPlace } from "../../../interfaces/place";

interface onClick {
  onClickPlace: (suggestion: IPlace) => void;
  suggestion: IPlace;
}
const Place: FC<onClick> = ({ onClickPlace, suggestion }) => {

  const mainText = suggestion.description.split(',')[0]
  const secondaryText = suggestion.description.split(',').slice(1).join(',').trim();


  return (
    <TextBlockWrapper onClick={() => onClickPlace(suggestion)}>
      <Icon src={icono} alt="Icono" />
      <AdressContainer>
        <PrimaryText>{mainText}</PrimaryText>
        <SecondaryText>{secondaryText}</SecondaryText>
      </AdressContainer>
    </TextBlockWrapper>
  );
};

export default Place;
