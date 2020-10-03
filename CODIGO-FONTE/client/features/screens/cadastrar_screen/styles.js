import styled from "styled-components/native";
import { white, electricPurple } from "../../theme/colors";

export const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
})`
  width: 98%;
  border-top-width: 1px;
  border-top-color: ${electricPurple};
  padding: 5px;
`;

export const ModalView = styled.View`
  height: 100%;
  border-width: 1px;
  background-color: ${(props) =>
    props.background ? props.background : "white"};
  justify-content: flex-end;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background-color: ${white};
  height: 90%;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  align-items: center;
  padding-vertical: 10px;
`;

export const ModalHeader = styled.View`
  width: 100%;
  height: 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
