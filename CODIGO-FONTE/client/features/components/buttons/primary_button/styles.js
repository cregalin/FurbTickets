import styled from "styled-components/native";
import { electricPurple } from "../../../theme/colors";

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${electricPurple};
  border-radius: 5px;
  padding: 10px;
  width: ${(props) => (props.width ? props.width : 200)}px;
  margin: 10px;
`;
