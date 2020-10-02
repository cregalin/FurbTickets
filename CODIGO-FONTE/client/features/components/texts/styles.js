import styled from "styled-components/native";
import { xanadu } from "../../theme/colors";

export const StyledText = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  color: ${(props) => (props.fontColor ? props.fontColor : xanadu)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;
