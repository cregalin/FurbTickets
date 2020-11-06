import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native'
import Spectacle from '../../components/Spectacle/Spectacle'
import Button from '../../components/buttons/primary_button/PrimaryButton'
import * as S from './SpectacleListStyles'
import moment from 'moment'
import {paramsToQuery} from './SpectacleListUtils'

const SpectacleList = ({route}) => {

  const [spectacles, setSpectacles] = useState([])

  useEffect(() => {
    fetch(`https://1ce17fbefec7.ngrok.io/shows${paramsToQuery(route.params)}`)
    .then(res => res.json())
    .then(({data}) => setSpectacles(data))
  }, [])

  const SpectacleWrapper = ({spectacle}) => {
    return <S.Centered>
      <S.Wrapper>
        <Spectacle spectacle={spectacle}/>
        <Button label="Comprar" />
      </S.Wrapper>
    </S.Centered>
  }

  return <S.SpectacleList>
    {
      spectacles.map(spectacle => <SpectacleWrapper spectacle={spectacle}/>)
    }
  </S.SpectacleList>
}

export default SpectacleList
