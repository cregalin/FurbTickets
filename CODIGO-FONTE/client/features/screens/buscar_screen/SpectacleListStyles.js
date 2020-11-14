import styled from 'styled-components/native';
import { Text, View, TextInput } from 'react-native';
import { StyledText } from '../../components/texts/styles';
import { electricPurple, white } from '../../theme/colors';

export const SpectacleList = styled(View)`
  background: ${white};
`;

export const Centered = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InModalContainer = styled.View`
  width: 100%;
  padding: 10px;
  height: ${(props) => (props.height ? props.height : 'auto')};
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Container = styled(View)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
`;

export const Wrapper = styled(View)`
  padding: 24px 8px;
  margin: 12px 0px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: white;
  border-radius: 4px;
  border: 1px solid ${electricPurple};
`;
