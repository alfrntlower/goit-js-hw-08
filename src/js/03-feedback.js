import throttle from 'lodash.throttle';

const email = document.querySelector('[name=email]');
const message = document.querySelector('[name=message]');
const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_FROM_STATE = "feedback-form-state";

feedbackForm.addEventListener('submit', onSubmitBtnClick);

feedbackForm.addEventListener('input', throttle(onSaveFormData, 500));

let formData = {};

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

    formData = JSON.parse(localStorage.getItem(FEEDBACK_FROM_STATE)) || {};

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(FEEDBACK_FROM_STATE, JSON.stringify(formData));
}

onLoadFromData();

function onLoadFromData() {
    const parsedFormData = JSON.parse(localStorage.getItem(FEEDBACK_FROM_STATE));

    if (!parsedFormData) return;

    email.value = parsedFormData.email || '';

    message.value = parsedFormData.message || '';

}

