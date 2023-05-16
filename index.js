var maxProfit = function (prices) {
  let minPrice = Infinity;
  let profit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      profit = Math.max(profit, price - minPrice);
    }
  }

  return profit;
};
