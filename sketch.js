var population;
var width, height;
var lifespan;
var counter;
var fps;
var generation;
var gen;
var target;
var obstacle_1, obstacle_2;

var ob_1_x, ob_1_y, ob_1_w, ob_1_h;
var ob_2_x, ob_2_y, ob_2_w, ob_2_h;

function initContent(){
    width = 400;
    height = 400;
    lifespan = 400;
    counter = 0;
    generation = 1;
    fps = createP();
    gen = createP();
    ob_1_x = width / 2 + 20;
    ob_1_y = height - 300;
    ob_2_x = width - 350;
    ob_2_y = height / 2

    ob_1_w = 100;
    ob_1_h = 10;

    ob_2_w = 100;
    ob_2_h = 10;

    target = createVector(width - 40, 40);
    obstacle_1 = createVector(ob_1_x, ob_1_y);
    obstacle_2 = createVector(ob_2_x, ob_2_y);
    population = new Population(); 
}

function setup() {
    initContent();
    createCanvas(width, height);
    gen.html("<span>Generation: " + generation + "</span>");
}

function Population(){
    this.creatures = [];
    this.popSize = 30;

    for(var cIndex = 0; cIndex < this.popSize; cIndex++){
        this.creatures[cIndex] = new Creature();
    }

    this.start = function(){
       
        for(var cIndex = 0; cIndex < this.popSize; cIndex++){
            this.creatures[cIndex].update();
            this.creatures[cIndex].show();
        }

    }
}

function isCreatureDead(x, y)
{
    var isDead = false;

    if(x > width || x < 0)
    {
        isDead = true;
    }
    else if(y > height || y < 0)
    {
        isDead = true;
    }
    else if(x > ob_1_x && x < ob_1_x + ob_1_w && y > ob_1_y && y < ob_1_y + ob_1_h)
    {
        isDead = true;
    }
    else if(x > ob_2_x && x < ob_2_x + ob_2_w && y > ob_2_y && y < ob_2_y + ob_2_h)
    {
        isDead = true;
    }

    return isDead;
}


function Creature(){

    this.pos = createVector(width / 2, height - 20);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();

    this.dead = false;

    this.show = function(){
        push();
        noStroke();
        fill(255, 100);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 20, 5);
        pop();
    }

    this.update = function() {
        this.dead = isCreatureDead(this.pos.x, this.pos.y);
        if(!this.dead)
        {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    }
    this.applyForce = function(force){
        this.acc.add(force);
    }
}

function draw() {
    background(51);
    population.start();
    counter++;
    fps.html("FPS: " + counter);
    if(counter == lifespan)
    {
        counter = 0;
        generation += 1;
        gen.html("Generation: " + generation);
        population = new Population(); 
    } 
    
    fill(255);
    rect(obstacle_1.x, obstacle_1.y, ob_1_w, ob_1_h);
    rect(obstacle_2.x, obstacle_2.y, ob_2_w, ob_2_h);

    noStroke();
    fill(255, 0, 0);
    ellipse(target.x, target.y, 15);
}
