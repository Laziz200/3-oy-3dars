let str1="listen";
let str2="silent";
function isAnagram() {
    if (str1.length==str2.length) {
        for (let i = 0; i < str1.length; i++) {
            if (!str2.includes(str1[i])) {
                return false
            }
        }
        return true
    }
    else{
        return false
    }
}
console.log(isAnagram(str1));
