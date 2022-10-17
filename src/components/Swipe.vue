<script setup>
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const onReachEnd =() => {
  console.log('reach end page');
}
</script>

<template>
  <div class="read-slides">
    <swiper
      :modules="[Navigation, Pagination]"
      :navigation="true"
      :pagination="{
        type: 'fraction',
      }"
      @reachEnd="onReachEnd"
    >
      <swiperSlide>Slide 1</swiperSlide>
      <swiperSlide class="red">Slide 2</swiperSlide>
      <swiperSlide class="yellow">Slide 3</swiperSlide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
.read-slides {
  max-width: 480px;
  margin: auto;
}
.swiper-slide {
  height: 300px;
  background-color: rgb(89, 89, 189);
  + .red {
    background-color: rgb(163, 83, 83);
  }
  +.yellow {
    background-color: rgb(207, 230, 160);
  }
}
</style>