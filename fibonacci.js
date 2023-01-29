// fib with push 
function fibonacci( n){
    const fib=[0,1];
   for (let i=1;i<=n;i++){
      series= fib[i-1]+fib[i]
      fib.push(series)
   }
   return fib
 }
 console.log(fibonacci(6))