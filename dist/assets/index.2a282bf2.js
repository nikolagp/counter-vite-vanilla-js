let e=0;const t=document.getElementById("btn-decrease"),n=document.getElementById("btn-increase"),c=document.getElementById("btn-reset");let d=document.getElementById("value");t.addEventListener("click",(function(){d.textContent=e--})),n.addEventListener("click",(function(){d.textContent=e++})),c.addEventListener("click",(function(){e=0,d.textContent=e}));