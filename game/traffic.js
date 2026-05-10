class Traffic {

    constructor() {
        this.x = Math.random()*canvas.width;
        this.y = -100;
        this.w = 60;
        this.h = 120;
        this.speed = 5 + Math.random()*4;
    }

    update() {
        this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}
