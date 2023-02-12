//step 1 add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step 2 get the email address inside the email field
    //always remeber to use.value to get text from an input field
    console.log(document.getElementById('user-email'));
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    // console.log(email);
    //step 3 get password
    //3.a: set id on the html element
    // 3.b: get the Element
    //3 c: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    //Danger :do not verify email password in the client side
    //step 4 verify email and password
    if (email === "mybank@gmail.com" && password === 'password') {
        window.location.href = 'bank.html'
    }
    else {
        alert("please enter valid user email and password");
    }
})