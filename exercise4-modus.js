function cariModus(arr) {
    var numberMax = 0;
    var simpan = 0;
    var simpanMax = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                simpan += 1;
            }
        }
        if (simpanMax < simpan) {
            simpanMax = simpan
            numberMax = arr[i]
        }
        simpan = 0;

    }
    if (simpanMax === arr.length || simpanMax === 1) {
        numberMax = -1
    }
    return numberMax
}



// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1