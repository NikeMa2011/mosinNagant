canvas.size.set = function () {
    canvas.size.width = window.innerWidth;
    canvas.size.height = window.innerHeight;
};

viewpoint.size.set = function () {
    viewpoint.size.width = canvas.size.width;
    viewpoint.size.height = canvas.size.height;
};

viewpoint.offset.set = function () {
    viewpoint.offset.x += Math.floor((canvas.size.width - mouse.position.x - viewpoint.offset.x) * viewpoint.offsetPercentage);
    viewpoint.offset.y += Math.floor((canvas.size.height - mouse.position.y - viewpoint.offset.y) * viewpoint.offsetPercentage);
};

viewpoint.position.set = function () {
    viewpoint.position.x = objectSet.game.object[0].position.x;
    viewpoint.position.y = objectSet.game.object[0].position.y
}

rend.color.set = function (color) {
    canvasContext.fillStyle = color;
    canvasContext.strokeStyle = color;
};

rend.font.set = function (size) {
    canvasContext.textBaseLine = "bottom";
    canvasContext.font = size + "px sans-serif";
};

rend.FPS.calculate = function () {
    rend.FPS.millisecond = Math.floor(1000 / rend.FPS.value);
};

rend.background.draw = function () {
    rend.color.set(rend.background.color);

    canvasContext.fillRect(
        0,
        0,
        canvas.size.width,
        canvas.size.height
    );
};

game.rend = function () {
    viewpoint.position.set();

    rend.background.draw();

    for (i in objectSet.game.object) {
        let object = objectSet.game.object[i];

        object.draw();
    }

    for (i in objectSet.UI.object) {
        let object = objectSet.UI.object[i];

        object.draw();
    }
};