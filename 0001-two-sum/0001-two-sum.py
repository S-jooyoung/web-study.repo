class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_dict = {}

        for i, num in enumerate(nums):
            nums_dict[num] = i

        for i, num in enumerate(nums):
            second_num = target - num
            
            if second_num in nums_dict and i != nums_dict[second_num]:
                return [i, nums_dict[second_num]]

            