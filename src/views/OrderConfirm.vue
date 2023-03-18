<script setup>
import FooterSection from '@/components/FooterSection.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore, useAuthStore } from '@/js/store/store';
import { numberComma, getOrderNumber } from '@/js/all';
import { postOrder } from '@/js/api';

import {
  Field as VField, Form as VForm, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const router = useRouter();
const store = useOrderStore();
const authStore = useAuthStore();
const { id } = authStore;
const {
  movie, movieDate, movieTime,
  seats, totalPrice, discount, cart,
} = store;
const name = ref();
const email = ref();
const payment = ref();
const tel = ref();
function addOrder() {
  const orderNumber = getOrderNumber();
  const order = {
    orderNumber,
    cart,
    totalPrice,
    seats,
    userId: id,
    name: name.value,
    email: email.value,
    tel: tel.value,
    payment: payment.value,
    showTime: {
      date: movieDate, startAt: movieTime.startAt,
    },
    movie,
  };
  postOrder(order)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: '購票成功',
        showConfirmButton: true,
        timer: 1500,
      });
      router.push(`/orderComplete/${orderNumber}`);
    })
    .catch(() => {
    });
}
function onSubmit() {
  addOrder();
}
</script>
<template>
  <div class="orderConfirm">
    <header>
      <div class="mt-8 logo">
        FILM HOUSE
        <span>好窩！電影之家</span>
      </div>
      <div class="mt-4 progress">
        <ul>
          <li>選擇票種</li>
          <li class="active">選擇位置</li>
          <li class="active">確認訂單</li>
          <li>訂單完成</li>
        </ul>
      </div>
    </header>
    <div class="ticketInfo mt-4 px-4 py-8 flex items-center">
      <div>
        <h2>{{movie.title}}</h2>
        <span>{{movie.length.hours}}小時{{movie.length.min}}分</span>
        <span class="ml-4">{{movie.grade}}</span>
      </div>
      <div class="ml-16">
        <p class="flex items-center">
          <span class="material-symbols-outlined"> schedule </span>
          {{movieDate}}  {{movieTime.startAt.hour}} :
            {{(movieTime.startAt.second === 0 ? '00' : movieTime.startAt.second)}}
        </p>
        <p class="flex items-center">
          <span class="material-symbols-outlined"> local_activity </span>
          <template v-for="item in seats" :key="item">
            <div class="mr-1">
            {{item}}
            </div>
          </template>
        </p>
      </div>
    </div>
    <div class="my-4 table-wrap">
      <table class="ticketInfo-table">
        <thead>
          <tr>
            <th>票種</th>
            <th>價格</th>
            <th>數量</th>
            <th class="text-end">合計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in cart" :key="ticket.name">
            <td>{{ticket.name}}</td>
            <td>${{numberComma(ticket.price)}}</td>
            <td>x {{ticket.qty}}</td>
            <td class="flex justify-end">${{numberComma(ticket.price * ticket.qty)}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>優惠折扣</th>
            <td></td>
            <td></td>
            <td class="text-end">-${{numberComma(discount)}}</td>
          </tr>
          <tr>
            <th>合計</th>
            <td></td>
            <td></td>
            <td class="font-extrabold text-end">${{numberComma(totalPrice)}}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="my-4 form-wrap">
      <VForm @submit.prevent="onSubmit" v-slot="{ meta }">
        <h3 class="mb-4 border-b border-grey-light">購買人資訊</h3>
        <label for="name" class="form-label">訂購人姓名</label>
        <VField type="text" name="訂購人姓名" class="form-control" id="name" v-model="name"
        rules="required"/>
        <ErrorMessage name="訂購人姓名" class="error"/>
        <label for="email" class="form-label">Email信箱</label>
        <VField type="email" name="Email" class="form-control" id="email" v-model="email"
        rules="required|email"/>
        <ErrorMessage name="Email" class="error"/>
        <label for="tel" class="form-label">手機號碼</label>
        <VField type="tel" name="手機號碼" class="form-control" id="tel" v-model="tel"
        :rules="{ required: true, regex: /^[0-9]{10}$/g }"/>
        <ErrorMessage name="手機號碼" class="error"/>
        <label for="payment" class="form-label">付款方式</label>
        <VField as="select" name="付款方式" id="payment" class="form-control" v-model="payment"
        rules="required">
          <option value="" selected disabled>請選擇付款方式</option>
          <option value="信用卡">信用卡</option>
          <option value="Paypal">PayPal</option>
          <option value="LinePay">LinePay</option>
        </VField>
        <ErrorMessage name="付款方式" class="error"/>
        <div class="my-8 flex justify-between">
          <button class="mb-4 btn-primary" type="button" @click="router.go(-1)">上一步</button>
          <button class="mb-4 btn-danger cursor-pointer"
          type="submit" id="openButton" :disabled="!meta.valid"
          @click="onSubmit()">
            送出
          </button>
        </div>
      </VForm>
    </div>
  </div>
  <FooterSection />
</template>

<style lang="scss" scoped>
@import "@/styles/flexBox.scss";
.orderConfirm {
  @apply px-[30%];
}
.progress {
  @apply border-2 border-yellow-golden rounded-[28px] text-base text-center font-noto font-bold;
  ul {
    @apply grid grid-cols-4;
    li {
      @apply w-full px-6 py-4;
      &:first-child {
        @apply w-full rounded-[25px]
                text-white bg-yellow-golden border border-yellow-golden;
      }
    }
    .active {
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
.table-wrap {
  @apply px-8 py-4 bg-white rounded-md  shadow-lg;
}
.ticketInfo-table {
  @apply w-full text-lg text-grey-dark text-left;
  thead {
    th {
      @apply py-2;
    }
  }
  tbody {
    td {
      @apply py-2 border-b border-grey-light text-left;
    }
  }
  tfoot {
    tr:first-child {
      @apply border-t-2 border-grey-dark;
    }
    th {
      @apply py-1;
    }
    td {
      @apply py-1;
    }
  }
}
</style>
