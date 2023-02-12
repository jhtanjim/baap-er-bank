//step 1 addd event handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2 get the deposit amount from deposit input field
    //always remeber to use.value to get text from an input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    console.log(typeof newDepositAmountString);
    //step 3 get current  deposit total amount
    //for non input that means input other than input,text area ise inner text to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    console.log(typeof previousDepositTotalString);

    const previousDepositTotal = parseFloat(previousDepositTotalString)
    console.log(previousDepositTotal);
    //step 4 add numbers to set the total deposit
    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositeTotal;

    //step 5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step 6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //step 7 clear the deposit field
    depositField.value = ''
})