
function EmoFace(FaceMode, Eyechange, MouthWidth) {
  
  let Red_color = color(255, 174, 174); // all the color that go ino the color_value array
  let Blue_color = color(148, 157, 255);
  let Yellow_color = color(255, 243, 199);
  let Green_color = color(162, 252, 187);
  let Orange_color = color(255, 145, 99);

  let Red_color2 = color(255, 100, 100);// all the colors that go into the color2 array
  let Blue_color2 = color(131, 152, 238);
  let Yellow_color2 = color(255, 226, 122);
  let Green_color2 = color(135, 230, 189);
  let Orange_color2 = color(232, 121, 102);

  let Color_value = [Red_color, Blue_color, Yellow_color, Green_color, Orange_color]; // this allows color to be chosen through out each face that is chosen
  let Color2 = [Red_color2, Blue_color2, Yellow_color2, Green_color2,Orange_color2]; // This is a secondary color that accents features like the mouth, eyebrows, nose and eyes. 

  let faceSize = 20 // these are used for some of the variables that stay the same throughout each face.
  let ArcXval = 0;
  let eyeX = -5;
  let eyeX2 = 5;
  let FaceX = 0;
  let arcwidth = 2;
  let archeight = 2;
  let eyeY = -3;
  let noseY = 2;
  let mouthY = 8;
  
  
  // rotation in degrees
  angleMode(DEGREES);
  

  if(FaceMode === 0 || FaceMode === 1 || FaceMode === 2 || FaceMode === 3 || FaceMode === 4){ // This allows the faces to switch between the different emotions 
    // head
    noStroke();
    fill(Color_value[FaceMode]);  // sets color, allows to swap between each color for the emotionns
    ellipse(FaceX, 0, faceSize, faceSize);
  }
  
  if(FaceMode === 0){//Grumpy

    //eyes
    fill(Color2[FaceMode]);
    arc(eyeX, eyeY, arcwidth+Eyechange, archeight+Eyechange, 180, 360, CHORD);
    arc( eyeX2, eyeY, arcwidth+Eyechange, archeight+Eyechange, 180, 360, CHORD);
   
    //nose
    arc(ArcXval, noseY, arcwidth, 1, 180, 360, CHORD);

    //Mouth
    arc(ArcXval, mouthY, 8+MouthWidth, 1, 180, 360, CHORD);

    //eyebrows
    stroke(Color2[FaceMode]);
    line(3,-5, 7, -6);
    line(-3,-5, -7, -6);

  }

  if(FaceMode === 1){//Gloomy
    let arcwidth = 6; // sets the width and height for the eyes
    let archeight = 6;
    let eyeY = -2;
    fill(Color2[FaceMode]);
    
    //eyes
    
    arc(eyeX, eyeY, arcwidth, archeight+Eyechange, 180, 360, CHORD);
    arc( eyeX2, eyeY, arcwidth, archeight+Eyechange, 180, 360, CHORD);
   
    //nose
    arc(ArcXval, noseY, 5, 2, 180, 360, CHORD);
    stroke(Color2[FaceMode]);
    noFill();
    

    //Mouth
    strokeWeight(1);
    arc(ArcXval, mouthY, 5+MouthWidth, 5, 180, 360);
    

  }

  if(FaceMode === 2){//Glad

    let mouthY = 5; 

    
    //eyes
    fill(Color2[FaceMode]);
    arc(eyeX, eyeY, 3+Eyechange, 5+Eyechange, 360, 0);
    arc( eyeX2, eyeY, 3+Eyechange, 5+Eyechange, 360, 0);
   
    //nose
    arc(ArcXval, noseY, 5, 2, 360, 0);
    
    //Mouth
    stroke(Color2[FaceMode]);
    arc(ArcXval, mouthY, 8+MouthWidth, 8, 360, 180, CHORD);

  }

  if(FaceMode === 3){//disgust
    let eyeX = -5;//sets the values that change each face
    let eyeX2 = 4;
    let mouthY = 7;
    let eyeY = -3.25;

    
    //eyes
    fill(Color2[FaceMode]);
    arc(eyeX, eyeY, 1+Eyechange, 1+Eyechange, 360, 0);
    arc( eyeX2, eyeY, 1+Eyechange, 1+Eyechange, 360, 0);
   
    //nose
    arc(ArcXval, noseY, 1, 2, 360, 0);
    
    //Mouth
    noFill();
    stroke(Color2[FaceMode]);
    arc(1, mouthY, 8+MouthWidth, 1, 180, 225);

    //eyebrows 
    strokeWeight(.5);
    line(-5.2, -3.9, -3, -3.9);
    line(4, -3.9, 6.2, -3.9);
    
  }

  if(FaceMode === 4){//confidence
    let eyeX = -5;
    let eyeX2 = 4;
    let mouthY = 7;

    //eyes
    fill(Color2[FaceMode]);
    arc(eyeX, eyeY, 2+Eyechange, 2+Eyechange, 360, 0);
    arc( eyeX2, eyeY, 2+Eyechange, 2+Eyechange, 360, 0);
   
    //nose
    arc(ArcXval, noseY, 1, 2, 360, 0);
    
    //Mouth
    noFill();
    stroke(Color2[FaceMode]);
    strokeWeight(1)
    arc(0, mouthY, 8+MouthWidth, 1, 36, 180);
    
  }


}