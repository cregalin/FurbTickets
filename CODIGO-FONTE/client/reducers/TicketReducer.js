export default function reducer(
  state = {
    listaObjetos: [],
  },
  action
) {
  switch (action.type) {
    case "display/listaObjetos":
      return {
        ...state,
        listaObjetos: action.listaObjetos,
      };
    default:
      return state;
  }
}
