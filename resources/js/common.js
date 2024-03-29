//ローディング
const percent = document.getElementById('percent');
const loading = document.getElementById('loading');

window.addEventListener('load',() =>{
    const loadingOpacity = () =>{
        loading.classList.add('opacity');
    }
    setTimeout(loadingOpacity,2300);
});

let counter = 0;
const timer = setInterval(function(){
    percent.innerHTML = `${counter}%`;
    counter ++;
    if(counter > 100) clearInterval(timer);
},20);

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

//画面スクロールでアンダーラインの表示
const border = document.querySelectorAll('.border-bottom');

document.addEventListener('scroll', () => {
    for(let i = 0; i < border.length; i++){
        if(border[i].getBoundingClientRect().top < window.innerHeight*0.8){
            border[i].classList.add('active');
        }else{
            border[i].classList.remove('active');
        }
    }
})

//svgのアニメーション
new Vivus('logo', 
    {   duration: 100,
        start: 'autostart',
        pathTimingFunction: Vivus.EASE_OUT
    }, 
    function(obj){
        obj.el.classList.add('fill');
    }
);

//円がフェードイン
let circleFadeIn = document.querySelectorAll('.title-circle');
for(let i = 0;i < circleFadeIn.length;i ++){
    window.addEventListener('scroll',function(){
        const rect = circleFadeIn[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight + 150){
            circleFadeIn[i].classList.add('circle-fadein');
        }else{
            circleFadeIn[i].classList.remove('circle-fadein');
        }
    });
}

// トップに戻るボタン
const topButton = document.getElementById('topButton');
window.addEventListener('scroll',() => {
    const scroll = window.pageYOffset;
    if(scroll > 200){
        topButton.classList.add('button-fade');
    }else{
        topButton.classList.remove('button-fade');
    }
});
topButton.addEventListener('click',() => {
    window.scroll({
        top:0,
        behavior:'smooth'
    });
});

// フェードイン
let itemFadeIn = document.querySelectorAll('.item');
for(let i = 0;i < itemFadeIn.length;i ++){
    window.addEventListener('scroll',function(){
        const rect = itemFadeIn[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight + 150){
            itemFadeIn[i].classList.add('item-fadein');
        }else{
            itemFadeIn[i].classList.remove('item-fadein');
        }
    });
}
let consciousFadeIn = document.querySelectorAll('.conscious-list');
for(let i = 0;i < consciousFadeIn.length;i ++){
    window.addEventListener('scroll',function(){
        const rect = consciousFadeIn[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight + 150){
            consciousFadeIn[i].classList.add('conscious-fadein');
        }else{
            consciousFadeIn[i].classList.remove('conscious-fadein');
        }
    });
}

// Holidayの上にあるポリゴン
window.addEventListener('load', init); 
function init() {
    const width = 100;
    const height = 100;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height);
    camera.position.set(0.5, 0.5, +1000);

    const geometry = new THREE.IcosahedronGeometry( 300, 1 );
    const material = new THREE.MeshBasicMaterial({color: 0x0461b8, wireframe: true});
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);
        
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#canvas'),
        alpha:true
    },);

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
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        
        e.preventDefault();
        
        let href = smoothScrollTrigger[i].getAttribute('href'); 
        let targetElement = document.getElementById(href.replace('#', '')); 
        
        const rect = targetElement.getBoundingClientRect().top; 
        window.scrollTo({
            top: rect,
            behavior: 'smooth',
        });
    });
}