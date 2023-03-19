<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/js/store/store';
import { cleanCookie } from '@/js/all';

const store = useAuthStore();
const { isAuth } = storeToRefs(store);
const active = ref();
const nav = ref();
const isOpen = ref(false);
const handleScroll = () => {
  const navHeight = nav.value.clientHeight;
  if (window.scrollY > window.screen.height - navHeight) {
    active.value = true;
  } else {
    active.value = false;
  }
};
window.addEventListener('scroll', handleScroll);

function logOut() {
  cleanCookie();
  isAuth.value = false;
  store.$patch({ isAuth });
}
</script>

<template>
  <navbar :class="{'navbar-bg-changed': active}" ref="nav">
    <router-link to="/" class="logo">FILM HOUSE
      <span>好窩！電影之家</span></router-link>
    <nav class="max-lg:hidden">
      <ul>
        <li><router-link to="/today">今日電影</router-link></li>
        <li><router-link to="/newsHome">最新消息</router-link></li>
        <li><a href="#searchBar">立即訂票</a></li>
        <template v-if="isAuth">
          <li><router-link to="/memberHome">會員中心</router-link></li>
          <li class="cursor-" @click="logOut()"><span>會員登出</span></li>
        </template>
        <li v-else><router-link class="btn-secondary" to="/signUp&In">註冊/登入</router-link></li>
      </ul>
    </nav>
    <span class="material-symbols-outlined text-white text-5xl cursor-pointer lg:hidden"
    @click="isOpen = !isOpen">
      menu
    </span>
  </navbar>
  <nav class="hamburger" v-if="isOpen">
    <ul>
      <li><router-link to="/today">今日電影</router-link></li>
      <li><router-link to="/newsHome">最新消息</router-link></li>
      <li><a href="#searchBar">立即訂票</a></li>
      <template v-if="isAuth">
        <li><router-link to="/memberHome">會員中心</router-link></li>
        <li class="cursor-" @click="logOut()"><span>會員登出</span></li>
      </template>
      <li v-else><router-link class="btn-secondary" to="/signUp&In">註冊/登入</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/styles/flexBox.scss';
  navbar{
    @include flexBox-between;
    @apply
          w-full
          px-48
          py-4
          fixed
          bg-black
          bg-opacity-40
          z-10
          max-lg:static
          max-lg:bg-yellow-golden
          max-lg:px-12
          max-sm:px-4;
  }
  .logo{
    @apply text-white text-[28px] font-Alfa-Slab-One max-lg:text-base;
    & span{
      @apply block text-sm font-bold font-noto;
    }
  }
  nav{
    ul{
      @include flexBox-between;
      @apply
          w-[440px]
          text-white
          font-bold
          text-lg;
          li{
            @apply cursor-pointer;
          }
          li:not(:last-child){
            & a:hover{
              @apply border-b-2 border-white;
            }
          }
    }
  }
  .hamburger{
    @apply bg-red-wine flex justify-center;
      ul{
        @apply block p-12;
      }
      li{
        @apply text-center;
      }
      li:last-child{
        @apply mt-4;
      }
  }
  .navbar-bg-changed{
    @apply bg-red-wine;
  }
</style>
