# Pro react template
This is a minimal template for creating extendable react apps.

## Stack
- Typescript
- Module sass (scss)
- Get module style
- K-react-cm
- React, react-dom
- React-modifier
- Webpack, babel

## How to use
Install dependecies and dev tools
``` bash
npm i
npm i -g k-react-cm # cli component manager
```

Change page template in src/index.html
```html
<!-- from -->
<head>
    <title>Site name</title>
</head>

<!-- to -->
<head>
    <title>Your actual site name</title>
</head>
```

Better imports
``` ts
// original imports
import someComponent from "../components/some/some.tsx";
import somePage from "./pages/somePage";
import someUtil from "../utils/someUtil";
import someAsset from "../assets/someAsset.png";

// using symlinks & index.tsx file name
import someComponent from "$c/some";
import somePage from "$p/some";
import someUtil from "$u/someUtil";
import someAsset from "$a/someAsset.png";
```

Start dev server
```
npm run dev
```

Build
```
npm run build
```