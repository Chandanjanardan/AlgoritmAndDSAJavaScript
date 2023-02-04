function insertionSort(arr){
    for (let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        let j= i-1;
        while (j>=0 && arr[j]>numberToInsert){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = numberToInsert
    }
}

arr=[8,4,3,6,60,5,2,1]
// insertionSort(arr)
// console.log(arr)
// console.log("insertion sort")
// Big O(n^2)