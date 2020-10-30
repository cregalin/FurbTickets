import styled from "styled-components/native"
import {Text, View} from 'react-native'

export const Container = styled.View`
  padding: 12px;
  borde-radius: 5px;
  display: flex;
  align-items: center;
`

export const BaseText = styled(Text)`
  height: 40px;
  padding: 5px;
  text-overflow: ellipsis;
  white-space: no-wrap;
  overflow: hidden;
`

export const Title = styled(BaseText)`
  font-size: 24px;
`

export const SubTitle = styled(BaseText)`
  font-size: 16px;
`
