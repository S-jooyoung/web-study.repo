function generateParenthesis(n: number): string[] {
    let result:string[] = []

    const dfs = (s: string, left:number, right:number) => {
       if(s.length === n * 2) return result.push(s) 
       if(left < n) dfs(s + '(', left + 1, right)
       if(right < left) dfs(s + ')', left, right+1)
    }
    
    dfs('',0,0) 

    return result
};