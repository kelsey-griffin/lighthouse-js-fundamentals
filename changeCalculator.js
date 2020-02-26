let calculateChange = function(total, cash) {
  let change = cash - total;

  let twenties = Math.floor(change / 20);
  change = change - (twenties * 20);
  let tens = Math.floor(change / 10);
  change = change - (tens * 10);
  let fives = Math.floor(change / 5);
  change = change - (fives * 5);
  let twos = Math.floor(change / 2);
  change = change - (twos * 2);
  let ones =  Math.floor(change / 1);
  change = change - (ones);
  let cent25 = Math.floor(change / .25);
  change = change - (cent25 * .25);
  let cent10 = Math.floor(change / .10);
  change = change - (cent10 * .10);
  let cent5 = Math.floor(change / .05);
  change = change - (cent5 * .05);
  let cent1 = Math.floor(change / .01);
  change = change - (cent1 * .01);

  let currency = {
    twentyDollar : twenties,
    tenDollar : tens,
    fiveDollar : fives,
    twoDollar : twos,
    oneDollar : ones,
    quarters : cent25,
    dimes : cent10,
    nickels : cent5,
    pennies : cent1
  };  
  let finalCurrency = {}
  for (let key in currency) {
    if (currency[key] > 0) {
        finalCurrency[key] = currency[key];
    }
  };
  return finalCurrency;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
