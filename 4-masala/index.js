let str="javascript";
function letterFrequacy(str) {
    let obj={};
    for (let harf of str) {
        obj[harf]=(obj[harf] ||0)+1;
    }
    return obj;
}
console.log(letterFrequacy(str));
