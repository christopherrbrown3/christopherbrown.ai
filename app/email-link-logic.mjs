const mailboxCodePoints = [
  104, 101, 108, 108, 111, 64, 99, 104, 114, 105, 115, 116, 111, 112, 104,
  101, 114, 98, 114, 111, 119, 110, 46, 105, 111,
];

const subject = "Let's talk about my business";
const body =
  "Hi Chris,\n\nThe part of my business I'd like to make easier is:\n\n";

const encodeMailtoValue = (value) =>
  encodeURIComponent(value).replace(/'/g, "%27");

export function buildEmailHref() {
  const address = String.fromCharCode(...mailboxCodePoints);
  const query = [
    `subject=${encodeMailtoValue(subject)}`,
    `body=${encodeMailtoValue(body)}`,
  ].join("&");

  return `mailto:${address}?${query}`;
}
