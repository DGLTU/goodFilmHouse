<script setup>
const props = defineProps({
  movie: Object,
});

</script>

<template>
  <RouterLink :to="{name: 'movieIntro', params: { movieId: props.movie.id }}">
  <div class="card">
    <img class="card-img" :src="props.movie.poster" alt="">
    <div class="card-content">
      <h3>{{props.movie.title}}</h3>
      <div class="card-text">
        <p class="movieTime">
          <span class="material-symbols-outlined">
            schedule
          </span>
          {{props.movie.length.hours}}小時{{props.movie.length.min}}分
        </p>
        <div class="movieGrade">
          <p>{{movie.grade}}</p>
        </div>
      </div>
    </div>
  </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import '@/styles/flexBox.scss';
@import '@/styles/style.scss';
.card{
  @apply w-[306px] h-[508px] relative;
}
.card-img{
  @apply img-center rounded-md;
}
.card-content{
  @apply
  w-full
  h-[125px]
  px-6
  rounded-md
  text-white
  absolute
  bottom-0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 57.6%);
  h3{
    @apply mt-11 mb-2;
  }
  .card-text{
    @include flexBox-between;
  }
}
.movieTime{
  @include flexBox-between;
}
.movieGrade{
  @apply p-1 border border-white rounded-md leading-5 text-base;
}
</style>
