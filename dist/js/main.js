(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let o=0;function c(e){return 1===String(e).length?"0"+e:String(e)}o=setInterval((()=>{const l=function(){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),r=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:r,seconds:n}}();l.timeRemaining>0?(t.textContent=c(l.hours),n.textContent=c(l.minutes),r.textContent=c(l.seconds)):l.timeRemaining<=0&&(clearInterval(o),t.textContent="00",n.textContent="00",r.textContent="00")}),1e3)})("30 october 2022"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),n.addEventListener("click",o),r.forEach((e=>{e.addEventListener("click",o)}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),r=document.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",(()=>{let e,t=0;const n=()=>{t++,e=requestAnimationFrame(n),t<41&&screen.width>768?r.style.left=1*t+"%":t>41&&screen.width<768?r.style.left=" ":cancelAnimationFrame(e)};n()})()})),n.addEventListener("click",(()=>{e.style.display="none"}))}))})(),(()=>{const e=document.querySelector(".calc-block"),t=e.querySelector(".calc-square"),n=e.querySelector(".calc-count"),r=e.querySelector(".calc-day"),o=document.querySelector(".mess"),c=document.querySelectorAll(".form-name"),l=document.querySelector(".top-form"),u=document.querySelectorAll(".form-email"),a=document.querySelectorAll(".form-phone"),i=e=>{e.target.value=e.target.value.replace(/\D+/,""),console.log(e.target.value=e.target.value.replace(/\D+/,""))},d=e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\-\\" "]/gi,"")},s=e=>{e.target.value=e.target.value.replace(/[^a-z\-\!@-_.!~*'\" "]/gi,"")},m=e=>{e.target.value=e.target.value.replace(/[^0-9()-]/gi,"")};t.addEventListener("input",i),n.addEventListener("input",i),r.addEventListener("input",i),o.addEventListener("input",d),c[0].addEventListener("input",d),c[1].addEventListener("input",d),l.addEventListener("input",d),a[0].addEventListener("input",m),a[1].addEventListener("input",m),a[2].addEventListener("input",m),u[0].addEventListener("input",s),u[1].addEventListener("input",s),u[2].addEventListener("input",s)})()})();