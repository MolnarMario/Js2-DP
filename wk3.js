//Objects*********************************
var dog = {
    name: "Charlie",
    breed: "Mix",
    weight: 12,
    color: "Brown"
  };
  
  var dogWeight = dog.weight;
  alert(dogWeight);
  
  dog.disposition = "wonderful";
  
  var disp = dog.disposition;
  //alert(disp);
  
  var height = dog.height;
  //alert(height);
  
  dog.weight = 15;
  
  var dogWeight2 = dog.weight;
  alert(dogWeight2);
  
  
  
  //Arrays *******************************
  var empty = [];
  empty[0] = 1;
  empty[1] = 2;
  
  //alert(empty);
  
  var primes = [1,2,3,5,7,11];
  var thridPrime = primes[2];
  //alert(thridPrime);
  
  var myArray = [1, "hello", false];
  var truth = myArray[2];
  //alert(truth);
  
  var myArrayLength = myArray.length;
  //alert(myArrayLength);
  
  function range(max){
    var retVal = [];
    for (var i = 0; i < max; i++)
    {
      retVal[i] = i * 2;
    }
    return retVal;
  }
  alert(range(5));
  
  
  
  
  //Arrays Part 2**************************
  function range(max){
    var retVal = [];
    for (var i = 0; i < max; i++)
    {
      retVal.push(i * 2);
    }
    return retVal;
  }
  
  var myArray = range(5);
  for (var i = 0; i< myArray.length; i++){
    alert(myArray[i]);
  }
  
  
  
  //Strings *******************************
  var string1 = "the \n quick \n'fox'";
  var string2 = "the quick \"fox\"";
  var string3 = 'the brown "dog"';
  alert(string2);
  
  
  
  //Strings Part 2 ************************
  var string1 = "The quick brown fox jumps over the \"lazy\" dog";
  var string2 = " and lived happily ever after.";
  
  var newString = string1 + string2;
  //alert(newString);
  
  var myArray = newString.split(" ");
  //alert(myArray);
  
  var indexOfBrown = newString.indexOf("brown");
  var indexOfJumps = newString.indexOf("jump");
  var myFox = newString.slice(indexOfBrown, indexOfJumps)
  alert(myFox);
  
  
  
  //Regular Expressions ********************
  //var myString = "The quick brown fox jumps over the lazy dog";
  //var offset = myString.search(/\b[a-z]{5}\b/)
  //alert(offset);
  
  var myString = "my zip code is 01720-1234 what's yours?";
  var offset = myString.search(/\b[0-9]{5}(?:-[0-9]{4})?\b/);
  alert(offset);