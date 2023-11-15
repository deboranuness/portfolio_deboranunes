/*var sliderWords = ["dedicada", "entusiasta", "versátil", "comprometida", "proativa", "criativa"];
var index = 0;

function textSlider() {
  document.getElementById("text_morphing").innerHTML = sliderWords[index];
  index = (index + 1) % sliderWords.length;
}

setInterval(textSlider, 2500);*/

  var sliderWords = ["dedicada", "entusiasta", "versátil", "comprometida", "proativa", "criativa"];
  var index = 0;
  var isInTypingAnimation = false;

  function textSlider() {
    var targetElement = document.getElementById("text_morphing");
    var currentWord = sliderWords[index];

    if (!isInTypingAnimation) {
      isInTypingAnimation = true;
      typeWord(targetElement, currentWord, 0, function() {
        index = (index + 1) % sliderWords.length;
        isInTypingAnimation = false;
        setTimeout(textSlider, 1500);
      });
    }
  }

  function typeWord(targetElement, word, index, callback) {
    if (index <= word.length) {
      targetElement.innerHTML = word.slice(0, index);
      index++;
      setTimeout(function() {
        typeWord(targetElement, word, index, callback);
      }, 100);
    } else {
      callback();
    }
  }

  setInterval(textSlider, 2500);