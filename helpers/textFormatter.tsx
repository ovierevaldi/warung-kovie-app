function formatTextOrderAmount(amount: number){
  return amount.toString() + 'x';
};

function formatPrice(value: number){
  if(value >= 1000000)
    return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';

  if(value >= 1000)
    return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';

  return value.toString();
};

function formatOrderPrice(value: number){
  return value.toLocaleString('id-ID', {
    minimumFractionDigits: 2
  })
}

export { formatTextOrderAmount, formatPrice, formatOrderPrice }