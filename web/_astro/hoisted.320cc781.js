import"./hoisted.517771cb.js";(function(){const t=document.querySelector(".site-introduction-copy__emphasys"),s=t.querySelectorAll(".site-introduction-copy__emphasys-item"),e=t.querySelectorAll(".site-introduction-copy__emphasys-bg");let n=0;const o=()=>{const i=s[n],d=i.clientWidth;for(let c=0;c<s.length;c++)c===n?(i.classList.add("is-active"),e[c].classList.add("is-active")):(s[c].classList.remove("is-active"),e[c].classList.remove("is-active")),t.style.setProperty("--width",`${d}px`);n++,n=n===s.length?0:n,setTimeout(()=>{o()},1e3)};o()})();(function(){const t=document.getElementById("course-list"),s=document.getElementById("course-navi"),e=t.querySelectorAll(".course-item"),n=document.getElementById("course"),o=n.querySelector(".section-course__bg"),i=s.querySelectorAll(".course-navi__item"),d=()=>{let c=0;for(let l=0;l<e.length;l++)Math.floor(e[l].getBoundingClientRect().top)<360&&(c=l);if(o)if(t.getBoundingClientRect().top>320)o.classList.add("is-hide");else if(t.getBoundingClientRect().top+t.clientHeight>160){const l=i[c].getAttribute("data-color");n.style.setProperty("--bg-color",l),o.classList.remove("is-hide")}else o.classList.add("is-hide");i[c];for(let l=0;l<i.length;l++)l===c?i[l].classList.add("is-active"):i[l].classList.remove("is-active")};d(),window.addEventListener("scroll",d)})();(function(){const t=document.getElementById("works-container"),s=t.querySelector(".works-list"),e=t.querySelectorAll(".works-item"),n=t.querySelector(".works-button a"),o=document.getElementById("works-selector"),i=o.querySelectorAll(".selector-item"),d=document.getElementById("works-gallery-Navi"),c=d.querySelector(".button--prev"),l=d.querySelector(".button--next"),v=t.querySelector(".slide-pagination");let r=0;c.classList.add("is-disabled"),o.addEventListener("scroll",function(){o.scrollTop>4?this.classList.add("is-scrolled"):this.classList.remove("is-scrolled")});const u=A=>{A===0||r>A?e[A].classList.add("is-scrolling-up"):e[A].classList.add("is-scrolling-down"),setTimeout(function(){e[A].classList.remove("is-scrolling-down"),e[A].classList.remove("is-scrolling-up")},250),s.style.setProperty("--active-slide-index",A);const p=e[A].getAttribute("data-url");n.setAttribute("href",p);for(let a=0;a<i.length;a++)i[a].classList.remove("is-active");i[A].classList.add("is-active"),r=A,c.classList.remove("is-disabled"),l.classList.remove("is-disabled"),r===0&&c.classList.add("is-disabled"),r===e.length-1&&l.classList.add("is-disabled");const g=v.querySelectorAll(".bullet");console.log(g);for(let a=0;a<g.length;a++)a===A?g[a].classList.add("is-active"):g[a].classList.remove("is-active")};for(let A=0;A<i.length;A++)i[A].addEventListener("click",function(){u(A)});c.addEventListener("click",function(){u(r===0?r:r-1)}),l.addEventListener("click",function(){r===e.length-1?u(r):u(r+1)})})();(function(){const t=document.querySelectorAll(".faq-item");for(let s=0;s<t.length;s++){let e=!1;t[s].addEventListener("click",()=>{e=!e;const o=t[s].querySelector(".answer").scrollHeight;e?(t[s].classList.add("is-open"),t[s].style.setProperty("--answer-height",`${o}px`),setTimeout(()=>{t[s].style.setProperty("--answer-height","auto")},375)):(t[s].style.setProperty("--answer-height",`${o}px`),setTimeout(function(){t[s].classList.remove("is-open")},0))})}})();(function(){const e=document.getElementById("traner-list").querySelector(".traner-selector").querySelectorAll(".item"),n=o=>{for(let i=0;i<e.length;i++)i===o?e[i].classList.add("is-active"):e[i].classList.remove("is-active")};for(let o=0;o<e.length;o++)e[o].addEventListener("click",()=>{console.log("test"),n(o)})})();const{classList:f}=document.documentElement,m=f.add.bind(f);m("jpeg");m("png");const y=(t,s)=>{const e=new Image;e.src=`data:image/${t};base64,${s}`,e.onload=m(t)};y("webp","UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==");y("avif","AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=");