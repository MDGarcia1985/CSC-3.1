function isPalindrome(word) {
  //If there are any spaces or capitol letters this will remove them and/or replace them.
    word = word.replace(/ /g, "").toLowerCase();
    /*
    Creates an If/Else function were it pulls from the id=word from the HTML file and splits the string into an array where each letter is it's own element.
    The .reverse then takes that array and reverses those elements (letters that form the word)
    The .join then takes those elements and joins them together into a single string again using the ("") to separate the elements
    If the original string and the re-made string are the same it will return "true". If it is not the same it will return "false"
    */
    if (word === word.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }
  //This function controles what the button "Check" does.
  function checkPalindrome() {
    let wordInput = document.getElementById("word");
    let resultDiv = document.getElementById("result");
    let word = wordInput.value;
    /*
    This refers to the <div id=result></div> line in the html and is an if/else funciton
    If the "isPalindrome" check function is "true"="It's a palindrome" message will appear below the form
    If the "isPalindrome" check function is "false"="It's not a palindrome" message will appear below the form
    */
    if (isPalindrome(word)) {
      resultDiv.innerHTML = "It's a palindrome!";
    } else {
      resultDiv.innerHTML = "It's not a palindrome.";
    }
    
    // Clear the input field-this clears the input field onces the "check" button is used and the resultDiv comes back
    wordInput.value = "";
  } 