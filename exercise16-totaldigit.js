function totalDigitRekursif(angka) {
    
    var angkaStr = angka.toString()
    var total = 0

    if (angkaStr.length > 1) {
        total += Number(angkaStr[0])
        angka = Number(angkaStr.substring(1))
    } else {
        return Number(angkaStr[0])
    }
    return total + totalDigitRekursif(angka)
}

// // TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
