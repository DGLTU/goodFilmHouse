<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { getMovies } from '@/js/api';
import { useOrderStore } from '@/js/store/store';

const store = useOrderStore();
const router = useRouter();
const movies = ref();

async function getAllData() {
  movies.value = await getMovies('today');
  movies.value = movies.value.data;
  const set = new Set(null);
  movies.value.forEach((movie) => {
    movie.showtimeList.forEach((time) => {
      if (time.date === 'today') {
        set.add(movie);
      }
    });
  });
  movies.value = [...set];
}
function order(show) {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  store.$patch({
    movie: movies.value.filter((item) => item.id === show.movieId)[0],
    movieDate: `${y}/${m}/${d}`,
    movieTime: show,
  });
  router.push('/ticketSelect');
}
getAllData();
</script>

<template>
  <NavigationBar/>
  <HeroSection/>
  <div class="titles">
    <h1><i class="line"></i>今日電影<i class="line"></i></h1>
      <h4>Today's Movie</h4>
  </div>
  <div class="today">
    <div class="movie" v-for="movie in movies" :key="movie.id">
        <img :src="movie.pictureUrls[0]" alt="" class="movie-img img-center">
        <div class="movie-detail">
          <div class="movie-text">
            <p>{{ movie.title }}</p>
            <span>{{ movie['title-english'] }}</span>
            <span>{{ movie.length.hours}}
                  小時{{ (movie.length.min === 0) ? '00' : movie.length.min}}分</span>
            <span>{{ movie.grade }}</span>
          </div>
          <div class="movie-showtime">
              <template v-for="show in movie.showtimeList" :key="show.id" >
                <button type="button" class="btn-danger-sm"
                  v-if="show.date==='today'"
                  @click="order(show)">
                  {{ show.startAt.hour}}
                  :{{ (show.startAt.second === 0) ? '00' : show.startAt.second}}
                </button>
              </template>
          </div>
        </div>
    </div>
  </div>
  <FooterSection/>
</template>
<style lang="scss" scoped>
@import '@/styles/flexBox.scss';
  .today{
    @apply mb-16;
  }
  .movie{
    @apply mt-16 px-[10%] flex;
  }
  .movie-img{
    @apply w-[350px] h-[220px] rounded-lg ;
  }
  .movie-detail{
    @apply ml-16;
    p{
      @apply font-noto font-bold text-lg;
    }
    span{
      @apply mr-4;
    }
  }
  .movie-text{
    @apply mb-8;
  }
  .movie-showtime{
    @apply flex items-center;
    button{
      @apply mr-16;
    }
  }
</style>
