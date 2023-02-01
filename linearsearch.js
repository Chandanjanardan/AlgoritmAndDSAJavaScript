// linear search
// start form starting to end 
// compare each with target and return the matched

function linearSearch(arr,n){
    for (let i=0;i<arr.length;i++){
        if (arr[i]===n){
            return `${n} found at index ${i}`;
        }
    }
    return `${n} is not present`
}
console.log(linearSearch([1,2,3,4,5],4))
console.log(linearSearch([1,2,3,4,5],6))