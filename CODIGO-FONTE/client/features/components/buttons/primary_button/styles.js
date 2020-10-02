import styled from "styled-components/native";
import { secondaryColor } from "../../../theme/colors";

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${secondaryColor};
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  margin: 10px;
`;
