let arr=[2,7,11,15];
function findTwosum(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]+arr[j]==num) {
                return `${arr[i]} ${arr[j]}`;
            }
        }
    }
}
console.log(findTwosum(arr,9));
