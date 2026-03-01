game.tick = function () {
    viewpoint.offset.set();
    viewpoint.position.set();

    

    game.rend();

    setTimeout(() => {
        game.tick();
    }, rend.FPS.millisecond);
};

canvas.DOM.size.set = function () {
    canvasDOM.width = canvas.size.width;
    canvasDOM.height = canvas.size.height;
};

objectSet.game.add = function (object) {
    objectSet.game.object.push(object);
};

viewpoint.position.set = function () {
    let playerEntity = objectSet.game.object[0];

    viewpoint.position.x = playerEntity.position.x;
    viewpoint.position.y = playerEntity.position.y;
};

game.player.add = function () {
    let playerEntity = new people();

    playerEntity.color = "#ffffff";

    playerEntity.position.x = playerEntity.position.y = 0;

    objectSet.game.add(playerEntity);
};