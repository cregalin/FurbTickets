export function parseCurrency(value) {
  let formatado = `R$ ${parseFloat(value).toFixed(2)}`;
  return formatado.replace('.', ',');
}

export function parseDateFromPayload(date) {
  const parts = date.split('-');
  const newDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
  return newDate;
}

export function parseTimeFromPayload(time) {
  let minutes = new Date(time).getUTCMinutes();
  minutes = minutes == 0 ? '00' : minutes;
  return `${new Date(time).getUTCHours()}:${minutes}`;
}

export function parseDateToPayload(date) {
  const parts = date.split('/');
  const newDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
  return newDate;
}
