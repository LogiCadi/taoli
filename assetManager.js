class AssetManager {
  assets = [
    { path: "assets/墙.png", key: "墙" },
    { path: "assets/我.png", key: "我" },
  ];

  loadAssets(cb) {
    let loaded = 0;
    this.assets.forEach((asset) => {
      const img = new Image();
      img.src = asset.path;
      img.onload = () => {
        asset.source = img;
        if (this.assets.length === ++loaded) {
          cb();
        }
      };
    });
  }
}
