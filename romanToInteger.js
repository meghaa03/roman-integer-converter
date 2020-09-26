
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

function getNumeralValue(romanInput) {

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