export default function getRandomNumber(max = 10) {
  // return Math.floor(Math.random() * number);
  const num = Math.random() * (max - 1) + 1;
  return Math.round(num);
}
