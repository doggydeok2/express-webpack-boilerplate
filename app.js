const express = require("express");
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require("path");


const webpackDev = require('./webpack.dev.js');
const indexRouter = require('./server/routes/index');


const compiler = webpack(webpackDev);
const app = express();


app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDev.output.publicPath,
}))

app.set("port", 3000);

app.use('/', indexRouter);

app.listen(app.get("port"), () => {
  console.log("http://localhost:" + app.get("port"));
});

module.exports = app;