import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as S}from"./assets/vendor-77e16229.js";let u=null,r=null;const a=document.querySelector("button"),s=document.querySelector("#datetime-picker"),n=document.querySelectorAll(".value"),p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];u=e,e&&e.getTime()>new Date().getTime()?a.disabled=!1:(a.disabled=!0,s.disabled=!1,S.error({title:"Error",message:"Please choose a date in the future",position:"center"}))}};h(s,p);function y(t){const c=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:i,minutes:f,seconds:m}}a.addEventListener("click",t=>{t.preventDefault(),r&&clearInterval(r),s.disabled=!0,a.disabled=!0,r=setInterval(()=>{const l=u-new Date;if(l<=0)clearInterval(r),n.forEach(o=>o.textContent="00"),s.disabled=!1;else{const{days:o,hours:d,minutes:c,seconds:i}=y(l);n[0].textContent=o.toString().padStart(2,"0"),n[1].textContent=d.toString().padStart(2,"0"),n[2].textContent=c.toString().padStart(2,"0"),n[3].textContent=i.toString().padStart(2,"0")}},1e3)});
//# sourceMappingURL=commonHelpers.js.map