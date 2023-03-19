<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getArticles } from '@/js/api';

const route = useRoute();
const { articleId } = route.params;
const article = ref(null);
getArticles(articleId)
  .then((res) => {
    const { data } = res;
    article.value = data;
  });
</script>
<template>
  <header>
    <NavigationBar />
  </header>
  <HeroSection />
  <div class="news">
    <BreadCrumb :lastBread="article.title" :route="[{param: '/NewsHome', title:'最新消息'}]"/>
    <div class="content">
      <img :src="article.picture" alt="" class="img-center">
      <div class="news-text">
        <h2>{{ article.title }}</h2>
        <p>{{article.content}}</p>
      </div>
    </div>
    </div>
  <FooterSection class="mt-[120px]"/>
</template>

<style lang="scss" scoped>
  .news{
    @apply mt-16 px-48 max-lg:mt-56 max-lg:px-12 max-sm:px-4;
  }
  .content{
    @apply mt-8 font-noto grid grid-cols-2 gap-12  max-lg:grid-cols-1;
  }
  .news-text{
    @apply py-4;
    p{
      @apply mt-8 whitespace-pre-wrap;
    }
  }
  .bread{
    @apply flex;
    ol{
      @apply inline-flex items-center space-x-1 md:space-x-3;
      li{
        @apply inline-flex items-center;
        a{
          @apply inline-flex
          items-center text-sm font-medium text-gray-700
          hover:text-blue-600 dark:text-gray-400 dark:hover:text-white;
        }
        span{
          @apply ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400;
        }
      }
    }
  }
</style>
