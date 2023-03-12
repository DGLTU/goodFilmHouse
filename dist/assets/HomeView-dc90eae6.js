import{N as w}from"./NavigationBar-6a883761.js";import{$ as T,c as L,S as y,a as j,A as Q,H as G}from"./HeroSection-f7c6d30c.js";import{_ as A,F as W}from"./FooterSection-99fb7763.js";import{r as U,o as k,c as O,w as C,a as e,t as I,b as x,p as V,d as B,e as N,f as J,g as S,F as P,h as D,u as $,i as b,n as H}from"./index-20c221f5.js";import{g as K,a as X}from"./api-c595d621.js";import{_ as Y}from"./NewsCard-0706eaca.js";function q({swiper:t,extendParams:_,on:l,emit:v}){_({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function u(n){let a;return n&&(a=T(n),t.params.uniqueNavElements&&typeof n=="string"&&a.length>1&&t.$el.find(n).length===1&&(a=t.$el.find(n))),a}function p(n,a){const c=t.params.navigation;n&&n.length>0&&(n[a?"addClass":"removeClass"](c.disabledClass),n[0]&&n[0].tagName==="BUTTON"&&(n[0].disabled=a),t.params.watchOverflow&&t.enabled&&n[t.isLocked?"addClass":"removeClass"](c.lockClass))}function g(){if(t.params.loop)return;const{$nextEl:n,$prevEl:a}=t.navigation;p(a,t.isBeginning&&!t.params.rewind),p(n,t.isEnd&&!t.params.rewind)}function E(n){n.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),v("navigationPrev"))}function i(n){n.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),v("navigationNext"))}function d(){const n=t.params.navigation;if(t.params.navigation=L(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;const a=u(n.nextEl),c=u(n.prevEl);a&&a.length>0&&a.on("click",i),c&&c.length>0&&c.on("click",E),Object.assign(t.navigation,{$nextEl:a,nextEl:a&&a[0],$prevEl:c,prevEl:c&&c[0]}),t.enabled||(a&&a.addClass(n.lockClass),c&&c.addClass(n.lockClass))}function r(){const{$nextEl:n,$prevEl:a}=t.navigation;n&&n.length&&(n.off("click",i),n.removeClass(t.params.navigation.disabledClass)),a&&a.length&&(a.off("click",E),a.removeClass(t.params.navigation.disabledClass))}l("init",()=>{t.params.navigation.enabled===!1?o():(d(),g())}),l("toEdge fromEdge lock unlock",()=>{g()}),l("destroy",()=>{r()}),l("enable disable",()=>{const{$nextEl:n,$prevEl:a}=t.navigation;n&&n[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),a&&a[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)}),l("click",(n,a)=>{const{$nextEl:c,$prevEl:h}=t.navigation,m=a.target;if(t.params.navigation.hideOnClick&&!T(m).is(h)&&!T(m).is(c)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===m||t.pagination.el.contains(m)))return;let f;c?f=c.hasClass(t.params.navigation.hiddenClass):h&&(f=h.hasClass(t.params.navigation.hiddenClass)),v(f===!0?"navigationShow":"navigationHide"),c&&c.toggleClass(t.params.navigation.hiddenClass),h&&h.toggleClass(t.params.navigation.hiddenClass)}});const s=()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),d(),g()},o=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),r()};Object.assign(t.navigation,{enable:s,disable:o,update:g,init:d,destroy:r})}function Z({swiper:t,extendParams:_}){_({grid:{rows:1,fill:"column"}});let l,v,u;const p=i=>{const{slidesPerView:d}=t.params,{rows:r,fill:s}=t.params.grid;v=l/r,u=Math.floor(i/r),Math.floor(i/r)===i/r?l=i:l=Math.ceil(i/r)*r,d!=="auto"&&s==="row"&&(l=Math.max(l,d*r))},g=(i,d,r,s)=>{const{slidesPerGroup:o,spaceBetween:n}=t.params,{rows:a,fill:c}=t.params.grid;let h,m,f;if(c==="row"&&o>1){const F=Math.floor(i/(o*a)),z=i-a*o*F,R=F===0?o:Math.min(Math.ceil((r-F*a*o)/a),o);f=Math.floor(z/R),m=z-f*R+F*o,h=m+f*l/a,d.css({"-webkit-order":h,order:h})}else c==="column"?(m=Math.floor(i/a),f=i-m*a,(m>u||m===u&&f===a-1)&&(f+=1,f>=a&&(f=0,m+=1))):(f=Math.floor(i/v),m=i-f*v);d.css(s("margin-top"),f!==0?n&&`${n}px`:"")},E=(i,d,r)=>{const{spaceBetween:s,centeredSlides:o,roundLengths:n}=t.params,{rows:a}=t.params.grid;if(t.virtualSize=(i+s)*l,t.virtualSize=Math.ceil(t.virtualSize/a)-s,t.$wrapperEl.css({[r("width")]:`${t.virtualSize+s}px`}),o){d.splice(0,d.length);const c=[];for(let h=0;h<d.length;h+=1){let m=d[h];n&&(m=Math.floor(m)),d[h]<t.virtualSize+d[0]&&c.push(m)}d.push(...c)}};t.grid={initSlides:p,updateSlide:g,updateWrapperSize:E}}const tt=t=>(V("data-v-13a86dbe"),t=t(),B(),t),et={class:"card"},nt=["src"],at={class:"card-content"},st={class:"card-text"},lt={class:"movieTime"},it=tt(()=>e("span",{class:"material-symbols-outlined"}," schedule ",-1)),ot={class:"movieGrade"},ct={__name:"MovieCard",props:{movie:Object},setup(t){const _=t;return(l,v)=>{const u=U("RouterLink");return k(),O(u,{to:{name:"movieIntro",params:{movieId:_.movie.id}}},{default:C(()=>[e("div",et,[e("img",{class:"card-img",src:_.movie.poster,alt:""},null,8,nt),e("div",at,[e("h3",null,I(_.movie.title),1),e("div",st,[e("p",lt,[it,x(" "+I(_.movie.length.hours)+"小時"+I(_.movie.length.min)+"分 ",1)]),e("div",ot,[e("p",null,I(t.movie.grade),1)])])])])]),_:1},8,["to"])}}},dt=A(ct,[["__scopeId","data-v-13a86dbe"]]);const rt=t=>(V("data-v-f66f12ea"),t=t(),B(),t),_t=rt(()=>e("div",{class:"movies-swiper-navigation"},[e("div",{class:"btn-prevSlide"},[e("span",{class:"material-symbols-outlined"}," arrow_circle_left ")]),e("div",{class:"btn-nextSlide"},[e("span",{class:"material-symbols-outlined"}," arrow_circle_right ")])],-1)),ut={__name:"MovieSwiper",setup(t){const _=N(),l={nextEl:".btn-nextSlide",prevEl:".btn-prevSlide"},v=[q,Q];return J(()=>{K().then(u=>{const{data:p}=u;_.value=p}).catch(u=>console.log(u))}),(u,p)=>(k(),O($(j),{class:"swiper",modules:v,slidesPerView:5.3,navigation:l,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}},{default:C(()=>[(k(!0),S(P,null,D(_.value,g=>(k(),O($(y),{key:g.id},{default:C(()=>[b(dt,{movie:g},null,8,["movie"])]),_:2},1024))),128)),_t]),_:1},8,["slidesPerView"]))}},vt=A(ut,[["__scopeId","data-v-f66f12ea"]]),mt="/goodFilmHouse/assets/Tickets-3b5f411e.png",ft="/goodFilmHouse/assets/CrowdPlaying-61ccabf4.png",pt="/goodFilmHouse/assets/MemberShip-5f6eab5d.png",gt="/goodFilmHouse/assets/Concept-13c5f3fe.png",ht="/goodFilmHouse/assets/coffee-0cfbf935.jpg";const M=t=>(V("data-v-02f77385"),t=t(),B(),t),bt={class:"swiper"},kt=M(()=>e("a",{href:"",class:"title"},[e("p",{class:""},[x("票價資訊"),e("span",null,"Tickets")]),e("img",{src:mt,alt:""})],-1)),Ct=M(()=>e("a",{href:"",class:"title"},[e("p",{class:""},[x("我要力推!"),e("span",null,"Movies Recommendations")]),e("img",{src:ft,alt:""})],-1)),xt=M(()=>e("a",{href:"",class:"title"},[e("p",{class:""},[x("會員制度"),e("span",null,"Membership")]),e("img",{src:pt,alt:""})],-1)),$t=M(()=>e("a",{href:"",class:"title"},[e("p",{class:""},[x("理念"),e("span",null,"Concept")]),e("img",{src:gt,alt:""})],-1)),St=M(()=>e("a",{href:"",class:"title"},[e("p",{class:""},[x("好窩咖啡"),e("span",null,"Cafe")]),e("img",{class:"img-center",src:ht,alt:""})],-1)),Et=M(()=>e("div",{class:"about-swiper-navigation"},[e("div",{class:"btn-prevSlide"},[e("span",{class:"material-symbols-outlined"}," arrow_circle_left ")]),e("div",{class:"btn-nextSlide"},[e("span",{class:"material-symbols-outlined"}," arrow_circle_right ")])],-1)),yt={__name:"AboutUsSwiper",setup(t){const _={nextEl:".btn-nextSlide",prevEl:".btn-prevSlide"},l=[q,Z,Q];return(v,u)=>(k(),S("div",bt,[b($(j),{modules:l,navigation:_,slidesPerView:4,slidesPerGroupSkip:1,grid:{rows:1},autoplay:{delay:2500,disabledOnInteraction:!1}},{default:C(()=>[b($(y),{class:"swiper-content"},{default:C(()=>[kt]),_:1}),b($(y),{class:"swiper-content"},{default:C(()=>[Ct]),_:1}),b($(y),{class:"swiper-content"},{default:C(()=>[xt]),_:1}),b($(y),{class:"swiper-content"},{default:C(()=>[$t]),_:1}),b($(y),{class:"swiper-content"},{default:C(()=>[St]),_:1}),Et]),_:1})]))}},It=A(yt,[["__scopeId","data-v-02f77385"]]);const Mt={class:"faq"},Nt={class:"faq-tabs"},Ft={class:"faq-info-text"},Ht=["innerHTML"],Ot={href:""},Pt={class:"faq-icon"},At=["onClick"],Tt={__name:"FAQSection",setup(t){const _=[{id:0,title:"如何加入會員？",content:"會員申請請至Index film house首頁右上角，點選註冊 → 輸入完整資料 → 完成",link:"","link-title":"註冊請點我"},{id:1,title:"無法登入會員",content:"請確認輸入的資訊是否正確，或電洽專線為您查詢處理。",link:"","link-title":""},{id:2,title:"會員優惠有哪些？",content:"1.不定期電影活動優惠 <br> 2.訂購電影票滿500元可享9折優惠<br>3.餐飲部可享95折優惠",link:"","link-title":""}],l=[{id:0,title:"請問訂票需要加入會員嗎？",content:"不需要。但我們建議您加入會員，不但能享有折扣，還可以收到電影之家最新消息。",link:"","link-title":""},{id:1,title:"電影分級制度",content:`普遍級（簡稱「普」級）：無年齡限制 <br><br>
    保護級（簡稱「護」級）：未滿6歲不得觀賞，年滿6歲未滿12歲之兒童需父母、師長或成年親友陪伴觀賞。<br><br>
    輔12級（全稱「輔十二」級）：未滿12歲不得觀賞。<br><br>
    輔15級（全稱「輔十五」級）：未滿15歲不得觀賞。<br><br>
    限制級（簡稱「限」級）：未滿18歲不得觀賞。`,link:"","link-title":""},{id:2,title:"訂票方式有哪些？",content:"網路訂票<br>現場人工售票",link:"","link-title":""}],v=[{id:0,title:"廳內可否攜帶外食？",content:"我們接受攜帶外食。只要是無異味、無酒精的食物，我們都歡迎大家在觀影中安靜地享用。",link:"","link-title":""},{id:1,title:"好窩電影之家是否提供飲食？",content:"我們有自己的咖啡小舖，請參閱此處菜單",link:"","link-title":"看菜單去"}],u=[{id:0,title:"防疫重點措施",content:`實行電影之家人員健康管理監測<br><br>
    環境消毒 影廳、公共區域定時消毒<br><br>
    觀影時，除飲食期間外，敬請全程配戴口罩。`,link:"","link-title":""},{id:1,title:"確診退款政策",content:"如果您出現 COVID-19 症狀，在演出前2 小時，請致電我們的客戶服務團隊，能夠幫助您退款（扣除預訂費用）",link:"","link-title":""}],p=N({..._}),g=N([]),E=(r,s)=>{g.value[r].hidden===!1?(s.target.textContent="add_circle",g.value[r].hidden=!0):(s.target.textContent="do_not_disturb_on",g.value[r].hidden=!1)},i=N(0),d=(r,s)=>{i.value=s,p.value=r,s.target.className="tab-active"};return(r,s)=>(k(),S("div",Mt,[e("div",Nt,[e("ul",null,[e("li",{onClick:s[0]||(s[0]=o=>d(_,0)),class:H(i.value===0?"tab-active":"")},"會員問題",2),e("li",{onClick:s[1]||(s[1]=o=>d(l,1)),class:H(i.value===1?"tab-active":"")},"訂票須知",2),e("li",{onClick:s[2]||(s[2]=o=>d(v,2)),class:H(i.value===2?"tab-active":"")},"飲食政策",2),e("li",{onClick:s[3]||(s[3]=o=>d(u,3)),class:H(i.value===3?"tab-active":"")},"COVID-19",2)])]),(k(!0),S(P,null,D(p.value,o=>(k(),S("div",{class:"mb-4 faq-info",key:o.id},[e("div",Ft,[e("h4",null,I(o.title),1),e("div",{class:"faq-info-content",hidden:"true",ref_for:!0,ref:n=>{g.value[o.id]=n}},[e("p",{innerHTML:o.content},null,8,Ht),e("a",Ot,I(o["link-title"]),1)],512)]),e("div",Pt,[e("span",{class:"material-symbols-outlined",onClick:n=>E(o.id,n)}," add_circle ",8,At)])]))),128))]))}},Vt=A(Tt,[["__scopeId","data-v-f3856b9f"]]);const Bt=e("div",{class:"titles"},[e("h1",null,[e("i",{class:"line"}),x("現正熱映中"),e("i",{class:"line"})]),e("h4",null,"What's On")],-1),Dt=e("div",{class:"titles"},[e("h1",null,[e("i",{class:"line"}),x("最新消息"),e("i",{class:"line"})]),e("h4",null,"News")],-1),zt={class:"news-list"},Rt=e("div",{class:"titles"},[e("h1",null,[e("i",{class:"line"}),x("關於我們"),e("i",{class:"line"})]),e("h4",null,"About")],-1),jt=e("div",{class:"titles"},[e("h1",null,[e("i",{class:"line"}),x("常見問題"),e("i",{class:"line"})]),e("h4",null,"FAQ")],-1),Wt={__name:"HomeView",setup(t){const _=N(null);return X().then(l=>{const{data:v}=l;_.value=v}),(l,v)=>{const u=U("router-link");return k(),S(P,null,[e("header",null,[b(w)]),b(G),Bt,b(vt),Dt,e("div",zt,[(k(!0),S(P,null,D(_.value,p=>(k(),O(u,{key:p.id,to:`/newsHome/${p.id}`},{default:C(()=>[b(Y,{article:p},null,8,["article"])]),_:2},1032,["to"]))),128))]),Rt,b(It),jt,b(Vt),b(W,{class:"mt-[120px]"})],64)}}};export{Wt as default};
