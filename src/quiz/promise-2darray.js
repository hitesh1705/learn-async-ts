function sum2DArray(arr) {
    return new Promise(function (resolve, reject) {
        console.log('Sum called ... ');
        if (arr.length === 0) {
            console.log('Rejecting empty array');
            reject('Cannot sum an empty array');
            return;
        }
        setTimeout(function () {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].length; j++) {
                    console.log("Adding ".concat(arr[i][j], " to sum"));
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}
// Example usage:
var array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
sum2DArray(array2D)
    .then(function (sum) { return console.log('Sum of array2D:', sum); })
    .catch(function (error) { return console.error(error); });
sum2DArray([])
    .then(function (sum) { return console.log('Sum of empty array:', sum); })
    .catch(function (error) { return console.error('Error:', error); });
console.log('After sumPromise calls...');
