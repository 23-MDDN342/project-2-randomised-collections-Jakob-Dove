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
function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
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
  fill(Color_value[colourArraynumer]);
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
