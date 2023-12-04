const passbox = document.getElementById("pass")
const lenght = 7 ;
const uppercase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const LOWERcase = "abcdefghigklmnopqrstuvwxyz";
const number = "0123456789";
const allchars= uppercase + LOWERcase + number;


function createpassword(){
    let password= "";
    password+= uppercase[Math.floor(Math.random() * uppercase.length)];
  password += LOWERcase[Math.floor(Math.random() * LOWERcase.length)];
   password += number[Math.floor(Math.random() *number.length)];
    while(lenght > password.length){
        password+= allchars[Math.floor(Math.random() * allchars.length)];
    }
    passbox.value = password ;
}

function copypass(){
    passbox.select();
    document.execCommand("copy")

}