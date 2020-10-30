import styled from "styled-components/native"
import {Text, View, TextInput} from 'react-native'
import { StyledText } from "../../components/texts/styles";

export const Container = styled(View)`
  padding: 24px;
`

export const Input = styled(TextInput)`
  height: 30px;
  background: white;
  margin: 10px 10px;
  border-radius: 5px;
  border-left: 2px solid blue;
  padding: 5px;
`

export const GridContainer = styled(Container)`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
`

export const Label = styled(StyledText)`
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
`
