import{N as v}from"./NavigationBar-97294f60.js";import{_ as h,a as m}from"./FooterSection-93b5d000.js";import{V as p,e as g,o,g as n,a as e,i as u,b as I,t as s,l as f,F as _,h as b,p as y,d as V}from"./index-e9f9d13c.js";import{g as x}from"./api-160670e0.js";const l=a=>(y("data-v-b8076a97"),a=a(),V(),a),w={class:"movieImage"},M=["src"],N={class:"mt-16 movieIntro"},k={class:"content"},B={class:"movieDetail"},D={class:"flex items-center"},S={class:"ml-4 badge-yellow"},F={key:0,class:"mt-8"},C={class:"table-wrap"},E=l(()=>e("th",null,"導演：",-1)),L=l(()=>e("th",null,"IMDb評分：",-1)),R=l(()=>e("th",null,"分級：",-1)),T=l(()=>e("th",null,"上映日期：",-1)),U=l(()=>e("th",null,"演員：",-1)),$=l(()=>e("th",null,"片長",-1)),j={__name:"MovieIntroView",setup(a){const d=p(),t=g();return x(d.params.movieId).then(i=>{const r=i.data[0];t.value=r}),(i,r)=>(o(),n(_,null,[e("header",null,[u(v)]),e("div",w,[e("img",{src:t.value.pictureUrls[0],alt:"",class:"img-hero"},null,8,M)]),e("div",N,[e("div",k,[e("div",B,[e("h1",D,[I(s(t.value.title),1),e("span",S,s(t.value.category),1)]),e("span",null,s(t.value["title-english"]),1),t.value.storyline!==""?(o(),n("h2",F,"「"+s(t.value.storyline)+"」",1)):f("",!0),e("p",null,s(t.value.description),1)]),e("div",C,[e("table",null,[e("tr",null,[E,e("td",null,s(t.value.director),1)]),e("tr",null,[L,e("td",null,s(t.value["IMDb-score"]),1)]),e("tr",null,[R,e("td",null,s(t.value.grade),1)]),e("tr",null,[T,e("td",null,s(t.value["release-date"]),1)]),e("tr",null,[U,e("td",null,[(o(!0),n(_,null,b(t.value.actors,c=>(o(),n("div",{key:c},s(c),1))),128))])]),e("tr",null,[$,e("td",null,s(t.value.length.hours)+" 小時 "+s(t.value.length.min===0?"00":t.value.length.min)+"分",1)])])])])]),u(m,{class:"mt-[120px]"})],64))}},H=h(j,[["__scopeId","data-v-b8076a97"]]);export{H as default};
