mouse.position.set = function (event) {
    mouse.position.x = event.clientX;
    mouse.position.y = event.clientY;
};

audio.play = function (audio) {
    audio.play();
}

events.mouse = function () {
    if (keySet[0]) {
        if (game.gun.ammo.currentQuantity > 0) {
            if (game.gun.status == "ready") {
                game.gun.ammo.currentQuantity--;
                objectSet.UI.object[0].text = game.gun.ammo.currentQuantity + "/∞";
                viewpoint.offset.y += game.gun.recoil;

                game.player.fire();

                game.gun.status = "cooling";

                audio.play(audio.weapon.mosinNagant.fire);

                setTimeout(() => { audio.play(audio.weapon.mosinNagant.open) }, 800);
                setTimeout(() => { audio.play(audio.weapon.mosinNagant.lock) }, 1300);
                setTimeout(() => { game.gun.status = "ready" }, 2000);
            }
        }
    }
};

events.key = function () {
    if (keySet["w"]) {
        objectSet.game.object[0].position.y -= game.player.speed;
    } if (keySet["s"]) {
        objectSet.game.object[0].position.y += game.player.speed;
    } if (keySet["a"]) {
        objectSet.game.object[0].position.x -= game.player.speed;
    } if (keySet["d"]) {
        objectSet.game.object[0].position.x += game.player.speed;
    } if (keySet["r"]) {
        if (game.gun.status == "ready") {
            let delay = (game.gun.ammo.maximumQuantity - game.gun.ammo.currentQuantity) * 1200;

            audio.play(audio.weapon.mosinNagant.open);
            game.gun.status = "cooling";

            if (delay == 0) {
                objectSet.UI.object[0].text += " 7.62x54mmR 7N1 狙击弹 (铜被覆空尖钢芯)";
            }

            for (let i = 0; i < game.gun.ammo.maximumQuantity - game.gun.ammo.currentQuantity; i++) {
                setTimeout(() => {
                    audio.play(audio.weapon.mosinNagant.loadSingleAmmo);
                    game.gun.ammo.currentQuantity++;

                    objectSet.UI.object[0].text = game.gun.ammo.currentQuantity + "/∞";
                }, (i + 1) * 1200);
            }

            setTimeout(() => { audio.play(audio.weapon.mosinNagant.lock) }, delay + 1000);
            setTimeout(() => { game.gun.status = "ready" }, delay + 2000);
        }
    }
}