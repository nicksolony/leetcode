/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
    let maxProfit = 0;

    for (let i = 0; i < prices.length-1; i++) {
        
        // let buyPrice = prices[i];
        
        for (let j = i+1; j < prices.length; j++) {
            
            // let sellPrice = prices[j];

            // if (sellPrice>buyPrice) {
                // let profit = sellPrice - buyPrice;
                let profit = prices[j]-prices[i];
                if (profit>maxProfit) {
                    maxProfit = profit;
                }
            // }

        }
        
    }

    return maxProfit;

};