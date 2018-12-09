function changeVocals(str) {
    var result = ''

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            result += 'b'
        }
        else if (str[i] === 'i') {
            result += 'j'
        }
        else if (str[i] === 'u') {
            result += 'v'
        }
        else if (str[i] === 'e') {
            result += 'f'
        }
        else if (str[i] === 'o') {
            result += 'p'
        }
        else if (str[i] === 'A') {
            result += 'B'
        }
        else if (str[i] === 'I') {
            result += 'J'
        }
        else if (str[i] === 'U') {
            result += 'V'
        }
        else if (str[i] === 'E') {
            result += 'F'
        }
        else if (str[i] === 'O') {
            result += 'P'
        }
        else {
            result += str[i]
        }
    }
    return result
}

function reverseWord(str) {
    var result = ''
    for (var j = str.length - 1; j >= 0; j--) {
        result += str[j]
    }
    return result
}

function setLowerUpperCase(str) {
    var result = ''
    for (var k = 0; k < str.length; k++) {
        if (str[k] === str[k].toUpperCase()) {
            result += str[k].toLowerCase()
        }
        else if (str[k] === str[k].toLowerCase()) {
            result += str[k].toUpperCase()
        }
    }
    return result
}

function removeSpaces(str) {
    var result = ''
    for (var l = 0; l < str.length; l++) {
        if (str[l] !== ' ') {
            result += str[l]
        }
    }
    return result
}

function passwordGenerator(name) {
    var vocalized = changeVocals(name)
    var reverse = reverseWord(vocalized)
    var upperLower = setLowerUpperCase(reverse)
    var spaces = removeSpaces(upperLower)

    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return spaces
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
