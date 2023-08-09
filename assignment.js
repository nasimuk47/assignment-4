// problem1------------------------
function cubeNumber(number) {
    if (typeof number === "number") {
        result = number ** 3;
        return result;
    } else {
        if (typeof number !== "number") {
            return "please provide a number";
        }
    }
}

const cubeResult = cubeNumber(4);

console.log(cubeResult);

// problem2------------------------------

function matchFinder(String1, String2) {
    if (typeof String1 !== "string" || typeof String2 !== "string") {
        return "please provide me a strings ";
    }

    String1 = String1.toLowerCase();
    String2 = String2.toLowerCase();

    if (String1.includes(String2)) {
        return true;
    } else {
        return false;
    }
}
const stringname = matchFinder("Peter Parker", "Pen");

console.log(stringname);

// problem3--------------------------------------

function sortMaker(arr) {
    if (arr.length !== 2) {
        return "please give me two numbers";
    }

    if (arr[0] === arr[1]) {
        return "equal";
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || arr[i] < 0) {
            return "Invalid Input";
        }
    }

    return arr.sort((a, b) => b - a);
}

const dataList = sortMaker([4, -2]);

console.log(dataList);

// problem4------------------

function findAddress(obj) {
    const properties = ["street", "house", "society"];
    let output = [];

    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];

        if (obj.hasOwnProperty(property)) {
            output.push(obj[property]);
        } else {
            output.push("__");
        }
    }

    return output.join(",");
}

const address = findAddress({ street: 10 });
console.log(address);

// problem5----------------------------------

function canPay(arry, number) {
    if (arry.length === 0) {
        return "The array is empty";
    }

    let total = 0;
    for (let i = 0; i < arry.length; i++) {
        total += arry[i];
    }

    return total >= number;
}

const budget = canPay([1, 5, 5], 10);
console.log(budget);
