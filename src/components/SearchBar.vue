<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getMovies, getShowTimeList } from '@/js/api';
import { useOrderStore } from '@/js/store/store';
import { getToday } from '@/js/all';

const router = useRouter();
const moviesData = ref();
const showtimeData = ref();
const dateList = ref(new Set([]));
const timeList = ref();
const inputMovie = ref('');
const inputDate = ref('');
const inputTime = ref('');
const inputMovieDom = ref(null);
const inputDateDom = ref(null);
const inputTimeDom = ref(null);
const store = useOrderStore();

const search = () => {
  store.$patch({
    movie: moviesData.value.filter((item) => item.id === inputMovie.value)[0],
    movieDate: inputDate.value,
    movieTime: inputTime.value,
  });
  if (inputMovie.value !== '' && inputDate.value !== '' && inputTime.value !== '') {
    inputMovieDom.value.disabled = true;
    inputDateDom.value.disabled = true;
    inputTimeDom.value.disabled = true;
    router.push('/ticketSelect');
  }
};
onMounted(() => {
  getMovies()
    .then((res) => {
      const { data } = res;
      moviesData.value = data;
    });
  getShowTimeList()
    .then((res) => {
      const { data } = res;
      showtimeData.value = data;
      showtimeData.value.forEach((showtime, index) => {
        if (showtime.date === 'today') {
          showtimeData.value[index].date = getToday();
        }
      });
    });
});

watch(inputMovie, (n) => {
  timeList.value = [];
  dateList.value = new Set([]);
  showtimeData.value.forEach((showtime) => {
    if (showtime.movieId === n) {
      dateList.value.add(showtime.date);
    }
  });
});
watch(inputDate, (n) => {
  timeList.value = showtimeData.value.filter((d) => d.date === n && inputMovie.value === d.movieId);
});
</script>

<template>
  <div class="search-bar">
    <div class="select-wrapper">
      <select class="movies" name="movies" id="movies" v-model="inputMovie" ref="inputMovieDom">
        <option value="" disabled>請選擇電影</option>
        <option :value="movie.id"
        v-for="movie in moviesData"
        :key="movie.id">{{movie.title}}</option>
      <span class="material-symbols-outlined text-xl text-white font-bold">
      keyboard_arrow_down
      </span>
      </select>
    </div>
    <div class="select-wrapper">
      <select class="showDate" name="showDate" id="showDate" v-model="inputDate" ref="inputDateDom">
        <option value="">請選擇日期</option>
        <option :value="date"
        v-for="date in dateList" :key="date">{{date}}</option>
      </select>
    </div>
    <div class="select-wrapper">
      <select class="showTime" name="showTime" id="showTime" v-model="inputTime" ref="inputTimeDom">
        <option value="">請選擇場次</option>
        <option :value="time"
        v-for="time in timeList" :key="time.id">
        {{`${time.startAt.hour} : ${(time.startAt.second === 0 ? '00' : time.startAt.second)}`}}
        </option>
      </select>
    </div>
    <button type="button" class="btn-primary" @click="search(inputTime)">看電影去!</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/flexBox.scss';
.search-bar{
  @include flexBox-between;
  @apply w-[1076px] px-16 py-10 rounded-sm bg-black/75 backdrop-blur-sm
  max-lg:flex-col max-lg:w-2/3 max-lg:px-4;
  .select-wrapper{
    @apply w-1/4 border-r-2 border-grey flex items-center
    max-lg:w-full max-lg:border-r-0;
    select{
      font-family: 'Material Icons';
      @apply
      w-5/6
      p-2
      bg-black/0
      text-white
      text-lg
      font-bold
      border-none
      max-lg:w-full;
      &:focus{
        @apply outline-none;
      }
      option{
        @apply text-black;
      }
    }
    .movies{
      background-image: url('data:image/svg+xml;,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"><path d="m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>');
    }
    .showTime{
      background-image: url('data:image/svg+xml;,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"><path d="m31.35 33.65 2.25-2.25-7.95-8V13.35h-3V24.6ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24t1.575-7.75q1.575-3.65 4.3-6.375 2.725-2.725 6.375-4.3Q19.9 4 24 4t7.75 1.575q3.65 1.575 6.375 4.3 2.725 2.725 4.3 6.375Q44 19.9 44 24t-1.575 7.75q-1.575 3.65-4.3 6.375-2.725 2.725-6.375 4.3Q28.1 44 24 44Zm0-20Zm0 17q7 0 12-5t5-12q0-7-5-12T24 7q-7 0-12 5T7 24q0 7 5 12t12 5Z"/></svg>');
    }
    .showDate{
      background-image: url('data:image/svg+xml;,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"><path d="M9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5Z"/></svg>');
    }
  }
}
</style>
