function isPalindrome(word) {
    word = word.replace(/ /g, "").toLowerCase();
    if (word === word.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkPalindrome() {
    let wordInput = document.getElementById("word");
    let resultDiv = document.getElementById("result");
    let word = wordInput.value;
    
    if (isPalindrome(word)) {
      resultDiv.innerHTML = "It's a palindrome!";
    } else {
      resultDiv.innerHTML = "It's not a palindrome.";
    }
    
    // Clear the input field
    wordInput.value = "";
  }
  