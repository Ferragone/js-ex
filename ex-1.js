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

function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

function findMode(arr) {
    const frequency = {};
    let maxFreq = 0;
    let mode = [];

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    }

    for (let key in frequency) {
        if (frequency[key] === maxFreq) {
            mode.push(Number(key));
        }
    }

    if (mode.length === arr.length) {
        mode = []; // no mode if all numbers appear with the same frequency
    }

    return mode;
}

function countPrimeNumbers(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    let primeCount = 0;

    for (let num of arr) {
        if (isPrime(num)) {
            primeCount++;
        }
    }

    return primeCount;
}

function findRange(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return max - min;
}

function findStandardDeviation(arr) {
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    const variance = arr.reduce((sum, num) => sum + Math.pow(num - average, 2), 0) / arr.length;
    return Math.sqrt(variance);
}

function countPositivesAndNegatives(arr) {
    let positiveCount = 0;
    let negativeCount = 0;

    for (let num of arr) {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        }
    }

    return {
        positiveCount: positiveCount,
        negativeCount: negativeCount
    };
}

function sumOfSquares(arr) {
    return arr.reduce((sum, num) => sum + num * num, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(analyzeNumbers(numbers));
console.log("Median:", findMedian(numbers));
console.log("Mode:", findMode(numbers));
console.log("Prime Count:", countPrimeNumbers(numbers));
console.log("Range:", findRange(numbers));
console.log("Standard Deviation:", findStandardDeviation(numbers));
console.log("Positives and Negatives:", countPositivesAndNegatives(numbers));
console.log("Sum of Squares:", sumOfSquares(numbers));