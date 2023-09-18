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

//画面スクロールでアンダーラインの表示
var border = document.querySelectorAll('.border-bottom');
document.addEventListener('scroll', function () {
  for (var _i = 0; _i < border.length; _i++) {
    if (border[_i].getBoundingClientRect().top < window.innerHeight * 0.8) {
      border[_i].classList.add('active');
    } else {
      border[_i].classList.remove('active');
    }
  }
});

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
var _loop = function _loop(_i2) {
  window.addEventListener('scroll', function () {
    var rect = circleFadeIn[_i2].getBoundingClientRect().top;
    var scroll = window.pageYOffset;
    var offset = rect + scroll;
    var windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      circleFadeIn[_i2].classList.add('circle-fadein');
    } else {
      circleFadeIn[_i2].classList.remove('circle-fadein');
    }
  });
};
for (var _i2 = 0; _i2 < circleFadeIn.length; _i2++) {
  _loop(_i2);
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
var _loop2 = function _loop2(_i3) {
  window.addEventListener('scroll', function () {
    var rect = itemFadeIn[_i3].getBoundingClientRect().top;
    var scroll = window.pageYOffset;
    var offset = rect + scroll;
    var windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      itemFadeIn[_i3].classList.add('item-fadein');
    } else {
      itemFadeIn[_i3].classList.remove('item-fadein');
    }
  });
};
for (var _i3 = 0; _i3 < itemFadeIn.length; _i3++) {
  _loop2(_i3);
}
var consciousFadeIn = document.querySelectorAll('.conscious-list');
var _loop3 = function _loop3(_i4) {
  window.addEventListener('scroll', function () {
    var rect = consciousFadeIn[_i4].getBoundingClientRect().top;
    var scroll = window.pageYOffset;
    var offset = rect + scroll;
    var windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      consciousFadeIn[_i4].classList.add('conscious-fadein');
    } else {
      consciousFadeIn[_i4].classList.remove('conscious-fadein');
    }
  });
};
for (var _i4 = 0; _i4 < consciousFadeIn.length; _i4++) {
  _loop3(_i4);
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
var _loop4 = function _loop4(_i5) {
  smoothScrollTrigger[_i5].addEventListener('click', function (e) {
    e.preventDefault();
    var href = smoothScrollTrigger[_i5].getAttribute('href');
    var targetElement = document.getElementById(href.replace('#', ''));
    var rect = targetElement.getBoundingClientRect().top;
    window.scrollTo({
      top: rect,
      behavior: 'smooth'
    });
  });
};
for (var _i5 = 0; _i5 < smoothScrollTrigger.length; _i5++) {
  _loop4(_i5);
}
/******/ })()
;