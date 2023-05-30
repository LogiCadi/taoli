class Direactor {
  constructor() {
    /** 第一关 */
    this.pass = 1;

    this.listenTouch();

    this.assetManager = new AssetManager();
    this.assetManager.loadAssets(() => {
      this.start();
    });
  }

  listenTouch() {
    // tap移动的方向 上下左右
    root.addEventListener("touchstart", (e) => {
      e.preventDefault();
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    });
    root.addEventListener("touchmove", (e) => {
      moveX = e.touches[0].clientX;
      moveY = e.touches[0].clientY;

      // 判断距离和角度
      x = moveX - startX;
      y = moveY - startY;

      if (Math.abs(x) > Math.abs(y) && x > 0) {
        console.log("左往右滑");
      } else if (Math.abs(x) > Math.abs(y) && x < 0) {
        console.log("右往左滑");
      } else if (Math.abs(y) > Math.abs(x) && y > 0) {
        console.log("上往下滑");
      } else if (Math.abs(y) > Math.abs(x) && y < 0) {
        console.log("下往上滑");
      }
    });
  }

  size = innerWidth / maps[0].length;
  yRevise = (root.height - maps.length * size) / 2;

  run() {
    for (let row = 0; row < maps.length; row++) {
      for (let col = 0; col < maps[row].length; col++) {
        if (maps[row][col]) {
          new Qiang({ x: col * size, y: row * size + yRevise, size });
        }
      }
    }

    const wo = new Wo({ x: size * 10, y: size * 10 + yRevise, size });
  }

  start() {
    console.log("加载完成");

    run();
  }
}

new Direactor();
