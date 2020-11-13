export function parseCurrency(value) {
  let formatado = `R$ ${parseFloat(value).toFixed(2)}`
  return formatado.replace('.', ',');
}

export function parseDateToPayload(date) {
  const parts = date.split('/');
  const newDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
  return newDate;
}
