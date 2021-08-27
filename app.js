const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function checkLuck(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
    if(sum%luckyNumber.value===0)
        outputBox.innerText="Congratulations...Your Birthday Is Lucky!🔥🔥";
    else
        outputBox.innerText="Luck is just a parameter to measure hard work!✨✨";
    }
    else{
        outputBox.innerText="Please enter both the fields😞";
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum=0;
    for(var i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkButton.addEventListener('click' , checkLuck)

    
    

