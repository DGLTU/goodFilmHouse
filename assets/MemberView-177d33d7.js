import{_ as g,a as w}from"./FooterSection-93b5d000.js";import{k,e as v,r as x,o,g as n,a as t,i as b,w as S,F as i,h as m,t as s,b as a,p as I,d as V}from"./index-e9f9d13c.js";import{d as D,e as T}from"./api-160670e0.js";const l=r=>(I("data-v-bf54c499"),r=r(),V(),r),A={class:"member"},B={class:"mt-8 logo"},H=l(()=>t("span",null,"好窩！電影之家",-1)),M=l(()=>t("img",{class:"img-center",src:"https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},null,-1)),N={class:"content"},F={class:"orderHistory"},U=l(()=>t("h3",{class:"title"},[t("span",{class:"material-symbols-outlined"}," list_alt "),a(" 訂票紀錄")],-1)),C={class:"orderHistory-list"},E={class:"memberDetail"},L=l(()=>t("h3",{class:"title"},[t("span",{class:"mr-2 material-symbols-outlined"}," local_activity "),a(" 會員資料")],-1)),O={class:"memberDetail-content"},$=l(()=>t("h3",null,"HI！歡迎回來",-1)),j=l(()=>t("th",null,"會員帳號：",-1)),q=l(()=>t("th",null,"會員姓名：",-1)),P=l(()=>t("th",null,"手機號碼：",-1)),X={__name:"MemberView",setup(r){const y=k(),{id:h}=y,_=v(),p=v();return D(h).then(u=>{const d=u.data[0];_.value=d}),T(h).then(u=>{const{data:d}=u;p.value=d}),(u,d)=>{const f=x("router-link");return o(),n(i,null,[t("div",A,[t("div",B,[b(f,{to:"/"},{default:S(()=>[a(" FILM HOUSE "),H]),_:1})]),M,t("div",N,[t("div",F,[U,t("div",C,[(o(!0),n(i,null,m(p.value,e=>(o(),n("div",{class:"history",key:e.id},[a(" 片名："+s(e.movie.title)+" ",1),t("p",null,[a(" 場次："+s(e.showTime.date)+" ",1),t("span",null,s(e.showTime.startAt.hour)+" : "+s(e.showTime.startAt.second===0?"00":e.showTime.startAt.second),1),a(" 座位： "),(o(!0),n(i,null,m(e.seats,c=>(o(),n(i,{key:c},[a(s(c),1)],64))),128)),a(" 票種： "),(o(!0),n(i,null,m(e.cart,c=>(o(),n("span",{key:c.name},s(c.name)+" X "+s(c.qty),1))),128))]),t("p",null,[t("span",null," 總金額：$ "+s(e.totalPrice)+" 元 ",1),t("span",null," 訂單編號："+s(e.orderNumber),1)])]))),128))])]),t("div",E,[L,t("div",O,[$,t("table",null,[t("tr",null,[j,t("td",null,s(_.value.email),1)]),t("tr",null,[q,t("td",null,s(_.value.name),1)]),t("tr",null,[P,t("td",null,s(_.value.tel),1)])])])])])]),b(w)],64)}}},K=g(X,[["__scopeId","data-v-bf54c499"]]);export{K as default};
