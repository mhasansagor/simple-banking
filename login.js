document.getElementById('submit').addEventListener('click', function(){
const userEmail=document.getElementById('email-submit');
const emailField= userEmail.value;
const userPassword=document.getElementById('password-submit');
const passwordField= userPassword.value;
if(emailField == 'sagor@cse.uiu.ac.bd' && passwordField=='sagor'){
    window.location.href='deposit.html';
}
else{
    alert('you input wrong email or password');
}
})