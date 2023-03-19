<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import '@/styles/swiperPagination.scss';

const pagination = {
  clickable: true,
  type: 'bullets',
  horizontalClass: 'hero-swiper-pagination-horizontal hero-swiper-pagination-bullets',
  bulletClass: 'swiper-pagination-bullet hero-swiper-pagination-bullet',
  bulletActiveClass: 'hero-swiper-pagination-bullet-active',
};
const modules = [Pagination, Autoplay];
</script>

<template>
<swiper :modules="modules"
        :pagination="pagination"
        :autoplay="{
          delay: 2000,
          disabledOnInteraction: false
        }">
  <swiper-slide>
    <img class="img-hero bg-[url(@/assets/images/avatar.jpeg)] max-lg:h-[350px]" alt="">
  </swiper-slide>
  <swiper-slide>
    <img class="img-hero bg-[url(@/assets/images/hero2.png)] max-lg:h-[350px]" alt="">
  </swiper-slide>
  <swiper-slide>
    <img class="img-hero bg-[url(@/assets/images/hero3.png)] max-lg:h-[350px]" alt="">
  </swiper-slide>
  <swiper-slide>
    <img class="img-hero bg-[url(https://cdn.gelestatic.it/kataweb/tvzap/2019/07/Moonlight-9.jpg)] max-lg:h-[350px]" alt="">
  </swiper-slide>
  <swiper-slide>
    <img class="img-hero bg-[url(http://3.bp.blogspot.com/-2zhYeLgeGlc/U2-1gPVIKJI/AAAAAAAANXQ/vpXCMUGsfPs/s1600/her1.jpeg)] max-lg:h-[350px]" alt="">
  </swiper-slide>
</swiper>
</template>

<style lang="scss" scoped>

</style>
