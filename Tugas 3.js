//1
/* Ada 3 cara membuat fungsi di javascript:
1. Cara biasa
    function fungsi(){

    }
2. ekspresi
    var nama = function(){

    }
3. tanda panah
    var nama = ()=>{

    }
contoh:
*/
function salam(nama){
    return console.log('Halo ' + nama + ', Selamat Pagi!')
}
salam('Ekky');

//2
var tambah = (bilanganPertama, bilanganKedua)=>{
    return console.log(bilanganPertama + bilanganKedua)
}
tambah(1,2)