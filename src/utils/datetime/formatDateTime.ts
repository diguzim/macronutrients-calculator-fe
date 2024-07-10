export function formatDatetime(datetime: string) {
  return new Date(datetime).toLocaleString();
}
