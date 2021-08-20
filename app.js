const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");

checkButton.addEventListener('click' , function getvalues(){
    console.log(dateOfBirth.value, luckyNumber.value);
})