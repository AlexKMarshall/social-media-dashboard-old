const formatBigNumber = (number) => {
  const breakPointK = 10000;
  if (number < breakPointK) return number;

  const thousands = Math.floor(number / 1000);
  return `${thousands}k`;
};

export default formatBigNumber;
