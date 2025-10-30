const isPowerOfTwo = (number) => {
  if((number&1)===0)
	    return true;
else if(number<=0){
	    return false;
 }
  else
	  return false;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
