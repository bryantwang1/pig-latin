function translator (sentence) {
  if(sentence.search(/[^aeiou]/i) === 0) {
    var letter;
    console.log("enter conditional");
    for(var i=0; i < (sentence.search(/[aeiou]/i)); i++){
      console.log(sentence.search(/[aeiou]/i))
        if(sentence[i+1] === "y"){
          sentence = sentence.concat(sentence[0]);
          sentence = sentence.replace(sentence[0], "");

          i = sentence.search(/[aeiou]/i);
        } else if(sentence[i] === "q"){
          sentence = sentence.concat(sentence[0]);
          sentence = sentence.replace(sentence[0], "");

          if(sentence[i] === "u"){
            sentence = sentence.concat(sentence[0]);
            sentence = sentence.replace(sentence[0], "");
            i--;
          }
        } else {
          sentence = sentence.concat(sentence[0]);
          sentence = sentence.replace(sentence[0], "");
          i--;
        }
    };

    return sentence + "ay";
  } else if (sentence) {
    return sentence + "ay";
  } else {
    return sentence;
  }
};

// UI logic under this line

$(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var sentence = $("#sentence").val();
    var result = translator(sentence);
    $("#result").text(result);
  });
});
