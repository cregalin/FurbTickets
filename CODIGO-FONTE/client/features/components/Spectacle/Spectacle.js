import React from 'react'
import { Text, View } from "react-native";
import * as S from "./styles"

const Spectacle = props => {

  const {spectacle} = props
  const {title, session_data, session_time} = spectacle

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>Sessão: {session_data} - {session_time}</S.SubTitle>
    </S.Container>
  )

}
export default Spectacle
