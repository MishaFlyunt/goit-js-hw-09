let t=null;const e={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};e.btnStart.addEventListener("click",(function(){e.btnStart.disabled=!0,e.btnStop.disabled=!1,t=setInterval((()=>{e.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.btnStop.addEventListener("click",(function(){e.btnStart.disabled=!1,e.btnStop.disabled=!0,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.6013da85.js.map
