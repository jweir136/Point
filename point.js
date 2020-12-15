class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    distance() {
        return Math.sqrt((this.x) + (this.y));
    }
}

p1 = new Point(1.0, 1.2);
console.log(p1);
console.log(p1.distance());