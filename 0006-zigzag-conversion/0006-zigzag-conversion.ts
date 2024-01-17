function convert(s: string, numRows: number): string {
    if (s.length <= numRows || numRows < 2) return s

    let conversion_list = Array(numRows).fill("")
    const cycle = (numRows - 1) * 2

    for (let i=0; i<s.length; i++){
        const position = i % cycle
        
        if(position >= numRows){
            conversion_list[cycle - position] += s[i] 
        }else{
            conversion_list[position] += s[i]
        }
    }

    return conversion_list.join("")
};