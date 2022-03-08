//1
/*Perulangan merupakan kondisi dimana beberapa kode program di eksekusi secara berulang.
Contoh:
*/
//for
for(let i=0; i<4; i++){
    console.log(i)
}
//for in
let nomor = [1,2,3,4,5]
let number = 0
for (let x in nomor){
    number += nomor[x]
    console.log(number)
}
//for of
const car = 'BMW'
let word = ''
for(let x of car){
    word += x;
    console.log(word)
}
//while
x= 5
while(x<10){
console.log(x)
x++
}
//do while
do{
    console.log(x),
    x++
}while(x<10)


//2
var printNumber = (num)=>{
    for(let i=0;i<=num;i++){
        console.log(i)
    }
    return num
}
printNumber(3)

//3
var fazztrack = (num)=>{
    for(let i=1;i<=num;i++){
        if(i%3==0){
            console.log('fazz')
        }else if(i%5==0){
            console.log('track')
        }else if(i%3==0 && i%5==0){
            console.log('fazztrack')
        }else{
            console.log(i)
        }
    }
    return num
}
fazztrack(5)