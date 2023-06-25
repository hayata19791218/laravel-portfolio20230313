/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/common.js ***!
  \********************************/
//ローディング
var percent = document.getElementById('percent');
var loading = document.getElementById('loading');
window.addEventListener('load', function () {
  var loadingOpacity = function loadingOpacity() {
    loading.classList.add('opacity');
  };
  setTimeout(loadingOpacity, 2300);
});
var counter = 0;
var timer = setInterval(function () {
  percent.innerHTML = "".concat(counter, "%");
  counter++;
  if (counter > 100) clearInterval(timer);
}, 20);

//svgのアニメーション
new Vivus('logo', {
  duration: 100,
  start: 'autostart',
  pathTimingFunction: Vivus.EASE_OUT
}, function (obj) {
  obj.el.classList.add('fill');
});

//円がフェードイン
var circleFadeIn = document.querySelectorAll('.title-circle');
var _loop = function _loop(i) {
  window.addEventListener('scroll', function () {
    var rect = circleFadeIn[i].getBoundingClientRect().top;
    var scroll = window.pageYOffset;
    var offset = rect + scroll;
    var windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      circleFadeIn[i].classList.add('circle-fadein');
    } else {
      circleFadeIn[i].classList.remove('circle-fadein');
    }
  });
};
for (var i = 0; i < circleFadeIn.length; i++) {
  _loop(i);
}

// トップに戻るボタン
var topButton = document.getElementById('topButton');
window.addEventListener('scroll', function () {
  var scroll = window.pageYOffset;
  if (scroll > 200) {
    topButton.classList.add('button-fade');
  } else {
    topButton.classList.remove('button-fade');
  }
});
topButton.addEventListener('click', function () {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
});

// フェードイン
var itemFadeIn = document.querySelectorAll('.item');
var _loop2 = function _loop2(_i) {
  window.addEventListener('scroll', function () {
    var rect = itemFadeIn[_i].getBoundingClientRect().top;
    var scroll = window.pageYOffset;
    var offset = rect + scroll;
    var windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      itemFadeIn[_i].classList.add('item-fadein');
    } else {
      itemFadeIn[_i].classList.remove('item-fadein');
    }
  });
};
for (var _i = 0; _i < itemFadeIn.length; _i++) {
  _loop2(_i);
}
var consciousFadeIn = document.querySelectorAll('.conscious-list');
var _loop3 = function _loop3(_i2) {
  window.addEventListener('scroll', function () {
    var rect = consciousFadeIn[_i2].getBoundingClientRect().top;
    var scroll = window.pageYOffset;
    var offset = rect + scroll;
    var windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      consciousFadeIn[_i2].classList.add('conscious-fadein');
    } else {
      consciousFadeIn[_i2].classList.remove('conscious-fadein');
    }
  });
};
for (var _i2 = 0; _i2 < consciousFadeIn.length; _i2++) {
  _loop3(_i2);
}

// Holidayの上にあるポリゴン
window.addEventListener('load', init);
function init() {
  var width = 100;
  var height = 100;
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(35, width / height);
  camera.position.set(0.5, 0.5, +1000);
  var geometry = new THREE.IcosahedronGeometry(300, 1);
  var material = new THREE.MeshBasicMaterial({
    color: 0x0461b8,
    wireframe: true
  });
  var box = new THREE.Mesh(geometry, material);
  scene.add(box);
  var renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    alpha: true
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  function animate() {
    box.rotation.x += 0.003;
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

// スムーススクロール
var smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
var _loop4 = function _loop4(_i3) {
  smoothScrollTrigger[_i3].addEventListener('click', function (e) {
    e.preventDefault();
    var href = smoothScrollTrigger[_i3].getAttribute('href');
    var targetElement = document.getElementById(href.replace('#', ''));
    var rect = targetElement.getBoundingClientRect().top;
    window.scrollTo({
      top: rect,
      behavior: 'smooth'
    });
  });
};
for (var _i3 = 0; _i3 < smoothScrollTrigger.length; _i3++) {
  _loop4(_i3);
}
/******/ })()
;