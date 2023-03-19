<script setup>
const props = defineProps({
  article: Object,
});
</script>

<template>
  <div class="card">
    <img class="img-center" :src="props.article.picture" alt="">
    <div class="card-body">
      <div class="card-title">
        {{props.article.title}}
      </div>
      <div class="card--subtitle">
        {{props.article.date}}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
@import '@/styles/style.scss';
@import '@/styles/flexBox.scss';

.card{
  @apply flex relative;
}
.card-body{
  @include flexBox-between;
  @apply w-full h-[80px] px-6 py-0 text-white font-Alfa-Slab-One absolute bottom-0
  max-sm:text-xs max-sm:h-[40px];
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 57.6%);
}
</style>
