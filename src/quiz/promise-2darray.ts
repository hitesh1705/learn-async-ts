function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            console.log('Rejecting empty array');
            reject('Cannot sum an empty array');
            return;
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArray(array2D)
    .then(sum => console.log('Sum of array2D:', sum))
    .catch(error => console.error(error));

sum2DArray([])
    .then(sum => console.log('Sum of empty array:', sum))
    .catch(error => console.error('Error:', error));

console.log('After sumPromise calls...');
