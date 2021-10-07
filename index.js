import { Graphics } from 'pixi.js-legacy';

const g = new Graphics();
if (g.generateCanvasTexture) {
     out("pixi.js-legacy is running smoothly")
} else {
    out(`a conflict is preventing pixi.js-legacy from accessing canvas-graphics features`);
}

function out(text) {
    document.getElementsByTagName('body')[0].textContent = text;
}