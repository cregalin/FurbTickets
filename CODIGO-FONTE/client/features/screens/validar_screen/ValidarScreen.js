import React, { useState } from 'react';
import { validateTicket } from '../../../services/TicketService';
import PrimaryButton from '../../components/buttons/primary_button/PrimaryButton';
import { LoaderCard } from '../../components/cards/LoaderCard/LoaderCard';
import { Container } from '../../components/containers/styles';
import NoControlTextInput from '../../components/inputs/text_input/NoControlTextInput';
import { StyledText } from '../../components/texts/styles';

const ValidarScreen = () => {
  const [codigo, setCodigo] = useState('');
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onValidate = async () => {
    try {
      setOpen(true);
      setLoading(true);
      const status = await validateTicket(codigo);
      setOpen(false);
      setLoading(false);
      setSuccess(status);
      setFail(!status);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <Container justifyContent="flex-start">
      <LoaderCard
        open={open}
        onCloseModal={() => setOpen(false)}
        loading={loading}
        error={error}
      />
      <NoControlTextInput
        placeholder="Código..."
        onChangeText={(text) => setCodigo(text)}
      />
      <PrimaryButton label="Validar" onPress={onValidate} />
      <Container>
        {success && (
          <StyledText
            fontSize={25}
            textAlign="center"
            fontWeight="bold"
            fontColor="green"
          >
            O Ingresso informado é válido!
          </StyledText>
        )}
        {fail && (
          <StyledText
            fontSize={25}
            textAlign="center"
            fontWeight="bold"
            fontColor="red"
          >
            O Ingresso informado não é válido.
          </StyledText>
        )}
      </Container>
    </Container>
  );
};

export default ValidarScreen;
