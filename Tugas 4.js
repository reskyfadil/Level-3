//1
/* If else
percabangan if else merupakan percabangan yang memiliki dua pilihan.
Ketika situasi pada if benar, maka akan melanjutkan ke program selanjutnya, sedangkan jika situasi pada if salah, maka akan melanjutkan ke program pada blok else.
Contoh:
*/
var pass = 1234
if(pass === 1234){
    console.log('Password Benar' )
}else{
    console.log('Password Salah')
}

//2
function cekParameter(x){
    if(x){
        return console.log('ini parameternya ' + x)
    }else{
        return console.log('tidak ada parameter yang diberikan')
    }
}
cekParameter(5)