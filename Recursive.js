function isPalindromeRecursive(word) {
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    if (word.length <= 1) {
      return true;
    }
  
    if (word[0] !== word[word.length - 1]) {
      return false;
    }
  
    return isPalindromeRecursive(word.slice(1, -1));
  }
  
  // Test cases
  console.log(isPalindromeRecursive("gag"));      // true
  console.log(isPalindromeRecursive("kayak"));    // true
  console.log(isPalindromeRecursive("php"));      // true
  console.log(isPalindromeRecursive("radar"));    // true
  console.log(isPalindromeRecursive("foot"));    // false
  