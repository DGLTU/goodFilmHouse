import{k as f,s as p,r as h,o as _,g as c,a as e,i as s,w as a,b as n,u as v,F as m,J as k,m as g}from"./index-a0b71113.js";const O=(i,l)=>{const t=i.__vccOpts||i;for(const[r,u]of l)t[r]=u;return t};const b={class:"footer"},y={class:"footer_navbar"},x=e("span",null,"好窩！電影之家",-1),C=e("span",null,"會員登出",-1),N=[C],S={key:1},w=k('<div class="footer_address"><p>台北市中山區中山北路二段7號<br> No.7, Sec. 1, Zhongshan N. Rd., Zhongshan Dist., Taipei City 104, Taiwan (R.O.C.)<br> Tel 886-2-1234-5678 </p><div class="footer_links"><p>本網站非供商業用途，僅供個人練習</p><ul><li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li><li><a href=""><i class="fa-brands fa-twitter"></i></a></li><li><a href=""><i class="fa-brands fa-instagram"></i></a></li></ul></div></div>',1),V={__name:"FooterSection",setup(i){const l=f(),{isAuth:t}=p(l);function r(){g(),t.value=!1,l.$patch({isAuth:t})}return(u,d)=>{const o=h("router-link");return _(),c("div",b,[e("div",y,[s(o,{to:"/",class:"logo"},{default:a(()=>[n("FILM HOUSE "),x]),_:1}),e("nav",null,[e("ul",null,[e("li",null,[s(o,{to:"/today"},{default:a(()=>[n("今日電影")]),_:1})]),e("li",null,[s(o,{to:"/newsHome"},{default:a(()=>[n("最新消息")]),_:1})]),e("li",null,[s(o,{to:"/"},{default:a(()=>[n("立即訂票")]),_:1})]),v(t)?(_(),c(m,{key:0},[e("li",null,[s(o,{to:"/memberHome"},{default:a(()=>[n("會員中心")]),_:1})]),e("li",{class:"cursor-",onClick:d[0]||(d[0]=F=>r())},N)],64)):(_(),c("li",S,[s(o,{to:"/signUp&In"},{default:a(()=>[n("註冊/登入")]),_:1})]))])])]),w])}}};export{O as _,V as a};
