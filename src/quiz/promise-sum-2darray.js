function sumRow(row) {
    return new Promise(function (resolve) {
        var rowSum = 0;
        for (var _i = 0, row_1 = row; _i < row_1.length; _i++) {
            var num = row_1[_i];
            rowSum += num;
        }
        resolve(rowSum);
    });
}
function sum2D_Array(arr) {
    var rowSumPromises = arr.map(function (row) { return sumRow(row); });
    return Promise.all(rowSumPromises).then(function (rowSums) {
        var totalSum = rowSums.reduce(function (acc, rowSum) { return acc + rowSum; }, 0);
        return totalSum;
    });
}
var array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
sum2D_Array(array2D_1)
    .then(function (sum) {
    console.log("Total sum of array: ".concat(sum));
})
    .catch(function (error) {
    console.error('Error:', error);
});
