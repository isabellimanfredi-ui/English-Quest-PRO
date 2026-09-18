const TOPICS = [
  {id:"simple-present",name:"Simple Present",level:"Muito básico",desc:"Rotinas, hábitos e fatos",sentences:[
    "I study English every day.","She works at a hospital.","They live in Brazil.","He likes coffee.","We play soccer on Sundays.","My sister speaks English very well.","I usually wake up at seven.","The sun rises in the east.","My parents work from home.","She goes to school by bus."
  ],prompts:[
    "What do you usually do in the morning?","Where do you live and what do you like about your city?","What does a family member do every day?","What food do you like? Why?","What do you do on weekends?","Describe your daily routine.","What does your best friend usually do?","What time do you usually wake up?","What activities do you enjoy?","Describe a normal day in your life."
  ]},
  {id:"present-continuous",name:"Present Continuous",level:"Básico",desc:"Ações acontecendo agora ou temporariamente",sentences:[
    "I am studying right now.","She is cooking dinner.","They are watching a movie.","He is talking to his friend.","We are learning English.","The baby is sleeping.","I am wearing a blue shirt today.","My parents are traveling this week.","She is working from home today.","They are waiting for the bus."
  ],prompts:[
    "What are you doing right now?","What is someone in your house doing now?","What are you studying these days?","What are you watching lately?","What are you doing this weekend?","Describe what people around you are doing.","What are you learning at the moment?","What is a friend doing today?","What are you working on this week?","Describe a temporary change in your routine."
  ]},
  {id:"simple-past",name:"Simple Past",level:"Básico–intermediário",desc:"Ações concluídas no passado",sentences:[
    "I visited my grandmother yesterday.","She watched a movie last night.","They went to the beach on Sunday.","He bought a new phone.","We studied for the test.","I woke up late this morning.","She called me after work.","They ate pizza for dinner.","He saw an old friend yesterday.","We traveled to São Paulo last year."
  ],prompts:[
    "What did you do yesterday?","Where did you go last weekend?","What did you eat yesterday?","Describe a recent movie you watched.","What did you do last night?","Tell me about a trip you took.","What did you buy recently?","Who did you talk to yesterday?","Describe something fun you did last month.","Tell a short story about your last weekend."
  ]},
  {id:"past-continuous",name:"Past Continuous",level:"Intermediário",desc:"Ações em andamento em um momento passado",sentences:[
    "I was studying when you called.","She was cooking at eight o'clock.","They were playing when it started to rain.","He was sleeping when I arrived.","We were talking about the trip.","I was driving home at six.","She was reading while he was watching TV.","They were having dinner when the phone rang.","He was working all afternoon.","We were walking when we saw the accident."
  ],prompts:[
    "What were you doing at eight last night?","What were you doing when someone called you recently?","Describe what you were doing yesterday afternoon.","What were people around you doing last weekend?","Tell a story using 'when'.","What were you doing when something unexpected happened?","Describe a scene from a busy place.","What were you doing at this time yesterday?","Tell me about an interruption you experienced.","Create a short story with two actions happening at the same time."
  ]},
  {id:"future",name:"Future — will / going to",level:"Intermediário",desc:"Previsões, decisões e planos",sentences:[
    "I will call you tomorrow.","She is going to study tonight.","They will probably arrive late.","We are going to travel next month.","I will help you with that.","He is going to buy a new car.","I think it will rain tomorrow.","We are going to have dinner together.","She will become a great doctor.","They are going to move next year."
  ],prompts:[
    "What will you do tomorrow?","What are you going to do this weekend?","What do you think will happen next year?","Describe a plan you already have.","What are you going to study tonight?","What will your life be like in five years?","What are you going to buy soon?","Make three predictions about your future.","Describe your next vacation plan.","What do you think will change in your life?"
  ]},
  {id:"present-perfect",name:"Present Perfect",level:"Intermediário",desc:"Experiências e ações com ligação ao presente",sentences:[
    "I have visited Rio de Janeiro twice.","She has already finished her homework.","They have never tried sushi.","He has lived here for five years.","We have known each other since 2020.","I have just eaten lunch.","She has studied English for three years.","They have already seen that movie.","He has never traveled abroad.","We have worked together since January."
  ],prompts:[
    "What places have you visited?","What have you learned recently?","Have you ever tried a new food? Describe it.","How long have you studied English?","What have you already done today?","Have you ever traveled abroad?","What movies have you watched recently?","Who have you known for a long time?","What have you never tried but want to try?","Describe something you have done many times."
  ]},
  {id:"modals",name:"Modal Verbs",level:"Intermediário",desc:"Can, could, should, must, might e outros",sentences:[
    "You should study a little every day.","I can speak English.","Could you help me?","You must wear a seat belt.","She might come later.","We should leave now.","He can swim very well.","You must not touch that button.","Could I have some water?","They might be late because of traffic."
  ],prompts:[
    "What should a beginner do to learn English?","What can you do very well?","What could you do when you were a child?","What must people do to stay safe?","What might you do this weekend?","Give advice to a student.","What rules must you follow at school or work?","Ask for something politely using could.","What skills can you teach someone?","Give five pieces of advice to someone learning English."
  ]},
  {id:"comparatives",name:"Comparatives & Superlatives",level:"Intermediário",desc:"Comparar pessoas, coisas e lugares",sentences:[
    "My car is faster than yours.","This book is more interesting than that one.","She is the tallest person in the class.","Today is hotter than yesterday.","English is easier for me now.","This is the best restaurant in town.","My sister is younger than me.","That test was more difficult than the first one.","He is the most careful driver I know.","This phone is cheaper than mine."
  ],prompts:[
    "Compare two cities you know.","Which food is better: homemade or restaurant food? Why?","Compare two movies you watched.","Who is the most organized person you know?","Which subject is easier for you?","Compare your life now with your life five years ago.","What is the best place you have visited?","Compare two phones or computers.","What is the most difficult thing about English?","Make five comparisons about your daily life."
  ]},
  {id:"conditionals",name:"Conditionals",level:"Avançado",desc:"Situações reais, hipotéticas e consequências",sentences:[
    "If I have time, I will call you.","If it rains, we will stay home.","If I were rich, I would travel more.","If you study, you will improve.","If she had more time, she would learn another language.","If we leave now, we will arrive early.","If I were you, I would practice every day.","If he studies harder, he will pass the test.","If they had a car, they would travel more.","If you heat ice, it melts."
  ],prompts:[
    "What will you do if it rains tomorrow?","What would you do if you won a large amount of money?","What would you change if you could change one thing?","What will happen if you study English every day?","If you had a free month, what would you do?","Give advice using 'If I were you'.","What would you do if you could live anywhere?","What will you do if you finish your work early?","Create three hypothetical situations.","Explain what happens if people do not sleep enough."
  ]},
  {id:"passive",name:"Passive Voice",level:"Avançado",desc:"Foco na ação ou no resultado",sentences:[
    "English is spoken in many countries.","The book was written by a famous author.","The house is cleaned every week.","The package was delivered yesterday.","The problem will be solved soon.","The bridge was built in 1990.","The results have been published.","The food is prepared fresh every morning.","The room was decorated for the party.","The project is being completed by the team."
  ],prompts:[
    "Describe how a product is made.","Describe how your favorite food is prepared.","What was built in your city recently?","Describe something that was invented.","How are books or movies produced?","Describe how an exam is prepared.","What things are done every day in your home?","Describe a package being delivered.","What will be changed in your city?","Explain how something familiar is made, using passive voice."
  ]}
];

