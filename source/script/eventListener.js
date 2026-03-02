onmousemove = (event) => mouse.position.set(event);

onresize = () => {
    canvas.size.set();
    canvas.DOM.size.set();
    viewpoint.size.set();
    rend.font.set();
};

onkeydown = (event) => {
    keySet[event.key] = true;
};

onkeyup = (event) => {
    keySet[event.key] = false;
};

onmousedown = (event) => {
    keySet[event.button] = true;
};

onmouseup = (event) => {
    keySet[event.button] = false;
};