function digitPerkalianMinimum(angka) {
    var digitMin = angka.toString().length + 1;
    
    for(var i = 1; i <= angka; i++){
        var temp = digitMin;
        for(var j = 1; j <= angka; j++){
            if (i * j === angka){
                temp = (i.toString() + j.toString()).length
            }

            if (temp < digitMin){
                digitMin = temp
            }
        }
        

    }
    return digitMin
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2

// console.log(digitMin);

