/*
 * Format SQL date time to JavaScript locale Date
 */

export default function (time) {
  const date = new Date(time);
  return date.toLocaleString();
}
