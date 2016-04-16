var lines = []; //we declare lines as an empty array

//preload gets called BEFORE setup
function preload() {
  //loadStrings returns an array of Strings from our text file
  //you must have a local file in order for this function to work
  lines = loadStrings('assets/thebelljar.txt');
  // SETUP PRELOAD ENDS
}

function setup() {
  createCanvas(800, 800);
  textAlign(LEFT, TOP);
  //joins an array into a long string
  //and puts empty space between array elements
  var linesAsString = lines.join(' ');

  //in order to split by sentence,
  //we need to have our lines as a single long string
  var sentences = RiTa.splitSentences(linesAsString);

  text('there are ' + sentences.length + ' sentences in this book', 0, 10);

  x = 1;
  var results = [];
  var resLength = [];
  // FOR LOOP THAT LOOKS FOR SEARCH TERM IN EACH SENTENCE AND SAVES MATCHES TO NEW ARRAY
  for (var i = 0; i < sentences.length; i++) {
    //your code here
    var n = sentences[i].search("Madison Avenue");
      // text(n,0,100+(10*i));
      if(n != -1) {
      results.push(sentences[i]);
      resLength.push(sentences[i].length);
      // text(sentences[i],0,35+(15*x),800,800);
      x = x + 5;
      }
      
  }
  

  minimum = getMinOfArray(resLength);
  // text(minimum, 0, 50);
  for (var i = 0; i < results.length; i++) {
    // text(resLength[i],0,50+(10*i));
    if (resLength[i] == minimum) {
      text(results[i],10,30+(35*x),800,800);
    }

  }
  //  SETUP FUNCTION ENDS
}


function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}