const app = document.getElementById("app");
const pTag = document.createElement("p");

pTag.textContent = "Hello, World!!";

app?.appendChild(pTag);

console.log('reloaded');

interface Point2D {
    x: number;
    y: number;
}
interface Point3D {
    x: number;
    y: number;
    z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D(point: Point2D) { /* なんらかの処理 */ }

iTakePoint2D(point2D); // 全く同じ構造なので問題なし
iTakePoint2D(point3D); // 追加のプロパティがあっても問題なし
iTakePoint2D({ x: 0 ,y: 0}); // エラー: `y` が存在しない

class Point {
    constructor(public x: number, public y: number) {
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // { x: 10, y: 30 }