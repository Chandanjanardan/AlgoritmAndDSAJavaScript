// fib with push 
function fibonacci( n){
    const fib=[0,1];
   for (let i=1;i<n;i++){
      series= fib[i-1]+fib[i]
      fib.push(series)
   }
   return fib
 }
 console.log(fibonacci(6))

//  fib wihout push

function fib(n){
    const fibValue=[0,1]
    for (let i=2;i<=n;i++){
        fibValue[i]=fibValue[i-1]+fibValue[i-2]
    }
    return fibValue
}
console.log(fib(6))