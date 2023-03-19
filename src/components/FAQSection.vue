<script setup>
import { ref } from 'vue';

const memberInfo = [
  {
    id: 0,
    title: '如何加入會員？',
    content: '會員申請請至Index film house首頁右上角，點選註冊 → 輸入完整資料 → 完成',
    link: '',
    'link-title': '註冊請點我',
  },
  {
    id: 1,
    title: '無法登入會員',
    content: '請確認輸入的資訊是否正確，或電洽專線為您查詢處理。',
    link: '',
    'link-title': '',
  },
  {
    id: 2,
    title: '會員優惠有哪些？',
    content: '1.不定期電影活動優惠 <br> 2.訂購電影票滿500元可享9折優惠<br>3.餐飲部可享95折優惠',
    link: '',
    'link-title': '',
  },
];
const ticketInfo = [
  {
    id: 0,
    title: '請問訂票需要加入會員嗎？',
    content: '不需要。但我們建議您加入會員，不但能享有折扣，還可以收到電影之家最新消息。',
    link: '',
    'link-title': '',
  },
  {
    id: 1,
    title: '電影分級制度',
    content: `普遍級（簡稱「普」級）：無年齡限制 <br><br>
    保護級（簡稱「護」級）：未滿6歲不得觀賞，年滿6歲未滿12歲之兒童需父母、師長或成年親友陪伴觀賞。<br><br>
    輔12級（全稱「輔十二」級）：未滿12歲不得觀賞。<br><br>
    輔15級（全稱「輔十五」級）：未滿15歲不得觀賞。<br><br>
    限制級（簡稱「限」級）：未滿18歲不得觀賞。`,
    link: '',
    'link-title': '',
  },
  {
    id: 2,
    title: '訂票方式有哪些？',
    content: '網路訂票<br>現場人工售票',
    link: '',
    'link-title': '',
  },
];
const drinkFoodInfo = [
  {
    id: 0,
    title: '廳內可否攜帶外食？',
    content: '我們接受攜帶外食。只要是無異味、無酒精的食物，我們都歡迎大家在觀影中安靜地享用。',
    link: '',
    'link-title': '',
  },
  {
    id: 1,
    title: '好窩電影之家是否提供飲食？',
    content: '我們有自己的咖啡小舖，請參閱此處菜單',
    link: '',
    'link-title': '看菜單去',
  },
];
const covid19Info = [
  {
    id: 0,
    title: '防疫重點措施',
    content: `實行電影之家人員健康管理監測<br><br>
    環境消毒 影廳、公共區域定時消毒<br><br>
    觀影時，除飲食期間外，敬請全程配戴口罩。`,
    link: '',
    'link-title': '',
  },
  {
    id: 1,
    title: '確診退款政策',
    content: '如果您出現 COVID-19 症狀，在演出前2 小時，請致電我們的客戶服務團隊，能夠幫助您退款（扣除預訂費用）',
    link: '',
    'link-title': '',
  },
];

const data = ref({ ...memberInfo });
const faqContents = ref([]);
const handleToggle = (id, e) => {
  if (faqContents.value[id].hidden === false) {
    e.target.textContent = 'add_circle';
    faqContents.value[id].hidden = true;
  } else {
    e.target.textContent = 'do_not_disturb_on';
    faqContents.value[id].hidden = false;
  }
};
const activeTab = ref(0);
const tabSwitch = (info, e) => {
  activeTab.value = e;
  data.value = info;
  e.target.className = 'tab-active';
};
</script>

<template>
<div class="faq">
  <div class="faq-tabs">
    <ul>
      <li @click="tabSwitch(memberInfo, 0)" :class="(activeTab===0)?'tab-active':''">會員問題</li>
      <li @click="tabSwitch(ticketInfo, 1)" :class="(activeTab===1)?'tab-active':''">訂票須知</li>
      <li @click="tabSwitch(drinkFoodInfo, 2)" :class="(activeTab===2)?'tab-active':''">飲食政策</li>
      <li @click="tabSwitch(covid19Info, 3)" :class="(activeTab===3)?'tab-active':''">COVID-19</li>
    </ul>
  </div>
  <div class="mb-4 faq-info" v-for ="q in data" :key="q.id">
    <div class="faq-info-text">
      <h4>{{q.title}}</h4>
      <div class="faq-info-content" hidden="true" :ref="(el)=>{ faqContents[q.id] = el }">
        <p v-html="q.content"></p>
        <a href="">{{q['link-title']}}</a>
      </div>
    </div>
    <div class="faq-icon">
      <span class="material-symbols-outlined" @click="handleToggle(q.id, $event)">
        add_circle
      </span>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/flexBox.scss';
.faq{
  @include flexBox-col-center;
}
.faq-tabs{
  @apply mb-6 font-noto text-xl text-grey max-sm:text-lg;
  ul{
    @include flexBox-center;
    li{
      @apply relative cursor-pointer;
      &:before{
        @apply block w-0 h-[3px] content-[''] bg-yellow-golden absolute left-0 bottom-0
        transition-[width] duration-500;
      }
      &:hover{
        &:before{
          @apply w-full;
        }
      }
      &:not(:last-child){
        @apply mr-6;
      }
    }
  }
}
.tab-active{
  @apply font-bold text-grey-dark;
  &:after{
    @apply block w-full h-[3px] content-[''] bg-yellow-golden absolute left-0 bottom-0;
  }
}
.faq-info{
  @include flexBox-between;
  @apply w-[636px] p-6 border-2 border-grey-dark rounded-xl bg-white max-sm:w-5/6;
  h4{
    @apply font-bold font-noto text-grey-dark;
  }
  .faq-icon{
    @apply self-start;
    span{
      @apply text-grey-dark font-bold cursor-pointer;
    }
  }
}
</style>
