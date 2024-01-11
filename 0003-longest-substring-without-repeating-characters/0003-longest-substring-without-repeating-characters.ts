function lengthOfLongestSubstring(s: string): number {
  let longest:number = 0

  for (let i = 0; i < s.length; i++) {

    let temp:string[] = []

    for (let j = i; j < s.length; j++) {
      if (temp.includes(s[j])) {
        break;
      }
      
      temp.push(s[j]);
    }

    longest = Math.max(longest, temp.length)
  }

  return longest
}
