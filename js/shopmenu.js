//ヘッダーメニュー用 script
      $('.js-shopMenu').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      });
// メニュー項目のループを実現するための関数
function loopMenu(direction) {
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu li');
    const firstItem = menuItems[0];
    const lastItem = menuItems[menuItems.length - 1];
    
    if (direction === 'left') {
      // 最後の項目を先頭に移動
      menu.insertBefore(lastItem, firstItem);
    } else if (direction === 'right') {
      // 最初の項目を最後に移動
      menu.appendChild(firstItem);
    }
  }
  
  // 左ボタンをクリックしたときの動作
  document.querySelector('.left-btn').addEventListener('click', function() {
    loopMenu('left');
  });
  
  // 右ボタンをクリックしたときの動作
  document.querySelector('.right-btn').addEventListener('click', function() {
    loopMenu('right');
  });
  