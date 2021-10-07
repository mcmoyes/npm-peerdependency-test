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
