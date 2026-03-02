class entity {
    constructor() {
        this.size = {
            height: undefined,
            width: undefined
        };
        this.position = {
            x: undefined,
            y: undefined
        };
        this.color = "#f200ff";
    }

    draw() {
        rend.color.set(this.color);

        canvasContext.fillRect(
            this.position.x - viewpoint.position.x + viewpoint.offset.x - this.size.width / 2,
            this.position.y - viewpoint.position.y + viewpoint.offset.y - this.size.height / 2,
            this.size.width,
            this.size.height
        );
    }
}

class UI {
    constructor() {
        this.position = {
            x: undefined,
            y: undefined
        };
        this.color = "#ffffff";
        this.text = undefined;
        this.textSize = undefined;
    }

    draw() {
        rend.color.set(this.color);
        rend.font.set(this.textSize);

        canvasContext.fillText(
            this.text,
            this.position.x,
            this.position.y
        );
    }
}