function Creature(dna) {

    this.pos = createVector(width / 2, height);
    this.vel = createVector();
    this.acc = createVector();

    this.completed = false;
    this.crashed = false;

    if(dna) {
        this.dna = dna;
    } else {
        this.dna = new DNA();
    }
    this.fitness = 0;

    this.applyForce = function(force){
        this.acc.add(force);
    };

    this.calculateFitness = function() {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(d, 0, width, width, 0);
        if(this.completed) {
            this.fitness *= 10;
        }

        if(this.crashed) {
            this.fitness /= 10;
        }
    };

    this.update = function() {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        if(d < 10) {
            this.completed = true;
            this.pos = target.copy();
        }

        if(obstacle_1.hit(this.pos.x, this.pos.y)) {
            this.crashed = true;
        }

        if (this.pos.x > width || this.pos.x < 0) {
            this.crashed = true;
        }

        if (this.pos.y > height || this.pos.y < 0) {
            this.crashed = true;
        }
  
        this.applyForce(this.dna.genes[counter]);
        if(!this.completed && !this.crashed)
        {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit(4);
        }
    };

    this.show = function(){
        push();
        noStroke();
        fill(203, 143, 219);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rotate(PI / 2);
        triangle(-4, 12, 0, -12, 4, 12);
        pop();
    };
}
