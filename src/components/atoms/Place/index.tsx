import {  TextBlockWrapper, Icon, Text } from './styles';
import icono from '/map-pin-gray.png'
import { FC } from 'react';
import { IPlace } from '../../../interfaces/place';

interface onClick {
  onClickPlace: (suggestion: IPlace) => void
  suggestion: IPlace
}
const Place: FC<onClick> = ({onClickPlace, suggestion}) => {
  return (
    <TextBlockWrapper onClick={() => onClickPlace(suggestion)}>
      <Icon src={icono} alt="Icono" />
      <Text>{suggestion.description}</Text>
    </TextBlockWrapper>
  )
}

export default Place