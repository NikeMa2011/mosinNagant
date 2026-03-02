const canvasDOM = document.getElementById("canvas");
const canvasContext = canvasDOM.getContext("2d");

const titleDOM = document.getElementById("title");

const audio = {
    weapon: {
        mosinNagant: {
            fire: new Audio("assets/audio/weapon/mosinNagant/fire.mp3"),
            open: new Audio("assets/audio/weapon/mosinNagant/open.mp3"),
            lock: new Audio("assets/audio/weapon/mosinNagant/lock.mp3"),
            loadSingleAmmo: new Audio("assets/audio/weapon/mosinNagant/loadSingleAmmo.mp3")
        }
    }
};

const game = {
    title: {
        randomTitles: ["恐怖莫辛人", "塔克夫神射手", "7.62x54㎜R敲头", "耶格带出来的兵", "什么一战老兵", "为啥要把这玩意锯短?", "老莫你怎么了!", "颗秒!", "涡轮!涡轮苏卡!", "锯短莫辛配高倍镜吗?有点意思", "嘻嘻,我要抓撤离的PMC们"]
    },
    player: {
        speed: 10,
        points: 0
    },
    enemy: {
        speed: 5
    },
    object: {},
    gun: {
        type: "mosinNagant",
        ammo: {
            maximumQuantity: 5,
            currentQuantity: 5
        },
        recoil: 20,
        status: "ready"
    }
};

const objectSet = {
    UI: {
        object: []
    },
    game: {
        object: []
    }
};

const canvas = {
    size: {
        width: undefined,
        height: undefined
    },
    DOM: {
        size: {}
    }
};

const mouse = {
    position: {
        x: 0,
        y: 0
    }
};

const viewpoint = {
    size: {
        height: undefined,
        width: undefined
    },
    position: {
        x: undefined,
        y: undefined
    },
    offset: {
        x: 0,
        y: 0
    },
    offsetPercentage: 0.3
};

const rend = {
    background: {
        color: "#114514"
    },
    FPS: {
        value: 40,
        millisecond: undefined
    },
    font: {},
    color: {}
};

const events = {
    mouse: {},
    key: {}
}

let keySet = {};