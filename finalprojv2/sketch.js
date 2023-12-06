let smallStars = [];
let bigStars = [];
let planets = [];

let isPaused = false;
var currentText;

const CONJUNCTION = 0;
const SEXTILE = 1;
const SQUARE = 2;
const TRINE = 3;
const OPPOSITION = 4;
const NONE = 5;

let alignment = NONE;


function setup() {
    angleMode(DEGREES);
    createCanvas(1200, 1200);

    

    for (let i = 0; i < 90; i++) {
        smallStars.push(new SmallStar());

  }

    for (let j = 0; j < 30; j++) {
        bigStars.push(new BigStar());
    }

 

    planets.push(new Planet(20, 120, 1.2, 30, color('#626f96'), "Mercury"));
    planets.push(new Planet(30, 175, 0.4, 100, color('#de6840'), "Venus"));
    // earth = new Planet(20, 230, 0.6, 190, color('green'));
    planets.push(new Planet(25, 230, 0.6, 190, color('green'), "Earth"))
    planets.push(new Planet(30, 286, 1, 220, color('red'), "Mars"));
    planets.push(new Planet(50, 360, 0.3, 60, color('#7e79a3'), "Jupiter"));
    planets.push(new Planet(50, 470, 0.1, 120, color('gray'), "Saturn"));
   
    // jupiter = new Planet(50, 340, 0.3, 60, color('#7e79a3'));
    // saturn = new Planet(50, 450, 0.1, 120, color('gray'));


}


function draw() 
{

    background('black');
    noStroke();
    // frameRate(40);

  

//     fill("white")
//     textSize(24)
//     text(currentText, width/2-400, height-1000);

    fill('yellow');
    textSize(18);
    text('Welcome to our Solar System',width/2-550, height-1100);

//     fill('yellow');
//     textSize(18);
//     text('When the planets make an angle, hover over it with your mouse to learn more',width/2-550, height-1070 )


    for (let i = 0; i < smallStars.length; i++) {
        smallStars[i].display();
    }

     for (let j = 0; j < bigStars.length; j++) {
        bigStars[j].display();
    } 

    fill('yellow');
    ellipse(width/2, height/2, 150)

    
        for (let i = 0; i < planets.length; i++) {
            planets[i].update();
        }
    
    for (let i = 0; i < planets.length; i++) {
            planets[i].display();
        }



    

}


class Planet {
    constructor(radius, orbitRadius, orbitSpeed, angle, color, label) {
        this.radius = radius;
        this.orbitRadius = orbitRadius;
        this.angle = angle;
        this.orbitSpeed = orbitSpeed;
        this.color = color;
        this.label = label;
        this.x;
        this.y;
        this.drawLine = false;
    }

    // Update planet position
    update() {
        if(!isPaused) {
            this.angle += this.orbitSpeed;

        // Reset angle when it reaches or exceeds 360 degrees
        if (this.angle >= 360) {
            this.angle = 0;
        }

        this.drawLine = false;

        }
        
    }

    // Display planet
    display() {
        this.x = width/2 + this.orbitRadius * cos(this.angle);
        this.y = height/2 + this.orbitRadius * sin(this.angle);

        // Draw orbit
        noFill();
        strokeWeight(2);
        stroke(150);
        ellipse(width/2, height/2, this.orbitRadius * 2);

        // Draw planet
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.radius * 2);

      

        if (this.label === "Mercury") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 33, this.y - 25);
        } else if (this.label === "Venus") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 20, this.y - 33);
        } else if (this.label === "Mars") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 20, this.y - 35);
        }
        else if (this.label === "Jupiter") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 25, this.y - 56);
        }
        else if (this.label === "Saturn") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 25, this.y - 59);
        }
       else if (this.label === "Earth") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 20, this.y - 30);
        }

        
    }
  
   drawLineTo(target) {

     
        
        if (this.drawLine) {

        let lineWeight = 3;
            
        if(mouseX >= min(this.x, target.x) &&
                mouseX <= max(this.x, target.x) &&
                mouseY >= min(this.y, target.y) &&
                mouseY <= max(this.y, target.y))
        {
            lineWeight = 8;
            
        }

        stroke('yellow');
        strokeWeight(lineWeight);
        line(this.x, this.y, target.x, target.y);
    }

   
}
}









class SmallStar {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(1,3);
        this.color = "white";
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}

class BigStar {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(7,9);
        this.color = "white";
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}







