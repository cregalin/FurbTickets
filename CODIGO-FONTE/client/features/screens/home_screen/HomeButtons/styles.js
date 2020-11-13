import styled from "styled-components/native"
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(View)`
  width: 100%;
  display: grid;
  padding: 7px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px !important;
`

export const Wrapper = styled(TouchableOpacity)`
  padding: 7px;
`
