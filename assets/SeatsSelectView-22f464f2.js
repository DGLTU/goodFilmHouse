import{D as E,E as F,e as C,f as w,o as n,g as o,a as t,u as i,b as D,t as h,F as u,h as f,l as V,i as G,n as v,p as H,d as N}from"./index-a0b71113.js";import{_ as I,a as L}from"./FooterSection-0fb0f1f3.js";import{b as M}from"./api-160670e0.js";const e=y=>(H("data-v-7952e513"),y=y(),N(),y),T={class:"seatsSelect"},$=e(()=>t("header",null,[t("div",{class:"mt-8 logo"},[D("FILM HOUSE "),t("span",null,"好窩！電影之家")]),t("div",{class:"mt-4 progress"},[t("ul",null,[t("li",null,"選擇票種"),t("li",{class:"active"},"選擇位置"),t("li",null,"確認訂單"),t("li",null,"訂單完成")])])],-1)),j={class:"mt-4 movie"},J=["src"],Q={class:"movie-text"},U={class:"movieGrade"},z=e(()=>t("div",{class:"mt-4 seatsMark"},[t("i",{class:"fa-solid fa-square"}),t("span",null,"可選位置"),t("i",{class:"fa-solid fa-square sold"}),t("span",null,"已售"),t("i",{class:"fa-solid fa-square selected"}),t("span",null,"您的位置")],-1)),R={class:"mt-4 flex justify-center"},K=e(()=>t("div",{class:"mt-4 screen"},[t("p",null,"Screen")],-1)),P=e(()=>t("tr",null,[t("th"),t("th",null,"1"),t("th",null,"2"),t("th",null,"3"),t("th",null,"4"),t("th",null,"5"),t("th",null,"6"),t("th",null,"7")],-1)),W=e(()=>t("th",null,"A",-1)),X=["data-seat"],Y=e(()=>t("th",null,"A",-1)),Z=e(()=>t("th",null,"B",-1)),tt=["data-seat"],st=e(()=>t("th",null,"B",-1)),lt=e(()=>t("th",null,"C",-1)),et=["data-seat"],at=e(()=>t("th",null,"C",-1)),nt=e(()=>t("th",null,"D",-1)),ot=["data-seat"],it=e(()=>t("th",null,"D",-1)),dt=e(()=>t("th",null,"E",-1)),ut=["data-seat"],rt=e(()=>t("th",null,"E",-1)),ct=e(()=>t("th",null,"F",-1)),_t=["data-seat"],ht=e(()=>t("th",null,"F",-1)),ft=e(()=>t("th",null,"G",-1)),vt=["data-seat"],pt=e(()=>t("th",null,"G",-1)),kt=e(()=>t("th",null,"H",-1)),yt=["data-seat"],St=e(()=>t("th",null,"H",-1)),mt={class:"my-8 flex justify-between"},gt={__name:"SeatsSelectView",setup(y){const b=E(),q=F(),{movie:p,movieDate:A,movieTime:S,seats:m,totalQty:x}=q,O=C(null),g=C([]),d=C([]),k=C(x),r=_=>{if(k.value===0){const{seat:s}=_.target.dataset;d.value.indexOf(s)===-1&&g.value.indexOf(s)===-1&&(d.value.shift(),d.value.push(s))}else{const{seat:s}=_.target.dataset;d.value.indexOf(s)===-1&&g.value.indexOf(s)===-1&&(d.value.push(s),k.value-=1)}},c=_=>{let s="";return g.value.indexOf(_)>-1?s="sold":d.value.indexOf(_)>-1&&(s="selected"),s},B=()=>{q.$patch({seats:d.value}),b.push("/orderConfirm")};return w(()=>{M(S.id).then(_=>{const{data:s}=_;O.value=JSON.parse(JSON.stringify(s[0])),g.value=O.value.booked}).catch(),m.length!==0&&(d.value=[...m],x>=m.length?k.value=x-m.length:d.value=[])}),(_,s)=>(n(),o(u,null,[t("div",T,[$,t("div",j,[t("img",{src:i(p).pictureUrls[0],alt:"",class:"img-center"},null,8,J),t("div",Q,[t("h2",null,[D(h(i(p).title)+" ",1),t("span",null,h(i(p).length.hours)+"小時"+h(i(p).length.min)+"分",1),t("span",U,h(i(p).grade),1)]),t("p",null,"日期："+h(i(A)),1),t("p",null," 時間："+h(i(S).startAt.hour)+" : "+h(i(S).startAt.second===0?"00":i(S).startAt.second),1)])]),z,t("h3",R,"還可選 "+h(k.value)+" 個",1),K,t("table",null,[P,t("tr",null,[W,(n(),o(u,null,f(7,l=>t("td",{key:l+"A"},[t("i",{class:v(["fa-solid fa-square",c(l+"A")]),"data-seat":l+"A",onClick:s[0]||(s[0]=a=>r(a))},null,10,X)])),64)),Y]),t("tr",null,[Z,(n(),o(u,null,f(7,l=>t("td",{key:l+"B"},[t("i",{class:v(["fa-solid fa-square",c(l+"B")]),"data-seat":l+"B",onClick:s[1]||(s[1]=a=>r(a))},null,10,tt)])),64)),st]),t("tr",null,[lt,(n(),o(u,null,f(7,l=>t("td",{key:l+"C"},[t("i",{class:v(["fa-solid fa-square",c(l+"C")]),"data-seat":l+"C",onClick:s[2]||(s[2]=a=>r(a))},null,10,et)])),64)),at]),t("tr",null,[nt,(n(),o(u,null,f(7,l=>t("td",{key:l+"D"},[t("i",{class:v(["fa-solid fa-square",c(l+"D")]),"data-seat":l+"D",onClick:s[3]||(s[3]=a=>r(a))},null,10,ot)])),64)),it]),t("tr",null,[dt,(n(),o(u,null,f(7,l=>t("td",{key:l+"E"},[t("i",{class:v(["fa-solid fa-square",c(l+"E")]),"data-seat":l+"E",onClick:s[4]||(s[4]=a=>r(a))},null,10,ut)])),64)),rt]),t("tr",null,[ct,(n(),o(u,null,f(7,l=>t("td",{key:l+"F"},[t("i",{class:v(["fa-solid fa-square",c(l+"F")]),"data-seat":l+"F",onClick:s[5]||(s[5]=a=>r(a))},null,10,_t)])),64)),ht]),t("tr",null,[ft,(n(),o(u,null,f(7,l=>t("td",{key:l+"G"},[t("i",{class:v(["fa-solid fa-square",c(l+"G")]),"data-seat":l+"G",onClick:s[6]||(s[6]=a=>r(a))},null,10,vt)])),64)),pt]),t("tr",null,[kt,(n(),o(u,null,f(7,l=>t("td",{key:l+"H"},[t("i",{class:v(["fa-solid fa-square",c(l+"H")]),"data-seat":l+"H",onClick:s[7]||(s[7]=a=>r(a))},null,10,yt)])),64)),St])]),t("div",mt,[t("button",{class:"mb-4 btn-primary",type:"button",onClick:s[8]||(s[8]=l=>i(b).go(-1))},"上一步"),k.value===0?(n(),o("button",{key:0,class:"mb-4 btn-primary",type:"button",onClick:B},"下一步")):V("",!0)])]),G(L)],64))}},qt=I(gt,[["__scopeId","data-v-7952e513"]]);export{qt as default};
