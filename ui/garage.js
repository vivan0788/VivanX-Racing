const Garage = {

    cars: [
        { name: "Red Beast", speed: 6 },
        { name: "Blue Storm", speed: 8 },
        { name: "Green Rider", speed: 7 }
    ],

    selected: 0,

    open() {
        alert(
            "Garage:\n" +
            this.cars.map((c,i)=> i + " - " + c.name).join("\n")
        );
    },

    select(index, player) {

        this.selected = index;
        player.speed = this.cars[index].speed;
    }
};
