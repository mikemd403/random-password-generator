const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15;

function createPassword() {
    let password = "";
    for (let characterInd=0; characterInd < passwordLength+1; characterInd++) {
        let randomChar = Math.floor(Math.random()*characters.length);
        password += characters[randomChar];
    }
    return password;
}

function generatePassword() {
    let passwordOne = createPassword();
    let passwordTwo = createPassword();
    
    let passwordOneEl = document.querySelector("#password-one");
    let passwordTwoEl = document.querySelector("#password-two");
    
    passwordOneEl.textContent = passwordOne;
    passwordTwoEl.textContent = passwordTwo;
}