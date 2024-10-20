function checkRowForNegative(row: number[]): Promise<boolean> {
    return new Promise((resolve) => {
        const hasNegative = row.some(num => num < 0);
        resolve(hasNegative);
    });
}

function findRowsWithNegatives(arr: number[][]): Promise<void> {
    const rowCheckPromises = arr.map(row => checkRowForNegative(row));
    
    return Promise.all(rowCheckPromises).then((results: boolean[]) => {
        results.forEach((hasNegative, index) => {
            if (hasNegative) {
                console.log(`Row ${index} contains a negative number:`, arr[index]);
            }
        });
    });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

findRowsWithNegatives(array2D_3)
    .then(() => {
        console.log('Completed checking rows for negatives.');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
