window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/images/bitbug_favicon.ico");
      $('[rel="shortcut icon"]').attr('href', "/images/bitbug_favicon.ico");
      document.title = '╭(°A°`)╮ 喔唷，页面崩溃啦 ~';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/images/bitbug_favicon.ico");
      $('[rel="shortcut icon"]').attr('href', "/images/bitbug_favicon.ico");
      document.title = '(ฅ>ω<*ฅ) 咦，页面又好了！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
    }
  });
}