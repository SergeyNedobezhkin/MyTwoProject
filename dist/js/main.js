
(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let c=0;function l(e){return 1===String(e).length?"0"+e:String(e)}c=setInterval((()=>{const r=function(){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:o,seconds:n}}();if(r.timeRemaining>0)t.textContent=l(r.hours),n.textContent=l(r.minutes),o.textContent=l(r.seconds);else if(r.timeRemaining<=0){clearInterval(c);const l=new Date(e);l.setDate(l.getDate()+1),t.textContent="00",n.textContent="00",o.textContent="00"}}),1e3)})("29 october 2022"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>{e.addEventListener("click",c)}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=document.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",(()=>{let e=0;setInterval((()=>{e++,e<62&&screen.width>768?o.style.left=.624*e+"%":o.style.left=" "}),2)})()})),n.addEventListener("click",(()=>{e.style.display="none"}))}))})()})();