const GRAMMAR = {
"simple-present":[
["She ___ to work every day.","go","goes","going","is go",1,"No Simple Present, com he/she/it, o verbo geralmente recebe -s/-es. Por isso usamos 'goes'."],
["I ___ coffee in the morning.","drink","drinks","drinking","am drink",0,"Com I/you/we/they, usamos o verbo na forma base: 'I drink'."],
["They ___ in Brazil.","lives","live","living","are live",1,"O sujeito 'they' pede a forma base: 'live'."],
["He ___ English very well.","speak","speaks","speaking","is speak",1,"Com he/she/it, acrescentamos -s: 'speaks'."],
["___ you like pizza?","Does","Do","Are","Is",1,"Perguntas no Simple Present usam Do com I/you/we/they e Does com he/she/it."],
["She ___ like tea.","don't","doesn't","isn't","not",1,"Com she usamos 'doesn't' + verbo base: 'doesn't like'."],
["My parents ___ at home.","works","work","working","is work",1,"'My parents' = they, então usamos 'work'."],
["The sun ___ in the east.","rise","rises","rising","is rise",1,"'The sun' = it; por isso 'rises'."],
["I usually ___ at seven.","wakes up","wake up","waking up","am wake up",1,"Com I, usamos a forma base: 'wake up'."],
["He ___ to school by bus.","go","goes","going","does go",1,"Com he, 'go' vira 'goes' no Simple Present."]
],
"present-continuous":[
["I ___ studying right now.","am","is","are","be",0,"Present Continuous = am/is/are + verbo com -ing. Com I, usamos am."],
["She ___ cooking dinner.","am","is","are","be",1,"Com she, usamos 'is': she is cooking."],
["They ___ watching a movie.","am","is","are","be",2,"Com they, usamos 'are'."],
["He is ___ to his friend.","talk","talks","talking","talked",2,"Depois de am/is/are usamos o verbo com -ing."],
["We ___ learning English.","am","is","are","was",2,"Com we, usamos 'are'."],
["The baby is ___.","sleep","sleeps","sleeping","slept",2,"A estrutura é is + verbo-ing: 'is sleeping'."],
["I am ___ a blue shirt today.","wear","wears","wearing","wore",2,"A ação temporária está no Present Continuous: 'am wearing'."],
["My parents are ___ this week.","travel","traveled","traveling","travels",2,"Depois de 'are' usamos 'traveling'."],
["She ___ working from home today.","am","is","are","be",1,"Com she, usamos 'is'."],
["They are ___ for the bus.","wait","waits","waiting","waited",2,"'Are waiting' é a forma correta."]
],
"simple-past":[
["I ___ my grandmother yesterday.","visit","visited","visiting","have visit",1,"'Yesterday' indica passado concluído. O passado de visit é visited."],
["She ___ a movie last night.","watch","watched","watching","watches",1,"No passado, o verbo regular watch vira watched."],
["They ___ to the beach on Sunday.","go","went","gone","going",1,"O passado de go é irregular: went."],
["He ___ a new phone.","buy","bought","buys","buying",1,"O passado de buy é bought."],
["We ___ for the test.","study","studied","studying","studies",1,"Study vira studied no passado."],
["I ___ up late this morning.","wake","woke","waked","waking",1,"O passado de wake é woke."],
["She ___ me after work.","call","called","calling","calls",1,"Call é regular: called."],
["They ___ pizza for dinner.","eat","ate","eaten","eating",1,"O passado de eat é ate."],
["He ___ an old friend yesterday.","see","saw","seen","seeing",1,"O passado de see é saw."],
["We ___ to São Paulo last year.","travel","traveled","traveling","travels",1,"Travel é regular: traveled."]
],
"past-continuous":[
["I ___ studying when you called.","was","were","am","did",0,"Past Continuous = was/were + -ing. Com I, usamos was."],
["She ___ cooking at eight.","was","were","is","did",0,"Com she, usamos was."],
["They ___ playing when it rained.","was","were","are","did",1,"Com they, usamos were."],
["He was ___ when I arrived.","sleep","slept","sleeping","sleeps",2,"Depois de was usamos o verbo com -ing."],
["We ___ talking about the trip.","was","were","are","did",1,"Com we, usamos were."],
["I was ___ home at six.","drive","drove","driving","drives",2,"'Was driving' é Past Continuous."],
["She was reading while he ___ watching TV.","was","were","is","did",0,"He é singular, então usamos was."],
["They were having dinner when the phone ___.","ring","rang","rung","ringing",1,"A ação curta que interrompe a ação em andamento fica no Simple Past: rang."],
["He was ___ all afternoon.","work","worked","working","works",2,"Depois de was, usamos working."],
["We were walking when we ___ the accident.","see","saw","seen","seeing",1,"A ação que aconteceu durante a caminhada usa Simple Past: saw."]
],
"future":[
["I ___ call you tomorrow.","will","am","did","have",0,"Will + verbo base é uma forma comum de falar de futuro."],
["She is ___ study tonight.","going to","will to","go to","going",0,"Going to + verbo base: is going to study."],
["They ___ probably arrive late.","will","are","did","have",0,"Will expressa previsão ou decisão sobre o futuro."],
["We are ___ travel next month.","going to","will to","go to","going",0,"Depois de 'are' usamos 'going to + verbo'."],
["I ___ help you.","will","am going","did","have",0,"Para uma decisão/promessa, 'will help' é adequado."],
["He is going to ___ a new car.","buy","buys","bought","buying",0,"Depois de going to usamos verbo na forma base."],
["I think it ___ rain tomorrow.","will","is going","does","has",0,"Previsões com 'I think' frequentemente usam will."],
["We are going to ___ dinner together.","have","having","had","has",0,"Going to + verbo base: going to have."],
["She ___ become a great doctor.","will","is","does","has",0,"Will + verbo base: will become."],
["They are going to ___ next year.","move","moves","moved","moving",0,"Going to é seguido da forma base: move."]
],
"present-perfect":[
["I ___ visited Rio twice.","have","has","did","am",0,"Present Perfect = have/has + particípio. Com I usamos have."],
["She ___ already finished.","have","has","is","did",1,"Com she usamos has."],
["They have never ___ sushi.","try","tried","trying","tries",1,"Depois de have/has usamos o particípio; try → tried."],
["He has ___ here for five years.","live","lived","living","lives",1,"'Has lived' indica uma situação que começou no passado e tem ligação com o presente."],
["We have ___ each other since 2020.","know","known","knew","knowing",1,"O particípio de know é known."],
["I have just ___ lunch.","eat","eaten","ate","eating",1,"O particípio de eat é eaten."],
["She has ___ English for three years.","study","studied","studying","studies",1,"O particípio de study é studied."],
["They have already ___ that movie.","see","saw","seen","seeing",2,"O particípio de see é seen."],
["He has never ___ abroad.","travel","traveled","traveling","travels",1,"Com has usamos o particípio: traveled."],
["We have ___ together since January.","work","worked","working","works",1,"O particípio regular de work é worked."]
],
"modals":[
["You ___ study every day.","should","should to","shoulds","are should",0,"Modal + verbo base. Não usamos 'to' depois de should."],
["I ___ speak English.","can","can to","cans","am can",0,"Can + verbo base expressa habilidade."],
["___ you help me?","Could","Could to","Cans","Are",0,"Could é usado para pedidos educados."],
["You ___ wear a seat belt.","must","must to","musts","are must",0,"Must + verbo base expressa obrigação."],
["She ___ come later.","might","might to","mights","is might",0,"Might + verbo base expressa possibilidade."],
["We ___ leave now.","should","should to","shoulds","are should",0,"Should + verbo base."],
["He ___ swim very well.","can","can to","cans","is can",0,"Can expressa habilidade."],
["You ___ not touch that button.","must","must to","musts","are must",0,"Must not expressa proibição."],
["___ I have some water?","Could","Could to","Can to","Am",0,"Could I...? é uma forma educada de pedir algo."],
["They ___ be late because of traffic.","might","might to","mights","are might",0,"Might indica possibilidade."]
],
"comparatives":[
["My car is ___ than yours.","fast","faster","fastest","more fast",1,"Adjetivos curtos normalmente recebem -er no comparativo: faster."],
["This book is ___ interesting than that one.","more","most","many","much",0,"Adjetivos mais longos usam more + adjetivo."],
["She is the ___ person in the class.","tall","taller","tallest","more tall",2,"Superlativo: the + adjetivo + -est."],
["Today is ___ than yesterday.","hotter","hottest","more hot","hot",0,"Comparação entre dois dias: hotter."],
["English is ___ for me now.","easier","easiest","more easy","easy",0,"Easy → easier."],
["This is the ___ restaurant in town.","better","best","good","more good",1,"O superlativo irregular de good é best."],
["My sister is ___ than me.","young","younger","youngest","more young",1,"Comparativo de young: younger."],
["That test was ___ difficult than the first.","more","most","many","much",0,"Difficult é longo: more difficult."],
["He is the ___ driver I know.","careful","more careful","most careful","carefullest",2,"Superlativo de adjetivo longo: the most careful."],
["This phone is ___ than mine.","cheap","cheaper","cheapest","more cheap",1,"Comparativo de cheap: cheaper."]
],
"conditionals":[
["If I have time, I ___ call you.","will","would","am","did",0,"First Conditional: If + Present, will + verbo para uma possibilidade futura."],
["If it rains, we ___ stay home.","will","would","are","did",0,"Para uma consequência futura provável, usamos will."],
["If I were rich, I ___ travel more.","would","will","am","did",0,"Second Conditional: situação hipotética → would + verbo."],
["If you study, you ___ improve.","will","would","did","are",0,"First Conditional."],
["If she had more time, she ___ learn another language.","would","will","is","did",0,"Hipótese no presente: would + verbo."],
["If we leave now, we ___ arrive early.","will","would","did","are",0,"Possibilidade futura: will."],
["If I were you, I ___ practice every day.","would","will","am","did",0,"'If I were you' é uma estrutura típica para dar conselho hipotético."],
["If he studies harder, he ___ pass.","will","would","did","is",0,"First Conditional."],
["If they had a car, they ___ travel more.","would","will","are","did",0,"Second Conditional: would + verbo."],
["If you heat ice, it ___.","melts","will melt","would melt","melted",0,"Zero Conditional: fatos gerais usam Present Simple nas duas partes."]
],
"passive":[
["English ___ spoken in many countries.","is","are","be","has",0,"Passive Voice no presente: am/is/are + particípio. English é singular → is spoken."],
["The book was ___ by a famous author.","write","written","wrote","writing",1,"Passive usa o particípio: write → written."],
["The house ___ cleaned every week.","is","are","was","be",0,"House é singular e a ação é habitual: is cleaned."],
["The package was ___ yesterday.","deliver","delivered","delivering","delivers",1,"Was + particípio: was delivered."],
["The problem will be ___ soon.","solve","solved","solving","solves",1,"Will be + particípio: will be solved."],
["The bridge was ___ in 1990.","build","built","building","builds",1,"O particípio de build é built."],
["The results have been ___.","publish","published","publishing","publishes",1,"Have been + particípio: published."],
["The food is ___ fresh every morning.","prepare","prepared","preparing","prepares",1,"Is + particípio: is prepared."],
["The room was ___ for the party.","decorate","decorated","decorating","decorates",1,"Was + particípio: was decorated."],
["The project is being ___ by the team.","complete","completed","completing","completes",1,"Passive Continuous: is being + particípio → is being completed."]
]
};

