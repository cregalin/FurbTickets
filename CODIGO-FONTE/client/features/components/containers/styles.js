import styled from "styled-components/native";
import { white } from "../../theme/colors";

export const Container = styled.View`
  background-color: ${white};
  width: 100%;
  height: 100%;
  align-items: ${(props) => (props.AlignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  padding: 10px;
`;
