var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("HTML");
  } else if (randomTopic === 'CSS') {
    console.log("CSS");
  } else if (randomTopic === 'Git') {
    console.log("Git");
  } else if (randomTopic === 'JavaScript') {
    console.log("JavaScript");
  } else {
    console.log('You done messed up A A Ron');
  }
}

console.log('Topics covered in prework:');
listTopics()

console.log('Topic of the day:')
selectTopic()