let state={xp:Number(localStorage.getItem("eq_xp")||0)};
let media={stream:null,ctx:null,processor:null,source:null,chunks:[],recording:false};

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500)}
function addXP(n){state.xp+=n;localStorage.setItem("eq_xp",state.xp);$("#xp").textContent=state.xp}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function showPage(id){
  $$(".page").forEach(p=>p.classList.toggle("active",p.id===id));
  $$(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
$$("[data-page]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));

function topicCards(containerId,mode){
  const c=$("#"+containerId); c.innerHTML="";
  TOPICS.forEach((t,i)=>{
    const b=document.createElement("button");b.className="topic-card";
    b.innerHTML=`<span class="topic-number">${i+1}</span><span><strong>${escapeHtml(t.name)}</strong><small>${escapeHtml(t.level)} · ${escapeHtml(t.desc)}</small></span>`;
    b.onclick=()=>startMode(mode,i);c.appendChild(b);
  });
}
function renderAll(){ $("#xp").textContent=state.xp;topicCards("grammar-topics","grammar");topicCards("speaking-topics","speaking");topicCards("writing-topics","writing");topicCards("reading-topics","reading");}
function openExercise(mode,html){const el=$("#"+mode+"-exercise");el.classList.remove("hidden");el.innerHTML=html;el.scrollIntoView({behavior:"smooth",block:"start"})}

function startMode(mode,ti){
  const t=TOPICS[ti];
  if(mode==="grammar") renderGrammar(ti,0);
  if(mode==="speaking") renderSpeaking(ti,0);
  if(mode==="writing") renderWriting(ti,0);
  if(mode==="reading") renderReading(ti,0);
}

function renderGrammar(ti,qi){
  const t=TOPICS[ti], q=GRAMMAR[t.id][qi];
  openExercise("grammar",`
    <div class="exercise-head"><span class="pill">${escapeHtml(t.name)}</span><b>${qi+1}/10</b></div>
    <div class="progress"><span style="width:${(qi+1)*10}%"></span></div>
    <div class="question">${escapeHtml(q[0])}</div>
    <div class="options">${q.slice(1,5).map((x,i)=>`<button class="option" data-i="${i}">${escapeHtml(x)}</button>`).join("")}</div>
    <div id="g-feedback"></div>
  `);
  $$("#grammar-exercise .option").forEach(btn=>btn.onclick=()=>{
    if($$("#grammar-exercise .option").some(x=>x.disabled))return;
    const picked=Number(btn.dataset.i), correct=q[5];
    $$("#grammar-exercise .option").forEach(x=>{x.disabled=true;if(Number(x.dataset.i)===correct)x.classList.add("correct")});
    if(picked===correct){btn.classList.add("correct");addXP(10);$("#g-feedback").innerHTML=`<div class="feedback"><h4>✅ Correto!</h4><p>${escapeHtml(q[6])}</p><div class="actions"><button class="btn" id="g-next">${qi===9?"Finalizar tópico":"Próxima questão →"}</button></div></div>`}
    else{$$("#grammar-exercise .option")[picked].classList.add("wrong");$("#g-feedback").innerHTML=`<div class="feedback"><h4>❌ Vamos entender.</h4><p><b>Resposta:</b> ${escapeHtml(q[correct+1])}</p><p>${escapeHtml(q[6])}</p><div class="actions"><button class="btn" id="g-next">${qi===9?"Finalizar tópico":"Próxima questão →"}</button></div></div>`}
    $("#g-next").onclick=()=>qi===9?(toast("Tópico concluído! 🎉"),$("#grammar-exercise").classList.add("hidden")):renderGrammar(ti,qi+1);
  });
}

async function postJSON(path,payload){
  const r=await fetch(path,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
  const data=await r.json().catch(()=>({error:"Resposta inválida do servidor"}));
  if(!r.ok) throw new Error(data.error||"Não foi possível completar a solicitação.");
  return data;
}

function renderSpeaking(ti,qi){
  const t=TOPICS[ti], sentence=t.sentences[qi];
  openExercise("speaking",`
    <div class="exercise-head"><span class="pill">${escapeHtml(t.name)}</span><b>${qi+1}/10</b></div>
    <div class="progress"><span style="width:${(qi+1)*10}%"></span></div>
    <div class="question">${escapeHtml(sentence)}</div>
    <p class="muted">Leia a frase em voz alta. Tente falar naturalmente, sem soletrar.</p>
    <div class="record-box">
      <button class="mic" id="micBtn">🎤</button>
      <p id="recordStatus"><b>Toque para começar</b></p>
      <div class="audio-controls"><audio id="recordedAudio" controls class="hidden"></audio></div>
      <div class="actions" style="justify-content:center"><button class="btn" id="sendSpeech" disabled>Enviar para a IA</button></div>
    </div>
    <div id="s-feedback"></div>
  `);
  let wavBlob=null;
  $("#micBtn").onclick=async()=>{
    if(media.recording){stopPCMRecording();return}
    try{await startPCMRecording();$("#recordStatus").innerHTML="<b>Gravando...</b> fale agora e toque novamente para parar."}
    catch(e){$("#recordStatus").textContent=e.message}
  };
  $("#sendSpeech").onclick=async()=>{
    if(!wavBlob)return;
    $("#sendSpeech").disabled=true;$("#recordStatus").textContent="Analisando sua fala...";
    try{
      const b64=await blobToBase64(wavBlob);
      const out=await postJSON("/.netlify/functions/speaking-evaluate",{audioBase64:b64,mimeType:"audio/wav",expected:sentence,topic:t.name});
      addXP(Math.max(5,Math.round((out.score||0)/10)));
      $("#s-feedback").innerHTML=`<div class="feedback"><div class="score">${escapeHtml(out.score)}/100</div><h4>Transcrição</h4><p>${escapeHtml(out.transcript||"Não identificado")}</p><h4>Feedback</h4><p>${escapeHtml(out.feedback||"")}</p><h4>Como melhorar</h4><ul>${(out.tips||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul><div class="actions"><button class="btn" id="s-next">${qi===9?"Finalizar tópico":"Próxima frase →"}</button></div></div>`;
      $("#s-next").onclick=()=>qi===9?(toast("Speaking concluído! 🎤"),$("#speaking-exercise").classList.add("hidden")):renderSpeaking(ti,qi+1);
    }catch(e){$("#s-feedback").innerHTML=`<div class="feedback"><h4>Não deu para analisar.</h4><p>${escapeHtml(e.message)}</p></div>`;$("#sendSpeech").disabled=false}
  };
  async function startPCMRecording(){
    media.stream=await navigator.mediaDevices.getUserMedia({audio:true});
    const AC=window.AudioContext||window.webkitAudioContext;media.ctx=new AC();
    media.source=media.ctx.createMediaStreamSource(media.stream);
    media.processor=media.ctx.createScriptProcessor(4096,1,1);
    media.chunks=[];media.recording=true;
    media.processor.onaudioprocess=e=>{media.chunks.push(new Float32Array(e.inputBuffer.getChannelData(0)))};
    media.source.connect(media.processor);media.processor.connect(media.ctx.destination);
    $("#micBtn").classList.add("recording");$("#micBtn").textContent="⏹️";
  }
  function stopPCMRecording(){
    media.recording=false;media.processor.disconnect();media.source.disconnect();media.stream.getTracks().forEach(t=>t.stop());
    const samples=mergeFloat32(media.chunks);wavBlob=encodeWav(samples,media.ctx.sampleRate);
    const url=URL.createObjectURL(wavBlob);$("#recordedAudio").src=url;$("#recordedAudio").classList.remove("hidden");$("#sendSpeech").disabled=false;
    $("#micBtn").classList.remove("recording");$("#micBtn").textContent="🎤";$("#recordStatus").innerHTML="<b>Gravação pronta.</b> Você pode ouvir ou enviar.";
  }
}

function mergeFloat32(chunks){let len=chunks.reduce((a,b)=>a+b.length,0),out=new Float32Array(len),o=0;for(const c of chunks){out.set(c,o);o+=c.length}return out}
function encodeWav(samples,sampleRate){
  const buffer=new ArrayBuffer(44+samples.length*2),view=new DataView(buffer);
  const write=(off,s)=>{for(let i=0;i<s.length;i++)view.setUint8(off+i,s.charCodeAt(i))};
  write(0,"RIFF");view.setUint32(4,36+samples.length*2,true);write(8,"WAVE");write(12,"fmt ");view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,sampleRate,true);view.setUint32(28,sampleRate*2,true);view.setUint16(32,2,true);view.setUint16(34,16,true);write(36,"data");view.setUint32(40,samples.length*2,true);
  let o=44;for(let i=0;i<samples.length;i++){let s=Math.max(-1,Math.min(1,samples[i]));view.setInt16(o,s<0?s*0x8000:s*0x7fff,true);o+=2}return new Blob([buffer],{type:"audio/wav"})
}
function blobToBase64(blob){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(",")[1]);r.onerror=rej;r.readAsDataURL(blob)})}

