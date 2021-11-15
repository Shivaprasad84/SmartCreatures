function draw() {
    background(51);
    population.start(runSimulation);
    if(runSimulation) {
        fps.html("FPS: " + counter);
    
        counter++;
        if(counter == lifespan)
        {
            genCount++;
            genP.html("Generation: " + genCount);
            population.evaluate();
            population.selection();
            counter = 0;
            hitTargetCount = 0;
        } 
    }

    obstacle_1 = new Obstacle(100, 130, 200, 10);
    obstacle_1.show();
    ellipse(target.x, target.y, 16, 16);
}

function keyPressed() {
    if(keyCode == UP_ARROW) {
        runSimulation = true;
    }

    if(keyCode == DOWN_ARROW) {
        runSimulation = false;
    }
}
