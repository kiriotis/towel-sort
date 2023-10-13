
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  console.log(matrix);
    if (matrix === undefined) {
        return [];
    }
    for (let i = 0; matrix.length > i; i++) {
        for (let j = 0; matrix[i].length > j; j++) {
            if (i % 2 === 0) {
                arr.push(matrix[i][j]);
            } else if (i % 2 === 1) {
                arr.push(matrix[i][matrix[i].length - j - 1]);
            }
        }
    }
    return arr;
}
