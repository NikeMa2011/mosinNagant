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
}

class people extends entity {
    constructor() {
        super();

        this.size = {
            height: 100,
            width: 50
        };
    }

    draw() {
        rend.color.set(this.color);

        canvasContext.fillRect(
            this.position.x - viewpoint.position.x + viewpoint.offset.x,
            this.position.y - viewpoint.position.y + viewpoint.offset.y,
            this.size.width,
            this.size.height
        );
    }
}