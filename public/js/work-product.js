/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/work-product.js ***!
  \**************************************/
//マウスストーカー
var mouse = document.getElementById('mouse-stalker');
var link = document.querySelectorAll(".hover");
document.addEventListener('mousemove', function (e) {
  mouse.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});
//リンクにマウスオーバーすると円が大きくなる
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('mouseenter', function () {
    mouse.classList.add('link-hover');
  });
  link[i].addEventListener('mouseleave', function () {
    mouse.classList.remove('link-hover');
  });
}
/******/ })()
;