/* ===== DATA (from the Tightened Draft proposal, updated 3 Nov 2026) ===== */
const CATS = [
  {id:"grass",num:"01",name:"Touch Grass",blurb:"Outdoor activities, real-life mishaps and awkward everyday moments.",
   charades:["Camping","Kite flying","Cycling","Swimming","Rock climbing","Walking the dog","Bird watching","Cockroach","Bee","Broken umbrella","Dog poop","Sandcastle","Hiking","Mosquito","Fishing","Picnic"],
   taboo:[["Mosquito","Bite","Blood","Itchy","Insect"],["Sunburn","Sun","Red","Skin","Beach"],["Picnic","Basket","Park","Blanket","Sandwich"],["Hiking","Walk","Mountain","Trail","Boots"],["Barbecue","Grill","Meat","Charcoal","Satay"],["Fishing","Fish","Rod","Hook","Lake"],["Touch Grass","Outside","Phone","Offline","Nature"],["Sunset","Sun","Evening","Orange","Sky"]],
   challenge:[["Petrichor","Smell","Rain","Earth","Scent"],["Golden Hour","Sunset","Photo","Light","Evening"],["Forest Bathing","Trees","Nature","Walk","Japanese"],["Geocaching","Treasure","GPS","Hunt","Hidden"]]},
  {id:"genz",num:"02",name:"Brainrots",blurb:"Italian brainrot characters, brainrot memes and Gen Alpha lingo.",
   tip:"<b>Fun twist:</b> pair an older and a younger player on Taboo — one reads the card, the other explains it.",
   charades:["Skibidi Toilet","Telebubble","Tung Tung Tung Sahur","Ballerina Cappuccina","Tralalero Tralala","Bombardiro Crocodilo","Chimpanzini Bananini","Brr Brr Patapim","6-7","Aura farming","Mewing","Fanum Tax","Grimace Shake","Chill Guy","IShowSpeed","Among Us"],
   taboo:[["Aura","Energy","Vibe","Points","Cool"],["Rizz","Flirt","Charm","Smooth","Pick up"],["Sigma","Alpha","Lone","Wolf","Male"],["Ohio","State","America","Weird","Only in"],["Skibidi","Toilet","Head","Song","Dop"],["Fanum Tax","Steal","Food","Bite","Streamer"],["Mogging","Better","Looks","Tall","Dominate"],["Glazing","Praise","Hype","Compliment","Donut"],["6-7","Six","Seven","Hands","Meme"],["NPC","Game","Character","Background","Robot"],["Bombardiro Crocodilo","Crocodile","Plane","Bomb","Italian"],["Chill Guy","Dog","Sweater","Relaxed","Pockets"]],
   challenge:[["Lirilì Larilà","Elephant","Cactus","Sandals","Clock"],["Cappuccino Assassino","Coffee","Ninja","Sword","Italian"],["Mango Mustard","Six","Seven","Sauce","Fruit"],["Italian Brainrot","Tung","Shark","Characters","AI"]]},
  {id:"bari",num:"03",name:"Bari Bari Steak",blurb:"Sizzling plates, steak cuts and messy dining moments.",
   charades:["Salt Bae","Chef’s kiss","Flipping steak","Burnt tongue","Food coma","Salad bar","Sizzle splatter","Cow","Sizzling plate","Meat sweats","Last piece","Well done"],
   taboo:[["Wagyu","Beef","Japan","Marbling","Premium"],["Medium Rare","Pink","Cooked","Middle","Doneness"],["Well Done","Cooked","Brown","Overcooked","Steak"],["Teppan","Iron","Plate","Hot","Grill"],["Garlic Rice","Fried","Bowl","Side","Chips"],["Salad Bar","Free-flow","Vegetables","Refill","Buffet"],["Sirloin","Cut","Steak","Beef","Ribeye"],["Donburi","Bowl","Rice","Japanese","Topping"]],
   challenge:[["Maillard Reaction","Brown","Crust","Sear","Chemistry"],["Dry-Aged","Old","Weeks","Fridge","Funky"],["Tomahawk","Axe","Bone","Giant","Ribeye"],["Blue Rare","Raw","Red","Cold","Barely"]]},
  {id:"sg",num:"04",name:"Only in SG",blurb:"Singapore icons, places and office life to act out, plus Singlish for Taboo.",
   tip:"<b>Singlish rule:</b> explain using a situation (“when your friends go makan without you…”), just not the forbidden words.",
   charades:["Lee Kuan Yew","Merlion","Phua Chu Kang","Joseph Schooling","JJ Lin","Marina Bay Sands","National Day Parade","Durian","Chilli crab","MRT","Ah Boys to Men","Changi Airport","You’re on mute","Printer jam","Overtime","Lunch break","Boss is coming","Zoom meeting"],
   taboo:[["Chope","Reserve","Tissue","Seat","Table"],["Kiasu","Scared","Lose","Queue","Greedy"],["Bo Jio","Invite","Left out","Never","Ask"],["Paiseh","Sorry","Embarrassed","Shy","Awkward"],["Shiok","Good","Nice","Satisfying","Delicious"],["Sian","Bored","Tired","Sad","Lazy"],["Kaypoh","Busybody","Nosy","Gossip","Curious"],["Blur Like Sotong","Confused","Squid","Lost","Slow"],["Wah Lau Eh","Shocked","Angry","Wow","Exclaim"],["Lepak","Relax","Chill","Hang out","Lazy"],["Atas","Fancy","High-class","Rich","Posh"],["Steady","Good","Cool","Stable","Nice"]],
   challenge:[["Gostan","Reverse","Car","Back","Drive"],["Agak Agak","Estimate","Roughly","Guess","About"],["Siam","Avoid","Dodge","Escape","Hide"],["Jialat","Bad","Trouble","Terrible","Serious"]]},
  {id:"en",num:"05",name:"EN Group Universe",blurb:"EN Group dishes and dining moments, plus a Guess the Restaurant bonus round.",
   charades:["Spicy food","Slurping ramen","Hot soup","Blowtorch","Cracking an egg","Soufflé pancake","Sushi","Omurice","Monster","Giant prawn","Chopsticks","Wasabi"],
   taboo:[["Katsu Curry","Japanese","Fried","Rice","Brown"],["Tempura","Prawn","Fried","Batter","Crispy"],["Tonkatsu","Pork","Cutlet","Fried","Breaded"],["Omurice","Egg","Omelette","Rice","Ketchup"],["Bak Kut Teh","Pork","Ribs","Soup","Herbal"],["Yakiniku","Grill","BBQ","Meat","Table"],["Aburi","Torch","Flame","Seared","Sushi"],["Gyoza","Dumpling","Fried","Pork","Pleat"],["Miso Soup","Tofu","Seaweed","Bowl","Brown"],["Wasabi","Green","Spicy","Sushi","Nose"],["Chopsticks","Eat","Sticks","Wooden","Hold"],["Matcha","Green","Tea","Powder","Latte"],["Onsen Egg","Soft","Runny","Yolk","Hot spring"]],
   challenge:[["Umami","Taste","Savoury","Fifth","MSG"],["Itadakimasu","Before","Meal","Thanks","Japanese"],["Omakase","Chef","Choose","Trust","Sushi"],["Furikake","Sprinkle","Seaweed","Rice","Seasoning"]]}
];
const REST = {
  easy:[["Monster Curry","Spicy","Giant","Rice","Challenge"],["Tempura-EN","Prawn","Fried","Batter","Crispy"],["Tonkatsu ENbiton","Pork","Cutlet","Fried","Breaded"],["Tamago-EN","Egg","Omurice","Pancake","Yolk"],["Bari Bari Steak","Steak","Beef","Teppan","Sizzling"]],
  hard:[["Wa-En Wagyu Yakiniku","Beef","Grill","BBQ","Table"],["Aburi-EN","Torch","Flame","Seared","Bowl"],["Kiwami","Ramen","Fried Rice","Gyoza","Noodles"],["Nikutosake","Meat","Sake","Hamburg","Drinks"],["Monster Planet","Curry","Halal","Spicy","Burger"],["En Yeoh’s Bak Kut Teh","Pork","Ribs","Soup","Herbal"],["EN Dining","Sushi","Sashimi","Japanese","Bar"]]
};

