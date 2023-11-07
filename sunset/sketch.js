// let sunCenterX;
// let sunCenterY;
// let moonCenterX;
// let moonCenterY;
// let sunRadius = 300;
// let sunAngle = 50;
// let arcSpeed = 0.01;
// let isOffCanvas = false;
// let moonRadius = 300;
// let moonAngle = 50;
// let isSunOffCanvas = false;
// let isMoonOffCanvas = false;
// // let sunArcSpeed = 0.007;
// // let moonArcSpeed = 0.009;

// function setup() {

//   createCanvas(400, 400);
//   sunCenterX = 100; // Starting X-coordinate
//   sunCenterY = height; // Starting Y-coordinate
//   noStroke();
// //   frameRate(13);

//   moonCenterX = 400;
//   moonCenterY = height;
// }

// function draw() {
// //    background('#4cd0ed');

//   noStroke();
//   var sunsetColor1 = color(0, 0, 153);
//   var sunsetColor2 = color(204, 51, 0);

//   var sunriseColor1 = color('#ff9999');
//   var sunriseColor2 = color('#80d4ff');


//   // Calculate the circle's position using trigonometry
//   let sunX = sunCenterX + cos(sunAngle) * sunRadius;
//   let sunY = sunCenterY - sin(sunAngle) * sunRadius;
 
//   let moonX = moonCenterX + cos(moonAngle) * moonRadius;
//   let moonY = moonCenterY - sin(moonAngle) * moonRadius;

//     // push();
//     // translate(sunCenterX, sunCenterY);
//     // rotate(sunAngle);
//     // pop();

//     // push();
//     // translate(moonCenterX, moonCenterY);
//     // rotate(moonAngle);
//     // pop();


//   // Draw the circle
// //   fill('yellow');
// //   ellipse(sunX, sunY, 50);

//   // Update the angle to make the circle move along the arc
//    sunAngle += arcSpeed;
//    moonAngle += arcSpeed;
//     // sunAngle += 0.06;
//     // moonAngle += 0.06;
// //   console.log(angle);

//  if (moonY > height) {
//     sunX = 400;
//     sunY = sunCenterY;
//     // sunAngle = 50;
//   }


// if (sunY > height) {
//         moonY = moonCenterY;
//         moonX = moonCenterX;
//         // moonAngle = 50;
//     }
    

// if (sunX < 0 || sunX > width || sunY > height || sunY < 0)   {
//     // Change the background color
//     noStroke();
    
//     setGradient(0, 0, width, height, sunsetColor1, sunsetColor2, "Y");
//     isOffCanvas = true;
    
//     fill('white');
//     ellipse(moonX, moonY, 50);

// for (var i = 0; i < 50; i++) {
//     var x = random(windowWidth);
//     var y = random(windowHeight-200);

//     noStroke();
//     fill(255, 255, 0);
//     ellipse(x, y, 2, 2);

//   }

//     isSunOffCanvas = true;
//     // sunAngle = atan2(height - moonY, moonX - sunCenterX);
//     // sunAngle = 200;
//   }

//   if ((moonX < 0 || moonX > width || moonY > height || moonY < 0) && isOffCanvas) {
//     // Change the background color
//     noStroke();
    
//     setGradient(0, 0, width, height, sunriseColor1, sunriseColor2, "Y")
//     // background('blue');


//     if (isSunOffCanvas) {
//         fill('yellow');
//         ellipse(sunX, sunY, 50);
//     }

   
//   }

// }

// //gradient function from p5js
// function setGradient(x, y, w, h, c1, c2, axis) {
//   noFill();
//   if (axis == "Y") {  // Top to bottom gradient
//     for (let i = y; i <= y+h; i++) {
//       var inter = map(i, y, y+h, 0, 1);
//       var c = lerpColor(c1, c2, inter);
//       stroke(c);
//       line(x, i, x+w, i);
//     }
//   }  
//   else if (axis == "X") {  // Left to right gradient
//     for (let j = x; j <= x+w; j++) {
//       var inter2 = map(j, x, x+w, 0, 1);
//       var d = lerpColor(c1, c2, inter2);
//       stroke(d);
//       line(j, y, j, y+h);
//     }
//   }
// }


