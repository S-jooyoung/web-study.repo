const ROMAN_TO_NUMBER:Record<string, number> = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
}

function romanToInt(s: string): number {
   const sList = s.split("")
   let result = 0;
   let index = 0;

   while(index < sList.length){
       if(ROMAN_TO_NUMBER[sList[index]] < ROMAN_TO_NUMBER[sList[index+1]]){
           result += ROMAN_TO_NUMBER[sList[index+1]] - ROMAN_TO_NUMBER[sList[index]]
           index++
       }else{
           result += ROMAN_TO_NUMBER[sList[index]]
       }
       index++
   }

   return result
};