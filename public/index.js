function convertCurrency() {
  const apiKey = '7a87a9679d0b2c962c754f6b'; 
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const amount = document.getElementById('amount').value;

  fetch(`https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      document.getElementById('convertedAmount').value = convertedAmount;
    })
    .catch(error => {
      console.error('Error getting exchange rate!', error);
    });
};