/* ===== STATE ===== */
const S = {mode:null, cat:null, card:null, turn:60, nTeams:2, cover:false,
  teams:[], active:0, used:{}, timeLeft:60, ticking:null};
function load(){ try{ const d=JSON.parse(localStorage.getItem("enct-v2")||"{}");
  Object.assign(S,{turn:d.turn||60,nTeams:Math.min(d.nTeams||2,2),cover:!!d.cover,teams:d.teams||[],active:d.active||0,used:d.used||{}});}catch(e){} }
function save(){ try{ localStorage.setItem("enct-v2",JSON.stringify({turn:S.turn,nTeams:S.nTeams,cover:S.cover,teams:S.teams,active:S.active,used:S.used})) }catch(e){} }
function ensureTeams(){ while(S.teams.length<S.nTeams) S.teams.push({name:"Team "+(S.teams.length+1),score:0}); S.teams.length=S.nTeams; if(S.active>=S.nTeams)S.active=0; }

/* ===== DECKS ===== */
function deckKey(pile){ return S.mode+"|"+(S.cat?S.cat.id:"rest")+"|"+pile; }
function pileCards(pile){
  if(S.mode==="restaurant") return REST[pile];
  if(S.mode==="charades") return S.cat.charades;
  return pile==="challenge"?S.cat.challenge:S.cat.taboo;
}
function remaining(pile){ const all=pileCards(pile), u=S.used[deckKey(pile)]||[]; return all.map((_,i)=>i).filter(i=>!u.includes(i)); }
function draw(pile, hideFirst){
  stopTimerIfDone();
  const left=remaining(pile);
  if(!left.length){ S.card={empty:true,pile}; render(); return; }
  const i=left[Math.floor(Math.random()*left.length)];
  (S.used[deckKey(pile)] ||= []).push(i); save();
  const c=pileCards(pile)[i];
  const pts = S.mode==="restaurant" ? (pile==="easy"?2:3) : (pile==="challenge"?2:1);
  S.card = S.mode==="charades" ? {text:c,pts,pile} : {text:c[0],forb:c.slice(1),pts,pile};
  S.card.hidden = !!hideFirst; // only the first card of a category starts hidden
  render(true);
}
function shufflePile(pile){ delete S.used[deckKey(pile)]; save(); draw(pile); }

