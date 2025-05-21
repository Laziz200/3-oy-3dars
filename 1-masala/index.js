let str="apple"
let str2="level"
function palindrom() {
    let low=str.toLocaleLowerCase();
    // console.log(low);
    let rev=low.split('').reverse().join('');
    // console.log(rev);
    return low===rev;
}


// console.log(palindrom(str2));
function palindrom2() {
    let low=str2.toLocaleLowerCase();
    // console.log(low);
    let rev=low.split('').reverse().join('');
    // console.log(rev);
    return low===rev;
}

console.log(palindrom(str));
console.log(palindrom2(str2));

