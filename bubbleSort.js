console.log("bubble sort")
/* [-6 20 8 -2 4] check -6 and 20 in order yes
   [-6 20 8 -2 4] check 20 and 8 in order no swap
   [-6 8 20 -2 4]  check 20 and -2 in order yes swap
   [-6 8 -2 20 4] goes on and repeat */
   
   function bubbleSort(arr){
    let swapped                             //to keep traged of swapping
    do{
        swapped = false                     //set to false inital 
    for (let i = 0; i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp =arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp
            swapped = true              //assigned true 
        }
    }
}while(swapped)
}
let arr=[5,4,3,2,1]
bubbleSort(arr)
// console.log(arr)

// console.log(bubbleSort([2,5,3,4,1]))

// .2 loop for and while O(n^2)
