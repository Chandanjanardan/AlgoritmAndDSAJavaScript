// Binary search only work on sorted array
/* find midle of element 
if middle middle 
if greater search left
if smaller search right */

function binarySearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1;

    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if (target ===arr[middleIndex]){
            return middleIndex;
        }
        if(target< arr[middleIndex]){
            rightIndex = middleIndex -1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1
}
// console.log(binarySearch([2,3,4,5,6,7],6))
// console.log(binarySearch([2,3,4,5,6,7],10))
/* one while loop O(n) but in every iteration array size halfed
so Big o is O(log(n))*/