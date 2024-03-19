const palindromes = function (string) {
    let isPalindrome = true;

    let newString = string.replace(/[\p{P}$+<=>^`|~]/gu, '')
    const len = newString.length;

    for(let i = 0; i < len / 2; i++) {
        if(newString[i] !== newString[len - i - 1]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
