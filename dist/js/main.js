(()=>{"use strict";let e=0;const t=n=>{const r=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds");function o(e){return e>0&&e<10?"0"+e:e}e=setInterval((()=>{let t=(()=>{let e=(new Date(n).getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();r.textContent=o(t.hours),l.textContent=o(t.minutes),c.textContent=o(t.seconds),t.timeRemaining<0&&clearInterval(e)}),1e3,t)};t("30 october 2022"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),r.forEach((e=>{e.addEventListener("click",l)}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),r=document.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",(()=>{let e,t=0;const n=()=>{t++,e=requestAnimationFrame(n),t<41&&screen.width>768?r.style.left=1*t+"%":t>41&&screen.width<768?r.style.left=" ":cancelAnimationFrame(e)};n()})()})),n.addEventListener("click",(()=>{e.style.display="none"}))}))})(),(()=>{const e=document.querySelector(".calc-block"),t=e.querySelector(".calc-square"),n=e.querySelector(".calc-count"),r=e.querySelector(".calc-day"),l=document.querySelector(".mess"),c=document.querySelectorAll(".form-name"),o=document.querySelector(".top-form"),u=document.querySelectorAll(".form-email"),a=document.querySelectorAll(".form-phone"),i=e=>{e.target.value=e.target.value.replace(/\D+/,""),console.log(e.target.value=e.target.value.replace(/\D+/,""))},d=e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\-\\" "]/gi,"")},s=e=>{e.target.value=e.target.value.replace(/[^a-z\-\!@-_.!~*'\" "]/gi,"")},m=e=>{e.target.value=e.target.value.replace(/[^0-9()-]/gi,"")};t.addEventListener("input",i),n.addEventListener("input",i),r.addEventListener("input",i),l.addEventListener("input",d),c[0].addEventListener("input",d),c[1].addEventListener("input",d),o.addEventListener("input",d),a[0].addEventListener("input",m),a[1].addEventListener("input",m),a[2].addEventListener("input",m),u[0].addEventListener("input",s),u[1].addEventListener("input",s),u[2].addEventListener("input",s)})()})();