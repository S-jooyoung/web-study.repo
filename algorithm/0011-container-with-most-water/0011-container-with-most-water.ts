function maxArea(heights: number[]): number {
    let left =  0
    let right = heights.length - 1
    let water = 0

    while(left <= right){
        const width  = right - left
        const height = heights[right] < heights[left] ? heights[right] : heights[left]
        water = Math.max(water, width * height)
        
        if(heights[right] > heights[left]){
            left += 1
        }else{
            right -= 1
        }
    }

    return water
};