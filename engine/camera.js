const Camera = {

    shake: 0,

    apply(ctx) {

        if (this.shake > 0) {
            ctx.translate(Math.random()*6-3, Math.random()*6-3);
            this.shake--;
        }
    }
};
