<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import FooterSection from '@/components/FooterSection.vue';
import { useOrderStore } from '@/js/store/store';
import { getShowTimeList } from '@/js/api';

const router = useRouter();
const store = useOrderStore();
const {
  movie, movieDate, movieTime, seats, totalQty,
} = store;
const showData = ref(null);
const soldSeats = ref([]);
const orderSeats = ref([]);
const availableSeatsQty = ref(totalQty);
const selectSeat = (e) => {
  if (availableSeatsQty.value === 0) {
    const { seat } = e.target.dataset;
    if (orderSeats.value.indexOf(seat) === -1
    && soldSeats.value.indexOf(seat) === -1) {
      orderSeats.value.shift();
      orderSeats.value.push(seat);
    }
  } else {
    const { seat } = e.target.dataset;
    if (orderSeats.value.indexOf(seat) === -1
        && soldSeats.value.indexOf(seat) === -1) {
      orderSeats.value.push(seat);
      availableSeatsQty.value -= 1;
    }
  }
};
const changeSeatStyle = (seat) => {
  let seatClass = '';
  if (soldSeats.value.indexOf(seat) > -1) {
    seatClass = 'sold';
  } else if (orderSeats.value.indexOf(seat) > -1) {
    seatClass = 'selected';
  }
  return seatClass;
};
const next = () => {
  store.$patch({
    seats: orderSeats.value,
  });
  router.push('/orderConfirm');
};
onMounted(() => {
  getShowTimeList(movieTime.id)
    .then((res) => {
      const { data } = res;
      showData.value = JSON.parse(JSON.stringify(data[0]));
      soldSeats.value = showData.value.booked;
    })
    .catch();
  if (seats.length !== 0) {
    orderSeats.value = [...seats];
    if (totalQty >= seats.length) {
      availableSeatsQty.value = totalQty - seats.length;
    } else {
      orderSeats.value = [];
    }
  }
});
</script>
<template>
<div class="seatsSelect">
    <header>
        <div class="mt-8 logo">FILM HOUSE
            <span>好窩！電影之家</span>
        </div>
        <div class="mt-4 progress">
            <ul>
                <li>選擇票種</li>
                <li class="active">選擇位置</li>
                <li>確認訂單</li>
                <li>訂單完成</li>
            </ul>
        </div>
    </header>
    <div class="mt-4 movie">
        <img :src="movie.pictureUrls[0]" alt="" class="img-center">
        <div class="movie-text">
            <h2>{{movie.title}}
                <span>{{movie.length.hours}}小時{{movie.length.min}}分</span>
                <span class="movieGrade">{{movie.grade}}</span></h2>
            <p>日期：{{movieDate}}</p>
            <p>
            時間：{{movieTime.startAt.hour}} :
            {{(movieTime.startAt.second === 0 ? '00' : movieTime.startAt.second)}}
            </p>
        </div>
    </div>
    <div class="mt-4 seatsMark">
        <i class="fa-solid fa-square"></i>
        <span>可選位置</span>
        <i class="fa-solid fa-square sold"></i>
        <span>已售</span>
        <i class="fa-solid fa-square selected"></i>
        <span>您的位置</span>
    </div>
    <h3 class="mt-4 flex justify-center">還可選 {{availableSeatsQty}} 個</h3>
    <div class="mt-4 screen"><p>Screen</p></div>
    <table>
        <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            </tr>
        <tr>
            <th>A</th>
            <td v-for="num in 7" :key="num+'A'">
                <i class="fa-solid fa-square" :data-seat="num+'A'"
                :class="changeSeatStyle(num+'A')"
                @click="selectSeat($event)"></i>
            </td>
            <th>A</th>
        </tr>
        <tr>
            <th>B</th>
            <td v-for="num in 7" :key="num+'B'">
                <i class="fa-solid fa-square" :data-seat="num+'B'"
                :class="changeSeatStyle(num+'B')"
                @click="selectSeat($event)"></i>
            </td>
            <th>B</th>
        </tr>
        <tr>
            <th>C</th>
            <td v-for="num in 7" :key="num+'C'">
                <i class="fa-solid fa-square" :data-seat="num+'C'"
                :class="changeSeatStyle(num+'C')"
                @click="selectSeat($event)"></i>
            </td>
            <th>C</th>
        </tr>
        <tr>
            <th>D</th>
            <td v-for="num in 7" :key="num+'D'">
                <i class="fa-solid fa-square" :data-seat="num+'D'"
                :class="changeSeatStyle(num+'D')"
                @click="selectSeat($event)"></i>
            </td>
            <th>D</th>
        </tr>
        <tr>
            <th>E</th>
            <td v-for="num in 7" :key="num+'E'">
                <i class="fa-solid fa-square" :data-seat="num+'E'"
                :class="changeSeatStyle(num+'E')"
                @click="selectSeat($event)"></i>
            </td>
            <th>E</th>
        </tr>
        <tr>
            <th>F</th>
            <td v-for="num in 7" :key="num+'F'">
                <i class="fa-solid fa-square" :data-seat="num+'F'"
                :class="changeSeatStyle(num+'F')"
                @click="selectSeat($event)"></i>
            </td>
            <th>F</th>
        </tr>
        <tr>
            <th>G</th>
            <td v-for="num in 7" :key="num+'G'">
                <i class="fa-solid fa-square" :data-seat="num+'G'"
                :class="changeSeatStyle(num+'G')"
                @click="selectSeat($event)"></i>
            </td>
            <th>G</th>
        </tr>
        <tr>
            <th>H</th>
            <td v-for="num in 7" :key="num+'H'">
                <i class="fa-solid fa-square" :data-seat="num+'H'"
                :class="changeSeatStyle(num+'H')"
                @click="selectSeat($event)"></i>
            </td>
            <th>H</th>
        </tr>
    </table>
    <div class="my-8 flex justify-between">
        <button class="mb-4 btn-primary" type="button" @click="router.go(-1)">上一步</button>
        <button class="mb-4 btn-primary" type="button" v-if="availableSeatsQty === 0"
        @click="next">下一步</button>
    </div>
