game.tick = function () {
    events.key();
    events.mouse();

    game.enemy.move();

    setTimeout(() => {
        game.tick();
    }, 25);
};

game.enemy.add = function () {
    let enemyEntity = new entity();

    enemyEntity.color = "#ff0000";

    enemyEntity.position.x = Math.floor((Math.random() * 3000) - 1500) + viewpoint.position.x;
    enemyEntity.position.y = Math.floor((Math.random() * 3000) - 1500) + viewpoint.position.y;

    enemyEntity.size.width = 50;
    enemyEntity.size.height = 100;

    objectSet.game.add(enemyEntity);
};

game.enemy.move = function () {
    for (let i = 1; i < objectSet.game.object.length; i++) {
        let object = objectSet.game.object[i];

        if (object.color == "#ff0000") {
            if (object.position.x > objectSet.game.object[0].position.x) {
                objectSet.game.object[i].position.x -= Math.min(object.position.x - objectSet.game.object[0].position.x, game.enemy.speed);
            } else if (object.position.x < objectSet.game.object[0].position.x) {
                objectSet.game.object[i].position.x += Math.min(objectSet.game.object[0].position.x - object.position.x, game.enemy.speed);
            }

            if (object.position.y > objectSet.game.object[0].position.y) {
                objectSet.game.object[i].position.y -= Math.min(object.position.y - objectSet.game.object[0].position.y, game.enemy.speed);
            } else if (object.position.y < objectSet.game.object[0].position.y) {
                objectSet.game.object[i].position.y += Math.min(objectSet.game.object[0].position.y - object.position.y, game.enemy.speed);
            }

            if (
                object.position.x == objectSet.game.object[0].position.x &&
                object.position.y == objectSet.game.object[0].position.y
            ) {
                game.rendLoop = game.tick = undefined;

                console.error("你死了")
            }
        }
    }
};

game.rendLoop = function () {
    viewpoint.offset.set();
    viewpoint.position.set();

    game.rend();

    setTimeout(() => {
        game.rendLoop();
    }, rend.FPS.millisecond);
};

canvas.DOM.size.set = function () {
    canvasDOM.width = canvas.size.width;
    canvasDOM.height = canvas.size.height;
};

objectSet.game.add = function (object) {
    objectSet.game.object.push(object);
};

objectSet.UI.add = function (object) {
    objectSet.UI.object.push(object);
};

viewpoint.position.set = function () {
    let playerEntity = objectSet.game.object[0];

    viewpoint.position.x = playerEntity.position.x;
    viewpoint.position.y = playerEntity.position.y;
};

game.player.add = function () {
    let playerEntity = new entity();

    playerEntity.color = "#ffffff";

    playerEntity.position.x = playerEntity.position.y = 0;

    playerEntity.size.width = 50;
    playerEntity.size.height = 100;

    objectSet.game.add(playerEntity);
};

game.player.fire = function () {
    let aimPosition = {
        x: viewpoint.position.x + mouse.position.x * 2 - viewpoint.size.width,
        y: viewpoint.position.y + mouse.position.y * 2 - viewpoint.size.height
    }

    for (let i = 1; i < objectSet.game.object.length; i++) {
        let object = objectSet.game.object[i];

        if (object.color == "#ff0000") {
            if (
                object.position.x - object.size.width / 2 < aimPosition.x &&
                object.position.x + object.size.width / 2 > aimPosition.x &&
                object.position.y - object.size.height / 2 < aimPosition.y &&
                object.position.y + object.size.height / 2 > aimPosition.y
            ) {
                game.player.points++;

                objectSet.game.object[i].color = "#787878";
                objectSet.UI.object[2].text = "得分: " + game.player.points;
            }
        }
    }
}