// ----- CHAT GPT --------

let sunRadius = 50;
let sunSpeed = .25;
let angleRotate = 3;

let stars = []
function setup() {

  createCanvas(400, 400);
  sunCenterX = width/2; // Starting X-coordinate
  sunCenterY = height/2; // Starting Y-coordinate
  noStroke();
  angleMode(DEGREES)
  for (var i = 0; i < 50; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight-200);
    stars.push({x:x,y:y})
    rotate(stars[i] * angleRotate);
    pop();

  }
}

function draw() {
//    background('#4cd0ed');

  noStroke();
  var sunsetColor1 = color(0, 0, 153);
  var sunsetColor2 = color(204, 51, 0);

  var sunriseColor1 = color('#ff9999');
  var sunriseColor2 = color('#80d4ff');

  // Calculate the circle's position using trigonometry
   let sunPosition = (frameCount*sunSpeed)%360
// let sunPosition = (frameCount*sunSpeed%120)+200
  let day = sunPosition <90 || sunPosition > 270
  let daytime = color("lightblue")
  let night = color("black");

  //time period of sunset between 80 and 100 degrees
  if(sunPosition>80 && sunPosition < 100) {
    // Sunset
    // Calculate a number between 0 and 1   
    if (sunPosition <=90) {
        let lerpPosition = map(sunPosition, 80, 100, 0, 1);
        let color1 = lerpColor(daytime, sunsetColor1, lerpPosition);
        let color2 = lerpColor(daytime, sunsetColor2, lerpPosition);
        setGradient(0, 0, width, height, color1, color2, "Y");
    } else {

        let lerpPosition2 = map(sunPosition, 90, 100, 0, 1);
        let color3 = lerpColor(sunsetColor1, night, lerpPosition2);
        let color4 = lerpColor(sunsetColor2, night, lerpPosition2);

        setGradient(0, 0, width, height, color3, color4, "Y");
    }
    
  } 
  // time period of sunrise 
  else if(sunPosition>260 && sunPosition < 280){
    // Sunrise
    let lerpPosition3 = map(sunPosition, 260, 280, 0, 1);
    let color5 = lerpColor(night, sunriseColor1, lerpPosition3);
    let color6 = lerpColor(night, sunriseColor2, lerpPosition3);
    setGradient(0, 0, width, height, color5, color6, "Y");
    //setGradient(0, 0, width, height, sunriseColor1, sunriseColor2, "Y")
  } else {
    if(sunPosition > 280 || sunPosition < 90) {
    background(daytime)
    // let lerpPosition4 = map(sunPosition, 270, 90, 0, 1);
    // let color7 = lerpColor(sunriseColor1, daytime, lerpPosition4);
    // let color8 = lerpColor(sunriseColor2, daytime, lerpPosition4);
    // setGradient(0, 0, width, height, color7, color8, "Y");
 
     } 
    //  else if (sunPosition > 280 || sunPosition < 290) {
    // // let lerpPosition5 = map(sunPosition, 280, 320, 0, 1);
    // // let color9 = lerpColor(sunriseColor1, daytime, lerpPosition4);
    // // let color10 = lerpColor(sunriseColor2, daytime, lerpPosition4);
    // // setGradient(0, 0, width, height, color7, color8, "Y");
    // background(daytime);
 
    else {
      background("black")
      for(let i = 0; i < stars.length; i++) {
        noStroke();
        fill(255, 255, 0);
        ellipse(stars[i].x, stars[i].y, 2, 2);

      }
    } 
  }
  translate(width/2,height/2)
  push()
  fill(day ? 'black' : 'white');
  rect(-width/2,0,width,5)
  text(sunPosition,0,0)
  rotate(-90)
  rotate(sunPosition)
  
  fill(day ? 'yellow' : 'white');
  ellipse(width/2-25, 0, 50);
  pop()
    noStroke();

  }


//gradient function from p5js
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}