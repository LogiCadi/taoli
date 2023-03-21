/** 墙体 */
class Qiang {
  constructor({ x, y, size }) {
    const img = new Image();
    img.src = "../assets/墙.png";
    img.onload = function () {
      ctx.drawImage(img, x, y, size, size);
    };
  }
}