function renderWriting(ti,qi){
  const t=TOPICS[ti], prompt=t.prompts[qi];
  openExercise("writing",`
    <div class="exercise-head"><span class="pill">${escapeHtml(t.name)}</span><b>${qi+1}/10</b></div>
    <div class="progress"><span style="width:${(qi+1)*10}%"></span></div>
    <div class="question">${escapeHtml(prompt)}</div>
    <textarea id="writingText" class="textarea" placeholder="Escreva sua resposta em inglês..."></textarea>
    <div class="actions"><button class="btn" id="correctWriting">Corrigir com IA</button></div>
    <div id="w-feedback"></div>
  `);
  $("#correctWriting").onclick=async()=>{
    const answer=$("#writingText").value.trim();if(answer.length<2){toast("Escreva uma resposta primeiro.");return}
    $("#correctWriting").disabled=true;$("#w-feedback").innerHTML=`<div class="feedback">Analisando sua resposta...</div>`;
    try{
      const out=await postJSON("/.netlify/functions/writing-correct",{topic:t.name,prompt,answer});
      addXP(Math.max(5,Math.round((out.score||0)/10)));
      $("#w-feedback").innerHTML=`<div class="feedback"><div class="score">${escapeHtml(out.score)}/100</div><h4>Correção</h4><p>${escapeHtml(out.feedback||"")}</p><h4>Versão corrigida</h4><p><b>${escapeHtml(out.corrected||answer)}</b></p><h4>Explicação em português</h4><p>${escapeHtml(out.explanation||"")}</p><h4>Naturalidade</h4><p>${escapeHtml(out.naturalness||"")}</p><div class="actions"><button class="btn" id="w-next">${qi===9?"Finalizar tópico":"Próxima pergunta →"}</button></div></div>`;
      $("#w-next").onclick=()=>qi===9?(toast("Writing concluído! ✍️"),$("#writing-exercise").classList.add("hidden")):renderWriting(ti,qi+1);
    }catch(e){$("#w-feedback").innerHTML=`<div class="feedback"><h4>Erro</h4><p>${escapeHtml(e.message)}</p></div>`;$("#correctWriting").disabled=false}
  };
}

