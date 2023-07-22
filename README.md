# React/TypeScript Temperature Conversion w/ WebPack
This is a simple Celcius-to-Fahrenheit/Fahrenheit-to-Celcius temperature converter using React & TypeScript. 

### Dependencies 
```bash
npm install react react-dom
npm install typescript  @types/react --dev
```

### JSS Styles
JSS is used to handle the CSS styles. 
```bash
npm install jss jss-preset-default --dev
```

## WebPack
This project also uses Webpack and includes a `webpack.config.js` file. 
```bash
npm install webpack webpack-cli webpack-dev-server --dev
npm install ts-loader html-webpack-plugin --dev
```

Add scripts to `package.json` and run with `npm run dev` & `npm run build`.
<!-- Code Block -->
```json
  {
    "scripts": {
        "dev": "webpack-dev-server",
        "build": "webpack"
    }
  }
```
