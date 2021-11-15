function DNA(genes) {
    if(genes) {
        this.genes = genes;
    } else {
        this.genes = [];
        for(var i = 0; i < lifespan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(maxforce);
        }
    }

    this.crossover = function(partner) {
        var newGenes = [];
        var midPoint = floor(random(this.genes.length));
        for(var i = 0; i < this.genes.length; i++) {
            if(i > midPoint) {
                newGenes[i] = this.genes[i];
            }
            else {
                newGenes[i] = partner.genes[i];
            }
        }
        return new DNA(newGenes);
    };


    this.mutation = function() {
        for(var i = 0; i < this.genes.length; i++) {
            if(random(1) < mutationRate) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(maxforce);
            }
        }
    };
}