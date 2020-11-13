import styled from 'styled-components/native';
import { xanadu, electricPurple } from '../../theme/colors';

export const StyledText = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  color: ${(props) => (props.fontColor ? props.fontColor : xanadu)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => (props.fontColor ? props.fontColor : electricPurple)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
`;
