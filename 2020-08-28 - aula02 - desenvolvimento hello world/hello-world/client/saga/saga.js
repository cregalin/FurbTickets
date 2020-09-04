import { call, put, takeLatest } from "redux-saga/effects";
import { Alert } from "react-native";
import { getTeste, postTeste } from "../Api";

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
    const requisicao = yield call(postTeste);

    yield put({
      type: "display/listaObjetos",
      listaObjetos: requisicao,
    });
  } catch (e) {
    Alert.alert("Erro", e.toString());
  }
}

export default function* mySaga() {
  yield takeLatest("api/get", get);
  yield takeLatest("api/post", post);
}
