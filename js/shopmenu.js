const menu = document.querySelector('.js-shopmenu');
const menuItems = Array.from(document.querySelectorAll('.js-shopmenu li'));
let currentIndex = 0; 

// 現在のインデックス
// 初期表示の設定（すべての項目を表示）
function initializeMenu() {
  menuItems.forEach(item => {
    item.style.display = 'inline-block';
  });
}

// メニューの表示を更新（ループを実現）
function updateMenuDisplay(direction) {
  if (direction === 'left') {
    // 最後の項目を先頭に移動させる
    const lastItem = menu.lastElementChild;
    menu.insertBefore(lastItem, menu.firstElementChild);
  } else if (direction === 'right') {
    // 最初の項目を最後に移動させる
    const firstItem = menu.firstElementChild;
    menu.appendChild(firstItem);
  }

  // リセットして、常に左から表示されるようにする
  menu.style.transition = 'none';
  menu.style.transform = 'translateX(0)';
  setTimeout(() => {
    menu.style.transition = 'transform 0.3s ease-in-out';
  });
}

// 左ボタンのクリック動作
document.querySelector('.js-leftBtn').addEventListener('click', function() {
  updateMenuDisplay('left');
});

// 右ボタンのクリック動作
document.querySelector('.js-rightBtn').addEventListener('click', function() {
  updateMenuDisplay('right');
});

// 初期表示の設定を実行
initializeMenu();


// ドロップダウン
$(function() {
  $('.js-shopmenu').hover(function() {
    $(this).children('.js-shopSubmenu').stop().slideToggle(500);
  });
});