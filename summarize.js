const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const convert = document.getElementById('convert')
const result = document.getElementById('result')

const API_KEY="qMijnMNx8jY4XcltciTw1A==XgLTsAVQMXaD5D9z"
const apiURL="https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

convert.addEventListener('click', () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiURL + currencyTotal;

    fetch(url, {
        headers: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.rate;
        const result = amountTotal * rate;
        result.innerHTML = `${amount} ${currency} = ${result.toFixed(2)} USD`;
    })
    .catch(error => {
        console.error('Request failed:', error);
        result.innerHTML = 'An error occured, please try again later. '
    })
})