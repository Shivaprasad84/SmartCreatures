function Obstacle(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.show = function() {
        noStroke();
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }

    this.hit = function(x, y) {
        return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h);
    };
}