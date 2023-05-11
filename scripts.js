var target = document.querySelector("wordcount");
var wordCount = document.querySelector("wordCount");
var charCount = document.querySelector("characterCount");
var count = function() {
  var chars = target.value;
  var char_length = chars.length;
  var words = characters.split(/[nrs]+/g).filter(function(word) {
    return word.length > 0; 
  });
  wordCount.innerHTML = words.length;
  charCount.innerHTML = char_length;
};
count();
window.addEventListener("input", function(event) {
  if (event.target.matches("#wordcount")) {
    count();
  } else {
    return false; 
  }
});
