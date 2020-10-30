import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native'
import Spectacle from '../../components/Spectacle/Spectacle'
import Button from '../../components/buttons/primary_button/PrimaryButton'
import * as S from './SpectacleListStyles'
import moment from 'moment'

const SpectacleList = ({route}) => {

  const [spectacles, setSpectacles] = useState([])

  const {title,
    room,
    value,
    description,
    day,
    hour} = route.params

  useEffect(() => {
    fetch(`http://a0df22c9e199.ngrok.io/shows?date_from=2019-01-01&date_to=2019-01-05${title ? '&title=' + title : ''}${description ? '&description=' + description : ''}&troupe=Trupe&time_from=11:30&time_to=18:30`)
    .then(res => res.json())
    .then(({data}) => setSpectacles(data))
  }, [])

  useEffect(() => {
    console.log(spectacles)
  }, [spectacles])

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
