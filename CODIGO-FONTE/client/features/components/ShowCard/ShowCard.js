import React from 'react';
import { parseCurrency, parseDateFromPayload } from 'helpers';
import { Card } from 'components/cards/styles';
import RowField from 'components/fields/RowField/RowField';
import { StyledText } from 'components/texts/styles';
import ShowCardButtons from './ShowCardButtons';

const ShowCard = ({ show, onPressTicket, onPressDetails }) => {
  return (
    <Card>
      <StyledText fontColor="black" fontWeight="bold" fontSize={20}>
        {show.title}
      </StyledText>
      <RowField label="Preço:" value={parseCurrency(show.price)} />
      <RowField label="Trupe:" value={show.troupe} />
      <ShowCardButtons
        onPressDetails={() => onPressDetails(show)}
        onPressTicket={() => onPressTicket(show)}
      />
    </Card>
  );
};

export default ShowCard;
