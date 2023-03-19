<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import MovieCard from '@/components/MovieCard.vue';
import { getMovies } from '@/js/api';

const movies = ref();
const navigation = {
  nextEl: '.btn-nextSlide',
  prevEl: '.btn-prevSlide',
};
const modules = [Navigation, Autoplay];

onMounted(() => {
  getMovies()
    .then((res) => {
      const { data } = res;
      movies.value = data;
    })
    .catch((err) => console.log(err));
});
</script>

<template>
  <swiper
  class="swiper"
  :modules="modules"
  :navigation="navigation"
  :loop="true"
  :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
  }"
  :breakpoints="{
    375: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1680: {
      slidesPerView: 5.3,
      spaceBetween: 40
    },
  }">
    <swiper-slide v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie"/>
    </swiper-slide>
    <div class="movies-swiper-navigation">
      <div class="btn-prevSlide">
        <span class="material-symbols-outlined">
        arrow_circle_left
        </span>
      </div>
      <div class="btn-nextSlide">
        <span class="material-symbols-outlined">
        arrow_circle_right
        </span>
      </div>
    </div>
  </swiper>
</template>

<style lang="scss" scoped>
@import '@/styles/flexBox.scss';

.swiper{
  @apply relative bg-white-for-bg;
  &:before{
    @apply w-40 h-full absolute top-0 left-0 content-[''] rotate-180 z-10
          bg-gradient-to-l from-white to-[#D9D9D9]/0 max-lg:w-10;
  }
  &:after{
    @apply w-40 h-full absolute top-0 right-0 content-[''] z-10
    bg-gradient-to-l from-white to-[#D9D9D9]/0 max-lg:w-10;
  }
}
.movies-swiper-navigation{
  @include flexBox-center;
  @apply mt-11;
  span{
    @apply text-6xl mr-2 text-grey cursor-pointer;
  }
}
</style>
