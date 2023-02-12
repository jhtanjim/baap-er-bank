/* 1/ add eventhandler with the withdraw button
2/ get the withdraw ammount from the withdraw input field
2.5/ also make sure to conver the input into number by using parsefloat
3/get previous withdraw total
4. calculate total withdrw amount
4.5/  set total withdraw amount
5/ get the previous balance total
6/ calculate new balance total
6.5 set the new balance total
7/ clear the input field
*/

//step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    console.log(newWithDrawAmount);
    //step 7
    withdrawField.value = ''
    if (isNaN(newWithDrawAmount)) {
        alert('please provide a number');
        return;
    }

    //step 3: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);




    //step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);




    if (newWithDrawAmount > previousBalanceTotal) {
        alert('You have  low limit');
        return;
    }
    //step 4
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal
    //step 6
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})