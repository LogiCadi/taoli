class Wo {
  constructor({ x, y, size }) {
    const img = new Image();
    img.src = "../assets/我.png";
    img.onload = function () {
      ctx.drawImage(img, x, y, size, size);
    };
  }
}
