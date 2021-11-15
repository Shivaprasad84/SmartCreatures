function Population(){
    this.creatures = [];
    this.popSize = 50;

    for(var cIndex = 0; cIndex < this.popSize; cIndex++){
        this.creatures[cIndex] = new Creature();
    }

    this.evaluate = function() {
        var maxfit = 0;
        for(var i = 0; i < this.popSize; i++) {
            this.creatures[i].calculateFitness();

            if(this.creatures[i].fitness > maxfit) {
                maxfit = this.creatures[i].fitness;
            }
        }

        maximumFitnessP.html("Maximum Fitness: " + maxfit);

        for(var i = 0; i < this.popSize; i++) {
            this.creatures[i].fitness /= maxfit;
        }

        this.matingpool = [];
        for(var i = 0; i < this.popSize; i++) {
            var n = this.creatures[i].fitness * 100;
            for(var j = 0; j < n; j++) {
                this.matingpool.push(this.creatures[i]);
            }
        }
    };

    this.selection = function() {
        var newCreatures = [];
        var child;
        for(var i = 0; i < this.creatures.length; i++) {
            if(this.creatures[i].completed) {
                hitTargetCount++;
                hitTargetP.html("Creatures Reached: " + hitTargetCount);
                child = this.creatures[i].dna;
            }
            else {
                var parentA = random(this.matingpool).dna;
                var parentB = random(this.matingpool).dna;
                child = parentA.crossover(parentB);
                child.mutation();
            }
            newCreatures[i] = new Creature(child);
        }
        this.creatures = newCreatures;
    };

    this.start = function(runSimulation) {
       
        for(var cIndex = 0; cIndex < this.popSize; cIndex++){
            if(runSimulation) {
                this.creatures[cIndex].update();
            }
            this.creatures[cIndex].show();
        }

    };
}