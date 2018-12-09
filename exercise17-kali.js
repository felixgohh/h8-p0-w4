function kaliTerusRekursif(angka) {
    var angkaStr = angka.toString()

    if (angkaStr.length > 1) {
        var hasilKali = 1

        for (var i = 0; i < angkaStr.length; i++) {
            hasilKali *= Number(angkaStr[i])
        }
        return kaliTerusRekursif(hasilKali)
    } else {
        return angka
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6