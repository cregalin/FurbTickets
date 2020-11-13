import { call, put, takeLatest } from "redux-saga/effects";
import { Alert } from "react-native";
import { getTeste, postTeste } from "baseServices/ShowService";

function* get() {
  try {
    const requisicao = yield call(getTeste);

    yield put({
      type: "display/listaObjetos",
      listaObjetos: requisicao,
    });
  } catch (e) {
    Alert.alert("Erro", e.toString());
  }
}

function* post() {
  try {
    const objetoInserido = yield call(postTeste);

    const novaLista = yield call(getTeste);

    yield put({
      type: "display/listaObjetos",
      listaObjetos: novaLista,
    });
  } catch (e) {
    Alert.alert("Erro", e.toString());
  }
}

export default function* mySaga() {
  yield takeLatest("api/get", get);
  yield takeLatest("api/post", post);
}