</div>
<FooterSection />
</template>

<style lang="scss" scoped>
@import '@/styles/flexBox.scss';
.seatsSelect{
    @apply px-[30%] max-lg:px-12 max-sm:px-4;
}
.progress{
    @apply border-2 border-yellow-golden rounded-[28px] text-base text-center font-noto font-bold;
    ul{
        @apply grid grid-cols-4;
        li{
            @apply w-full px-6 py-4;
            &:first-child{
                @apply w-full rounded-[25px]
                text-white bg-yellow-golden border border-yellow-golden;
            }
        }
        .active{
            @apply relative w-full h-full bg-yellow-golden text-white;
            &:before{
                @apply block w-1/4 h-full content-['']  absolute -left-[15%] bottom-0
                    bg-yellow-golden rounded-r-[25px];
            }
            &:after{
                @apply block w-1/4 h-full content-['']  absolute -right-[10%] bottom-0
                    bg-yellow-golden rounded-r-[25px];
            }
        }
    }
}
.logo{
    @apply text-grey-dark text-[28px] font-Alfa-Slab-One;
    & span{
      @apply block text-sm font-bold font-noto;
    }
}
.movie{
    @apply relative;
    &:before{
        @apply w-full h-1/2 content-[''] absolute bottom-0 blur-sm;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000ca 57.6%)
    }
}
.movie-text{
    @apply px-4 py-8 text-white font-noto absolute bottom-0;
    span{
        @apply text-base;
    }
}
.movieGrade{
  @apply p-1 border border-white rounded-md leading-5 text-base;
}
.screen{
    @include flexBox-center;
    p{
        @apply
        inline-block px-2 py-1
        border-2 border-red-wine rounded-lg bg-red-wine
        text-center font-Alfa-Slab-One tracking-widest
        text-white uppercase;
    }
}
table{
    @apply w-1/5 mx-auto;
    td{
        i{
            @apply flex justify-center text-grey text-2xl
            cursor-pointer transition-all delay-200;
            &:hover{
                @apply text-3xl;
            }
        }
    }
}
.seatsMark{
    @include flexBox-center;
    i{
        @apply ml-4 mr-1 text-2xl text-grey;
    }
}
i.selected{
    @apply text-yellow-golden;
}
i.sold{
    @apply text-grey-light;
}
</style>
