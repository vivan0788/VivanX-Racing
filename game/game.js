const Game = {

    player: null,
    traffic: [],
    score: 0,
    coins: 0,

    start() {

        document.getElementById("menu").style.display = "none";

        this.player = new Player();
        Engine.entities.push(this.player);

        this.loop();
    },

    loop() {

        Game.update();
        Game.draw();

        requestAnimationFrame(Game.loop);
    },

    update() {

        this.player.update();

        // spawn traffic
        if (Math.random() < 0.02) {
            let t = new Traffic();
            this.traffic.push(t);
            Engine.entities.push(t);
        }

        this.traffic.forEach(t => {
            t.update();

            if (Math.abs(t.x - this.player.x) < 50 &&
                Math.abs(t.y - this.player.y) < 100) {

                Camera.shake = 15;
                alert("GAME OVER SCORE: " + this.score);
                location.reload();
            }

            if (t.y > canvas.height) {
                this.score++;
                this.coins++;
            }
        });
    },

    draw() {

        Engine.draw();

        let ctx = canvas.getContext("2d");
        Camera.apply(ctx);

        ctx.fillStyle = "yellow";
        ctx.fillText("Score: "+this.score,20,40);
        ctx.fillText("Coins: "+this.coins,20,70);
    }
};
