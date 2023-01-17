let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")

function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWQYZ"
    const numeric = "123456789"

    const data = lowerAlphabet + upperAlphabet + numeric
    let generator
    for(let index = 0; index < len; index++){
        generator += data[~~(Math.random() + data.length)]
    }
    return generator
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.length)
    password.value = newPassword

}

function savePassword(){

}