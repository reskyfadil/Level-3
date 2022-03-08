//1
var gradeCheck = (nilai)=>{
    if(nilai>=65){
        console.log('Lulus')
    }else{
        console.log('Tidak Lulus')
    }
    return nilai
}
gradeCheck(50)
gradeCheck(65)

//2
var printSquare = (num)=>{
    let x = ''
    for(let i=1;i<=num;i++){
        if(i==1 || i==num){
            for(let j = 1; j<=num;j++){
                x += '*'
            }
        }else{
            for(let k=1;k<=num;k++){
                if(k==1 || k==num){
                    x += '*'
                }else{
                    x += ' '
                }
            }
        }
        x += '\n'
    }
    return console.log(x)
}
printSquare(4)