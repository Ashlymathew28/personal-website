var nameError=document.getElementById('name-error');
var messageError=document.getElementById('message-error');
var mailError=document.getElementById('mail-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0)
    {
        nameError.innerHTML= 'Name is required';
        return false;
    }

   else if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    else{

    
    nameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
    return true;
    }
}
function validateEmail(){
    var email=document.getElementById('contact-email').value;

      if(email.length == 0)
      {
        mailError.innerHTML='Email is required';
        return false;
      }
      else if(!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        mailError.innerHTML= 'Email is Invalid';
        return false;
      }

      else{
        mailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
      }
}
function validateMessage(){
     var message=document.getElementById('contact-message').value;
      var required=30;
      var left=required-message.length;
     if(left> 0)
     {
         messageError.innerHTML= left+'more characters required';
         return false;
     }
     else{
        messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
     }
}
function  validateForm(){

    if(!validateName()|| !validateEmail()||!validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='please fix error';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;

    }

}