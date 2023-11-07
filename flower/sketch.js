
let circleY = [];
let flowers = [];
let clouds = [];

function setup() {
    createCanvas(600, 600);

    // initialize raindrops
    //  for (let i = 0; i < 25; i++) {
    //     circleY[i] = random(height); 
        
    //     if (circleY[i] > 500) {
    //         circleY[i] = 0;
    //     }
    // }

  clouds.push(new Cloud(300, 50));
  clouds.push(new Cloud(100, 50));
  clouds.push(new Cloud(190, 120));
  clouds.push(new Cloud(420, 120));

   
}

function mousePressed() {
  if (mouseY < 500) {
    flowers.push(new Flower(mouseX, mouseY));
  }
}

function draw() {

   background('#49CEE1');
   noStroke();
   
   fill('green');
   rect(0, 500, width);

  for (let i = 0; i < clouds.length; i++) {
    clouds[i].display();
  }

   for (let i = 0; i < flowers.length; i++) {
    flowers[i].display();
  }

    // drawFlower(50, 500);



   fill('green');
   
//    for (let i = 1; i < 5; i++) {
//        fill('green');
//        rect(i * 100, 455, 7, 50);
//        fill('yellow');
//        ellipse(i * 102, 455, 30);
//        fill('red');
//        ellipse(i * 107 , 455, 15);
//        ellipse(i * 105 , 465, 15);
//        ellipse(i * 103 , 465, 15);
//    }
   

//     // simulate raindrops falling
//    for (let i = 0; i < circleY.length; i++) {
//     let circleX = width * i / circleY.length;

//     fill('#68A8E6');
//     rect(circleX, circleY[i], 15, 20, 7);

//     circleY[i]++;

//     if (circleY[i] > 450) {
//         circleY[i] = 0; 
//     }

// }

}

// function drawFlower(x, y) {
//   // Draw stem
//   fill('green');
//   for (let i = 1; i < 5; i++) {
//     rect(x + i * 100, y - 45, 7, 50);
//   }

//   // Draw petals
//   fill('yellow');
//   for (let i = 1; i < 5; i++) {
//     ellipse(x + i * 102, y - 45, 30);
//   }

//   // Draw red parts
//   fill('red');
//   for (let i = 1; i < 5; i++) {
//     ellipse(x + i * 107, y - 45, 15);
//     ellipse(x + i * 105, y - 35, 15);
//     ellipse(x + i * 103, y - 35, 15);
//     ellipse(x + i * 100, y - 30, 15);

//   }
// }



class Cloud {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    
  }

  display() {
    noStroke();
    fill('white');
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x+10,this.y+10,24,24);
    ellipse(this.x+30,this.y+10,24,24);
    ellipse(this.x+30,this.y-10,24,24);
    ellipse(this.x+20,this.y-10,24,24);
    ellipse(this.x+40,this.y,24,24);

  }

}



class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    // Draw stem
    fill('green');
    rect(this.x, this.y, 6, 100);

    // Draw petals
    fill('yellow');
    for (let i = 0; i < 5; i++) {
      ellipse(this.x, this.y, 30, 30);
    }

    // Draw red parts
    fill('red');
    for (let i = 0; i < 5; i++) {
      ellipse(this.x, this.y, 10, 10);
    }
  }
}

