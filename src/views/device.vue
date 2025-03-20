<template>
  <div class="device">
    <div class="home_bg"></div>
    <div class="page_cont1 animation_hide" v-animate="{ delay: 0, class: 'amplify' }">
      <div class="title">
        <p>{{ $t('device.title') }}</p>
      </div>
      <div class="cont_btns">
        <div class="cont_btn" :class="{ active: model_type == 'long' }" @click="getData('long')">
          {{ $t('home.cont2_btn1') }}
        </div>
        <div class="cont_btn" :class="{ active: model_type == 'short' }" @click="getData('short')">
          {{ $t('home.cont2_btn2') }}
        </div>
      </div>
      <div class="text">{{ $t('device.title1') }}</div>
    </div>
    <div class="page_cont2 delay300 animation_hide" v-animate="{ delay: 300, class: 'fadeInUp' }">
      <DeviceTable />
    </div>
  </div>
</template>

<script lang="js" setup>
import {
  defineComponent,
  computed,
  ref,
  inject,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  getCurrentInstance,
  watch,
  nextTick,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { getLongMachinesList, getShortMachinesList } from '@/utils/getWeb3Connect.js';
import DeviceTable from './device-modules/device-table.vue';
const store = useStore();
    const loading = inject('$loading');
    let lan = computed(() => {
      return store.state.lan;
    });
    const timer = ref(null);
    const model_type = ref('long');

    const data_loading = ref(null);

    const getData = async (el) => {
      data_loading.value = loading.service({ target: '.cont_right', background: 'rgba(122, 122, 122, 0.6)' });
      if (el == 'long') {
        model_type.value = 'long';
      } else {
        model_type.value = 'short';
      }
      data_loading.value.close();
    };
    onMounted(async () => {
      await nextTick();
      // await getData('long')
    });
    onBeforeUnmount(() => {
      if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
      }
    });
</script>

<style lang="scss" scoped>
.device {
  position: relative;
  z-index: 2;
  width: 100%;
  min-width: 600px;
  font-style: normal;
  .home_bg {
    position: absolute;
    z-index: 2;
    top: -200px;
    right: 0px;
    width: 800px;
    height: 1517px;
    background: url(../assets/home/bg2.png) no-repeat 100%/100%;
  }
  .page {
    position: relative;
    z-index: 10;
    min-width: 600px;
  }
  .page_cont1 {
    position: relative;
    z-index: 3;
    width: 90%;
    margin: auto;
    max-width: 1200px;
    overflow: hidden;
    text-align: left;
    .title {
      color: #fff;
      line-height: 1;
      font-size: 80px;
      font-weight: 600;
      max-width: 1200px;
      margin-top: 200px;
      font-family: Monda;
    }
    .text {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      font-family: Monda;
      margin-bottom: 150px;
      a {
        color: #fff;
      }
    }
    .cont_btns {
      display: flex;
      margin: 200px 0 40px;
      align-items: center;
      .cont_btn {
        transition: 0.5s ease;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        min-width: 260px;
        font-weight: 600;
        margin-right: 18px;
        text-align: center;
        font-family: Monda;
        padding: 30px 20px;
        border-radius: 17px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.1);
        &:last-child {
          margin-right: 0;
        }
        &.active {
          color: #000;
          background: #03ff91;
        }
        &:hover {
          color: #000;
          background: #03ff91;
        }
      }
    }
  }
  .page_cont2 {
    position: relative;
    z-index: 3;
    width: 90%;
    margin: auto;
    display: flex;
    max-width: 1200px;
  }
}
:deep(.el-select__selected-item) {
  color: #38eed6 !important;
}
:deep(.el-select__wrapper) {
  background: transparent !important;
}
</style>

<style>
.el-input__wrapper {
  background: transparent !important;
}
.el-input__inner {
  color: #38eed6 !important;
}
</style>
