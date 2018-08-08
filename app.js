"use strict";
exports.__esModule = true;
var express = require("express");
var routers_1 = require("./routers");
var App = /** @class */ (function () {
    function App() {
        var app = express();
        app.set("view engine", "ejs");
        app.use(express.static("public"));
        var indexRouter = new routers_1.IndexRouter();
        app.use("/", indexRouter.listenIndex());
        this.server(app);
    }
    App.prototype.server = function (app) {
        app.listen(3000, function () {
            console.log("Server Started");
        });
    };
    return App;
}());
new App();
