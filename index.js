
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

export function getRomanValue(numericInputValue) {
    
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


const messages1 = {
    invalidInputMessage: "Invalid input"
};

let romanNumericValueObject;

function initializeDict() {
    romanNumericValueObject = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    }
}

function getRomanNumericValue(romanChar) {
    return romanNumericValueObject[romanChar];
}

function isInputValid(romanInput) {

    if (!romanInput || romanInput == "" || typeof romanInput !== "string") {
        return false;
    }
    return true;
}

export function getNumeralValue(romanInput) {

    if (isInputValid(romanInput)) {

        initializeDict();

        let result = 0;
        let i, j;

        for (i = 0, j = 1; i < (romanInput.length - 1) && j < (romanInput.length); i++, j++) {

            if (!getRomanNumericValue(romanInput.charAt(i))) {
                return messages1.invalidInputMessage;
            }
            if (getRomanNumericValue(romanInput.charAt(i)) < getRomanNumericValue(romanInput.charAt(j))) {
                result -= getRomanNumericValue(romanInput.charAt(i));
            }
            else {
                result += getRomanNumericValue(romanInput.charAt(i));
            }
        }

        const lastRomanDigitValue = getRomanNumericValue(romanInput.charAt(romanInput.length - 1));

        if (lastRomanDigitValue) {
            return result + lastRomanDigitValue;
        }
        else {
            return messages1.invalidInputMessage;
        }

    }

    return -1;
}

// module.exports.getNumeralValue = getNumeralValue;

// module.exports.getRomanValue = getRomanValue;