console.log("cartesian product")
function cartesianProduct(arr1,arr2){
    const result=[]
    for (let i=0;i<arr1.length;i++){
        for (let j=0;j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])
        }
    }
    return result
}
arr1=[4,5]
arr2=[6,7,8]
// console.log(cartesianProduct(arr1,arr2))
// Big O= O(n*m)