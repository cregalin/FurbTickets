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
  return fetch(new Request("http://ad355c6c56df.ngrok.io/notes")).then(
    (response) => {
      return response.json();
    }
  );
}
