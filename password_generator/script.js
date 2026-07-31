const passwordInput = document.getElementById("password");
const lengthSlider=document.getElementById("length");
const lengthDisplay=document.getElementById("length-value");
const uppercaseCheckBox=document.getElementById("uppercase");
const lowercaseCheckBox=document.getElementById("lowercase");
const numbersCheckBox=document.getElementById("numbers");
const symbolsCheckBox=document.getElementById("symbols");
const generateButton=document.getElementById("generate-btn");
const strengthValue=document.getElementById("strength-value");
const copyButton = document.getElementById("copy-btn");

const strengthLabel=document.getElementById("strength-value");
const strengthText = document.querySelector(".strength-text span");
const strengthBar = document.querySelector(".strength-bar");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

lengthSlider.addEventListener("input",()=>{
    lengthDisplay.textContent=lengthSlider.value;
})

generateButton.addEventListener("click",makePassword);

function makePassword(){
    const length = Number(lengthSlider.value);
    const includeUppercase = uppercaseCheckBox.checked;
    const includeLowercase = lowercaseCheckBox.checked; 
    const includeNumbers=numbersCheckBox.checked;
    const includeSymbols=symbolsCheckBox.checked;

    if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
        alert("Please enter one checkbox");
        return;
    }
    const newPassword=createPassword(length,includeUppercase,includeLowercase,includeSymbols,includeNumbers);
    passwordInput.value=newPassword;
    updateStrengthMeter(newPassword);

}
function updateStrengthMeter(password){
    const passwordLength = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*()-_=+[\]{}|;:,.<>?]/.test(password);

    let strength=0;
    if(passwordLength >=8) strength +=15; 
    else if  (passwordLength >=16 ) strength += 40; 
    
    
    if(hasUppercase) strength += 15;
    if (hasLowercase) strength += 15;
    if (hasNumbers) strength += 15;
    if(hasSymbols) strength += 15;

    strengthBar.style.width= strength +"%";
    
    let strengthLabelText="";
    let barColor="";
    if(strength <40){
        barColor = "#fc8181";
    strengthLabelText = "Weak";
    }
    else if (strength <70){
barColor = "#fbd38d"; 
    strengthLabelText = "Medium";
    }
    else {

    barColor = "#68d391";
    strengthLabelText = "Strong";
  }
  strengthBar.style.background=barColor;
  strengthValue.textContent=strengthLabelText;

}
function createPassword(length,includeUppercase,includeLowercase,includeSymbols,includeNumbers){
    let allCharacters="";
    if(includeUppercase) allCharacters += uppercaseLetters;

    if(includeLowercase) allCharacters += lowercaseLetters;

    if(includeNumbers) allCharacters += numberCharacters;

    if (includeSymbols) allCharacters += symbolCharacters;

    let password="";

    for(let i=0;i<length ;i++){
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    return password
}
copyButton.addEventListener("click", () => {
  if (!passwordInput.value) return;

  navigator.clipboard
    .writeText(passwordInput.value)
    .then(() => showCopySuccess())
    .catch((error) => console.log("Could not copy:", error));
});


function showCopySuccess() {
  copyButton.classList.remove("far", "fa-copy");
  copyButton.classList.add("fas", "fa-check");
  copyButton.style.color = "#48bb78";

  setTimeout(() => {
    copyButton.classList.remove("fas", "fa-check");
    copyButton.classList.add("far", "fa-copy");
    copyButton.style.color = "";
  }, 1500);
}
