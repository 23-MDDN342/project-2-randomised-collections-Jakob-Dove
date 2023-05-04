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
function EmoFace(FaceMode) {
  
  let Red_color = color(255, 174, 174);
  let Blue_color = color(148, 157, 255);
  let Yellow_color = color(255, 243, 199);
  let Green_color = color(162, 252, 187);
  let Orange_color = color(255, 125, 125);

  let Red_color2 = color(255, 100, 100);
  let Blue_color2 = color(131, 152, 238);
  let Yellow_color2 = color(255, 226, 122);
  let Green_color2 = color(135, 230, 189);
  let Orange_color2 = color(232, 121, 102);

  let Color_value = [Red_color, Blue_color, Yellow_color, Green_color, Orange_color];
  let Color2 = [Red_color2, Blue_color2, Yellow_color2, Green_color2,Orange_color2];

  let faceSize = 20
  let ArcXval = 0;
  let eyeX = -5;
  let eyeX2 = 5;
  let FaceX = 0;
  let arcwidth = 0;
  let archeight = 0;
  let eyeY = -3;
  let noseY = 2;
  let mouthY = 8;
  let lineX = 3;
  let lineX2 = -3;
  
  // rotation in degrees
  angleMode(DEGREES);
  

  if(FaceMode === 0 || FaceMode === 1 || FaceMode === 2 || FaceMode === 3 || FaceMode === 4){
    // head
    noStroke();
    fill(Color_value[FaceMode]);  // sets color
    ellipse(FaceX, 0, faceSize, faceSize);
  }
  
  if(FaceMode === 0){//Grumpy

    let arcwidth = 2; //variables
    let archeight = 2;

    //eyes
    fill(Color2[FaceMode]);
    arc(eyeX, eyeY, arcwidth, archeight, 180, 360, CHORD);
    arc( eyeX2, eyeY, arcwidth, archeight, 180, 360, CHORD);
   
    //nose
    arc(ArcXval, noseY, arcwidth, 1, 180, 360, CHORD);

    //Mouth
    arc(ArcXval, mouthY, 8, 1, 180, 360, CHORD);

    //eyebrows
    stroke(Color2[FaceMode])
    line(3,-5, 7, -6);
    line(-3,-5, -7, -6);

  }

  if(FaceMode === 1){//Gloomy
    let arcwidth = 6;
    let archeight = 6;
    let eyeY = -2;
    fill(Color2[FaceMode]);
    
    //eyes
    
    arc(eyeX, eyeY, arcwidth, archeight, 180, 360, CHORD);
    arc( eyeX2, eyeY, arcwidth, archeight, 180, 360, CHORD);
   
    //nose
    arc(ArcXval, noseY, 5, 2, 180, 360, CHORD);
    stroke(Color2[FaceMode]);
    noFill();
    strokeWeight(2)
    //Mouth
    arc(ArcXval, mouthY, 5, 5, 180, 360);
    

  }

  if(FaceMode === 2){//Glad

    let mouthY = 5;

    fill(Color2[FaceMode]);
    //eyes
    arc(eyeX, eyeY, 3, 5, 360, 0);
    arc( eyeX2, eyeY, 3, 5, 360, 0);
   
    //nose
    arc(ArcXval, noseY, 5, 2, 360, 0);
    
    //Mouth
    stroke(Color2[FaceMode]);
    arc(ArcXval, mouthY, 8, 8, 360, 180);

  }

  if(FaceMode === 3){//disgust
    let eyeX = -5;
    let eyeX2 = 4;
    let mouthY = 7;

    fill(Color2[FaceMode]);
    //eyes
    arc(eyeX, eyeY, 2, 2, 360, 0);
    arc( eyeX2, eyeY, 2, 2, 360, 0);
   
    //nose
    arc(ArcXval, noseY, 1, 2, 360, 0);
    stroke(Color2[FaceMode]);
    
    //Mouth
    noFill();
    arc(1, mouthY, 8, 1, 180, 225);

    //eyebrows
    line(-5.2, -3.9, -3, -3.9);
    line(4, -3.9, 6.2, -3.9);
    
  }

  if(FaceMode === 4){//confidence, or new emotion, still work in progress
    let eyeX = -5;
    let eyeX2 = 4;
    let mouthY = 7;

    fill(Color2[FaceMode]);
    //eyes
    arc(eyeX, eyeY, 2, 2, 360, 0);
    arc( eyeX2, eyeY, 2, 2, 360, 0);
   
    //nose
    arc(ArcXval, noseY, 1, 2, 360, 0);
    
    //Mouth
    stroke(Color2[FaceMode]);
    noFill();
    arc(0, mouthY, 8, 1, 36, 180);
    
  }


}