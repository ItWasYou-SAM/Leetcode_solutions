function countServers(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;

    const row: number[] = new Array(m).fill(0);
    const col: number[] = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                row[i]++;
                col[j]++;
            }
        }
    }

    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                if (row[i] > 1 || col[j] > 1) {
                    count++;
                }
            }
        }
    }

    return count;
};