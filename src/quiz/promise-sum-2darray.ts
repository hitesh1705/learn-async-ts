function sumRow(row: number[]): Promise<number> {
    return new Promise((resolve) => {
        let rowSum = 0;
        for (let num of row) {
            rowSum += num;
        }
        resolve(rowSum);
    });
}

function sum2D_Array(arr: number[][]): Promise<number> {
    const rowSumPromises = arr.map(row => sumRow(row));
    
    return Promise.all(rowSumPromises).then((rowSums: number[]) => {
        const totalSum = rowSums.reduce((acc, rowSum) => acc + rowSum, 0);
        return totalSum;
    });
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2D_Array(array2D_1)
    .then((sum) => {
        console.log(`Total sum of array: ${sum}`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });