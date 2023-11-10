import {  TextBlockWrapper, Icon, Text } from './styles';
import icono from '/map-pin-gray.png'

const Place = () => {
  return (
    <TextBlockWrapper>
      <Icon src={icono} alt="Icono" />
      <Text>Texto de ejemplo</Text>
    </TextBlockWrapper>
  )
}

export default Place