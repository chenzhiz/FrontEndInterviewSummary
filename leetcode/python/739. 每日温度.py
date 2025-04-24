class Solution(object):
    def dailyTemperatures(self, temperatures):
        """
        :type temperatures: List[int]
        :rtype: List[int]
        """
        ans = [0] * len(temperatures)
        stk = []
        for i, t in enumerate(temperatures):
            # 维护位置
            while stk and temperatures[stk[-1]] < t:
                j = stk.pop()
                ans[j] = i - j
            stk.append(i)
        return ans

    def dailyTemperatures(self, temperatures):
        n = len(temperatures)
        stk = []
        ans = [0] * n
        for i in range(n - 1, -1, -1):
            while stk and temperatures[stk[-1]] < temperatures[i]:
                stk.pop()
            if stk:
                ans[i] = stk[-1] - i
            stk.append(i)
        return ans


solution = Solution()
print(solution.dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
