function isPalindrome(x: number): boolean {
    return String(x) === String(x).split("").reverse().join("") ? true : false
};