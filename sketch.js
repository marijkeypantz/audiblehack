var lines = []; //we declare lines as an empty array
var img ;
var img2;
var img3;
searchTerm = "Coney Island";
//preload gets called BEFORE setup
function preload() {
  //loadStrings returns an array of Strings from our text file
  //you must have a local file in order for this function to work
  lines = loadStrings('assets/thebelljar.txt');
  // SETUP PRELOAD ENDS
  
  reco = loadJSON('assets/reco.json');
  belljar = loadJSON('assets/belljar.json');
  
}
var alpha = 1;
var count = 0;


function setup() {
  // CANVAS AND AESTHETICS~~~~~~
  createCanvas(375, 667);
  background(25);
  // rect()
  
  
  img = loadImage("assets/belljar.jpg");  // Load the image
  img2 = loadImage("assets/header.jpg");//load the image
  img3 = loadImage("assets/quotes_bottom.jpg"); //load bottom

  //  SETUP FUNCTION ENDS
}


function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}


function draw() {
    image(img, 18, 200, 340,300);
    image(img2,0,0,375,160);
    image(img3,0,520,375,160);
    
    
    
  
  
  // TEXT STUFF ~~~~~~~~~~
  //joins an array into a long string
  //and puts empty space between array elements
  var linesAsString = lines.join(' ');
  
  //in order to split by sentence,
  //we need to have our lines as a single long string
  var sentences = RiTa.splitSentences(linesAsString);
  
  x = 1;
  var results = [];
  var resLength = [];
  var quoteLoc = [];
  // FOR LOOP THAT LOOKS FOR SEARCH TERM IN EACH SENTENCE AND SAVES MATCHES TO NEW ARRAY
  for (var i = 0; i < sentences.length; i++) {
    //your code here
    var n = sentences[i].search(searchTerm);
      // text(n,0,100+(10*i));
      if(n != -1) {
      results.push(sentences[i]);
      resLength.push(sentences[i].length);
      
      quoteLoc.push(i);
      // text(sentences[i],0,35+(15*x),800,800);
      x = x + 5;
      }
      
  }
  // text(quoteLoc[2],0,40);
  
  fill(200,200,180,200);
  // 
  rect(18,300,340,190,20);
  triangle(100, 300, 120, 150, 86, 300);
  noStroke();
  textAlign(CENTER, TOP);
  runtime = parseInt(belljar.product.runtime_length_min); //Get book runtime
  runtime = runtime - 100;
  // GET RUNTIME AND BLACK PATCH
  fill(20);
  rect(18,75,340,20);
  runHours = Math.floor(runtime/60);
  runMinutes = runtime%60;
  textSize(12); fill(110);
  text(runHours + " hours and " + runMinutes + " mins remaining",185,75);
  // -----
  
  // CHAPTER NUMBER
  fill(20);
  rect(135,135,100,24);
  textSize(12); fill(110);
  text("Chapter 9 of 20",185,140);
  
  minimum = getMinOfArray(resLength);
  fill(200);
  // text(minimum, 0, 50);
  for (var i = 0; i < results.length; i++) {
    // text(resLength[i],0,50+(10*i));
    if (resLength[i] == minimum) {
      fill(40);
      textSize(15);
      text("You're at "+searchTerm+"!\n\n\n\"" + results[i] + "\"\n\n- Sylvia Plath, " + reco.recommendations[2].title,25,8+(28*x),330,640);
    }

  }
  if (alpha <= 99 && count%60 == 0) {
    alpha = alpha+1;
  }
  count = count+1;
  
  
}