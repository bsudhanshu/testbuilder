// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber.length === 14 && cardNumber.substring(0, 2) === "38" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 14 && cardNumber.substring(0, 2) === "39" && /^\d+$/.test(cardNumber)) {
  	return "Diner's Club";
  } else if (cardNumber.length === 15 && cardNumber.substring(0, 2) === "34" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 15 && cardNumber.substring(0, 2) === "37" && /^\d+$/.test(cardNumber)) {
    return 'American Express';
  } else if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (cardNumber.substring(0, 4) === "4903" || cardNumber.substring(0, 4) === "4905" || cardNumber.substring(0, 4) === "4911" || cardNumber.substring(0, 4) === "4936" || cardNumber.substring(0, 6) === "564182" || cardNumber.substring(0, 6) === "633110" || cardNumber.substring(0, 4) === "6333" || cardNumber.substring(0, 4) === "6759") && /^\d+$/.test(cardNumber)) {
      return 'Switch';
  } else if (cardNumber.length === 13 && cardNumber.charAt(0) === "4" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 16 && cardNumber.charAt(0) === "4" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 19 && cardNumber.charAt(0) === "4" && /^\d+$/.test(cardNumber)) {
      return 'Visa';
  } else if (cardNumber.length === 16 && cardNumber.substring(0, 2) === "51" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 16 && cardNumber.substring(0, 2) === "52" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 16 && cardNumber.substring(0, 2) === "53" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 16 && cardNumber.substring(0, 2) === "54" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 16 && cardNumber.substring(0, 2) === "55" && /^\d+$/.test(cardNumber)) {
      return 'MasterCard';
  } else if (cardNumber.length === 16 && cardNumber.substring(0, 4) === "6011" && /^\d+$/.test(cardNumber) 
  	|| cardNumber.length === 19 && cardNumber.substring(0, 4) === "6011" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 16 && cardNumber.substring(0, 2) === "65" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 19 && cardNumber.substring(0, 2) === "65" && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 16 && (cardNumber.substring(0, 3) === "644" || cardNumber.substring(0, 3) === "645" || cardNumber.substring(0, 3) === "646" || cardNumber.substring(0, 3) === "647" || cardNumber.substring(0, 3) === "648" || cardNumber.substring(0, 3) === "649") && /^\d+$/.test(cardNumber)
  	|| cardNumber.length === 19 && (cardNumber.substring(0, 3) === "644" || cardNumber.substring(0, 3) === "645" || cardNumber.substring(0, 3) === "646" || cardNumber.substring(0, 3) === "647" || cardNumber.substring(0, 3) === "648" || cardNumber.substring(0, 3) === "649") && /^\d+$/.test(cardNumber)) {
      return 'Discover';
  } else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber.substring(0, 4) === "5018" || cardNumber.substring(0, 4) === "5020" || cardNumber.substring(0, 4) === "5038" || cardNumber.substring(0, 4) === "6304") && /^\d+$/.test(cardNumber)) {
      return 'Maestro';
  } else if ((cardNumber.length >= 16 && cardNumber.length <= 19) && ((cardNumber.substring(0, 6) <= 622925 && cardNumber.substring(0, 6) >= 622126) || (cardNumber.substring(0, 3) <= 626 && cardNumber.substring(0, 3) >= 624) || (cardNumber.substring(0, 4) <= 6288 && cardNumber.substring(0, 4) >= 6282)) && /^\d+$/.test(cardNumber)) {
      return 'China UnionPay';
  }
};


