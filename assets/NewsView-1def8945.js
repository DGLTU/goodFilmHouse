import{N as n}from"./NavigationBar-7d1ea9e2.js";import{_ as i,a as _}from"./FooterSection-0fb0f1f3.js";import{H as m}from"./HeroSection-23832369.js";import{_ as u}from"./BreadCrumb-4c3eea59.js";import{V as p,e as d,o as f,g as v,a as e,i as a,t as r,F as w}from"./index-a0b71113.js";import{a as g}from"./api-160670e0.js";const h={class:"news"},N={class:"content"},x=["src"],B={class:"news-text"},V={__name:"NewsView",setup(y){const c=p(),{articleId:l}=c.params,t=d(null);return g(l).then(s=>{const{data:o}=s;t.value=o}),(s,o)=>(f(),v(w,null,[e("header",null,[a(n)]),a(m),e("div",h,[a(u,{lastBread:t.value.title,route:[{param:"/NewsHome",title:"最新消息"}]},null,8,["lastBread"]),e("div",N,[e("img",{src:t.value.picture,alt:"",class:"img-center"},null,8,x),e("div",B,[e("h2",null,r(t.value.title),1),e("p",null,r(t.value.content),1)])])]),a(_,{class:"mt-[120px]"})],64))}},A=i(V,[["__scopeId","data-v-84836a1a"]]);export{A as default};
