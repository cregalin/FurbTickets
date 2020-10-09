import styled from "styled-components/native";
import { white, electricPurple } from "../../../theme/colors";

export const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
})`
  width: 98%;
  padding: 5px;
`;
