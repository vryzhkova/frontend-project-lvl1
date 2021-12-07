export default function getRandomNumber(max = 10, min = 1) {
  const num = Math.random() * (max - min) + min;
  return Math.round(num);
}
