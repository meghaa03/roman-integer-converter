// const messages = require('./messages');
const messages = {
    invalidInputMessage: "Invalid input"
};

let numberRomanValueObject;

function initializeRomanNumeralMapping() {
    numberRomanValueObject = {
        1000: "m",
        900: "cm",
        500: "d",
        400: "cd",
        100: "c",
        90: "xc",
        50: "l",
        40: "xl",
        10: "x",
        9: "ix",
        5: "v",
        4: "iv",
        1: "i"
    }
}

function isNumericInputValid(numericInput) {
    
    if (numericInput <= 0) {
        return false;
    }

    if (typeof numericInput != "number") {
        return false;
    }

    return true;
}

function getRomanValue(numericInputValue) {
    
    if (isNumericInputValid(numericInputValue)) {
        initializeRomanNumeralMapping();
        //find greatest base, divide the number by base => quotient -> repeat the base that many times, remainder -> acts as the new input

        let output = "";

        let baseValue = getLargestBase(numericInputValue);
        while (baseValue != 0) {
            let noOfTimesForSymbol = numericInputValue / baseValue;
            for (let i = 1; i <= noOfTimesForSymbol; i++) {
                output += numberRomanValueObject[baseValue];
            }
            // console.log("base " + baseValue + " noOfTimesForSymbol " + noOfTimesForSymbol + " output " + output);
            numericInputValue %= baseValue;
            baseValue = getLargestBase(numericInputValue);
        }

        return output.toUpperCase();
    }
    else {
        return messages.invalidInputMessage;
    }

}


function getLargestBase(numericInput) {
    let baseValue = 0;

    for (let key of Object.keys(numberRomanValueObject).sort((a, b) => b - a)) {

        if (key > numericInput) {
            continue;
        }
        else {
            return key;
        }
    }
    return baseValue;
}

// module.exports.getRomanValue = getRomanValue;