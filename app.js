const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const $=id=>document.getElementById(id);
const main=$("main"),nav=$("nav"),q=$("q"),burger=$("burger");
const wide=()=>matchMedia("(min-width:1000px)").matches;
const setOpen=o=>{document.body.classList.toggle("open",o);burger.setAttribute("aria-expanded",String(o))};
const total=L.reduce((n,l)=>n+l.f.length,0);
let cur=null;

const card=f=>`<article class="fn"><header><h3>${esc(f[0])}</h3><p>${esc(f[1])}</p></header><div class="code"><button class="cp" type="button">Copy</button><pre>${esc(f[2])}\n<span class="o">${esc(f[3]).split("\n").map(l=>"# "+l).join("\n")}</span></pre></div></article>`;
const sect=(lib,fs)=>`<section><h2>${lib.n}</h2><p>${lib.d}${lib.p?` Install with <code>${lib.p}</code>`:""}</p>${fs.map(card).join("")}</section>`;
const hero=()=>`<section class="hero"><h2>Welcome to <span>PyLab</span></h2><p>${L.length} Python libraries and ${total} examples you can copy.</p><button class="cta" id="cta" type="button">Open menu</button></section>`;

function render(){
  const t=q.value.trim().toLowerCase();
  let links=`<a href="#" data-l=""${!cur&&!t?' class="on"':""}>Home</a>`,html="",hits=0,tp=0;
  L.forEach(lib=>{
    const fs=lib.f.filter(f=>!t||(lib.n+" "+f[0]+" "+f[1]).toLowerCase().includes(t));
    if(!fs.length)return;
    if(lib.p&&!tp&&!t){tp=1;links+='<span class="grp">Third-party (pip)</span>'}
    links+=`<a href="#${lib.n}" data-l="${lib.n}"${!t&&lib.n===cur?' class="on"':""}>${lib.n}<small>${fs.length}</small></a>`;
    if(t||lib.n===cur){hits+=fs.length;html+=sect(lib,fs)}
  });
  if(t)main.innerHTML=hits?html:`<p class="empty">No functions match “${esc(q.value)}”. Try a shorter word like sort, file or date.</p>`;
  else main.innerHTML=cur?html:hero();
  const st=nav.scrollTop;nav.innerHTML=links;nav.scrollTop=st;
}
function go(name){
  cur=name||null;q.value="";render();
  window.scrollTo({top:0});
  if(!wide())setOpen(false);
}

burger.addEventListener("click",()=>setOpen(!document.body.classList.contains("open")));
$("scrim").addEventListener("click",()=>setOpen(false));
$("home").addEventListener("click",e=>{e.preventDefault();go(null)});
nav.addEventListener("click",e=>{const a=e.target.closest("a");if(!a)return;e.preventDefault();go(a.dataset.l)});
q.addEventListener("input",render);
q.addEventListener("keydown",e=>{if(e.key==="Enter"){q.blur();if(!wide())setOpen(false)}});
document.addEventListener("keydown",e=>{if(e.key==="Escape")setOpen(false)});
main.addEventListener("click",e=>{
  if(e.target.closest("#cta"))return setOpen(true);
  const b=e.target.closest("button.cp");if(!b)return;
  const code=b.parentElement.querySelector("pre").textContent.split("\n").filter(l=>!l.startsWith("# ")).join("\n").trim();
  const done=()=>{b.textContent="Copied";setTimeout(()=>b.textContent="Copy",1400)};
  try{navigator.clipboard.writeText(code).then(done,done)}catch(_){done()}
});

setOpen(wide());
render();
