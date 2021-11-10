var population;

function initContent(){
   population = new Population(); 
}

function setup() {
    initContent();
    createCanvas(500, 500);
}

function Population(){
    this.creatures = [];
    this.popSize = 20;

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

function Creature(){

    this.pos = createVector(width/2, height);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();

    this.show = function(){
        push();
        noStroke();
        translate(this.pos.x, this.pos.y);
        fill(255, 100);
        rectMode(CENTER);
        rotate(this.vel.heading());
        rect(0, 0, 20, 5);
        pop();
    }
    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    this.applyForce = function(force){
        this.acc.add(force);
    }
}
function draw() {
    background(51);
    population.start();
}