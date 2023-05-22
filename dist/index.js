"use strict";
const div__mousemove = document.getElementById('div__mousemove');
window.addEventListener('mousemove', (e) => {
    if (div__mousemove == null)
        return;
    div__mousemove.style.top = e.pageY + "px";
    div__mousemove.style.left = e.pageX + "px";
});
window.addEventListener('mousedown', (e) => {
    if (div__mousemove == null)
        return;
    div__mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener('mouseup', (e) => {
    if (div__mousemove == null)
        return;
    div__mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});