function lengthOfLongestSubstring(characters: string): number {
    let length = 0

    let characterMap = new Map()

    let leftIndex = 0

    for (let rightIndex = 0; rightIndex < characters.length; rightIndex++){
        const character = characters[rightIndex]

        if (characterMap.has(character) && characterMap.get(character) >= leftIndex){
            leftIndex = characterMap.get(character) + 1
        }

        length = Math.max(length, rightIndex - leftIndex + 1)

        characterMap.set(character, rightIndex)
    }

    return length
}

