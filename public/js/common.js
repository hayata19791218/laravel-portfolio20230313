(()=>{var e=document.getElementById("percent"),t=document.getElementById("loading");window.addEventListener("load",(function(){setTimeout((function(){t.classList.add("opacity")}),2300)}));var n=0,o=setInterval((function(){e.innerHTML="".concat(n,"%"),++n>100&&clearInterval(o)}),20),i=document.getElementById("mouse-stalker"),a=document.querySelectorAll(".hover");document.addEventListener("mousemove",(function(e){i.style.transform="translate("+e.clientX+"px, "+e.clientY+"px)"}));for(var r=0;r<a.length;r++)a[r].addEventListener("mouseenter",(function(){i.classList.add("link-hover")})),a[r].addEventListener("mouseleave",(function(){i.classList.remove("link-hover")}));new Vivus("logo",{duration:100,start:"autostart",pathTimingFunction:Vivus.EASE_OUT},(function(e){e.el.classList.add("fill")}));for(var s=document.querySelectorAll(".title-circle"),c=function(e){window.addEventListener("scroll",(function(){var t=s[e].getBoundingClientRect().top,n=window.pageYOffset;n>t+n-window.innerHeight+150?s[e].classList.add("circle-fadein"):s[e].classList.remove("circle-fadein")}))},d=0;d<s.length;d++)c(d);var l=document.getElementById("topButton");window.addEventListener("scroll",(function(){window.pageYOffset>200?l.classList.add("button-fade"):l.classList.remove("button-fade")})),l.addEventListener("click",(function(){window.scroll({top:0,behavior:"smooth"})}));for(var u=document.querySelectorAll(".item"),v=function(e){window.addEventListener("scroll",(function(){var t=u[e].getBoundingClientRect().top,n=window.pageYOffset;n>t+n-window.innerHeight+150?u[e].classList.add("item-fadein"):u[e].classList.remove("item-fadein")}))},f=0;f<u.length;f++)v(f);for(var m=document.querySelectorAll(".conscious-list"),w=function(e){window.addEventListener("scroll",(function(){var t=m[e].getBoundingClientRect().top,n=window.pageYOffset;n>t+n-window.innerHeight+150?m[e].classList.add("conscious-fadein"):m[e].classList.remove("conscious-fadein")}))},E=0;E<m.length;E++)w(E);window.addEventListener("load",(function(){var e=new THREE.Scene,t=new THREE.PerspectiveCamera(35,1);t.position.set(.5,.5,1e3);var n=new THREE.IcosahedronGeometry(300,1),o=new THREE.MeshBasicMaterial({color:287160,wireframe:!0}),i=new THREE.Mesh(n,o);e.add(i);var a=new THREE.WebGLRenderer({canvas:document.querySelector("#canvas"),alpha:!0});a.setClearColor(0,0),a.setPixelRatio(window.devicePixelRatio),a.setSize(100,100),function n(){i.rotation.x+=.003,i.rotation.y+=.01,a.render(e,t),requestAnimationFrame(n)}()}));for(var g=document.querySelectorAll('a[href^="#"]'),L=function(e){g[e].addEventListener("click",(function(t){t.preventDefault();var n=g[e].getAttribute("href"),o=document.getElementById(n.replace("#","")).getBoundingClientRect().top;window.scrollTo({top:o,behavior:"smooth"})}))},h=0;h<g.length;h++)L(h)})();