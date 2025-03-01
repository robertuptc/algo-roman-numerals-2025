exports.toRoman = function(inputNum) {
    // create an OUTPUT_STRING set to ""
    let outputString = '';
    let num = inputNum

    // create an LAZY_ROMAN_NUMERAL object
    let lazyRomanNumeral = {
        'M' : 1000,
        'D' : 500,
        'C' : 100,
        'L' : 50,
        'X' : 10,
        'V' : 5,
        'I' : 1,
    }
    
    for (let [key, value] of Object.entries(lazyRomanNumeral)) {
            while (num >= value) {
                outputString += key
                num = num - value
            }
        }
    return outputString
};
