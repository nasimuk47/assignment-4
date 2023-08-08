// problem1------------------------
// function cubeNumber(number) {
//     if (typeof number === "number") {
//         result = number ** 3;
//         return result;
//     } else {
//         if (typeof number !== "number") {
//             return "please provide a number";
//         }
//     }
// }

// console.log(cubeNumber(3));

// console.log(cubeNumber("jamud"));

// problem2------------------------------

// function matchFinder(String1, String2) {
//     if (typeof String1 !== "string" || typeof String2 !== "string") {
//         return "please provide me a strings ";
//     }

//     String1 = String1.toLowerCase();
//     String2 = String2.toLowerCase();

//     if (String1.includes(String2)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(matchFinder("Bangladesh", "Desh"));

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
//
// Sample inputs
console.log(sortMaker([4, -2]));
