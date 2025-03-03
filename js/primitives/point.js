class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    draw(ctx, size = 18, color = 'black'){
        const radius = size / 2;
        ctx.beginPath();
        ctx.fillStyle = color;
        //what is fillStyle?
        ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    equals(point){
        return this.x === point.x && this.y === point.y;
    }
}