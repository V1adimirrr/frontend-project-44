const getRandomNumber = (min, max) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Math.floor(min + Math.random() * (max - min - 1));

export default getRandomNumber;
