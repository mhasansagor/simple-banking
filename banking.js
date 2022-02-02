document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeAmountT= document.getElementById('deposite-input');
    const depositeAmount = depositeAmountT.value;
    const depositeCurrent = document.getElementById('current-deposite');
    const previousDeposite = depositeCurrent.innerText;
    const depositeTotal = parseFloat(previousDeposite) + parseFloat(depositeAmount);
    depositeCurrent.innerText = depositeTotal;
    const currentBalance = document.getElementById('current-balance');
    const balance = currentBalance.innerText;
    const newBlance = parseFloat( balance) + parseFloat(depositeAmount);
    currentBalance.innerText=newBlance;
    depositeAmountT.value = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount= document.getElementById('withdraw-input').value;
    const withdrawCurrent= document.getElementById('current-withdraw');
    const PwithdrawAmount= withdrawCurrent.innerText;
    const withdrawTotal = parseFloat(PwithdrawAmount)+ parseFloat( withdrawAmount);
    withdrawCurrent.innerText = withdrawTotal;
    const currentBalance = document.getElementById('current-balance');
    const balance = currentBalance.innerText;
    const newBlance = parseFloat( balance) - parseFloat(withdrawAmount);
    currentBalance.innerText=newBlance;
    document.getElementById('withdraw-input').value = '';
})