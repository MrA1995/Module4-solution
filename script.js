

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
// See Lecture 50, part 1
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt;
  if (firstLetter == 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
