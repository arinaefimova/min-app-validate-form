const nameError = document.querySelector('#name-error');
const nameC = document.querySelector('#contact-name');
const phoneC = document.querySelector('#contact-phone');
const emailC = document.querySelector('#contact-email');
const messageC = document.querySelector('#contact-message');
const phoneError = document.querySelector('#phone-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');
const submitError = document.querySelector('#submit-error');

nameC.addEventListener('keyup',validateName)

phoneC.addEventListener('keyup',validatePhone)

emailC.addEventListener('keyup',validateEmail)

messageC.addEventListener('keyup',validateMessage)



function validateName(){
    let name = nameC.value;

    if(name.length == 0){
        nameError.innerHTML=`Name is required`;
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML=`Write full name`;
        return false
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}
function validatePhone(){
    let phone =phoneC.value;
    if(phone.length == 0){
        phoneError.innerHTML=`Phone no is required`;
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML=`Phone no length is false`;
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML=`Only digits please`;
        return false;

    }
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}
function validateEmail(){
    let email =emailC.value; 
    if(email.length == 0){
        emailError.innerHTML=`Email is required`;
        return false;
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML=`Email Invalid`;
        return false;
    }
    emailError.innerHTML =`<i class="fa-solid fa-circle-check"></i>`;
    return true;
}
function validateMessage(){
    let message =messageC.value; 
    let required =30;
    let left = required - message.length;
    if(left>0){
        messageError.innerHTML=`${left} more characters required`;
        return false;
    }
    messageError.innerHTML =`<i class="fa-solid fa-circle-check"></i>`;
    return true;

}
function validateForm(){
    if(!validateName() || ! validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display ='block';

        submitError.innerHTML =`Please fix errors to submit`
        setTimeout(function(){
            submitError.style.display ='none';
        },3000)
        return false;
    }
}