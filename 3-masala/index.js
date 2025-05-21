let arr=[1,2,3,4];
function reverseIndex(arr,index1,index2) {
    let temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
    return arr;
}
console.log(reverseIndex(arr,1,2));
