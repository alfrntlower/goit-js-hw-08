import throttle from 'lodash.throttle';

const email = document.querySelector('[name=email]');
const message = document.querySelector('[name=message]');
const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_FROM_STATE = "feedback-form-state";

feedbackForm.addEventListener('submit', onSubmitBtnClick);

const formData = {};

feedbackForm.addEventListener('input', throttle(onSaveFormData, 500));


function onSubmitBtnClick(evt) {
    
    evt.preventDefault();
 
    if (email.value === "" || message.value === "") {
        alert("Please fill in the empty fields");
        return;
    }

    console.log("Submit Form Done");
    console.log(formData);

    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FROM_STATE);
   
}

function onSaveFormData(evt) {
    console.log(evt.target.name);
    console.log(evt.target.value);

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(FEEDBACK_FROM_STATE, JSON.stringify(formData));
}

if (localStorage.getItem(FEEDBACK_FROM_STATE)) {     

    const savedFormData = localStorage.getItem(FEEDBACK_FROM_STATE);
    const parsedFormData = JSON.parse(savedFormData);
   
    const emailParsedFormData = parsedFormData.email;
    const messageParsedFormData = parsedFormData.message;


    email.value = emailParsedFormData;
    email.textContent = emailParsedFormData;
    message.value = messageParsedFormData;
    message.textContent = messageParsedFormData;
    console.log(formData);

    //localStorage.setItem(FEEDBACK_FROM_STATE,JSON.stringify(formData));

    // if (email.value === "undefined") {
    //     email.value = "";
    // } else {
    //     email.value = parsedFormData.email;
    // }

    // if (message.value === "undefined") {
    //     message.value = "";
    // } else {
    //     message.value = parsedFormData.message;
    // }
    

       
}

