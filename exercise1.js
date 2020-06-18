// Exercise #1
function isPalindrome(palindrome) {

  //Convert the incoming string to lower case
  var lcString = palindrome.toLowerCase();

  //Take the lower case string and reverse the order
  var reverseString = lcString.split('').reverse().join('');

  //Compare the two strings
  return reverseString === lcString;

}
console.log(isPalindrome("baker"));
// Expected output is false
console.log(isPalindrome("kayak"));
// Expected out is true
