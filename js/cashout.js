document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = document.getElementById('add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('pin-number').value;

    if(pinNumber === '1234'){

        const mainBalance = document.getElementById('main-balance').innerText;
        const mainBalanceNumber = parseFloat(mainBalance);

        const newBalance = mainBalanceNumber - addMoneyNumber;

        document.getElementById('main-balance').innerText = newBalance;

    }
    else{
        alert('Invalid Pin Number');
    }

})