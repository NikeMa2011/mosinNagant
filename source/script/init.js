titleDOM.innerHTML = game.title.randomTitles[Math.floor(Math.random() * game.title.randomTitles.length)];

rend.FPS.calculate();

canvas.size.set();
canvas.DOM.size.set();

viewpoint.size.set();

rend.font.set();

game.player.add();

let centerPoint = new entity();
centerPoint.color = "#b4b4b4";
centerPoint.position.x = centerPoint.position.y = 0;
centerPoint.size.width = centerPoint.size.height = 5;
objectSet.game.add(centerPoint);

let ammoValue = new UI();
ammoValue.position.x = 20;
ammoValue.position.y = canvas.size.height - 20;
ammoValue.text = game.gun.ammo.currentQuantity + "/∞";
ammoValue.textSize = 20;
objectSet.UI.add(ammoValue);

let gunName = new UI();
gunName.position.x = 20;
gunName.position.y = canvas.size.height - 40;
gunName.text = "莫辛纳甘";
gunName.textSize = 20;
objectSet.UI.add(gunName);

let points = new UI();
points.position.x = 20;
points.position.y = 40;
points.text = "得分: " + game.player.points;
points.textSize = 20;
objectSet.UI.add(points);

setInterval(() => {
    game.enemy.add();
}, 5000);

game.tick();
game.rendLoop();