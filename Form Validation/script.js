// Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector("#form");
const Username= document.querySelector("#username");
const Password= document.querySelector("#password");
const PasswordConf= document.querySelector("#password-confirmation");
const Terms= document.querySelector("#terms");
const ErrorList=document.querySelector('.errors-list');
const ErrorDiv= document.querySelector(".errors")

// Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit",(e)=>{
  //    Create an array to store all error messages and clear any old error messages
  const ErrArray=[];
  clearErrors();
  //      //      1. Ensure the username is at least 6 characters long
  //      2. Ensure the password is at least 10 characters long
  //      3. Ensure the password and confirmation password match
  //      4. Ensure the terms checkbox is checked
  if (Username.value.length<6) {
    ErrArray.push("Ensure the username is at least 6 characters long");
  }else{
    clearErrors("username");
  }
  if(Password.value.length < 10){
    ErrArray.push("Ensure the password is at least 10 characters long");
  }
  if(PasswordConf.value != Password.value){
    ErrArray.push("Ensure the password and confirmation password match");
  }
  if(Terms.checked===false){
    ErrArray.push("Ensure the terms checkbox is checked");
  }
  console.log(ErrArray);
    //    if there are any errors then prevent the form from submitting and show the error messages
  if(ErrArray.length!=0){
    e.preventDefault();
    showErrors(ErrArray);
    console.log(ErrorList);
  }

})


function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  while (ErrorList.children[0]!=null) {
    ErrorList.removeChild(ErrorList.children[0]);
  }
  // remove the show class to the errors container
  ErrorList.classList.remove("show");
}

function showErrors(errorMessages) {
  // add the show class to the errors container
  ErrorDiv.classList.add("show");
  // Add each error to the error-list element
  errorMessages.forEach((err)=>{
    // Make sure to use an li as the element for each error
      const messageLi= document.createElement("li");
      messageLi.innerHTML=err;
      ErrorList.appendChild(messageLi);
  })
  
}
