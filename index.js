const form = document.querySelector('form');
const card = document.querySelector('.card');
const card_2 = document.querySelector('.card-2');

const userEmail = document.getElementById('user-email')
const emailInput = document.getElementById('email');
const invalidEmail = document.getElementById('invalid-email');
const submitBtn = document.getElementById('submit');



function dismissMessage(){
    card.classList.remove('hide');
    card_2.classList.add('hide');
}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const email = emailInput.value;

    if(validateEmail(email)){
        card.classList.add('hide');
        card_2.classList.remove('hide');
        userEmail.innerHTML = email;
        emailInput.value = '';
        invalidEmail.classList.remove('active');
    } else {
        invalidEmail.classList.add('active');
        emailInput.classList.add('active');
    }
})