!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){color="#".concat(Math.floor(16777215*Math.random()).toString(16)),document.body.setAttribute("style","background-color:"+color),t.startBtn.setAttribute("disabled",!0),console.log(setInterval)}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.6294e0a6.js.map
