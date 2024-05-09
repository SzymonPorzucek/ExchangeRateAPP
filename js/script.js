const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
	fetch(
		`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_b7X7gtexvTALS8NYUJsbraql0Xt1MMA1NthcjCs7&currencies=${currencyTwo.value}&base_currency=${currencyOne.value}`
	)
		.then(res => res.json())
		.then(data => {
			const currency1 = currencyOne.value;
			const currency2 = currencyTwo.value;
			const rate = data.data[currency2];
			rateInfo.textContent = `1 ${currency1}=${rate.toFixed(4)} ${currency2}`;
			amountTwo.value = (amountOne.value * rate).toFixed(2);
		});
};

const swap = () => {
	const oldValue = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = oldValue
    calculate()
};
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click',swap)
calculate();
