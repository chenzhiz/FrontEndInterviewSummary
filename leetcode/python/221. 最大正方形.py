class Solution(object):
    def maximalSquare(self, matrix):
        """
        :type matrix: List[List[str]]
        :rtype: int
        """
        ans = [[int(value) for value in row] for row in matrix]

        maxLen = 0
        for i, r in enumerate(matrix):
            for j, c in enumerate(r):
                if ans[i][j] != 0:
                    maxLen = max(maxLen, 1)
                    if i - 1 >= 0 and j - 1 >= 0:
                        ans[i][j] = (
                            min(
                                ans[i - 1][j - 1],
                                ans[i][j - 1],
                                ans[i - 1][j],
                            )
                            + 1
                        )
                        maxLen = max(maxLen, ans[i][j])
        return maxLen * maxLen


solution = Solution()

print(
    solution.maximalSquare(
        [
            ["1", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"],
        ]
    )
)
