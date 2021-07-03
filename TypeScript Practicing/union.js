"use strict";
function combine(input1, input2, resultType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //if (resultType === 'as-number'){
    //    return +result;
    // } else {
    //    return result.toString();
    // }
}
const combinedAge = combine(30, 26, 'as-number');
console.log(combinedAge);
const stringAge = combine('30', '26', 'as-number');
console.log(stringAge);
const combineName = combine('Max', 'Anna', 'as-text');
console.log(combineName);
//# sourceMappingURL=union.js.map