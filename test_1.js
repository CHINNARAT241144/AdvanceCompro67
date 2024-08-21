function lengtOflongestSubstring(s) {
    let  check = "";
    let count = 0;
    var keep_str = "";
    let char = s.split('');
    let uniq_cha = [...new Set(char)];
    let uniq = uniq_cha.join('');
    if(s === ""){
        return `{ maxLen: 0, longestSubstring: "" }`
    } else if(s[1] == uniq){
        return `{ maxLen: ${uniq.length}, longestSubstring: "${uniq}" }`

    }
    
    else {
        for (let x of s){
            count = count+1;
            check = x;
            str_lenngth = s.length;
            if(count >= str_lenngth ){
                count = str_lenngth -1 ;
                check = "Y"
            }
            if(x === s[count]) {
                if (check == "Y" ){
                   break
                }
                else if(s[str_lenngth -2 ]== s[str_lenngth -1]){
                    break
                }
                
                else {
                    keep_str = "";
                }
            }
            else {
                keep_str = keep_str + x;
                continue
            }
        }
    }
    let charArray = keep_str.split('');
    let uniqueChars = [...new Set(charArray)];
    result = uniqueChars.join('');
    return `{ maxLen: ${result.length}, longestSubstring: "${result}" }`

}

console.log(lengtOflongestSubstring("abcabcbb"));
console.log(lengtOflongestSubstring("bbbbb"));
console.log(lengtOflongestSubstring("pwwkew"));
console.log(lengtOflongestSubstring(""));
