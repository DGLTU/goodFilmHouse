import{D as B,E as N,k as U,e as p,o as u,g as c,a as e,t as o,u as t,b as F,F as V,h as $,i as n,w as q,j,K as h,p as M,d as D,L as W}from"./index-e9f9d13c.js";import{_ as R,a as H}from"./FooterSection-93b5d000.js";import{p as K}from"./api-160670e0.js";import{a as A,d as G,c as J,l as Q,s as X,F as Y,z as Z,b as f,E as v,S as ee}from"./sweetalert2-24941645.js";const s=m=>(M("data-v-aceac44f"),m=m(),D(),m),te={class:"orderConfirm"},se=s(()=>e("header",null,[e("div",{class:"mt-8 logo"},[F(" FILM HOUSE "),e("span",null,"好窩！電影之家")]),e("div",{class:"mt-4 progress"},[e("ul",null,[e("li",null,"選擇票種"),e("li",{class:"active"},"選擇位置"),e("li",{class:"active"},"確認訂單"),e("li",null,"訂單完成")])])],-1)),le={class:"ticketInfo mt-4 px-4 py-8 flex items-center"},oe={class:"ml-4"},ae={class:"ml-16"},ne={class:"flex items-center"},re=s(()=>e("span",{class:"material-symbols-outlined"}," schedule ",-1)),de={class:"flex items-center"},ie=s(()=>e("span",{class:"material-symbols-outlined"}," local_activity ",-1)),ue={class:"my-4 table-wrap"},ce={class:"ticketInfo-table"},me=s(()=>e("thead",null,[e("tr",null,[e("th",null,"票種"),e("th",null,"價格"),e("th",null,"數量"),e("th",{class:"text-end"},"合計")])],-1)),_e={class:"flex justify-end"},pe=s(()=>e("th",null,"優惠折扣",-1)),he=s(()=>e("td",null,null,-1)),fe=s(()=>e("td",null,null,-1)),ve={class:"text-end"},be=s(()=>e("th",null,"合計",-1)),ye=s(()=>e("td",null,null,-1)),ge=s(()=>e("td",null,null,-1)),xe={class:"font-extrabold text-end"},Ve={class:"my-4 form-wrap"},Se=s(()=>e("h3",{class:"mb-4 border-b border-grey-light"},"購買人資訊",-1)),we=s(()=>e("label",{for:"name",class:"form-label"},"訂購人姓名",-1)),Ce=s(()=>e("label",{for:"email",class:"form-label"},"Email信箱",-1)),Oe=s(()=>e("label",{for:"tel",class:"form-label"},"手機號碼",-1)),Ee=s(()=>e("label",{for:"payment",class:"form-label"},"付款方式",-1)),Ie=s(()=>e("option",{value:"",selected:"",disabled:""},"請選擇付款方式",-1)),$e=s(()=>e("option",{value:"信用卡"},"信用卡",-1)),qe=s(()=>e("option",{value:"Paypal"},"PayPal",-1)),Ae=s(()=>e("option",{value:"LinePay"},"LinePay",-1)),Fe={class:"my-8 flex justify-between"},Le=["disabled"],Pe={__name:"OrderConfirm",setup(m){Object.keys(A).forEach(d=>{G(d,A[d])}),J({generateMessage:Q({zh_TW:Z}),validateOnInput:!0}),X("zh_TW");const S=B(),L=N(),P=U(),{id:T}=P,{movie:i,movieDate:w,movieTime:_,seats:C,totalPrice:O,discount:k,cart:E}=L,b=p(),y=p(),g=p(),x=p();function z(){const d=W(),l={orderNumber:d,cart:E,totalPrice:O,seats:C,userId:T,name:b.value,email:y.value,tel:x.value,payment:g.value,showTime:{date:w,startAt:_.startAt},movie:i};K(l).then(()=>{ee.fire({icon:"success",title:"購票成功",showConfirmButton:!0,timer:1500}),S.push(`/orderComplete/${d}`)}).catch(()=>{})}function I(){z()}return(d,l)=>(u(),c(V,null,[e("div",te,[se,e("div",le,[e("div",null,[e("h2",null,o(t(i).title),1),e("span",null,o(t(i).length.hours)+"小時"+o(t(i).length.min)+"分",1),e("span",oe,o(t(i).grade),1)]),e("div",ae,[e("p",ne,[re,F(" "+o(t(w))+" "+o(t(_).startAt.hour)+" : "+o(t(_).startAt.second===0?"00":t(_).startAt.second),1)]),e("p",de,[ie,(u(!0),c(V,null,$(t(C),a=>(u(),c("div",{key:a,class:"mr-1"},o(a),1))),128))])])]),e("div",ue,[e("table",ce,[me,e("tbody",null,[(u(!0),c(V,null,$(t(E),a=>(u(),c("tr",{key:a.name},[e("td",null,o(a.name),1),e("td",null,"$"+o(t(h)(a.price)),1),e("td",null,"x "+o(a.qty),1),e("td",_e,"$"+o(t(h)(a.price*a.qty)),1)]))),128))]),e("tfoot",null,[e("tr",null,[pe,he,fe,e("td",ve,"-$"+o(t(h)(t(k))),1)]),e("tr",null,[be,ye,ge,e("td",xe,"$"+o(t(h)(t(O))),1)])])])]),e("div",Ve,[n(t(Y),{onSubmit:j(I,["prevent"])},{default:q(({meta:a})=>[Se,we,n(t(f),{type:"text",name:"訂購人姓名",class:"form-control",id:"name",modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=r=>b.value=r),rules:"required"},null,8,["modelValue"]),n(t(v),{name:"訂購人姓名",class:"error"}),Ce,n(t(f),{type:"email",name:"Email",class:"form-control",id:"email",modelValue:y.value,"onUpdate:modelValue":l[1]||(l[1]=r=>y.value=r),rules:"required|email"},null,8,["modelValue"]),n(t(v),{name:"Email",class:"error"}),Oe,n(t(f),{type:"tel",name:"手機號碼",class:"form-control",id:"tel",modelValue:x.value,"onUpdate:modelValue":l[2]||(l[2]=r=>x.value=r),rules:{required:!0,regex:/^[0-9]{10}$/g}},null,8,["modelValue"]),n(t(v),{name:"手機號碼",class:"error"}),Ee,n(t(f),{as:"select",name:"付款方式",id:"payment",class:"form-control",modelValue:g.value,"onUpdate:modelValue":l[3]||(l[3]=r=>g.value=r),rules:"required"},{default:q(()=>[Ie,$e,qe,Ae]),_:1},8,["modelValue"]),n(t(v),{name:"付款方式",class:"error"}),e("div",Fe,[e("button",{class:"mb-4 btn-primary",type:"button",onClick:l[4]||(l[4]=r=>t(S).go(-1))},"上一步"),e("button",{class:"mb-4 btn-danger cursor-pointer",type:"submit",id:"openButton",disabled:!a.valid,onClick:l[5]||(l[5]=r=>I())}," 送出 ",8,Le)])]),_:1},8,["onSubmit"])])]),n(H)],64))}},Ne=R(Pe,[["__scopeId","data-v-aceac44f"]]);export{Ne as default};