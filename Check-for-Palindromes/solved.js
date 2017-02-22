function palindrome(str) {
  var reg = /[\W_]/g;
  var strToLower = str.toLowerCase().replace(reg, '');
  var reversedStr = strToLower.split('').reverse().join(''); 
  return reversedStr === strToLower;
}
palindrome("A man, a plan, a canal. Panama");