function renderReading(ti,qi){
  const t=TOPICS[ti], sentence=t.sentences[qi];
  openExercise("reading",`
    <div class="exercise-head"><span class="pill">${escapeHtml(t.name)}</span><b>${qi+1}/10</b></div>
    <div class="progress"><span style="width:${(qi+1)*10}%"></span></div>
    <div class="question">Ouça e escreva o que você ouviu.</div>
    <div class="record-box">
      <p class="muted">A frase está escondida para você não depender da leitura.</p>
      <div class="actions" style="justify-content:center"><button class="btn" id="playReading">🔊 Ouvir frase</button><button class="btn secondary" id="playSlow">🐢 Ouvir devagar</button></div>
      <p id="readingStatus" class="muted"></p>
    </div>
    <textarea id="readingAnswer" class="textarea" placeholder="Digite exatamente o que você ouviu..."></textarea>
    <div class="actions"><button class="btn" id="checkReading">Verificar</button></div>
    <div id="r-feedback"></div>
  `);
  let audio=null;
  async function play(speed){
    $("#readingStatus").textContent="Gerando áudio com Gemini...";
    try{
      const out=await postJSON("/.netlify/functions/reading-tts",{text:sentence,speed});
      const blob=wavFromBase64(out.audioBase64);
      if(audio)audio.pause();audio=new Audio(URL.createObjectURL(blob));audio.playbackRate=1;await audio.play();
      $("#readingStatus").textContent="";
    }catch(e){$("#readingStatus").textContent=e.message}
  }
  $("#playReading").onclick=()=>play("normal");$("#playSlow").onclick=()=>play("slow");
  $("#checkReading").onclick=()=>{
    const ans=$("#readingAnswer").value.trim();const score=similarity(ans,sentence);
    addXP(Math.max(5,Math.round(score/10)));
    $("#r-feedback").innerHTML=`<div class="feedback"><div class="score">${score}/100</div><p><b>Frase correta:</b> ${escapeHtml(sentence)}</p><p>${score>=90?"Excelente! Você identificou praticamente toda a frase.":score>=70?"Muito bom. Revise os pequenos trechos que ficaram diferentes.":"Tente ouvir novamente, primeiro em velocidade normal e depois devagar."}</p><div class="actions"><button class="btn" id="r-next">${qi===9?"Finalizar tópico":"Próxima frase →"}</button></div></div>`;
    $("#r-next").onclick=()=>qi===9?(toast("Reading concluído! 🔊"),$("#reading-exercise").classList.add("hidden")):renderReading(ti,qi+1);
  };
}
function wavFromBase64(b64){const bin=atob(b64),bytes=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);return new Blob([bytes],{type:"audio/wav"})}
function normalize(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim()}
function similarity(a,b){const A=normalize(a).split(" ").filter(Boolean),B=normalize(b).split(" ").filter(Boolean);if(!A.length)return 0;const m=A.length,n=B.length,dp=Array.from({length:m+1},()=>Array(n+1).fill(0));for(let i=0;i<=m;i++)dp[i][0]=i;for(let j=0;j<=n;j++)dp[0][j]=j;for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(A[i-1]===B[j-1]?0:1));return Math.max(0,Math.round(100*(1-dp[m][n]/Math.max(m,n))))}

renderAll();showPage("home");
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}));}
