function longest(a, b) {
  return b.length - a.length;
}


function findLongestWord(str) {
  return str.split(' ').sort(longest)[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
