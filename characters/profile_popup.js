// すべてのキャラのカード（.item）を一斉につかまえる
const items = document.querySelectorAll('.item');

// ポップアップの各パーツをつかまえる
const popup = document.getElementById('profile-popup');
const popupName = document.getElementById('popup-name');
const fullImg = document.getElementById('full-img');
const popupProfile = document.getElementById('popup-profile');
const closeBtn = document.getElementById('close-btn');

// ループ処理で、すべてのカードにクリックイベントをつける
items.forEach(btn => {
  btn.addEventListener('click', () => {
    // 押されたカードからデータを取得（data-enも新しく取得！）
    const nameJa = btn.getAttribute('data-ja');
    const nameEn = btn.getAttribute('data-en'); // ★追加
    const img = btn.getAttribute('data-full');
    const profile = btn.getAttribute('data-profile');
    
    // データが全部揃っているかチェック
    if (nameJa && nameEn && img && profile) { // ★nameEnもチェックに足す
      
      // ★ここがポイント！日本語名と英語名を改行ではさんで合体させるよ！
      // クラス名をつけて、CSSで別々にデザインできるようにしています
      popupName.innerHTML = `<span class="popup-ja">${nameJa}</span><br><span class="popup-en">${nameEn}</span>`;
      
      fullImg.src = img;
      popupProfile.innerHTML = profile;
      
      // ポップアップを表示！
      popup.classList.remove('hidden');
    }
  });
});

// 閉じるボタンを押したら、またhiddenクラスをつけて隠す！
closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});