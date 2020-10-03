import styled from "styled-components/native"
import {Text, View} from 'react-native'

export const Container = styled.View`
  padding: 12px;
  border: 2px solid blue;
  borde-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const BaseText = styled(Text)`
  height: 40px;
  padding: 5px;
  text-overflow: ellipsis;
  white-space: no-wrap;
  overflow: hidden;
`

export const FullText = styled(BaseText)`
  grid-column: span 2;
`

export const HalfText = styled(BaseText)`
  grid-column: span 1;
`
