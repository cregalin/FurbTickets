import React from 'react'
import { Text, View } from "react-native";
import * as S from "./styles"

const Spectacle = props => {

  const {spectacle} = props
  const {title, description, price, group, date, hour} = spectacle

  return (
    <S.Container>
      <S.FullText>{title}</S.FullText>
      <S.FullText>{description}</S.FullText>
      <S.HalfText>{group}</S.HalfText>
      <S.HalfText>{price}</S.HalfText>
      <S.FullText>{date} - {hour}</S.FullText>
    </S.Container>
  )

}
export default Spectacle
