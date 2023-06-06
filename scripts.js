var count = function() {
  var chars = document.getElementById("word_input").value;
  var char_length = chars.length;
  var words = chars.split(/[nrs]+/g).filter(function(word) {
    return word.length > 0; 
  });
  document.getElementById("wordCount").innerHTML = words.length;
  document.getElementById("characterCount").innerHTML = char_length;
};

count();

window.addEventListener("input", function(event) {
  if (event.target.matches("#word_input")) {
    count();
  } else {
    return false; 
  }
});
