const HUD = {

    draw(ctx, game) {

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";

        ctx.fillText("Score: " + game.score, 20, 40);
        ctx.fillText("Coins: " + game.coins, 20, 70);
        ctx.fillText("Lane: " + game.player.lane, 20, 100);

        // speed bar (visual)
        ctx.fillStyle = "red";
        ctx.fillRect(20, 120, game.player.speed * 10, 10);
    }
};
