const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const Engine = {

    entities: [],

    update() {
        this.entities.forEach(e => e.update());
    },

    draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        this.entities.forEach(e => e.draw(ctx));
    }
};
