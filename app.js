const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const main=document.getElementById("main"),nav=document.getElementById("nav"),q=document.getElementById("q");
let cur=L[0].n;
function render(){
  const t=q.value.trim().toLowerCase();let html="",links="",hits=0,tp=0;
  L.forEach(lib=>{
    const fs=lib.f.filter(f=>!t||(lib.n+" "+f[0]+" "+f[1]).toLowerCase().includes(t));
    if(!fs.length)return;
    if(lib.p&&!tp&&!t){tp=1;links+='<span class="grp">Third-party (pip)</span>'}
    links+=`<a href="#${lib.n}" data-l="${lib.n}"${!t&&lib.n===cur?' class="on"':""}>${lib.n}<small>${fs.length}</small></a>`;
    if(!t&&lib.n!==cur)return;
    hits+=fs.length;
    html+=`<section id="${lib.n}"><h2>${lib.n}</h2><p>${lib.d}${lib.p?` Install with <code>${lib.p}</code>`:""}</p>`+fs.map(f=>`<article class="fn"><header><h3>${esc(f[0])}</h3><p>${esc(f[1])}</p></header><div class="code"><button class="cp" type="button">Copy</button><pre>${esc(f[2])}\n<span class="o">${esc(f[3]).split("\n").map(l=>"# "+l).join("\n")}</span></pre></div></article>`).join("")+`</section>`;
  });
  main.innerHTML=hits?html:`<p class="empty">No functions match “${esc(q.value)}”. Try a shorter word like sort, file or date.</p>`;
  const sl=nav.scrollLeft,st=nav.scrollTop;nav.innerHTML=links;nav.scrollLeft=sl;nav.scrollTop=st;const on=nav.querySelector("a.on");if(on&&nav.scrollWidth>nav.clientWidth&&getComputedStyle(nav).flexDirection==="row")nav.scrollTo({left:on.offsetLeft-(nav.clientWidth-on.offsetWidth)/2,behavior:"smooth"});
}
main.addEventListener("click",e=>{
  const b=e.target.closest("button.cp");if(!b)return;
  const code=b.parentElement.querySelector("pre").textContent.split("\n").filter(l=>!l.startsWith("# ")).join("\n").trim();
  const done=()=>{b.textContent="Copied";setTimeout(()=>b.textContent="Copy",1400)};
  try{navigator.clipboard.writeText(code).then(done,done)}catch(_){done()}
});
q.addEventListener("input",render);
document.getElementById("hide").addEventListener("click",()=>{document.body.classList.add("hide");document.getElementById("show").focus()});
document.getElementById("show").addEventListener("click",()=>{document.body.classList.remove("hide");document.getElementById("hide").focus()});
nav.addEventListener("click",e=>{const a=e.target.closest("a");if(!a)return;e.preventDefault();cur=a.dataset.l;q.value="";render();window.scrollTo({top:0})});
render();
