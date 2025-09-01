function convertToBase10(valueStr, base) {
    let result = 0n;
    let power = 1n;
    const reversedValue = valueStr.split('').reverse().join('');
    for (let i = 0; i < reversedValue.length; i++) {
        let digit = reversedValue[i];
        let digitValue;
        if (digit >= '0' && digit <= '9') {
            digitValue = BigInt(digit);
        } else if (digit >= 'a' && digit <= 'f') {
            digitValue = BigInt(digit.charCodeAt(0) - 'a'.charCodeAt(0) + 10);
        } else {
            throw new Error(`Invalid digit '${digit}' for base ${base}`);
        }
        if (digitValue >= BigInt(base)) {
            throw new Error(`Digit '${digit}' is not valid for base ${base}`);
        }
        result += digitValue * power;
        power *= BigInt(base);
    }
    return result;
}

function solveProblem(jsonData) {
    try {
        const k = Number(jsonData.keys.k);
        let productOfRoots = 1n;
        for (let i = 1; i <= k; i++) {
            const rootData = jsonData[String(i)];
            if (rootData) {
                const base = Number(rootData.base);
                const value = rootData.value;
                const decimalValue = convertToBase10(value, base);
                productOfRoots *= decimalValue;
            }
        }
        let constantC = (k % 2 === 0) ? productOfRoots : -productOfRoots;
        console.log(`The calculated constant 'c' is: ${constantC}`);
        return constantC;
    } catch (error) {
        console.error("An error occurred:", error.message);
        return null;
    }
}

const testCase1 = {
    "keys": { "n": 4, "k": 3 },
    "1": { "base": "10", "value": "4" },
    "2": { "base": "2", "value": "111" },
    "3": { "base": "10", "value": "12" },
    "6": { "base": "4", "value": "213" }
};

const testCase2 = {
    "keys": { "n": 10, "k": 7 },
    "1": { "base": "6", "value": "13444211440455345511" },
    "2": { "base": "15", "value": "aed7015a346d635" },
    "3": { "base": "15", "value": "6aeeb69631c227c" },
    "4": { "base": "16", "value": "e1b5e05623d881f" },
    "5": { "base": "8", "value": "316034514573652620673" },
    "6": { "base": "3", "value": "2122212201122002221120200210011020220200" },
    "7": { "base": "3", "value": "20120221122211000100210021102001201112121" },
    "8": { "base": "6", "value": "20220554335330240002224253" },
    "9": { "base": "12", "value": "45153788322a1255483" },
    "10": { "base": "7", "value": "1101613130313526312514143" }
};

console.log("Solving Sample Test Case 1:");
solveProblem(testCase1);

console.log("\nSolving Sample Test Case 2:");
solveProblem(testCase2);
