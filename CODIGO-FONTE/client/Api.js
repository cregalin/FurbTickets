/**
 * @summary Funcao de teste para consumo do back-end
 */
export function getTeste() {
  return fetch(new Request("http://ad355c6c56df.ngrok.io/notes")).then(
    (response) => {
      return response.json();
    }
  );
}

export function postTeste() {
  let object = {
    note: {
      text: "Hello",
    },
  };
  let requestParameters = {
    method: "post",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(object),
  };
  console.log(requestParameters.body);
  return fetch("http://ad355c6c56df.ngrok.io/notes", requestParameters).then(
    function (response) {
      return response.json();
    }
  );
}
