// ----------------------------------------------------------------
// Problem 1. convert radian to degree
// ----------------------------------------------------------------
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'please give a number';
    }
    else {
        return (radian * 180 / Math.PI).toFixed(2);
    }
}
// -----------------------------------------------------------------
// Problem 2. check whether the given file name is a javascript file or not
// -----------------------------------------------------------------
function isJavaScriptFile(fileStringName) {
    if (typeof fileStringName !== 'string') {
        return 'please give a string';
    }
    else {
        if (fileStringName.endsWith('.js')) {
            return true;
        }
        else {
            return false;
        }
    }
}
// -------------------------------------------------------------------
// Problem 3. calculate the total oil price that I have to pay
// -------------------------------------------------------------------
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (typeof dieselQuantity !== 'number') {
        return 'Please give Diesel quantity number';
    }
    else if (typeof petrolQuantity !== 'number') {
        return 'Please give Petrol quantity number';
    }
    else if (typeof octaneQuantity !== 'number') {
        return 'Please give Octane quantity number';
    }
    else {
        return 114 * dieselQuantity + 130 * petrolQuantity + 135 * octaneQuantity;
    }
}
// --------------------------------------------------------------------
// Problem 4: publicBusFare
// --------------------------------------------------------------------
function publicBusFare(quantity) {
    if (typeof quantity !== 'number') {
        return 'Please give a number';
    }
    else {
        const remainingAfterBus = quantity % 50;
        const remainingAfterMicrobus = remainingAfterBus % 11;
        return remainingAfterMicrobus * 250;
    }
}
// --------------------------------------------------------------------
// Problem 5: isBestFriend
// --------------------------------------------------------------------
function isBestFriend(object1, object2) {
    if (typeof object1 !== 'object') {
        return 'Please give an Object on first parameter';
    }
    else if (typeof object2 !== 'object') {
        return 'Please give an Object on second parameter';
    }
    else {
        if (object1.name === object2.friend && object1.friend === object2.name) {
            return true;
        }
        else {
            return false;
        }
    }
}





console.log(radianToDegree(10));

console.log(isJavaScriptFile('app.js'));

console.log(oilPrice(30, 20, 10));

console.log(publicBusFare(55));

console.log(isBestFriend(
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" }
));