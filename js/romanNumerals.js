exports.toRoman = function(inputNum) {
    // create an OUTPUT_STRING set to ""
    let outputString = [];
    let num = inputNum
    let smallerNumber = ''
    // create an LAZY_ROMAN_NUMERAL object
    let lazyRomanNumeral = {
        'M' : 1000,
        'CM' : 900,
        'D' : 500,
        "CD" : 400,
        'C' : 100,
        "XC" : 90,
        'L' : 50,
        "XL" : 40, 
        'X' : 10,
        "IX" : 9,
        'V' : 5,
        "IV" : 4,
        'I' : 1,
    }
    
    for (let [key, value] of Object.entries(lazyRomanNumeral)) {
        if (num === value) {
            outputString += key;
            num = num - value
        }
        else {
            while (num >= value) {
                outputString += key
                num = num - value
                }
            }
        }
    console.log(outputString)
    return outputString
};
