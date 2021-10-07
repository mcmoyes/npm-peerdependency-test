import { Graphics } from 'pixi.js-legacy';

const g = new Graphics();
if (g.generateCanvasTexture) {
    console.log(`using pixi.js-legacy`);
} else {
    console.error(`a conflict is preventing pixi.js-legacy from accessing canvas-graphics features`);
}