import {  TextBlockWrapper, Icon, Text } from './styles';
import icono from '/map-pin-gray.png'
import { FC } from 'react';

interface onClick {
  onClickPlace: () => void
}
const Place: FC<onClick> = ({onClickPlace}) => {
  return (
    <TextBlockWrapper onClick={onClickPlace}>
      <Icon src={icono} alt="Icono" />
      <Text>Texto de ejemplo</Text>
    </TextBlockWrapper>
  )
}

export default Place