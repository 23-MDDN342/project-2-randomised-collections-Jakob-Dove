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


function simplePurpleFace(eyeSize, mouthSize, colourArraynumer) {
  let Red_color = color(255, 174, 174);
  let Green_color = color(162, 252, 187);
  let Blue_color = color(148, 157, 255);
  let Yellow_color = color(255, 243, 199);
  let Orange_color = color(255, 125, 125);

 let Color_value = [Red_color,Green_color, Blue_color, Yellow_color, Orange_color] ;

  let headSize = 20;
  //let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, headSize);
  // eyes
  fill(Color_value[1]);
  ellipse(-3, -3, eyeSize);
  ellipse( 3, -3,eyeSize);
  //pupils
  fill(117, 122, 255);
  ellipse(-4, -3.75, 1)
  ellipse(2, -3.75, 1)
  //mouth
  fill(117, 112, 255)
  strokeWeight(1);
  stroke(117, 112, 255);
  console.log(Color_value)

  arc(0, 3, mouthSize, mouthSize, 0, HALF_PI+HALF_PI, CHORD);
  //Nose


 

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
