<script setup>
import { useRouter } from 'vue-router';
import FooterSection from '@/components/FooterSection.vue';
import { useOrderStore } from '@/js/store/store';
import { storeToRefs } from 'pinia';
import { numberComma } from '@/js/all';

const store = useOrderStore();
const {
  movie, movieTime, movieDate, handleCount, addToCart,
} = store;
const {
  tickets, discount, originTotalPrice, totalPrice,
} = storeToRefs(store);
const router = useRouter();

function handleCart(name, qty, price) {
  store.$patch({
    tickets,
  });
  handleCount();
  addToCart(name, qty, price);
}
function next() {
  router.push('/seatsSelect');
}
</script>
<template>
  <div class="ticketSelect">
    <header>
      <div class="mt-8 logo">
        FILM HOUSE
        <span>好窩！電影之家</span>
      </div>
      <div class="mt-4 progress">
        <ul>
          <li>選擇票種</li>
          <li>選擇位置</li>
          <li>確認訂單</li>
          <li>訂單完成</li>
        </ul>
      </div>
    </header>
    <div class="mt-4 movie">
      <img :src="movie.pictureUrls[0]" alt="" class="img-center" />
      <div class="movie-text">
        <h2>
          {{ movie.title }}
          <span>{{ movie.length.hours }}小時{{ movie.length.min }}分</span>
          <span class="movieGrade">{{ movie.grade }}</span>
        </h2>
        <p>日期：{{ movieDate }}</p>
        <p>
          時間：{{ movieTime.startAt.hour }} :
          {{ movieTime.startAt.second === 0 ? "00" : movieTime.startAt.second }}
        </p>
      </div>
    </div>
    <div class="flex justify-end">
      <span
        class="
          mt-4
          px-2
          py-1
          inline-block
          rounded
          shadow-lg
          bg-red-800
          text-white
        "
        >尚有 {{ movieTime.seatQty - movieTime.booked.length }} 個座位</span
      >
    </div>
    <div class="my-4 table-wrap">
      <table>
        <thead>
          <tr>
            <th>票種</th>
            <th>價格</th>
            <th>數量</th>
            <th>合計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket">
            <td>{{ ticket.name }}</td>
            <td>${{ ticket.price }}</td>
            <td>
              <select
                class="w-2/3"
                name="qty"
                id=""
                v-model.number="ticket.qty"
                @change="handleCart(ticket.name, ticket.qty, ticket.price)"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </td>
            <td>${{ numberComma(ticket.qty * ticket.price) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>小計</th>
            <td>${{ numberComma(originTotalPrice) }}</td>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>優惠折扣</th>
            <td>-${{ numberComma(discount) }}</td>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th class="bg-grey-light">合計</th>
            <td class="bg-grey-light font-extrabold">
              ${{ numberComma(totalPrice) }}元
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="flex justify-end my-8">
      <button
        class="mb-4 btn-primary"
        type="button"
        v-if="totalPrice !== 0"
        @click="next()"
      >
        下一步
      </button>
    </div>
  </div>
  <FooterSection />
</template>

<style lang="scss" scoped>
@import "@/styles/flexBox.scss";
.ticketSelect {
  @apply px-[30%] max-lg:px-12 max-sm:px-4;
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
.movie {
  @apply relative;
  &:before {
    @apply w-full h-1/2 content-[''] absolute bottom-0 blur-sm;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000ca 57.6%);
  }
}
.movie-text {
  @apply px-4 py-8 text-white font-noto absolute bottom-0;
  span {
    @apply text-base;
  }
}
.movieGrade {
  @apply p-1 border border-white rounded-md leading-5 text-base;
}
.table-wrap {
  @apply px-8 py-4 bg-white rounded-md  shadow-lg;
}
table {
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
      @apply border-t;
    }
    th {
      @apply py-1;
    }
    td {
      @apply py-1;
    }
  }
}
select {
  @apply border-none;
}
</style>
