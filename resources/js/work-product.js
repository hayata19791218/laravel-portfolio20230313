//マウスストーカー
const mouse = document.getElementById('mouse-stalker');
const link = document.querySelectorAll(".hover");

document.addEventListener('mousemove', function (e) {
    mouse.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});
//リンクにマウスオーバーすると円が大きくなる
for(let i = 0; i < link.length; i ++){
    link[i].addEventListener('mouseenter', () => {
        mouse.classList.add('link-hover');
    });
    link[i].addEventListener('mouseleave', () => {
        mouse.classList.remove('link-hover');
    });
}