/* ===== RENDER ===== */
const $=id=>document.getElementById(id);
function show(id){ document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("on",s.id===id)); window.scrollTo(0,0); }

function openCats(){
  $("catEyebrow").textContent = S.mode==="charades"?"Charades":"Taboo";
  $("catList").innerHTML = CATS.map(c=>{
    const n = S.mode==="charades" ? c.charades.length+" prompts" : (c.taboo.length+" + "+c.challenge.length+" challenge");
    return `<button class="tile" data-cat="${c.id}"><div class="num">${c.num}</div><div><b>${c.name}</b><span>${c.blurb}</span></div><div class="count">${n}</div></button>`;
  }).join("");
  $("catRules").innerHTML = S.mode==="charades"
    ? "<b>Charades:</b> no talking, no sound effects. Every answer is a word, a short phrase or a name. Close enough counts — “poop” is fine for “Dog poop”. 1 point per correct guess."
    : "<b>Taboo:</b> never say the answer, any part of it, or a forbidden word. Saying one = skip the card, no point. Challenge cards are worth 2.";
  show("cats");
}

function startPlay(){
  ensureTeams();
  S.timeLeft=S.turn; stopTimer(); paintTimer();
  $("playTitle").textContent = S.mode==="restaurant" ? "Guess the Restaurant" : (S.mode==="charades"?"Charades":"Taboo")+" · "+S.cat.name;
  // draw buttons
  let d="";
  if(S.mode==="taboo") d=`<button class="btn ghost" data-draw="taboo">Normal card</button><button class="btn ghost gold" data-draw="challenge">★ Challenge · 2 pts</button>`;
  else if(S.mode==="restaurant") d=`<button class="btn ghost" data-draw="easy">Easier · 2 pts</button><button class="btn ghost gold" data-draw="hard">★ Harder · 3 pts</button>`;
  $("draws").innerHTML=d;
  show("play");
  draw(S.mode==="restaurant"?"easy":(S.mode==="taboo"?"taboo":"charades"), true);
}

function render(anim){
  const c=S.card, st=$("stage");
  const pile=c.pile;
  const left=remaining(pile).length, total=pileCards(pile).length;
  const pileName = {charades:"prompts",taboo:"cards",challenge:"challenge cards",easy:"easier cards",hard:"harder cards"}[pile];
  $("playLeft").textContent = `${left} of ${total} ${pileName} left`;
  if(c.empty){
    st.innerHTML=`<div class="empty"><b>That pile is finished 🎉</b>Every card in it has been played.<br><br><button class="btn ghost" style="display:inline-flex;padding:0 18px" id="reshuffle">Reshuffle this pile</button></div>`;
    $("reshuffle").onclick=()=>shufflePile(pile);
    $("okBtn").disabled=$("skipBtn").disabled=true; return;
  }
  $("okBtn").disabled=$("skipBtn").disabled=false;
  $("okBtn").textContent = `Correct +${c.pts}`;
  const label = S.mode==="restaurant"?"Guess the Restaurant":(S.mode==="charades"?"Charades · act it out":S.cat.name);
  const ptsCls = c.pts===3?"p3":c.pts===2?"p2":"";
  const ptsTxt = (pile==="challenge"?"Challenge · ":"")+c.pts+(c.pts>1?" pts":" pt");
  st.innerHTML = `<div class="card${c.hidden?" hidden":""}${anim?" flash":""}" id="card">
     <div class="tag"><span>${label}</span><span class="pts ${ptsCls}">${ptsTxt}</span></div>
     <div class="word ${c.forb?"tb":"ch"}">${esc(c.text)}</div>
     ${c.forb?`<div class="forb"><h4>FORBIDDEN WORDS</h4><ul>${c.forb.map(f=>`<li>${esc(f)}</li>`).join("")}</ul></div>`:`<div class="hint">No talking · no sound effects · close enough counts</div>`}
     <div class="cover"><b>Card hidden</b><span>Tap to reveal to the ${S.mode==="charades"?"actor":"clue-giver"}</span></div>
   </div>`;
  $("card").onclick=()=>{ if(!c.hidden) return; c.hidden=false; $("card").classList.remove("hidden"); };
  paintTeams();
}
function esc(s){return s.replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]))}

