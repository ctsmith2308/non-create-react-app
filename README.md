## commands from terminal
```
mkdir non-create-react-app { or whatever name you want }
cd non-create-react-app
npm init -y // creates package.json file with default configurations
npm install react react-dom  // install react and react-dom dependencies
touch .gitignore // creates gitignore file
mkdir app // creates app folder in your project folder
cd app
touch index.html index.js index.css // creates three files in app directory
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin // adding all required depnendincies to the project
touch webpack.config.js // creates webpack configurations file

refer to index.js and index.html file below

```

`index.js`

import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

```
class App extends React.Component {
    render() {
        return (
            <div>Hello World!!!</div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));
```

`index.html`

```
<!DOCTYPE html>
<html>
    <head><title>
        my-app
    </title></head>
    <body>
        <div id="app"></div>
    </body>
</html>
```

`package.json`

Update scripts and add babel preset config

```{
  "name": "non-create-react-app",
  "version": "1.0.0",
  "description": "create a react app without create-react-app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "create": "webpack",
    "start": "webpack-dev-server --open"
  },
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^16.10.2",
    "react-dom": "^16.10.2",
    "webpack-cli": "^3.3.9"
  },
  "devDependencies": {
    "@babel/core": "^7.6.4",
    "@babel/preset-env": "^7.6.3",
    "@babel/preset-react": "^7.6.3",
    "babel-loader": "^8.0.6",
    "cli": "^1.0.1",
    "css-loader": "^3.2.0",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^1.0.0",
    "webpack": "^4.41.1",
    "webpack-dev-server": "^3.8.2"
  }
}
```
