matrix = [
    [1, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1],
]
 
let count = 0
for (i in matrix) {
    for (j in matrix[i]) {
        n = Number(j)
        if ((matrix[i][n] * matrix[i][n + 1]) == 1) count++
    }
}
console.log(count);
 