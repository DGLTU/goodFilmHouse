import{N as v}from"./NavigationBar-6a883761.js";import{_ as h,F as m}from"./FooterSection-99fb7763.js";import{V as p,e as g,o as a,g as n,a as t,i as u,b as I,t as s,I as b,F as d,h as y,p as f,d as x}from"./index-20c221f5.js";import{g as V}from"./api-c595d621.js";const l=o=>(f("data-v-525983db"),o=o(),x(),o),w={class:"movieImage"},M=["src"],N={class:"mt-16 movieIntro"},S={class:"content"},k={class:"movieDetail"},B={class:"flex items-center"},D={class:"ml-4 badge-yellow"},F={key:0,class:"mt-8"},j={class:"table-wrap"},C=l(()=>t("th",null,"導演：",-1)),E=l(()=>t("th",null,"IMDb評分：",-1)),L=l(()=>t("th",null,"分級：",-1)),R=l(()=>t("th",null,"上映日期：",-1)),T=l(()=>t("th",null,"演員：",-1)),U=l(()=>t("th",null,"片長",-1)),q=l(()=>t("div",{class:"flex justify-around"},[t("button",{type:"button",class:"mt-4 btn-primary"},"立即訂票")],-1)),z={__name:"MovieIntroView",setup(o){const _=p(),e=g();return V(_.params.movieId).then(i=>{const r=i.data[0];e.value=r}),(i,r)=>(a(),n(d,null,[t("header",null,[u(v)]),t("div",w,[t("img",{src:e.value.pictureUrls[0],alt:"",class:"img-hero"},null,8,M)]),t("div",N,[t("div",S,[t("div",k,[t("h1",B,[I(s(e.value.title),1),t("span",D,s(e.value.category),1)]),t("span",null,s(e.value["title-english"]),1),e.value.storyline!==""?(a(),n("h2",F,"「"+s(e.value.storyline)+"」",1)):b("",!0),t("p",null,s(e.value.description),1)]),t("div",j,[t("table",null,[t("tr",null,[C,t("td",null,s(e.value.director),1)]),t("tr",null,[E,t("td",null,s(e.value["IMDb-score"]),1)]),t("tr",null,[L,t("td",null,s(e.value.grade),1)]),t("tr",null,[R,t("td",null,s(e.value["release-date"]),1)]),t("tr",null,[T,t("td",null,[(a(!0),n(d,null,y(e.value.actors,c=>(a(),n("div",{key:c},s(c),1))),128))])]),t("tr",null,[U,t("td",null,s(e.value.length.hours)+" 小時 "+s(e.value.length.min===0?"00":e.value.length.min)+"分",1)])])])]),q]),u(m,{class:"mt-[120px]"})],64))}},K=h(z,[["__scopeId","data-v-525983db"]]);export{K as default};
