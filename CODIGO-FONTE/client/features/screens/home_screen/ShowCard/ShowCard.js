import React from 'react';
import { parseCurrency } from '../../../../helpers';
import { Card } from '../../../components/cards/styles';
import RowField from '../../../components/fields/RowField/RowField';
import { StyledText } from '../../../components/texts/styles';
import ShowCardButtons from './ShowCardButtons';

const ShowCard = ({ show }) => {
  return (
    <Card>
      <StyledText fontColor="black" fontWeight="bold" fontSize={20}>
        {show.title}
      </StyledText>
      <RowField label="Preço:" value={parseCurrency(show.price)} />
      <RowField label="Trupe:" value={show.troupe} />
      <RowField label="Sala:" value={show.room_id} />
      <RowField
        label="Próxima Sessão:"
        value={`${show.sessions_attributes[0].date} - ${show.sessions_attributes[0].time}`}
      />
      <ShowCardButtons onPressDetails={() => {}} onPressTicket={() => {}} />
    </Card>
  );
};

export default ShowCard;
