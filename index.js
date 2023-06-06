function floodFill(r, c, replacement, image) {
  let rows = image.length - 1;
  let cols = image[0].length - 1;

  function dfs(r, c, currValue) {
    if (r < 0 || c < 0 || r > rows || c > cols || image[r][c] !== currValue)
      return;

    image[r][c] = replacement;

    dfs(r - 1, c, currValues); // up
    dfs(r + 1, c, currValue); // down
    dfs(r, c - 1, currValue); // left
    dfs(r, c + 1, currValue); // right
  }

  dfs(r, c, image[r][c]);
  return image;
}

let r = 2;
let c = 2;
let replacement = 9;
let arr = [
  [0, 1, 3, 4, 1],
  [3, 8, 8, 3, 3],
  [6, 7, 8, 8, 3],
  [12, 2, 8, 9, 1],
  [12, 3, 1, 3, 2],
];

console.log(floodFill(r, c, replacement, arr));
