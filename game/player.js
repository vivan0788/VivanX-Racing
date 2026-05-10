class Player {

    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height-200;
        this.w = 60;
        this.h = 120;
        this.lane = 1;
    }

    update() {

        if (Input.keys["ArrowLeft"]) this.lane--;
        if (Input.keys["ArrowRight"]) this.lane++;

        this.lane = Math.max(0, Math.min(2, this.lane));

        this.x = (canvas.width/3)*this.lane + 60;
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}
