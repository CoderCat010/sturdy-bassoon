document.getElementById('btn-submit').addEventListener('click', function(){

const emailField = document.getElementById('user-email')
const email = emailField.value;

const passcord = document.getElementById('user-pass')
const pass = passcord.value;

if(email === 'savagecat@gmail.com' && pass === 'cat909'){
    console.log('user info valid');
    window.location.href = 'index-1.html';
}
else{
    alert('invalid! please put valid info ');
}

})


