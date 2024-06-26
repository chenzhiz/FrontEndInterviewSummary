using namespace std;
#include <iostream>
#include <vector>

class Solution {
public:
    int maximalSquare(vector<vector<char>>& matrix) {
      int m = matrix.size(), n = matrix[0].size();
      vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
      int mx = 0;
      for(int i = 0; i < m; ++i){
        for(int j = 0; j < n; ++j){
          if(matrix[i][j] == '1'){
            dp[i + 1][j + 1] = min(min(dp[i][j + 1], dp[i + 1][j]), dp[i][j]) + 1;
            mx = max(mx, dp[i + 1][j + 1]);
          }
        }
      }
      return mx * mx;
    }
};

int main() {
    // 创建测试矩阵
    vector<vector<char>> matrix = {
        {'1', '0', '1', '0', '0'},
        {'1', '0', '1', '1', '1'},
        {'1', '1', '1', '1', '1'},
        {'1', '0', '0', '1', '0'}
    };

    // 创建Solution类的实例
    Solution solution;
    // 调用maximalSquare方法
    int maxSquareArea = solution.maximalSquare(matrix);
    // 打印结果
    cout << "Maximum square area: " << maxSquareArea << endl;

    return 0;
}