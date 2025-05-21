let arr=[1,-2,3,-4,5];
function sumPositivesAndNegatives(arr) {
    let negative=0;
    let positive=0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i]=='number') {
            
            if (arr[i]<0) {
                negative+=arr[i];
            }
            else{
                positive+=arr[i];
            }
        }
    }
    return {positive,negative};
}
console.log(sumPositivesAndNegatives(arr));
