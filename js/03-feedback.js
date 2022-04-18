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
  
    console.log("Submit Form Done");
    console.log(formData);
    
    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FROM_STATE);
   
}

function onSaveFormData(evt) {
    // console.log(evt.target.name);
    // console.log(evt.target.value);

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(FEEDBACK_FROM_STATE, JSON.stringify(formData));
}

if (localStorage.getItem(FEEDBACK_FROM_STATE)) {     

    const savedFormData = localStorage.getItem(FEEDBACK_FROM_STATE);
    const parsedFormData = JSON.parse(savedFormData);
   
    email.value = parsedFormData.email;
    message.value = parsedFormData.message;
       
}

