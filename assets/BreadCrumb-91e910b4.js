import{r as _,o as a,g as r,a as e,i as o,w as n,b as i,F as u,h,t as c}from"./index-20c221f5.js";const p={class:"bread","aria-label":"Breadcrumb"},v=e("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),w={class:"flex items-center"},m=e("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),g={"aria-current":"page"},x={class:"flex items-center"},f=e("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),y={__name:"BreadCrumb",props:{lastBread:String,route:Object},setup(s){const d=s;return(B,b)=>{const l=_("router-link");return a(),r("nav",p,[e("ol",null,[e("li",null,[o(l,{to:"/"},{default:n(()=>[v,i(" 首頁 ")]),_:1})]),(a(!0),r(u,null,h(s.route,t=>(a(),r("li",{key:t},[e("div",w,[m,o(l,{to:t.param},{default:n(()=>[i(c(t.title),1)]),_:2},1032,["to"])])]))),128)),e("li",g,[e("div",x,[f,e("span",null,c(d.lastBread),1)])])])])}}};export{y as _};
