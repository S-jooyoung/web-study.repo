function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedSortedNums = [...nums1, ...nums2].sort((a,b)=> a - b)
    const mergedSortedNumsLength = mergedSortedNums.length
    let median = 0

    if (mergedSortedNumsLength % 2 === 0){
        median = (mergedSortedNums[mergedSortedNumsLength / 2] + mergedSortedNums[mergedSortedNumsLength / 2 - 1]) / 2
    }else{
        median = mergedSortedNums[(mergedSortedNumsLength - 1) / 2]
    }

    
    return median
};