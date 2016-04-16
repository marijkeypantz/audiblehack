

var lines = [];//we declare lines as an empty array

//preload gets called BEFORE setup
function preload(){
  //loadStrings returns an array of Strings from our text file
  //you must have a local file in order for this function to work
  lines = loadStrings('assets/thebelljar.txt');

}

function setup() {
  createCanvas(800,800);
  textAlign(LEFT, TOP);
  //joins an array into a long string
  //and puts empty space between array elements
  var linesAsString = lines.join(' ');
  
  //in order to split by sentence,
  //we need to have our lines as a single long string
  var sentences = RiTa.splitSentences(linesAsString);
  
  text('there are ' + sentences.length + ' sentences in this book', 0,10);
  
  // var blah = sentences[500];
  //text(sentences[2500],0,30);
  //loop through each of the sentences
  //and do something with each of the sentences
  x =1;
  var results = ["NULL"];
  var resLength = [0];
  for(var i=0; i < sentences.length;i++){
    //your code here
    var n = sentences[i].search("Coney Island");
    
    if (n!= -1) {
      
    
    results.push(sentences[i]);
    resLength.push(sentences[i].length);
    x = x+1;
    }
    
  }
  maximum = resLength.max();
  for(var i=1; i < results.length;i++){
  
    if (resLength[i] == maximum) {
      text(sentences[i],10,30+(35*x),800,800);
    }
    
    
  }
  
}