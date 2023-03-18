<script setup>
import FooterSection from '@/components/FooterSection.vue';
import { ref } from 'vue';
import { useAuthStore } from '@/js/store/store';
import { getOrderByUser, getUser } from '@/js/api';

const authStore = useAuthStore();
const { id } = authStore;
const userData = ref();
const orderData = ref();

getUser(id)
  .then((res) => {
    const data = res.data[0];
    userData.value = data;
  });
getOrderByUser(id)
  .then((res) => {
    const { data } = res;
    orderData.value = data;
  });

</script>
<template>
  <div class="member">
    <div class="mt-8 logo">
      <router-link to="/">
        FILM HOUSE
        <span>好窩！電影之家</span>
      </router-link>
    </div>
    <img class="img-center" src="https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <div class="content">
      <div class="orderHistory">
        <h3 class="title">
          <span class="material-symbols-outlined">
            list_alt
          </span>
          訂票紀錄</h3>
        <div class="orderHistory-list">
          <div class="history" v-for="order in orderData"
          :key="order.id">
          片名：{{ order.movie.title }}
          <p>
          場次：{{ order.showTime.date }}
          <span>
            {{ order.showTime.startAt.hour }} :
            {{ (order.showTime.startAt.second === 0 ? '00' : order.showTime.startAt.second) }}
          </span>
            座位：
            <template v-for="seat in order.seats" :key="seat">
              {{ seat }}
            </template>
            票種：
            <span v-for="item in order.cart" :key="item.name">
            {{ item.name }} X {{ item.qty }}
            </span>
          </p>
          <p>
            <span>
            總金額：$ {{ order.totalPrice }} 元
            </span>
            <span>
              訂單編號：{{order.orderNumber}}
            </span>
          </p>
          </div>
        </div>
      </div>
      <div class="memberDetail">
        <h3 class="title">
          <span class="mr-2 material-symbols-outlined">
            local_activity
          </span>
          會員資料</h3>
        <div class="memberDetail-content">
          <h3>HI！歡迎回來</h3>
          <table>
            <tr>
              <th>會員帳號：</th>
              <td>{{ userData.email }}</td>
            </tr>
            <tr>
              <th>會員姓名：</th>
              <td>{{userData.name}}</td>
            </tr>
            <tr>
              <th>手機號碼：</th>
              <td>{{userData.tel}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>
<style lang="scss" scoped>
  .member{
    @apply w-full mx-auto px-[20%] max-lg:px-4;
    img{
      @apply h-[300px] rounded-lg max-sm:h-[100px];
    }
  }
  .content{
    @apply my-16 flex justify-between max-xl:flex max-lg:block;
    .title{
      @apply px-4 py-2 flex rounded-lg
      bg-yellow-golden items-center text-white font-bold;
      span{
        @apply mr-4;
      }
    }
  }
  .history{
    @apply my-4 px-4 py-4 bg-white rounded-xl text-base text-grey-dark max-sm:text-xs;
    span{
      @apply mr-4;
    }
  }
  .memberDetail{
    @apply rounded-lg text-grey-dark font-noto text-xl max-sm:text-sm;
    &-content{
      @apply px-4 py-8 max-sm:px-8;
    }
    table{
      @apply mt-4;
      td{
        @apply p-4;
      }
    }
  }
</style>
