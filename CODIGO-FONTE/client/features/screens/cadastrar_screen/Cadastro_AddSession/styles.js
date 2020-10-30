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

const modalBackground = {
  background: "rgba(0,0,0,0.7)",
};

export const ModalContainer = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: ${modalBackground.background};
`;

export const InModalContainer = styled.View`
  width: 99%;
  height: 30%;
  border-width: 1px;
  background-color: ${white};
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  align-items: center;
`;
