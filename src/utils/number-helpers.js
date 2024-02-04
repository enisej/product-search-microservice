exports.percentageOf = (number, percentage) => {
  const discountedPrice = parseFloat(number) * (1 - parseFloat(percentage) / 100);
  return parseFloat(discountedPrice.toFixed(2));
};
