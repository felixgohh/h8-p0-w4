function changeMe(arr) {
    // you can only write your code here!
    var object = {
        firstName:"",
        lastName:"",
        gender:"",
    };
    
    for (var i = 0; i < arr.length; i++){
            
        object.firstName = arr[i][0];
        object.lastName = arr[i][1];
        object.gender = arr[i][2];

        var umur = 2018 - arr[i][3]

        if (arr[i][3] === undefined){
            object["age"] = 'Invalid Birth Year'
        }
        else {
            object["age"] = umur
        }
        console.log(i+1+'. '+object.firstName+' '+object.lastName+':');
        
        console.log(object)
    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""