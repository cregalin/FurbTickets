export function parseDateToPayload(date) {
  const parts = date.split('/');
  const newDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
  return newDate;
}
