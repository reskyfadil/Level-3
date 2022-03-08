//1
var ganjil = (num)=>{
    if(num%2==0){
        console.log(false)
    }else{
        console.log(true)
    }
}
var genap = (num)=>{
    if(num%2==0){
        console.log(true)
    }else{
        console.log(false)
    }
}
ganjil(3)
ganjil(4)
genap(3)
genap(4)

//2
var printTriangle =(num)=>{
    let str = ''
    for(let i=0;i<num;i++){
        for(let j=0;j<=i;j++){
            str += '*'
        }
        str += '\n'
    }
    return console.log(str)
}
printTriangle(5)