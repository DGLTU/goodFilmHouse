<script setup>
import FooterSection from '@/components/FooterSection.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/js/store/store';
import { logIn, signUp } from '@/js/api';
import { getCookie } from '@/js/all';
import {
  Field as VField, Form as VForm, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const router = useRouter();
const store = useAuthStore();
const isRegister = ref(false);
const form = ref();
const email = ref();
const pwd = ref();
const pwdConfirm = ref();
const name = ref();
const tel = ref();

function fireSweetAlert(text, icon = 'success') {
  Swal.fire({
    icon,
    title: text,
    showConfirmButton: true,
  });
}
function signIn() {
  const user = {
    email: email.value,
    password: pwd.value,
  };
  logIn(user)
    .then(() => {
      const token = getCookie('token');
      const id = getCookie('id');
      const role = getCookie('role');
      store.$patch({
        token,
        id,
        role,
      });
      fireSweetAlert('登入成功! 歡迎回來');
      router.push('/');
    })
    .catch(() => {
      form.value.resetForm();
      fireSweetAlert('登入資訊有誤，請重新登入', 'warning');
    });
}
function register() {
  const user = {
    email: email.value,
    password: pwd.value,
    tel: tel.value,
    name: name.value,
  };
  signUp(user)
    .then(() => {
      const token = getCookie('token');
      const id = getCookie('id');
      const role = getCookie('role');
      store.$patch({
        token,
        id,
        role,
      });
      fireSweetAlert('註冊成功! 歡迎加入好窩!');
      form.value.resetForm();
      router.push('/');
    })
    .catch((err) => {
      switch (err.response.data) {
        case 'Email already exists':
          fireSweetAlert('此電子信箱已被使用，請重新註冊', 'error');
          break;
        case 'Password is too short':
          fireSweetAlert('密碼長度過短，請輸入至少4位英數字', 'error');
          break;
        default:
          break;
      }
    });
}
</script>
<template>
  <div class="content">
    <div class="mt-8 logo">
      FILM HOUSE
      <span>好窩！電影之家</span>
    </div>
    <img class="img-center" src="https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <div class="sign">
      <div class="sign-in" v-if="!isRegister">
        <h2>登入會員</h2>
        <div class="form-wrap">
          <VForm @submit.prevent="signIn" v-slot="{ meta }" ref="form">
            <label for="email" class="form-label">電子信箱 : </label>
            <VField type="email" name="Email" id="email" class="form-control" v-model="email"
            rules="required|email"/>
            <ErrorMessage name="Email" class="error"/>
            <label for="pwd" class="form-label">密碼 : </label>
            <VField type="password" name="密碼" id="pwd" class="form-control" v-model="pwd"
            rules="required"/>
            <ErrorMessage name="密碼" class="error"/>
            <div class="flex justify-end">
              <a href="" class="text-sm underline text-blue-500"
              @click.prevent="isRegister=true">我要註冊</a>
            </div>
            <div class="btn">
              <button type="button" class="mt-8 btn-danger"
              @click="signIn" :disabled="!meta.valid">登入</button>
            </div>
          </VForm>
        </div>
      </div>
      <div class="sign-up" v-else>
        <h2>註冊會員</h2>
        <div class="form-wrap">
          <VForm @submit.prevent="signIn" v-slot="{ meta }" ref="form">
            <label for="name" class="form-label">姓名 : </label>
            <VField type="text" name="姓名" id="name" class="form-control" v-model="name"
            rules="required"/>
            <ErrorMessage name="姓名" class="error"/>
            <label for="email" class="form-label">電子信箱 : </label>
            <VField type="email" name="Email" id="email" class="form-control" v-model="email"
            rules="required|email"/>
            <ErrorMessage name="Email" class="error"/>
            <label for="pwd" class="form-label">密碼 : </label>
            <VField type="password" name="密碼" id="pwd" class="form-control" v-model="pwd"
            rules="required"/>
            <ErrorMessage name="密碼" class="error"/>
            <label for="pwd" class="form-label">再次輸入密碼 : </label>
            <VField type="password" name="再次輸入密碼" id="pwd" class="form-control" v-model="pwdConfirm"
            rules="required|confirmed:@密碼"/>
            <ErrorMessage name="再次輸入密碼" class="error"/>
            <label for="tel" class="form-label">手機號碼 : </label>
            <VField type="tel" name="手機號碼" class="form-control" id="tel" v-model="tel"
            :rules="{ required: true, regex: /^[0-9]{10}$/g }"/>
            <ErrorMessage name="手機號碼" class="error"/>
            <div class="btn">
              <button type="button" class="mt-8 btn-danger" :disabled="!meta.valid"
              @click="register()">註冊會員</button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<style lang="scss" scoped>
  .content{
    @apply px-[20%] max-lg:px-12 max-sm:px-4;
    img{
      @apply h-[300px] rounded-lg max-lg:h-[150px];
    }
  }
  .sign{
    @apply my-8 mb-16;
    h2{
      @apply text-center mb-4;
    }
    .sign-in{
      @apply w-1/3 mx-auto max-lg:w-full;
    }
    .sign-up{
      @apply w-1/2 mx-auto max-lg:w-full;
    }
    .btn{
      @apply flex justify-center;
    }
  }
</style>
