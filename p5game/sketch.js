    let player, floor; 
    let npc1, npc2, npc3;

function setup() {
        createCanvas(500, 600);
        world.gravity.y = 0;

        player = new Sprite(200, 200);
        // player.diameter = 50;
        player.rotationLock = true;
        player.img = 'assets/eren.png';
        player.scale = .6;
    // player.draw = function() {
    // // an oval
    //     ellipse(0,0,50,60);
    //     // rect(0,-30,70,10)
    //     fill("black")
    //     text("Player",-20,60,10,50)
    // }
    npc1 = new Sprite();
    npc1.diameter = 50;
    npc1.x = 50
    npc1.y = 50
    npc1.collider = "static"
    npc2 = new Sprite();
    npc2.x = 450
    npc2.y = 550
    npc2.diameter = 50;
    npc2.collider = "static"

    npc3 = new Sprite();
    npc3.x = 300;
    npc3.y = 200;
    npc3.diameter = 50;
    npc3.collider = "static";



        floor = new Sprite();
        floor.y = height-10;
        floor.w = width;
        floor.h = 5;
        floor.collider = 'kinematic';
    }
    dialogueText = ""

    //collideText = "Collide with one of the shapes to see what happens"
    function draw() {
        clear();
    if(player.collides(npc1)) {
    dialogueText = "You died"
    }

    if(player.collides(npc2)) {
        dialogueText = "You defeated the beast titan"
    }

    if(player.collides(npc3)) {
        dialogueText = "You killed 80% of humanity"
    }



    textSize(16)
    textWrap(WORD);
    text("Collide with one of the shapes to see what happens", 100, 100);
        text(dialogueText, 0,550)
        if (kb.pressing('left')) {
            player.vel.x = -1.5;
        } else if (kb.pressing('right')) {
        player.vel.x = 1.5;
        } else if (kb.pressing('up')) {
        player.vel.y = -1.5;
        } else if (kb.pressing('down')) {
        player.vel.y = 1.5;
        } else {
        player.vel.y = 0;
        player.vel.x = 0;
        }
    }