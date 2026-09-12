const DATA = [
{jp:"確認",reading:"かくにん",en:"confirm / check",vn:"xác nhận, kiểm tra",cat:"work",icon:"🔎",sentence:"内容をもう一度＿＿してください。",coll:["内容を確認する","動作を確認する","安全性を確認する","結果を確認する","確認を行う"]},
{jp:"準備",reading:"じゅんび",en:"preparation / prepare",vn:"chuẩn bị",cat:"daily",icon:"🧰",sentence:"会議の資料を＿＿しておきます。",coll:["資料を準備する","事前に準備する","準備ができる","準備を進める","準備不足"]},
{jp:"必要",reading:"ひつよう",en:"necessary / needed",vn:"cần thiết",cat:"daily",icon:"📌",sentence:"この作業には工具が＿＿です。",coll:["必要がある","必要になる","必要な情報","必要な部品","必要に応じて"]},
{jp:"相談",reading:"そうだん",en:"consultation / consult",vn:"trao đổi, bàn bạc",cat:"work",icon:"💬",sentence:"分からないことがあれば、先輩に＿＿してください。",coll:["上司に相談する","担当者に相談する","一度相談する","相談を受ける","相談しながら進める"]},
{jp:"確認する",reading:"かくにんする",en:"to confirm / verify",vn:"xác nhận, kiểm tra",cat:"work",icon:"✅",sentence:"寸法を図面と照らし合わせて＿＿。",coll:["寸法を確認する","仕様を確認する","図面を確認する","状態を確認する","再度確認する"]},
{jp:"測定",reading:"そくてい",en:"measurement / measure",vn:"đo, phép đo",cat:"medical",icon:"📏",sentence:"部品の寸法を＿＿します。",coll:["寸法を測定する","圧力を測定する","流量を測定する","測定結果","測定値"]},
{jp:"圧力",reading:"あつりょく",en:"pressure",vn:"áp suất",cat:"medical",icon:"🌡️",sentence:"＿＿が高すぎると、流量が低下することがあります。",coll:["圧力を測定する","圧力を確認する","圧力が高い","圧力が低い","圧力を調整する"]},
{jp:"圧力損失",reading:"あつりょくそんしつ",en:"pressure loss",vn:"tổn thất áp suất",cat:"medical",icon:"💨",sentence:"流路が細いと、＿＿が大きくなる可能性があります。",coll:["圧力損失が大きい","圧力損失を減らす","圧力損失を測定する","圧力損失を確認する","圧力損失の原因"]},
{jp:"吸引",reading:"きゅういん",en:"suction / aspiration",vn:"hút, hút dịch",cat:"medical",icon:"🫧",sentence:"このチューブは血液や液体の＿＿に使用します。",coll:["吸引する","吸引力","吸引圧","吸引量","吸引チューブ","吸引を行う"]},
{jp:"洗浄",reading:"せんじょう",en:"cleaning / washing",vn:"làm sạch, rửa",cat:"medical",icon:"💧",sentence:"使用後は十分に＿＿してください。",coll:["洗浄する","洗浄方法","洗浄液","洗浄工程","洗浄後","洗浄性"]},
{jp:"滅菌",reading:"めっきん",en:"sterilization",vn:"tiệt khuẩn",cat:"medical",icon:"🧼",sentence:"製品は出荷前に＿＿されます。",coll:["滅菌する","滅菌方法","滅菌条件","滅菌工程","滅菌後","滅菌対応"]},
{jp:"公差",reading:"こうさ",en:"tolerance",vn:"dung sai",cat:"work",icon:"📐",sentence:"この寸法の＿＿を確認してください。",coll:["寸法公差","公差範囲","公差を設定する","公差を確認する","公差内"]},
{jp:"仕様",reading:"しよう",en:"specification",vn:"quy cách, thông số kỹ thuật",cat:"work",icon:"📋",sentence:"お客様の＿＿に合わせて設計します。",coll:["仕様を確認する","仕様を満たす","仕様変更","要求仕様","製品仕様"]},
{jp:"要求",reading:"ようきゅう",en:"requirement / request",vn:"yêu cầu",cat:"work",icon:"🎯",sentence:"お客様の＿＿を正確に把握することが重要です。",coll:["要求を満たす","要求事項","顧客要求","要求仕様","要求に応える"]},
{jp:"納期",reading:"のうき",en:"delivery deadline / lead time",vn:"thời hạn giao hàng",cat:"work",icon:"📅",sentence:"納期について、もう一度＿＿させてください。",coll:["納期を確認する","納期を守る","納期に間に合う","納期を調整する","納期変更"]},
{jp:"漏れ",reading:"もれ",en:"leakage / leak",vn:"rò rỉ",cat:"medical",icon:"💧",sentence:"組み立て後に＿＿がないか確認します。",coll:["漏れがある","漏れがない","漏れを確認する","漏れを防ぐ","液漏れ","エア漏れ"]},
{jp:"組み立て",reading:"くみたて",en:"assembly",vn:"lắp ráp",cat:"work",icon:"🔧",sentence:"まず製品の＿＿工程を確認します。",coll:["組み立てる","組み立て工程","組み立て作業","組み立て方法","組み立て後"]},
{jp:"部品",reading:"ぶひん",en:"part / component",vn:"linh kiện, bộ phận",cat:"work",icon:"⚙️",sentence:"この＿＿の材質を確認してください。",coll:["部品を交換する","部品を確認する","部品番号","部品形状","主要部品"]},
{jp:"材質",reading:"ざいしつ",en:"material / material quality",vn:"vật liệu, chất liệu",cat:"work",icon:"🧱",sentence:"この部品の＿＿は何ですか。",coll:["材質を選定する","材質を確認する","材質変更","材質特性","材質記号"]},
{jp:"流量",reading:"りゅうりょう",en:"flow rate",vn:"lưu lượng",cat:"medical",icon:"🌊",sentence:"＿＿を測定して性能を評価します。",coll:["流量を測定する","流量を調整する","流量が増える","流量が低下する","流量特性"]},
{jp:"説明",reading:"せつめい",en:"explanation / explain",vn:"giải thích",cat:"daily",icon:"🗣️",sentence:"この結果について簡単に＿＿してください。",coll:["説明する","詳しく説明する","理由を説明する","説明を受ける","説明資料"]},
{jp:"提案",reading:"ていあん",en:"proposal / propose",vn:"đề xuất",cat:"work",icon:"💡",sentence:"コストを下げる方法を＿＿します。",coll:["改善案を提案する","設計変更を提案する","提案する","提案内容","提案書"]},
{jp:"改善",reading:"かいぜん",en:"improvement / improve",vn:"cải tiến, cải thiện",cat:"work",icon:"📈",sentence:"作業時間を短縮するために＿＿を行います。",coll:["改善する","改善案","改善活動","性能を改善する","改善効果"]},
{jp:"原因",reading:"げんいん",en:"cause",vn:"nguyên nhân",cat:"work",icon:"🧩",sentence:"不具合の＿＿を調査しています。",coll:["原因を調べる","原因を特定する","原因を確認する","主な原因","原因究明"]}
];

