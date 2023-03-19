<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import NewsCard from '@/components/NewsCard.vue';
import FooterSection from '@/components/FooterSection.vue';
import { getArticles } from '@/js/api';
import { ref } from 'vue';
import BreadCrumb from '@/components/BreadCrumb.vue';

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
  <div class="mx-48 mt-16  max-lg:mt-56 max-lg:mx-12 max-sm:mx-8">
    <BreadCrumb :lastBread="'最新消息'"/>
    <div class="news-list">
      <template v-for="article in articles" :key="article.id">
        <router-link :to="`/newsHome/${article.id}`">
          <NewsCard :article="article" />
        </router-link>
      </template>
    </div>
  </div>
  <FooterSection />
</template>

<style lang="scss" scope>
.news-list{
      @apply mx-auto mt-8 mb-24 max-w-[1296px] grid grid-cols-2 gap-6
      max-lg:grid-cols-1;
}
</style>
