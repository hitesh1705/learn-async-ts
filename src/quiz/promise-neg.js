function checkRowForNegative(row) {
    return new Promise(function (resolve) {
        var hasNegative = row.some(function (num) { return num < 0; });
        resolve(hasNegative);
    });
}
function findRowsWithNegatives(arr) {
    var rowCheckPromises = arr.map(function (row) { return checkRowForNegative(row); });
    return Promise.all(rowCheckPromises).then(function (results) {
        results.forEach(function (hasNegative, index) {
            if (hasNegative) {
                console.log("Row ".concat(index, " contains a negative number:"), arr[index]);
            }
        });
    });
}
var array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
findRowsWithNegatives(array2D_3)
    .then(function () {
    console.log('Completed checking rows for negatives.');
})
    .catch(function (error) {
    console.error('Error:', error);
});
