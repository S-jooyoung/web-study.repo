function intToRoman(num: number): string {
    const ROMAN_NUMBERS = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    }
    const ROMAN_ARRAY = Object.keys(ROMAN_NUMBERS).reverse()
    let result = ""
    
    for(let i=0; i<ROMAN_ARRAY.length; i++){
        const target = Math.floor(num / Number(ROMAN_ARRAY[i]))
        
        if(target){
            num = num - Number(ROMAN_ARRAY[i]) * target
            result += ROMAN_NUMBERS[Number(ROMAN_ARRAY[i])].repeat(target)
        }
        
    }
    
    return result
};