function paintTeams(){
  $("teams").innerHTML=S.teams.map((t,i)=>`<button class="team${i===S.active?" on":""}" data-team="${i}"><div class="n">${t.name}${i===S.active?" · turn":""}</div><div class="sc">${t.score}</div><span class="minus" data-minus="${i}">−</span></button>`).join("");
}

/* ===== TIMER ===== */
function paintTimer(){ const t=$("timer"); t.textContent=(S.ticking?"":"▶ ")+S.timeLeft; t.classList.toggle("run",!!S.ticking&&S.timeLeft>10); t.classList.toggle("low",S.timeLeft<=10&&S.timeLeft<S.turn); }
function stopTimer(){ clearInterval(S.ticking); S.ticking=null; }
function stopTimerIfDone(){ if(S.timeLeft<=0){ S.timeLeft=S.turn; paintTimer(); } }
function toggleTimer(){
  if(S.ticking){ stopTimer(); paintTimer(); return; }
  if(S.timeLeft<=0) S.timeLeft=S.turn;
  try{ actx ||= new (window.AudioContext||window.webkitAudioContext)(); actx.resume&&actx.resume(); }catch(e){}
  S.ticking=setInterval(()=>{ S.timeLeft--; if(S.timeLeft<=3&&S.timeLeft>0)beep(660,.08); if(S.timeLeft<=0){ stopTimer(); beep(330,.6); toast(S.teams.length>1?"Time’s up! Next team →":"Time’s up!"); nextTeam(); } paintTimer(); },1000);
  paintTimer();
}
function nextTeam(){ S.active=(S.active+1)%S.teams.length; save(); paintTeams(); }
let actx;
function beep(f,d){ try{ actx ||= new (window.AudioContext||window.webkitAudioContext)(); const o=actx.createOscillator(),g=actx.createGain(); o.frequency.value=f; o.type="square"; g.gain.value=.08; o.connect(g).connect(actx.destination); o.start(); o.stop(actx.currentTime+d);}catch(e){} }
function toast(m){ const t=$("toast"); t.textContent=m; t.classList.add("show"); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("show"),2200); }

/* ===== EVENTS ===== */
document.addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b) return;
  if(b.dataset.mode){ S.mode=b.dataset.mode; S.cat=null; S.mode==="restaurant"?startPlay():openCats(); }
  else if(b.dataset.cat){ S.cat=CATS.find(c=>c.id===b.dataset.cat); startPlay(); }
  else if(b.dataset.go){ stopTimer(); if(b.dataset.go==="back"&&S.mode!=="restaurant") openCats(); else show("home"); }
  else if(b.dataset.draw){ draw(b.dataset.draw); }
  else if(e.target.dataset.minus!==undefined){ const t=S.teams[+e.target.dataset.minus]; t.score=Math.max(0,t.score-1); save(); paintTeams(); }
  else if(b.dataset.team!==undefined){ S.active=+b.dataset.team; save(); paintTeams(); }
  else if(b.dataset.t){ S.turn=+b.dataset.t; segOn("timeSeg",b); save(); }
  else if(b.dataset.n){ S.nTeams=+b.dataset.n; segOn("teamSeg",b); ensureTeams(); save(); }
});
function segOn(id,b){ document.querySelectorAll("#"+id+" button").forEach(x=>x.classList.toggle("on",x===b)); }
$("okBtn").onclick=()=>{ S.teams[S.active].score+=S.card.pts; save(); paintTeams(); draw(S.card.pile); };
$("skipBtn").onclick=()=>draw(S.card.pile);
$("timer").onclick=toggleTimer;
$("resetAll").onclick=()=>{ if(!confirmReset()) return; S.used={}; S.teams=[]; S.active=0; ensureTeams(); save(); toast("Scores and decks reset"); };
let armed=0; function confirmReset(){ const b=$("resetAll"); if(Date.now()-armed<3000){armed=0;b.textContent="Reset game";return true;} armed=Date.now(); b.textContent="Tap again to confirm"; setTimeout(()=>b.textContent="Reset game",3000); return false; }

/* init */
load(); ensureTeams();
[["timeSeg","t",S.turn],["teamSeg","n",S.nTeams]].forEach(([id,k,v])=>document.querySelectorAll("#"+id+" button").forEach(x=>x.classList.toggle("on",x.dataset[k]==String(v))));
