<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import MovieSwiper from '@/components/MovieSwiper.vue';
import NewsCard from '@/components/NewsCard.vue';
import AboutUsSwiper from '@/components/AboutUsSwiper.vue';
import FooterSection from '@/components/FooterSection.vue';
import FAQSection from '@/components/FAQSection.vue';
import { getArticles } from '@/js/api';
import { ref } from 'vue';

const articles = ref(null);
getArticles()
  .then((res) => {
    const { data } = res;
    articles.value = data;
  });
</script>

<template>
      <header>
            <NavigationBar />
      </header>
      <HeroSection />
      <div class="titles">
            <h1><i class="line"></i>現正熱映中<i class="line"></i></h1>
            <h4>What's On</h4>
      </div>
      <MovieSwiper />
      <div class="titles">
            <h1><i class="line"></i>最新消息<i class="line"></i></h1>
            <h4>News</h4>
      </div>
      <div class="news-list">
            <template v-for="article in articles" :key="article.id">
                  <router-link :to="`/newsHome/${article.id}`">
                        <NewsCard :article="article"/>
                  </router-link>
            </template>
      </div>
      <div class="titles">
            <h1><i class="line"></i>關於我們<i class="line"></i></h1>
            <h4>About</h4>
      </div>
      <AboutUsSwiper />
      <div class="titles">
            <h1><i class="line"></i>常見問題<i class="line"></i></h1>
            <h4>FAQ</h4>
      </div>
      <FAQSection />
      <FooterSection class="mt-[120px]"/>
</template>

<style lang="scss" scope>
@import '@/styles/flexBox.scss';
.titles{
      @apply mt-36 mb-12;
      h1{
            @include flexBox-center;
            @apply items-center font-extrabold text-white text-center font-noto tracking-wide;
            -webkit-text-stroke: 1px black;
            .line{
                  @apply block mx-4 w-[46px] h-[1px] bg-grey-dark;
            }
      }
      h4{
            @apply font-Alfa-Slab-One text-yellow-golden uppercase text-center tracking-widest;
      }
}
.news-list{
      @apply max-w-[1296px] mx-auto grid grid-cols-2 gap-6;
}
</style>
