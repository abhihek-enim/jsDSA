function isPalindrome(str, start = 0, end = str.length - 1) {
  // Base case: If the indices have crossed or met, it's a palindrome
  if (start >= end) return true;

  // Check if the characters at the current indices are not equal
  if (str[start] !== str[end]) {
    return false;
  }

  // Recursive case: Check the inner substring
  return isPalindrome(str, start + 1, end - 1);
}

// Example usage
let str = "A man, a plan, a canal: Panama";
str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
console.log(str);
console.log(isPalindrome(str));
