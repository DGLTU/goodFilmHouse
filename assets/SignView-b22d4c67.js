import{D as C,k as $,e as i,o as w,g as V,a as s,i as o,w as U,j as y,u as a,F as z,p as j,d as B,b as M,W as p}from"./index-77b226ee.js";import{_ as T,a as W}from"./FooterSection-0ef8511f.js";import{l as N,s as O}from"./api-160670e0.js";import{a as F,d as R,c as A,l as L,s as D,F as I,z as H,b as d,E as u,S as P}from"./sweetalert2-55133156.js";const t=_=>(j("data-v-47f24eea"),_=_(),B(),_),G={class:"content"},J=t(()=>s("div",{class:"mt-8 logo"},[M(" FILM HOUSE "),s("span",null,"好窩！電影之家")],-1)),K=t(()=>s("img",{class:"img-center",src:"https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},null,-1)),Q={class:"sign"},X={key:0,class:"sign-in"},Y=t(()=>s("h2",null,"登入會員",-1)),Z={class:"form-wrap"},ee=t(()=>s("label",{for:"email",class:"form-label"},"電子信箱 : ",-1)),se=t(()=>s("label",{for:"pwd",class:"form-label"},"密碼 : ",-1)),le={class:"flex justify-end"},oe={class:"btn"},ae=["disabled"],te={key:1,class:"sign-up"},re=t(()=>s("h2",null,"註冊會員",-1)),ne={class:"form-wrap"},ie=t(()=>s("label",{for:"name",class:"form-label"},"姓名 : ",-1)),de=t(()=>s("label",{for:"email",class:"form-label"},"電子信箱 : ",-1)),ue=t(()=>s("label",{for:"pwd",class:"form-label"},"密碼 : ",-1)),me=t(()=>s("label",{for:"pwd",class:"form-label"},"再次輸入密碼 : ",-1)),ce=t(()=>s("label",{for:"tel",class:"form-label"},"手機號碼 : ",-1)),pe={class:"btn"},fe=["disabled"],_e={__name:"SignView",setup(_){Object.keys(F).forEach(r=>{R(r,F[r])}),A({generateMessage:L({zh_TW:H}),validateOnInput:!0}),D("zh_TW");const k=C(),S=$(),x=i(!1),v=i(),m=i(),c=i(),E=i(),b=i(),h=i();function f(r,e="success"){P.fire({icon:e,title:r,showConfirmButton:!0})}function g(){const r={email:m.value,password:c.value};N(r).then(()=>{const e=p("token"),n=p("id"),l=p("role");S.$patch({token:e,id:n,role:l}),f("登入成功! 歡迎回來"),k.push("/")}).catch(()=>{v.value.resetForm(),f("登入資訊有誤，請重新登入","warning")})}function q(){const r={email:m.value,password:c.value,tel:h.value,name:b.value};O(r).then(()=>{const e=p("token"),n=p("id"),l=p("role");S.$patch({token:e,id:n,role:l}),f("註冊成功! 歡迎加入好窩!"),v.value.resetForm(),k.push("/")}).catch(e=>{switch(e.response.data){case"Email already exists":f("此電子信箱已被使用，請重新註冊","error");break;case"Password is too short":f("密碼長度過短，請輸入至少4位英數字","error");break}})}return(r,e)=>(w(),V(z,null,[s("div",G,[J,K,s("div",Q,[x.value?(w(),V("div",te,[re,s("div",ne,[o(a(I),{onSubmit:y(g,["prevent"]),ref_key:"form",ref:v},{default:U(({meta:n})=>[ie,o(a(d),{type:"text",name:"姓名",id:"name",class:"form-control",modelValue:b.value,"onUpdate:modelValue":e[3]||(e[3]=l=>b.value=l),rules:"required"},null,8,["modelValue"]),o(a(u),{name:"姓名",class:"error"}),de,o(a(d),{type:"email",name:"Email",id:"email",class:"form-control",modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=l=>m.value=l),rules:"required|email"},null,8,["modelValue"]),o(a(u),{name:"Email",class:"error"}),ue,o(a(d),{type:"password",name:"密碼",id:"pwd",class:"form-control",modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=l=>c.value=l),rules:"required"},null,8,["modelValue"]),o(a(u),{name:"密碼",class:"error"}),me,o(a(d),{type:"password",name:"再次輸入密碼",id:"pwd",class:"form-control",modelValue:E.value,"onUpdate:modelValue":e[6]||(e[6]=l=>E.value=l),rules:"required|confirmed:@密碼"},null,8,["modelValue"]),o(a(u),{name:"再次輸入密碼",class:"error"}),ce,o(a(d),{type:"tel",name:"手機號碼",class:"form-control",id:"tel",modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=l=>h.value=l),rules:{required:!0,regex:/^[0-9]{10}$/g}},null,8,["modelValue"]),o(a(u),{name:"手機號碼",class:"error"}),s("div",pe,[s("button",{type:"button",class:"mt-8 btn-danger",disabled:!n.valid,onClick:e[8]||(e[8]=l=>q())},"註冊會員",8,fe)])]),_:1},8,["onSubmit"])])])):(w(),V("div",X,[Y,s("div",Z,[o(a(I),{onSubmit:y(g,["prevent"]),ref_key:"form",ref:v},{default:U(({meta:n})=>[ee,o(a(d),{type:"email",name:"Email",id:"email",class:"form-control",modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=l=>m.value=l),rules:"required|email"},null,8,["modelValue"]),o(a(u),{name:"Email",class:"error"}),se,o(a(d),{type:"password",name:"密碼",id:"pwd",class:"form-control",modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=l=>c.value=l),rules:"required"},null,8,["modelValue"]),o(a(u),{name:"密碼",class:"error"}),s("div",le,[s("a",{href:"",class:"text-sm underline text-blue-500",onClick:e[2]||(e[2]=y(l=>x.value=!0,["prevent"]))},"我要註冊")]),s("div",oe,[s("button",{type:"button",class:"mt-8 btn-danger",onClick:g,disabled:!n.valid},"登入",8,ae)])]),_:1},8,["onSubmit"])])]))])]),o(W)],64))}},we=T(_e,[["__scopeId","data-v-47f24eea"]]);export{we as default};
