function myAtoi(s: string): number  {
    let parse_str = ""
    let result = 0
    const maxNumber = Math.pow(2,31) - 1
    const minNumber = Math.pow(-2,31)

    for(let i=0; i<s.length; i++){
        parse_str += s[i]
    }

    result = parseInt(parse_str) ? parseInt(parse_str) : 0

    if(result > maxNumber){
        return maxNumber
    }else if(result < minNumber){
        return minNumber
    }else{
        return result
    }
};