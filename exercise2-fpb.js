function fpb(angka1, angka2) {
    var fpb = 0;
    var limit = 0;

    if (angka1 > angka2) {
        limit = angka1
    } else {
        limit = angka2
    }

    for (var i = 1; i < limit; i++){
        if (angka1 % i === 0 && angka2 % i === 0){
            fpb = i
        }
    } return fpb
  }

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1