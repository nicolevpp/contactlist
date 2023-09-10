import { createNotification } from "../components/notification.js";

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput  = document.querySelector('#match-input');
const formBtn = document.querySelector('#form-btn');
const notification = document.querySelector('#notification')
const loader = document.querySelector('#loader-container');


// Regex
const EMAIL_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const NAME_VALIDATION = /^[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1]+\s[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
const PASSWORD_VALIDATION = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

let nameValidation = false;
let emailValidation = false;
let passwordValidation = false;
let matchValidation = false;

const validation = (input, regexValidation) => {

    if (nameValidation && emailValidation && passwordValidation && matchValidation) {
        formBtn.classList.remove('cursor-not-allowed')
        formBtn.disabled = false;
    } else {
        formBtn.disabled = true;
    }

    // formBtn.disabled = nameValidation && emailValidation && passwordValidation && matchValidation ? false : true;
    
    if (input.value === '') {
        input.classList.remove('outline-red-500', 'outline-2', 'outline')
        input.classList.remove('outline-green-500', 'outline-2', 'outline')
        input.classList.add('focus:outline-indigo-700')
    }
    else if (regexValidation) {
        input.classList.remove('focus:outline-indigo-700')
        input.classList.remove('outline-red-500', 'outline-2', 'outline')
        input.classList.add('outline-green-500', 'outline-2', 'outline')
    } else if (!regexValidation){
        input.classList.remove('focus:outline-indigo-700')
        input.classList.remove('outline-green-500', 'outline-2', 'outline')
        input.classList.add('outline-red-500', 'outline-2', 'outline')
    }
};

// Events
nameInput.addEventListener('input', e => {
    nameValidation = NAME_VALIDATION.test(e.target.value);
    validation(nameInput, nameValidation);
})

emailInput.addEventListener('input', e => {
    emailValidation = EMAIL_VALIDATION.test(e.target.value);
    validation(emailInput, emailValidation);
})

passwordInput.addEventListener('input', e => {
    passwordValidation = PASSWORD_VALIDATION.test(passwordInput.value);
    matchValidation = passwordInput.value === matchInput.value;
    validation(passwordInput, passwordValidation);
    validation(matchInput, matchValidation);
})

matchInput.addEventListener('input', e => {
    matchValidation = e.target.value === passwordInput.value;
    validation(matchInput, matchValidation);
})


form.addEventListener('submit', async e  => {
    e.preventDefault();

    loader.innerHTML = `
    <?xml version="1.0" encoding="utf-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <g transform="translate(80,50)">
    <g transform="rotate(0)">
    <circle cx="0" cy="0" r="6" fill="#85a2b6" fill-opacity="1">
      <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
      <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
    </circle>
    </g>
    </g><g transform="translate(71.21320343559643,71.21320343559643)">
    <g transform="rotate(45)">
    <circle cx="0" cy="0" r="6" fill="#85a2b6" fill-opacity="0.875">
      <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
      <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
    </circle>
    </g>
    </g><g transform="translate(50,80)">
    <g transform="rotate(90)">
    <circle cx="0" cy="0" r="6" fill="#85a2b6" fill-opacity="0.75">
      <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
      <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
    </circle>
    </g>
    </g><g transform="translate(28.786796564403577,71.21320343559643)">
    <g transform="rotate(135)">
    <circle cx="0" cy="0" r="6" fill="#85a2b6" fill-opacity="0.625">
      <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
      <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
    </circle>
    </g>
    </g><g transform="translate(20,50.00000000000001)">
    <g transform="rotate(180)">
    <circle cx="0" cy="0" r="6" fill="#85a2b6" fill-opacity="0.5">
      <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
      <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
    </circle>
    </g>
    </g><g transform="translate(28.78679656440357,28.786796564403577)">
    <g transform="rotate(225)">
    <circle cx="0" cy="0" r="6" fill="#85a2b6" fill-opacity="0.375">
      <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
      <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
    </circle>
    </g>
    </g><g transform="translate(49.99999999999999,20)">
    <g transform="rotate(270)">
    <circle cx="0" cy="0" r="6" fill="#85a2b6" fill-opacity="0.25">
      <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
      <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
    </circle>
    </g>
    </g><g transform="translate(71.21320343559643,28.78679656440357)">
    <g transform="rotate(315)">
    <circle cx="0" cy="0" r="6" fill="#85a2b6" fill-opacity="0.125">
      <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
      <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
    </circle>
    </g>
    </g>
    <!-- [ldio] generated by https://loading.io/ --></svg>
    `

    try {

        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        }
        const { data } = await axios.post('/api/users', newUser);
        loader.innerHTML = '';

        console.log(data);
        createNotification(false, data);
        setTimeout(() => {
            notification.innerHTML= '';
        }, 5000)

        loader.innerHTML = '';

       

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        matchInput.value = '';
        validation(nameInput, false);
        validation(emailInput, false);
        validation(passwordInput, false);
        validation(matchInput, false);

    } catch (error) {
      loader.innerHTML = '';
        createNotification(true, error.response.data.error);
        setTimeout(() => {
            notification.innerHTML= '';
        }, 5000);
    }

});


