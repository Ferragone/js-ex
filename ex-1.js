function analyzeNumbers(arr) {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num;

        if (num < min) {
            min = num;
        }

        if (num > max) {
            max = num;
        }

        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let average = sum / arr.length;

    return {
        sum: sum,
        average: average,
        min: min,
        max: max,
        evenCount: evenCount,
        oddCount: oddCount
    };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(analyzeNumbers(numbers));
