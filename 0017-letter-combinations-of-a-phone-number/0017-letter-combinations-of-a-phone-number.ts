const NUMBER_TO_STRING = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
}

function letterCombinations(digits: string): string[] {
    const result:string[] = []

    const dfs = (index: number, curString:string) => {
        if(curString.length === digits.length){
            result.push(curString)
            return
        }

        for (let char of NUMBER_TO_STRING[digits[index]]){
            dfs(index + 1, curString + char)
        }
    }

    if (digits && digits.length > 0) dfs(0, "")  

    return result
};