titleDOM.innerHTML = game.title.randomTitles[Math.floor(Math.random() * game.title.randomTitles.length)];

rend.FPS.calculate();

canvas.size.set();
canvas.DOM.size.set();

viewpoint.size.set();

game.player.add();

game.tick();