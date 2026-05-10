const AI = {

    update(car, player) {

        if (car.x < player.x) car.x += 1;
        else car.x -= 1;
    }
};
