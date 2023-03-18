<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/js/store/store';
import { cleanCookie } from '@/js/all';

const store = useAuthStore();
const { isAuth } = storeToRefs(store);

function logOut() {
  cleanCookie();
  isAuth.value = false;
  store.$patch({ isAuth });
}
</script>

<template>
<div class="footer">
  <div class="footer_navbar">
    <router-link to="/" class="logo">FILM HOUSE
      <span>好窩！電影之家</span></router-link>
    <nav>
      <ul>
        <li><router-link to="/today">今日電影</router-link></li>
        <li><router-link to="/newsHome">最新消息</router-link></li>
        <li><router-link to="/">立即訂票</router-link></li>
        <template v-if="isAuth">
          <li><router-link to="/memberHome">會員中心</router-link></li>
          <li class="cursor-" @click="logOut()"><span>會員登出</span></li>
        </template>
        <li v-else><router-link to="/signUp&In">註冊/登入</router-link></li>
      </ul>
    </nav>
  </div>
  <div class="footer_address">
    <p>台北市中山區中山北路二段7號<br>
      No.7, Sec. 1, Zhongshan N. Rd., Zhongshan Dist., Taipei City 104, Taiwan (R.O.C.)<br>
      Tel 886-2-1234-5678
    </p>
    <div class="footer_links">
      <p>本網站非供商業用途，僅供個人練習</p>
      <ul>
        <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<style lang="scss" scope>
@import '@/styles/flexBox.scss';
.footer_navbar{
  @include flexBox-between;
  nav{
    ul{
      @include flexBox-between;
      @apply text-xl font-noto max-md:block max-xl:text-base;
      li{
        @apply cursor-pointer;
        &:not(:last-child){
          @apply mr-6;
        }
        & a:hover{
          @apply border-b-2 border-white;
        }
      }
    }
  }
}
.logo{
  @apply font-Alfa-Slab-One text-[28px];
  span{
    @apply block text-xs font-semibold font-noto;
  }
}
.footer{
  @apply w-full px-48 py-12 bg-red-wine text-white
  max-lg:px-12 max-sm:px-4;
  &_address{
    @apply mt-14 text-xs font-noto font-bold;
  }
  &_links{
    @include flexBox-between;
    @apply mt-4;
    ul{
      @include flexBox-between;
      @apply text-base;
      li:not(:last-child){
        @apply mr-8;
      }
    }
  }
}
</style>
