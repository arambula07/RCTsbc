export function payoutPercent(oddsAmount) {
  const odds = parseInt(oddsAmount);
  const isNegative = odds < 0;
  const absOdds = Math.abs(odds);
  const numerator = 100 + absOdds;
  let denominator = 100;
  if(isNegative) {
    denominator = absOdds;
  }

  return +((numerator/denominator).toFixed(5))
}

export function calcTotal(oddsAmount, wager) {
  const payoutTotal = payoutPercent(oddsAmount);
  return +(payoutTotal * wager - wager).toFixed(2)
}

export function calcParlay(parlay, wager) {
  const payoutPercents = parlay.map(payoutPercent);
  const payoutPercentage = payoutPercents.reduce((total, percent) => {
    return total * percent
  }, 1);
  return +(payoutPercentage * wager - wager).toFixed(2)
}