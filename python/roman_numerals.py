import sys

def to_roman(num):
    count = num
    answer = ""
    roman_numerals = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000,
    }

    for key, value in reversed(roman_numerals.items()):
        while count >= value:
            answer += key
            count -= value

    return f"{num} in Roman Numerals is {answer}"

def main():
    if len(sys.argv) != 2:
        print("Usage: python roman_numerals.py <number>")
        sys.exit(1)
    
    num = int(sys.argv[1])
    print(to_roman(num))

if __name__ == "__main__":
    main()