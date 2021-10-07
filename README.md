# npm-peerdependency-test

npm v7 now installs peerDependencies by default. Due to some strange dependency resolution, this can cause pixi.js-legacy to break on a fresh install or `npm update`.

## Steps to reproduce

Using npm v7:

```
npm install
```

When finished:

```
npm run start
```

Point your browser to `http://localhost:3000`
You will see a message that *a conflict is preventing pixi.js-legacy from accessing canvas-graphics features*

## Expected behaviour

You see a message that *pixi.js-legacy is running smoothly*

You can see this behaviour by deleting `package-lock.json` and `/node_modules` and running
```
npm install --legacy-peer-deps
```
or
```
yarn install
```

## What's happening?

![pixi js-legacy-pixi-spine](https://user-images.githubusercontent.com/22986822/136403127-419c1223-e49e-4a3b-8fec-11e0f7413f80.png)

It's installing pixi-spine first, and we end up with

```
node_modules/@pixi/graphics v6.1.3
node_modules/pixi.js-legacy/node_modules/@pixi/graphics v6.1.2
```

In `canvas-graphics.js`:
```
import { Graphics } from '@pixi/graphics';
 
…
 
Graphics.prototype.generateCanvasTexture = function generateCanvasTexture(scaleMode, resolution) {
```
`generateCanvasTexture` is being added to the wrong `Graphics` prototype.
