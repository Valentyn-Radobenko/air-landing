var e=document.querySelector(".slider"),t=["https://snipboard.io/VpZ8aF.jpg","https://snipboard.io/t0b962.jpg","https://snipboard.io/BzlZSp.jpg"],n=0;document.querySelector(".slider__arrow-button--left").addEventListener("click",function(){n=(n-1+t.length)%t.length,e.style.backgroundImage="url('".concat(t[n],"')")}),document.querySelector(".slider__arrow-button--right").addEventListener("click",function(){n=(n+1)%t.length,e.style.backgroundImage="url('".concat(t[n],"')")});var o=document.querySelectorAll(".nav__icon"),r=document.querySelector(".menu"),l=window.getComputedStyle(r),i=document.querySelectorAll(".nav__logo"),a=document.querySelectorAll(".nav__link"),c=function(){"none"===l.display||"none"===r.style.display?(r.style.display="block",document.body.classList.add("menu-open")):"block"===r.style.display&&(r.style.display="none",document.body.classList.remove("menu-open"))},s=!0,d=!1,u=void 0;try{for(var y,v=o[Symbol.iterator]();!(s=(y=v.next()).done);s=!0)y.value.addEventListener("click",c)}catch(e){d=!0,u=e}finally{try{s||null==v.return||v.return()}finally{if(d)throw u}}var m=!0,b=!1,f=void 0;try{for(var p,h=i[Symbol.iterator]();!(m=(p=h.next()).done);m=!0)p.value.addEventListener("click",function(){r.style.display="none",document.body.classList.remove("menu-open")})}catch(e){b=!0,f=e}finally{try{m||null==h.return||h.return()}finally{if(b)throw f}}var g=!0,k=!1,w=void 0;try{for(var L,S=a[Symbol.iterator]();!(g=(L=S.next()).done);g=!0)L.value.addEventListener("click",function(){r.style.display="none",document.body.classList.remove("menu-open")})}catch(e){k=!0,w=e}finally{try{g||null==S.return||S.return()}finally{if(k)throw w}}function _(){for(var e=document.querySelectorAll(".nav__link--header"),t=0;t<e.length;t++)switch(t){case 0:break;case 1:e[t].textContent="Services",e[t].setAttribute("href","#services");break;case 2:e[t].textContent="Testimonials",e[t].setAttribute("href","#testimonials");break;case 3:e[t].textContent="Contact Us",e[t].setAttribute("href","#feedback");break;default:e[t].remove()}}_(),window.addEventListener("resize",_);var q=document.querySelectorAll(".hidden"),E=!0,A=function(){q.forEach(function(e){var t=e.getBoundingClientRect().top,n=e.getBoundingClientRect().bottom;t<window.innerHeight-20&&n>20?e.classList.add("visible"):e.classList.contains("nav--header")||e.classList.remove("visible")})},C=function(){E&&(window.scrollTo(0,0),E=!1),"block"!==r.style.display&&A()};window.addEventListener("scroll",C),document.addEventListener("DOMContentLoaded",C);
//# sourceMappingURL=index.89c8063a.js.map
