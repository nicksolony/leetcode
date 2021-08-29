/**
 * @param {number[]} prices
 * @return {number}
 */
// BRUT FORCE
//  var maxProfit = function(prices) {

//     let maxProfit = 0;

//     for (let i = 0; i < prices.length-1; i++) {

//         let buyPrice = prices[i];

//         for (let j = i+1; j < prices.length; j++) {

//             let sellPrice = prices[j];

//             if (sellPrice>buyPrice) {
//                 let profit = sellPrice - buyPrice;
//                 // let profit = prices[j]-prices[i];
//                 if (profit>maxProfit) {
//                     maxProfit = profit;
//                 }
//             }

//         }

//     }

//     return maxProfit;

// };


// ONE PASS
var maxProfit = function (prices) {

    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;

    for (let i = 0; i < prices.length; i++) {

        if (minPrice > prices[i]) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }

    }

    return maxProfit;

};