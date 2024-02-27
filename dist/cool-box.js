"use strict";
let computed_style;
const coolbox = document.querySelector('.cool-box');
if (coolbox)
    computed_style = window.getComputedStyle(coolbox);
window.addEventListener('load', function () {
    for (let i = 1; i <= 5; i++) {
        let imp = document.querySelectorAll('[importance="' + i + '"]');
        let k = 6 - i;
        imp.forEach((elem) => {
            if (elem instanceof HTMLElement) {
                elem.style.paddingTop = parseFloat(computed_style.paddingTop) * k + "px";
                elem.style.paddingBottom = parseFloat(computed_style.paddingBottom) * k + "px";
                elem.style.paddingRight = parseFloat(computed_style.paddingRight) * k + "px";
                elem.style.paddingLeft = parseFloat(computed_style.paddingLeft) * k + "px";
                elem.style.margin = parseFloat(computed_style.margin) * k + "px";
                elem.style.fontSize = parseFloat(computed_style.fontSize) * k + "px";
            }
        });
    }
});
