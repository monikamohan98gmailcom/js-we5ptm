//addition function perfomes add between 2 numbers
function addition(a,b)
{
  return a+b
}

//subtraction function  subtract 2 numbers
function subtraction(a,b){
  return a-b
}

var add=addition(10,45)
console.log("addition result: "+add) //output=55
var sub=subtraction(5,11)
console.log("subtraction result: "+sub) //output==-6
//division operation is ised
const div=(a,b)=>(a/b);
const division =div(30,5);
console.log("Division result is "+division) //output=6
var mod=new Function('a','b','return a%b'); //new function is created and mod operation is done
var modulus=mod(30,4);
console.log('modulus result is '+modulus) //output=2
//power operation is ised
const pow=(a,b)=>(a**b);
const power =pow(30,5);
console.log("power result is "+power) //output= 24300000

//COMPARES THE two strings
function comstr(a,b){
 return(a===b?true:false)
}

var compareString=comstr('monika','MONIKA')
console.log("comparing two strings: "+compareString) //output=false

//compares two numbers
function comstr(a,b){
 return(a===b?true:false)
}

var compareString=comstr(12,12)
console.log("comparing two numbers: "+compareString) //output=true

//comparing two compareValues
function comval(a,b){
  return(typeof(a)===typeof(b)&&a==b?true:false)
}
var compareValues=comval('moni',3)
console.log("comparing values: "+compareValues)  //output=false


//----------------------------------------
//gradefinder
function grfind(a){
  if(a>=90 && a<=100) return 'O'
  else if(a>=80 && a<90) return "A"
  else if(a>=70 && a<80) return "B"
  else if(a>=60 && a<50) return 'C'
  else if(a>=50 && a<60) return "D"
  else return "F"
}

var gradeFinder=grfind(30)
console.log("gradeFinder for the student is "+gradeFinder) //output=F
//checking vowels
function chvow(a){
  var splitting=a.split('')
  for(var x of splitting)
  {
    if(x.match(/[aeiou]/gi))
    {
      console.log(x)
    }
  }

}

const checkVowel =chvow("monika");
//console.log("CheckVowels result is "+checkVowel)

//prime number finding
function primeNum(a){
  for(var i=2;i<=a/2;i++)
  {
    if(a/i==0) {console.log('not a prime no');
    break;}
  }
console.log('prime number')
}

const primeNo=primeNum(11)
