<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Grid, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

const navigation = {
  nextEl: '.btn-nextSlide',
  prevEl: '.btn-prevSlide',
};
const modules = [Navigation, Grid, Autoplay];
</script>

<template>
<div class="swiper">
  <swiper
    :modules="modules"
    :navigation="navigation"
    :slidesPerView="4"
    :slidesPerGroupSkip="1"
    :grid="{
      rows: 1
    }"
    :autoplay="{delay: 2500, disabledOnInteraction: false}"
    >
    <swiper-slide  class="swiper-content">
      <a href="" class="title">
          <p class="">票價資訊<span>Tickets</span></p>
          <img src="@/assets/images/swiper/Tickets.png" alt="">
      </a>
    </swiper-slide>
    <swiper-slide  class="swiper-content">
      <a href="" class="title">
        <p class="">我要力推!<span>Movies Recommendations</span></p>
          <img src="@/assets/images/swiper/CrowdPlaying.png" alt="">
      </a>
    </swiper-slide>
    <swiper-slide  class="swiper-content">
      <a href="" class="title">
        <p class="">會員制度<span>Membership</span></p>
          <img src="@/assets/images/swiper/MemberShip.png" alt="">
      </a>
    </swiper-slide>
    <swiper-slide  class="swiper-content">
      <a href="" class="title">
        <p class="">理念<span>Concept</span></p>
          <img src="@/assets/images/swiper/Concept.png" alt="">
      </a>
    </swiper-slide>
    <swiper-slide  class="swiper-content">
      <a href="" class="title">
        <p class="">好窩咖啡<span>Cafe</span></p>
          <img class="img-center" src="@/assets/images/coffee.jpg" alt="">
      </a>
    </swiper-slide>
    <div class="about-swiper-navigation">
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
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/flexBox.scss';
.swiper{
  @apply mx-[10%];
}
.about-swiper-navigation{
  @include flexBox-center;
  @apply mt-11 bg-white-for-bg;
  span{
    @apply text-6xl mr-2 text-grey cursor-pointer;
  }
}
.swiper-content{
  @apply border-[5px] border-yellow-golden h-[497px];
  img{
    @apply h-full;
  }
  .title{
    @apply w-full h-full relative;
    p{
      @apply w-full h-full flex flex-col justify-center
      absolute top-0 left-0 text-4xl text-white font-black text-center;
    }
    span{
      @apply block font-norican font-normal;
    }
    &:before{
      background: rgba(40, 40, 40, 0.35);
      @apply w-full h-full absolute content-[''];
    }
  }
}
</style>
