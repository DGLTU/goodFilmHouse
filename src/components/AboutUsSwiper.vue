<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Grid, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Modal } from 'flowbite';

const modal = ref();
const modalData = ref({});
const pricingData = {
  title: '票價資訊',
  body: `<div class="relative overflow-x-auto sm:rounded-lg">
    <table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
        <thead class="text-base text-gray-700 uppercase bg-gray-200
        dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    票種
                </th>
                <th scope="col" class="px-6 py-3">
                    說明
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium
                text-gray-900 whitespace-nowrap dark:text-white">
                    全票
                </th>
                <td class="px-6 py-4">
                  一般成人且無任何優惠條件者請選擇全票。
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium
                text-gray-900 whitespace-nowrap dark:text-white">
                    優待票
                </th>
                <td class="px-6 py-4">
                  指持有學生、軍警、孩童身份者即可享有優待票價，需於現場購票、網路取票時出示證件。 滿2歲以上兒童須購買優待票
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium
                text-gray-900 whitespace-nowrap dark:text-white">
                    敬老票
                </th>
                <td class="px-6 py-4">
                  凡滿65歲以上年長者即可購票，需於現場購票、網路取票時出示本人有效證件。
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
};
const recomdata = {
  title: '我要力推！',
  body: `<p class="text-xl">我們知道，電影是一種優秀的藝術形式，它可以帶給我們許多不同的情感和經驗。作為一家獨立電影院，我們想要提供給您最優秀、最特別的電影體驗。<br><br>
  現在，我們邀請您推薦您最喜愛的電影，讓我們能夠了解您的口味和興趣，同時也為我們的電影選擇提供了更多的參考和想法。無論是您最愛的經典老電影，還是最新的獨立佳作，我們都非常歡迎您分享您的想法和意見。
  <br><br>
  在這裡，您可以享受到高品質的影音體驗，舒適的座位和親切的服務。我們期待著您的到來，讓我們一起發掘電影的無限魅力！
  </p>
  <div class="flex justify-end">
    <button class="mt-8 btn-primary">推薦去！</button>
  </div>`,
};
const concept = {
  title: '理念',
  body: `<p class="text-xl">好窩電影之家中，每一部電影都是一個獨特的故事，每一個故事都有它的價值和意義。在這裡，您可以探索不同的故事和風格，感受到電影的無限魅力。<br><br>我們也非常注重社區意識。
    作為一家獨立電影院，我們知道我們的觀眾就在我們身邊。因此，我們與當地的文化團體、藝術家和社區組織合作，為當地的居民提供更多的文化體驗和活動。我們希望通過這種方式，讓獨立電影院成為一個連接社區和文化的橋樑，帶給人們更多的歡樂和啟發。<br><br>最後，我們相信創意和多樣性是我們的核心價值。我們歡迎所有不同的故事和聲音，我們相信只有通過不斷地探索和實驗，才能夠打破傳統的界限，創造出更豐富和多樣的文化和藝術。<br><br>在好窩，我們相信電影是一種連接人們的力量，我們期待著您的到來，一起探索更多不同的故事和想法！<br><br></p>`,
};
const membershipData = {
  title: '會員制度',
  body: `<div class="text-xl text-grey-dark p-4">
    <ul>
      <li>生日禮：在您的生日當天，當您購買任意一張電影影票時，可兌換一塊由好窩咖啡精心製作的蛋糕。</li>
      <li class="mt-4">電影達人優惠：如果您在當年度內看電影達到了15次，我們將會送給您一張5折優惠券，讓您在下次觀影時能夠享受更多的折扣和優惠。</li>
      <li class="mt-4">專屬優惠：作為我們的會員，您在我們的電影院消費時，只要消費滿500元，即可享受9折優惠。這個優惠不僅適用於電影票，還適用於所有的飲品和小吃。</li>
    </ul>
    <p class="mt-4">在獨立電影院，我們希望能夠為您帶來更多的優惠和福利，讓您感受到我們的關愛和感謝。我們期待著您的到來，讓我們一起享受最優質的電影體驗！</p>
  </div>`,
};
function modalShow(data) {
  modalData.value = JSON.parse(JSON.stringify(data));
  modal.value.show();
}
onMounted(() => {
  const $targetEl = document.getElementById('modalEl');
  const options = {
    placement: 'center-center',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    closable: true,
  };
  modal.value = new Modal($targetEl, options);
});
const navigation = {
  nextEl: '.btn-nextSlide',
  prevEl: '.btn-prevSlide',
};
const modules = [Navigation, Grid, Autoplay];
</script>

<template>
  <div class="swiper max-lg:hidden">
    <swiper :modules="modules"
    :navigation="navigation"
    :slidesPerView="4"
    :slidesPerGroupSkip="1"
    :grid="{
      rows: 1
    }"
    :autoplay="{ delay: 2500, disabledOnInteraction: false }">
      <swiper-slide class="swiper-content">
        <a href="" class="title" @click.prevent="modalShow(pricingData)">
          <p class="">票價資訊<span>Tickets</span></p>
          <img src="@/assets/images/swiper/Tickets.png" alt="">
        </a>
      </swiper-slide>
      <swiper-slide class="swiper-content">
        <a href="" class="title" @click.prevent="modalShow(recomdata)">
          <p class="">我要力推!<span>Movies Recommendations</span></p>
          <img src="@/assets/images/swiper/CrowdPlaying.png" alt="">
        </a>
      </swiper-slide>
      <swiper-slide class="swiper-content">
        <a href="" class="title" @click.prevent="modalShow(membershipData)">
          <p class="">會員制度<span>Membership</span></p>
          <img src="@/assets/images/swiper/MemberShip.png" alt="">
        </a>
      </swiper-slide>
      <swiper-slide class="swiper-content">
        <a href="" class="title" @click.prevent="modalShow(concept)">
          <p class="">理念<span>Concept</span></p>
          <img src="@/assets/images/swiper/Concept.png" alt="">
        </a>
      </swiper-slide>
      <swiper-slide class="swiper-content">
        <a href="" class="title">
          <p class="">好窩咖啡<span>Cafe</span></p>
          <img class="img-center" src="@/assets/images/coffee.jpg" alt="">
        </a>
      </swiper-slide>
      <div class="about-swiper-navigation">
        <div class="btn-prevSlide">
          <span class="material-symbols-outlined">
            arrow_circle_left
          </span>
        </div>
        <div class="btn-nextSlide">
          <span class="material-symbols-outlined">
            arrow_circle_right
          </span>
        </div>
      </div>
    </swiper>
  </div>
  <div class="lg:hidden flex flex-col items-center">
    <div class="swiper-content">
      <a href="" class="title" @click.prevent="modalShow(pricingData)">
        <p class="">票價資訊<span>Tickets</span></p>
        <img src="@/assets/images/swiper/Tickets_tablet_phone.png" alt="">
      </a>
    </div>
    <div class="swiper-content">
      <a href="" class="title" @click.prevent="modalShow(recomdata)">
        <p class="">我要力推!<span>Movies Recommendations</span></p>
        <img src="@/assets/images/swiper/CrowdPlaying_tablet_phone.png" alt="">
      </a>
    </div>
    <div class="swiper-content">
      <a href="" class="title" @click.prevent="modalShow(membershipData)">
        <p class="">會員制度<span>Membership</span></p>
        <img src="@/assets/images/swiper/MemberShip_tablet_phone.png" alt="">
      </a>
    </div>
    <div class="swiper-content">
      <a href="" class="title" @click.prevent="modalShow(concept)">
        <p class="">理念<span>Concept</span></p>
        <img src="@/assets/images/swiper/Concept_tablet_phone.png" alt="">
      </a>
    </div>
    <div class="swiper-content">
      <a href="" class="title">
        <p class="">好窩咖啡<span>Cafe</span></p>
        <img class="img-center" src="@/assets/images/coffee.jpg" alt="">
      </a>
    </div>
  </div>
  <!-- Modal -->
  <div id="modalEl" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4
    overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-center p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
            {{modalData.title}}
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent
            hover:bg-gray-200 hover:text-gray-900 rounded-lg
            text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600
            dark:hover:text-white"
            @click="modal.hide()">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
                1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293
                4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                v-html="modalData.body">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/flexBox.scss';

.swiper {
  @apply mx-[10%];
}

.about-swiper-navigation {
  @include flexBox-center;
  @apply mt-11 bg-white-for-bg;

  span {
    @apply text-6xl mr-2 text-grey cursor-pointer;
  }
}

.swiper-content {
  @apply border-[5px] border-yellow-golden h-[497px]
  max-lg:h-[149px] max-lg:w-[343px];

  img {
    @apply h-full w-full;
  }

  .title {
    @apply w-full h-full relative;

    p {
      @apply w-full h-full flex flex-col justify-center
      absolute top-0 left-0
      text-4xl text-white font-black text-center
      max-lg:text-3xl max-sm:text-2xl;
    }

    span {
      @apply block font-norican font-normal;
    }

    &:before {
      background: rgba(40, 40, 40, 0.35);
      @apply w-full h-full absolute content-[''];
    }
  }
}
</style>
