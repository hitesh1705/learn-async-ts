async function sumRow(row: number[]): Promise<number> {
    let rowSum = 0;
    for (let num of row) {
        rowSum += num;
    }
    return rowSum;
}

async function sum2D_Array(arr: number[][]): Promise<number> {
    let totalSum = 0;
    for (const row of arr) {
        const rowSum = await sumRow(row);
        totalSum += rowSum;
    }
    return totalSum;
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function sumArr(): Promise<void> {
    try {
        const totalSum = await sum2D_Array(array2D_1);
        console.log(`Total sum of array: ${totalSum}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

sumArr();
