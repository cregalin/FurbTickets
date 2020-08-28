/**
 * @summary Funcao de teste para consumo do back-end
 */
export function getTeste() {
  return new Promise(async (result) => {
    var url = "localhost";
    result(
      await new Promise((result) => {
        fetch(
          new Request(url).then((response) => {
            return response.json();
          })
        );
      })
    );
  });
}
