<script setup>
import FooterSection from '@/components/FooterSection.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getOrder } from '@/js/api';

const route = useRoute();
const order = ref();
getOrder(route.params.orderNumber)
  .then((res) => {
    const data = res.data[0];
    // eslint-disable-next-line prefer-destructuring
    order.value = JSON.parse(JSON.stringify(data));
  })
  .catch(() => {});

</script>
<template>
  <div class="orderComplete">
    <header>
      <div class="mt-8 logo">
        FILM HOUSE
        <span>好窩！電影之家</span>
      </div>
      <div class="mt-4 progress">
        <ul>
          <li>選擇票種</li>
          <li class="active-first">選擇位置</li>
          <li class="active">確認訂單</li>
          <li class="active">訂單完成</li>
        </ul>
      </div>
    </header>
    <div class="my-4 mx-auto w-1/2 orderInfo">
      <div class="flex justify-center">
        <span class="material-symbols-outlined mt-4 text-[260px]">
      qr_code_2
        </span>
      </div>
      <table class="mt-4 mb-16 orderInfo-table">
        <tr>
          <th>片名</th>
          <td>{{order.movie.title}}</td>
        </tr>
        <tr>
          <th>影院名稱</th>
          <td>好窩電影之家</td>
        </tr>
        <tr>
          <th>場次</th>
          <td>
            {{order.showTime.date}}
            {{order.showTime.startAt.hour}} :
            {{(order.showTime.startAt.second === '0' ? '00' : order.showTime.startAt.second)}}
          </td>
        </tr>
        <tr>
          <th>票種</th>
          <td
          v-for="product in order.cart"
          :key="product">{{product.name}}X{{product.qty}}</td>
        </tr>
        <tr>
          <th>座位</th>
          <td>
            <span class="mr-2"
            v-for="seat in order.seats" :key="seat">
            {{seat}}
            </span>
          </td>
        </tr>
        <tr>
          <th>總金額</th>
          <td>${{order.totalPrice}}</td>
        </tr>
        <tr>
          <th>付款方式</th>
          <td>{{order.payment}}</td>
        </tr>
        <tr>
          <th>
            訂票序號
          </th>
          <td>{{order.orderNumber}}</td>
        </tr>
      </table>
    </div>
  </div>

  <FooterSection />
</template>

<style lang="scss" scoped>
@import "@/styles/flexBox.scss";
.orderComplete {
  @apply px-[30%];
}
.progress {
  @apply border-2 border-yellow-golden rounded-[28px] text-base text-center font-noto font-bold;
  ul {
    @apply grid grid-cols-4;
    li {
      @apply w-full px-6 py-4;
      &:first-child {
        @apply w-full rounded-l-[25px]
                text-white bg-yellow-golden border border-yellow-golden;
      }
      &:last-child {
        @apply w-full rounded-r-[25px]
                text-white bg-yellow-golden border border-yellow-golden;
      }
    }
    .active {
      @apply bg-yellow-golden text-white;
    }
    .active-first {
      @apply relative w-full h-full bg-yellow-golden text-white;
      &:before {
        @apply block w-1/4 h-full content-['']  absolute -left-[15%] bottom-0
                    bg-yellow-golden rounded-r-[25px];
      }
      &:after {
        @apply block w-1/4 h-full content-['']  absolute -right-[10%] bottom-0
                    bg-yellow-golden rounded-r-[25px];
      }
    }
  }
}
.logo {
  @apply text-grey-dark text-[28px] font-Alfa-Slab-One;
  & span {
    @apply block text-sm font-bold font-noto;
  }
}
.orderInfo-table {
  @apply w-full text-lg font-noto bg-white rounded-md  shadow-lg;
  th {
    @apply p-2 text-start;
  }
  td {
    @apply text-start;
  }
}
</style>
