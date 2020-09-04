export default function reducer(
  state = {
    textValue:
      "Bem-Vindo ao app. Clique no botão acima para fazer uma requisição!",
  },
  action
) {
  switch (action.type) {
    case "display/textApi":
      return {
        ...state,
        textValue: action.textValue,
      };
    default:
      return state;
  }
}