let round=[], target=null, score=0, roundNo=0, answered=false;

function pool(){
 const c=document.getElementById("category").value;
 return DATA.filter(x=>c==="all"||x.cat===c);
}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function newRound(){
 const p=pool();
 if(p.length<5){alert("このカテゴリーには5語以上必要です。");return}
 round=shuffle(p).slice(0,5); target=round[Math.floor(Math.random()*5)]; answered=false; roundNo++;
 render();
}
function render(){
 document.getElementById("roundInfo").textContent=`ROUND ${roundNo} · 5 từ được chọn ngẫu nhiên`;
 document.getElementById("bar").style.width=((roundNo%10||10)*10)+"%";
 document.getElementById("words").innerHTML=round.map((x,i)=>`<div class="word ${x===target?"active":""}">${x.jp}</div>`).join("");
 const mode=document.getElementById("mode").value;
 let q="";
 if(mode==="sentence") q=`Chọn từ đúng để hoàn thành câu:<br><b>${target.sentence.replace("＿＿","<span class='blank'>＿＿</span>")}</b>`;
 if(mode==="meaning") q=`Từ <b>${target.jp}</b> có nghĩa gần nhất là gì?`;
 if(mode==="collocation") q=`Cụm từ nào thường đi với <b>${target.jp}</b>?`;
 document.getElementById("question").innerHTML=q;
 const opts=mode==="collocation"
   ? shuffle(round.flatMap(x=>x.coll.map(c=>({text:c,ok:x===target})))).slice(0,8)
   : shuffle(round).map(x=>({text:mode==="meaning"?x.vn:x.jp,ok:x===target}));
 document.getElementById("options").innerHTML=opts.map((o,i)=>`<button class="option" onclick="answer(${i},${o.ok})" id="op${i}">${o.text}</button>`).join("");
 window.currentOpts=opts;
 document.getElementById("detail").className="detail";
 document.getElementById("detail").innerHTML="";
}
function answer(i,ok){
 if(answered)return; answered=true;
 const b=document.getElementById("op"+i); b.classList.add(ok?"correct":"wrong");
 if(!ok){
   document.querySelectorAll(".option").forEach((el,idx)=>{if(window.currentOpts[idx].ok)el.classList.add("correct")});
 } else score+=10;
 document.getElementById("score").textContent=score+" điểm";
 const d=document.getElementById("detail");
 d.className="detail show";
 d.innerHTML=`
 <div class="hero">${target.icon}</div>
 <div class="jp">${target.jp}</div>
 <div class="reading">${target.reading}</div>
 <div class="grid">
   <div><div class="label">English</div><div class="value">${target.en}</div></div>
   <div><div class="label">Tiếng Việt</div><div class="value">${target.vn}</div></div>
 </div>
 <div class="example"><b>例文 / Câu ví dụ</b><br>${target.sentence.replace("＿＿",`<b>${target.jp}</b>`)}</div>
 <div style="margin-top:14px"><div class="label">よく使う組み合わせ / Từ ghép & cụm thường gặp</div>
 <div class="collocations">${target.coll.map(c=>`<span class="chip">${c}</span>`).join("")}</div></div>`;
}
document.getElementById("mode").addEventListener("change",()=>{if(round.length)newRound()});
document.getElementById("category").addEventListener("change",newRound);
newRound();
