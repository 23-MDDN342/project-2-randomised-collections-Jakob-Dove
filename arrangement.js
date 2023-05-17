/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;


let lastSwapTime = 600;
const millisPerSwap = 3000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(-100, 100));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [255, 255, 255]

function mouseClicked() {// allows you to swap through each arrangement.
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draws the faces in a diagonal arrangement
  let w = canvasWidth/5 ;
  let h = canvasHeight / 4;
  
    for(let j=0; j<7; j++) {// allow the arrangement to appear in a diagonal line
        let y = h/2 + j*60;
        let x = w/2 + j*157 ;
          let Eyechange = int(random(0,3));// allows the eyes to change width, and height.
          let MouthWidth = int(random(0,4));// allows the mouth to change it's width length.
          let FaceMode = int(random(0,5));// allows the faces to change randomly
      
          push();
          translate(x, y);
          scale(w/25, h/25);
          EmoFace(FaceMode, Eyechange, MouthWidth, randomFaceMode(), randomEyeValue(),  randomMouthWidth());// prints the faces
          pop();
        }
      
    
    }
  
    function randomEyeValue(){// returns the random values for eyes
      return(int(random(0,3)));
    }

    function randomMouthWidth(){// returns the random values for the mouth width
      return(int(random(0, 3)));
    }

    function randomFaceMode(){// still returns th face value despite it being set to a max of 2
      return(int(random(0,2)));
    }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
