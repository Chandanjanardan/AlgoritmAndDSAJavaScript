const primeNumber=(n)=>{
    if (n<2){
    return false
}
for (let i=2;i<n;i++){
    if (n%i === 0){
        return `${n} is not a prime number`
    }else{
        return `${n} is a prime number`
        
    }
}
}
// console.log(primeNumber(5))