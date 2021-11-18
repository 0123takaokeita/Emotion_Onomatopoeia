"use strict";
var app = document.getElementById("app");
var pTag = document.createElement("p");
pTag.textContent = "Hello, World!!";
app === null || app === void 0 ? void 0 : app.appendChild(pTag);
console.log('reloaded');
var point2D = { x: 0, y: 10 };
var point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point) { }
iTakePoint2D(point2D); // 全く同じ構造なので問題なし
iTakePoint2D(point3D); // 追加のプロパティがあっても問題なし
iTakePoint2D({ x: 0, y: 0 }); // エラー: `y` が存在しない
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // { x: 10, y: 30 }
