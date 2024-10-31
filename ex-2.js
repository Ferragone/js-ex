function shortestPath(grid, start, target) {
    const directions = [
      [0, 1],   // Right
      [1, 0],   // Down
      [0, -1],  // Left
      [-1, 0]   // Up
    ];
  
    const [startX, startY] = start;
    const [targetX, targetY] = target;
  
    if (grid[startX][startY] === 1 || grid[targetX][targetY] === 1) return -1;
  
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [[startX, startY, 0]]; // Stores [x, y, steps]
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[startX][startY] = true;
  
    while (queue.length > 0) {
      const [x, y, steps] = queue.shift();
  
      if (x === targetX && y === targetY) return steps;
  
      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
  
        if (
          newX >= 0 && newX < rows &&
          newY >= 0 && newY < cols &&
          grid[newX][newY] === 0 &&
          !visited[newX][newY]
        ) {
          visited[newX][newY] = true;
          queue.push([newX, newY, steps + 1]);
        }
      }
    }
  
    return -1; // Return -1 if there's no path to the target
  }
  
  // Example usage
  const grid = [
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0]
  ];
  
  const start = [0, 0];
  const target = [3, 3];
  
  console.log(shortestPath(grid, start, target)); // Expected output: shortest number of steps or -1 if no path exists
  