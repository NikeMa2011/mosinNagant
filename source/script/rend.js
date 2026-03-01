canvas.size.set = function () {
    canvas.size.width = window.innerWidth;
    canvas.size.height = window.innerHeight;
};

viewpoint.size.set = function () {
    viewpoint.size.width = canvas.size.width;
    viewpoint.size.height = canvas.size.height;
};

viewpoint.offset.set = function () {
    viewpoint.offset.x += Math.floor(canvas.size.width - mouse.position.x);
    viewpoint.offset.y += Math.floor(canvas.size.height - mouse.position.y);
};

rend.color.set = function (color) {
    canvasContext.fillStyle = color;
    canvasContext.strokeStyle = color;
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
    rend.background.draw();

    for (i in objectSet.game.object) {
        let object = objectSet.game.object[i];

        if (
            object.position.x + object.size.width >= viewpoint.position.x + viewpoint.offset.x &&
            object.position.x - object.size.width <= viewpoint.position.x + viewpoint.offset.x &&
            object.position.y + object.size.height >= viewpoint.position.y + viewpoint.offset.y &&
            object.position.y - object.size.height <= viewpoint.position.y + viewpoint.offset.y
        ) {
            object.draw();
            console.log("aa")
        }

        object.draw();
    }
};