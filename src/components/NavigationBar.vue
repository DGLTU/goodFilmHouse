<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/js/store/store';
import { cleanCookie } from '@/js/all';

const store = useAuthStore();
const { isAuth } = storeToRefs(store);
const active = ref();
const nav = ref();
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
    <nav>
      <ul>
        <li><router-link to="/today">今日電影</router-link></li>
        <li><router-link to="/newsHome">最新消息</router-link></li>
        <li><a>立即訂票</a></li>
        <li v-if="isAuth" class="cursor-" @click="logOut()"><span>會員登出</span></li>
        <li v-else><router-link class="btn-secondary" to="/signUp&In">註冊/登入</router-link></li>
      </ul>
    </nav>
  </navbar>
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
          z-10;
  }
  .logo{
    @apply text-white text-[28px] font-Alfa-Slab-One;
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
            &:hover{
              @apply border-b-2 border-white;
            }
          }
    }
  }
  .navbar-bg-changed{
    @apply bg-red-wine;
  }
</style>
