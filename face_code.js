/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function EmoFace( FaceMode, eye_value, mouthWidth, Colourvalue, Colorvalue2, arcarray, ArcArray2, modes, arcHeight) {
  

  let Red_color = color(255, 174, 174);
  // let Green_color = color(162, 252, 187);
  let Blue_color = color(148, 157, 255);
  let Yellow_color = color(255, 243, 199);
  // let Orange_color = color(255, 125, 125);

  let Red_color2 = color(255, 100, 100);
  // let Green_color2 = color(135, 230, 189);
  let Blue_color2 = color(131, 152, 238);
  let Yellow_color2 = color(255, 226, 122);
  // let Orange_color2 = color(232, 121, 102);

  let Arc_value = [45, 90, 180, 360];
  let ArcInbetweens = [45, 135, 180, 225];

  let Arcmode = [PIE, OPEN, CHORD];

  let Color_value = [Red_color, Blue_color, Yellow_color];
  let Color2 = [Red_color2, Blue_color2, Yellow_color2];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  

  if(FaceMode === 0 || FaceMode === 1 || FaceMode === 2){
    // head
    noStroke();
    fill(Color_value[FaceMode]);
    ellipse(centerX, 0, headSize, headSize);
  }
  
  if(FaceMode === 0){//Grumpy
    fill(Color2[FaceMode]);
    //eyes
    
    arc(-5, -3, 2, 3, 180, 360, CHORD);
    arc( 5, -3, 2, 3, 180, 360, CHORD);
   
    //nose
    arc(0, 2, 2, 1, 180, 360, CHORD);
    //Mouth
    arc(0, 8, 8, 1, 180, 360, CHORD);
    //eyebrows
    stroke(Color2[FaceMode])
    line(3,-5, 7, -6);
    line(-3,-5, -7, -6);

  }

  if(FaceMode === 1){//Gloomy
    fill(Color2[FaceMode]);
    //eyes
    
    arc(-5, -2, 6, 5, 180, 360, CHORD);
    arc( 5, -2, 6, 5, 180, 360, CHORD);
   
    //nose
    arc(0, 2, 5, 2, 180, 360, CHORD);
    stroke(Color2[FaceMode]);
    noFill();
    strokeWeight(2)
    //Mouth
    arc(0, 8, 5, 5, 180, 360);
    

  }

  if(FaceMode === 2){//Glad
    fill(Color2[FaceMode]);
    //eyes
    
    arc(-5, -3, 3, 5, 360, 0);
    arc( 5, -3, 3, 5, 360, 0);
   
    //nose
    arc(0, 2, 5, 2, 360, 0);
    stroke(Color2[FaceMode]);
    
    //Mouth
    arc(0, 5, 8, 8, 360, 180);
    

  }


}






function simplePurpleFace(eyeSize, mouthSize, colourArraynumer, noseCoordX, noseCoordX2, noseCoordY, MouthCOlor, moutharray, Arc_Start, Arcmodes, Mouthrotate, EyeXCord,EyeXCord2, EyeYCord, pupilX, pupilX2, pupilY, arcHeight) {
  

  let Red_color = color(255, 174, 174);
  let Green_color = color(162, 252, 187);
  let Blue_color = color(148, 157, 255);
  let Yellow_color = color(255, 243, 199);
  let Orange_color = color(255, 125, 125);

  let Red_color2 = color(255, 100, 100);
  let Green_color2 = color(135, 230, 189);
  let Blue_color2 = color(131, 152, 238);
  let Yellow_color2 = color(255, 226, 122);
  let Orange_color2 = color(232, 121, 102);

  let halfpiArc = HALF_PI + HALF_PI;
  let QuarterArc = QUARTER_PI + PI;

  let Arc_value = [HALF_PI, QUARTER_PI, PI, TWO_PI];
  let ArcInbetweens = [halfpiArc, QuarterArc, PI];

  let Arcmode = [PIE, OPEN, CHORD];

 let Color_value = [Red_color,Green_color, Blue_color, Yellow_color, Orange_color];
 let Color2 = [Red_color2,Green_color2, Blue_color2, Yellow_color2, Orange_color2];

  let headSize = 20;
  //let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  let triX = 0.1;
  let triX2 = -.1;
  let triY = 0;
  
  
  noStroke();
  // head
  fill(Color2[colourArraynumer]);
  ellipse(0, 0, headSize);
  // eyes
  fill(234, 122, 244);
  ellipse(EyeXCord, EyeYCord, eyeSize);
  ellipse( EyeXCord2, EyeYCord,eyeSize);
  
  //pupils
  fill(117, 122, 255);
  ellipse(pupilX, pupilY, 1)
  ellipse(pupilX2, pupilY, 1)

   //mouth
   fill(Color2[MouthCOlor]);
   strokeWeight(1);
   stroke(Color2[MouthCOlor]);
   
   push();
   translate(-.5,6)
   rotate(Mouthrotate)
   arc(0, 0, mouthSize, arcHeight, ArcInbetweens[Arc_Start]+PI, Arc_value[moutharray] + PI, Arcmode[Arcmodes]);
   console.log(Arcmodes)
   pop();
   
  //Nose
  noStroke();
  triangle(0, noseCoordY, noseCoordX2, 0, noseCoordX, 0);// make an if statement to make sure the nose does not go to low

  

  
 

 ///Make try an arc for a mouth
 // look up cmyk color palette
 // triangle for  a nose
 // try making eyebrows
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
