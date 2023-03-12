<script setup>
import HeroSwiper from '@/components/HeroSwiper.vue';
import SearchBar from '@/components/SearchBar.vue';

</script>

<template>
  <div class="hero">
      <HeroSwiper class="z-0"/>
      <div class="searchBar">
            <SearchBar />
      </div>
</div>
</template>

<style lang="scss" scoped>
.hero{
  @apply relative;
  .searchBar{
    @apply w-full absolute -bottom-12 flex justify-center z-50;
  }
}
</style>
