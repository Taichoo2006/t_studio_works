new Splide('.banner', {
    type        : 'loop',       // ループして無限に回す
    autoplay    : true,       // 自動再生オン
    arrows      : false,
    interval    : 10000,       // 4秒（4000ms）ごとに切り替え
    speed       : 800,        // 右から左へ移動するアニメーション速度（0.8秒）
    easing      : 'cubic-bezier(0.25, 1, 0.5, 1)', // なめらかな滑り出し
    pauseOnHover: false,       // マウスを乗せたら一時停止（ユーザーに優しい仕様！）
    pauseOnFocus: false,       // フォーカス時も一時停止
    clones      : 2,
}).mount();