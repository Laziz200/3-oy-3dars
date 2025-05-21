function longestUniqueSubstring(str) {
    let seen = new Map(); 
    let maxLength = 0; 
    let start = 0; 
    let maxSubstring = ""; 

    for (let end = 0; end < str.length; end++) {
        if (seen.has(str[end]) && seen.get(str[end]) >= start) {
            start = seen.get(str[end]) + 1; 
        } else {
            if (end - start + 1 > maxLength) {
                maxLength = end - start + 1;
                maxSubstring = str.slice(start, end + 1);
            }
        }
        seen.set(str[end], end); 
    }

    return maxSubstring;
}

console.log(longestUniqueSubstring("abcabcbb")); 
console.log(longestUniqueSubstring("bbbbb"));
