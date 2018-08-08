"use strict";
exports.__esModule = true;
var express = require("express");
var IndexRouter = /** @class */ (function () {
    function IndexRouter() {
        this.router = express.Router();
    }
    IndexRouter.prototype.listenIndex = function () {
        this.router.get("/", function (req, res) {
            res.render("index/index");
        });
        return this.router;
    };
    return IndexRouter;
}());
exports.IndexRouter = IndexRouter;
