//function basiscs********************
var add = function add(x, y){
    var z = x + y;
    return z;
  }
  
  var sum = add (5, 7);
  alert(sum);
  
  
  //return******************************
  var add = function add(x, y){
    var z = x + y;
    return z;
  };
  
  var sum = add (5, 7);
  var sum2 = add (3,4);
  output.innerHTML = sum + ", " + sum2;
  
  
  //hoisting****************************
  var z = add (5, 7);
  var add = function add(x, y){
    return x + y;
  };
  
  output.innerHTML = z;
  
  //scope*******************************
  var constat = 32;
  
  function celsiusToFarenheit(temperature){
    var multiplier = 9;
    var divisor = 5;
    var farenheitTemp = temperature * multiplier / divisor + constat;
    return farenheitTemp
  }
  output.innerHTML = celsiusToFarenheit(100);
  
  //////////////////////////////////////////
  var x = 15;
  if(x <20)
  {
    var y = x;
  }
  
  var z = y;
  output.innerHTML = z;
  
  //nesting*****************************
  
  function hypothenuse(){
    var side1 = 3;
    var side2 = 4;
  
    function squareSide1()
    {return side1 * side1;}
  
    function squareSide2(){
      return side2 * side2;
    }
  
    return Math.sqrt(squareSide1() +squareSide2());
  
  }
  
  output.innerHTML = hypothenuse();
  
  ////////////////////////////////////////////////////////
  
  function hypothenuse(a,b){
  
    function square(x){
      return x*x;
    }
  
    return Math.sqrt(square(a) + square(b));
  
  }
  
  output.innerHTML = hypothenuse(3,4);
  
  //closure ******************************************
  
  var scope = "global";
  
  function testScope(){
    var scope = "local";
    function innerFunc(){return scope;}
    return innerFunc;
  }
  
  var answer = testScope()();
  output.innerHTML = answer;
  
  ////////////////////////////////////////////
  
  var x = 50;
  function someFunction(){
    var y = 100;
    return x + y;
  }
  
  var answer = someFunction();
  output.innerHTML = answer;
  
  //recursion *********************************
  function func1(num, exp){
    if (exp === 0)
    {
      return 1;
    }
    return num * func1 (num, exp -1 );
  }
  
  var anaswer = func1(4,3);
  output.innerHTML = anaswer;