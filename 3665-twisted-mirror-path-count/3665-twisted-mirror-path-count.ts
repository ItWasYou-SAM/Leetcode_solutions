function uniquePaths(grid: number[][]): number {
    // [all_paths] vs [paths_from_down, paths_from_right]
    const dp: ([bigint] | [bigint, bigint])[][] = new Array(grid.length);

    for (let i = 0; i < dp.length; ++i) {
        dp[i] = new Array(grid[0].length);

        for (let j = 0; j < dp[0].length; ++j) {
            dp[i][j] = grid[i][j] ? [0n, 0n] : [0n];
        }
    }

    dp[0][0][0] = 1n;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (j) {
                if (dp[i][j].length === 1) {
                    //   x
                    // 0 0
                    if (dp[i][j - 1].length === 1) {
                        dp[i][j][0] += dp[i][j - 1][0];
                    //   x
                    // 1 0
                    } else {
                        dp[i][j][0] += dp[i][j - 1][0];
                    }
                } else {
                    //   x
                    // 0 1
                    if (dp[i][j - 1].length === 1) {
                        dp[i][j][1] += dp[i][j - 1][0];
                    //   x
                    // 1 1
                    } else {
                        dp[i][j][1] += dp[i][j - 1][0];
                    }
                }
            }

            if (i) {
                if (dp[i][j].length === 1) {
                    //   0
                    // x 0
                    if (dp[i - 1][j].length === 1) {
                        dp[i][j][0] += dp[i - 1][j][0];
                    //   1
                    // x 0
                    } else {
                        dp[i][j][0] += dp[i - 1][j][1];
                    }
                } else {
                    //   0
                    // x 1
                    if (dp[i - 1][j].length === 1) {
                        dp[i][j][0] += dp[i - 1][j][0];
                    //   1
                    // x 1
                    } else {
                        dp[i][j][0] += dp[i - 1][j][1];
                    }
                }
            }
        }
    }

    return Number(dp[dp.length - 1][dp[0].length - 1][0] % 1000000007n);
};