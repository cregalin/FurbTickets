export function parseCurrency(value) {
  var formatado = 'R$ ' + value.toFixed(2).replace('.', ',');
  return formatado;
}
