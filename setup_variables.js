var population;
var lifespan = 400;
var counter = 0;
var fps;
var target;
var hitTargetCount = 0;
var hitTargetP;
var genCount = 1;
var genP;
var maxforce = 0.2;
var maximumFitnessCount = 0;
var maximumFitnessP;
var mutationRate = 0.02;
var mutationRateP;

var obstacle_1;
var runSimulation = false;

function setup() {
    createCanvas(400, 300);
    population = new Population();
    fps = createP();
    genP = createP();
    hitTargetP = createP();
    maximumFitnessP = createP();
    mutationRateP = createP();
    target = createVector(width / 2, 40);
    genP.html("Generation: " + genCount);
    maximumFitnessP.html("Maximum Fitness: " + maximumFitnessCount);
    hitTargetP.html("Creatures Reached: " + hitTargetCount);
    mutationRateP.html("Mutation Rate: " + mutationRate * 100 + " %");
}