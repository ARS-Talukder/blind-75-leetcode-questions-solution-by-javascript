prices = [7, 1, 5, 3, 6, 4];
// prices = [7,6,4,3,1];

const maxProfit = function (prices) {
    let buy = prices[0];
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] - buy > profit) {
            profit = prices[i] - buy
        }
        if (prices[i] < buy) {
            buy = prices[i];
        }

    }
    return profit;

};

const result = maxProfit(prices);
console.log(result);