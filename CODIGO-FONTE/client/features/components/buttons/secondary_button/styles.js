import styled from 'styled-components/native';
import { xanadu } from '../../../theme/colors';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${xanadu};
  border-radius: 5px;
  padding: 10px;
  width: ${(props) => (props.width ? props.width : '200px')};
  margin: 10px;
`;
