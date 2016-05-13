//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name){
  if(name === 'Tyler'){
  return true;}
  if(name !== 'Tyler'){
  return false;}
}
isTyler(name);

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
  var name = prompt("Whats your name", 'name');
  return name;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome(){

      alert("Welcome, " + getName());
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  // "Arguments are what parameters take in as values."


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // false, 0, undefined, null, NaN, ''



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(){
  return "Scott Harvey"
}



//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;


//Now alert the result of invoking newMyName
alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){
    return newMyName;
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = newMyName;

  innerFn();

//Now invoke innerFn.
