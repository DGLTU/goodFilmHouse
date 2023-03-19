<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import FooterSection from '@/components/FooterSection.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getMovies } from '@/js/api';

const route = useRoute();
const movie = ref();
getMovies(route.params.movieId)
  .then((res) => {
    const data = res.data[0];
    movie.value = data;
  });
</script>
<template>
  <header>
    <NavigationBar />
  </header>
  <div class="movieImage">
    <img :src="movie.pictureUrls[0]" alt="" class="img-hero">
  </div>
  <div class="mt-16 movieIntro">
    <div class="content">
      <div class="movieDetail">
        <h1 class="flex items-center">
          {{movie.title}}<span class="ml-4 badge-yellow">{{ movie.category }}</span></h1>
        <span>{{ movie['title-english'] }}</span>
        <h2 class="mt-8" v-if="movie.storyline!==''">「{{ movie.storyline }}」</h2>
        <p>{{movie.description}}</p>
      </div>
      <div class="table-wrap">
        <table>
          <tr>
            <th>導演：</th>
            <td>{{movie.director}}</td>
          </tr>
          <tr>
            <th>IMDb評分：</th>
            <td>{{movie['IMDb-score']}}</td>
          </tr>
          <tr>
            <th>分級：</th>
            <td>{{movie.grade}}</td>
          </tr>
          <tr>
            <th>上映日期：</th>
            <td>{{movie['release-date']}}</td>
          </tr>
          <tr>
            <th>演員：</th>
            <td >
              <div v-for="actor in movie.actors" :key="actor">
                {{ actor }}
              </div>
            </td>
          </tr>
          <tr>
            <th>片長</th>
            <td>{{movie.length.hours}}
               小時 {{(movie.length.min===0 ? '00' : movie.length.min)}}分</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <FooterSection class="mt-[120px]"/>
</template>

<style lang="scss" scoped>
@import '@/styles/flexBox.scss';
  .movieIntro{
    @apply px-48 font-noto max-lg:px-12 max-sm:px-4;
  }
  .content{
    @apply grid grid-cols-12
    max-lg:grid-cols-1 max-lg:gap-y-8;
  }
  .movieDetail{
    @apply col-span-8;
    p{
      @apply w-2/3 mt-8 leading-10 text-xl;
    }
  }
  .table-wrap{
    @apply p-12 bg-grey-light bg-opacity-60 col-span-4 text-lg rounded max-sm:p-8;
    table{
      @apply h-full;
    }
    th, td{
      @apply text-start pl-4;
    }
  }
</style>
