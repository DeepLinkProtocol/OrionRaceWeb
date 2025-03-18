<template>
  <div class="device">
    <div class="home_bg"></div>
    <div class="page_cont1 animation_hide" v-animate="{delay: 0, class:'amplify'}">
      <div class="title">
        <p>{{ $t('device.title') }}</p>
      </div>
      <div class="cont_btns">
        <div class="cont_btn" :class="{ active: model_type == 'long' }" @click="getData('long')">{{ $t('home.cont2_btn1') }}</div>
        <div class="cont_btn" :class="{ active: model_type == 'short' }" @click="getData('short')">{{ $t('home.cont2_btn2') }}</div>
      </div>
      <div class="text">{{ $t('device.title1') }}</div>
    </div>
    <div class="page_cont2 delay300 animation_hide" v-animate="{delay: 300, class:'fadeInUp'}">
      <div class="cont_left">
        <div class="model" :class="{active: choosetype == 1}" @click="choose(1)">RTX 4060</div>
        <div class="model" :class="{active: choosetype == 2}" @click="choose(2)">RTX 4070</div>
        <div class="model" :class="{active: choosetype == 3}" @click="choose(3)">RTX 4070Ti</div>
        <div class="model" :class="{active: choosetype == 4}" @click="choose(4)">RTX 4080</div>
      </div>
      <div class="cont_right">
        <div class="right_top">
          <p class="text2_tx">
            {{ $t('device.table.text1') }}
            <el-select class="el-select-type select_width210" v-model="Machine_status" :placeholder="$t('long_rule.cont4.text6')" @change='SelectStatus'>
              <el-option v-for="(item, index) in options " :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select> 
          </p>
          <p class="text2_tx">
            {{ $t('device.table.text2') }}
            <el-select class="el-select-type select_width210" v-model="gpuNum" :placeholder="$t('long_rule.cont4.text6')" @change='SelectNum'>
              <el-option v-for="(item, index) in options1 " :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select> 
          </p>
          <p class="text2_tx">{{ $t('device.table.text3') }}<span>0</span></p>
          <p class="text2_tx">{{ $t('device.table.text4') }}<span>0</span></p>
        </div>
        <div class="right_con">
          <div class="deviceInfo" v-for="(el ,index) in machine_list">
            <div class="machine_top">
              <div class="machine_id">机器ID: {{ el.machine_id }}</div>
              <div class="machine_text">机房编号：<span class="text">xxxxx</span></div>
              <div class="machine_text">机器状态：<span class="text">{{ el.isrented ? '被租用' : '空闲'  }}</span></div>
            </div>
            <div class="machine_info">
              <table class="table_cont">
                <tr class="theader">
                  <th class="" colspan="2">GPU型号：NVIDIA A5000</th>
                  <th class="">GPU数量: 4</th>
                  <th class="">GPU显存：24G</th>
                  <th class="">网络运营商：Telecom</th>
                </tr>
                <tr>
                  <td>已上线时长：<span class="num">xxxxx</span></td>
                  <td>累计DBC租金数：<span class="num">xxxxx</span></td>
                  <td class="">国家：<span class="num">xxxxx</span></td>
                  <td class="">城市：<span class="num">xxxxx</span></td>
                  <td class="">单GPU日租金：<span class="num">xxxxx</span></td>
                </tr>
                <tr>
                  <td>系统硬盘：<span class="num">xxxxx</span></td>
                  <td>CPU内核数：<span class="num">xxxxx</span></td>
                  <td class="">CPU型号：<span class="num">xxxxx</span></td>
                  <td class="">上行带宽：<span class="num">xxxxx</span></td>
                  <td class="">日租金：<span class="num">xxxxx</span></td>
                </tr>
                <tr>
                  <td>数据硬盘：<span class="num">xxxxx</span></td>
                  <td>CPU频率：<span class="num">xxxxx</span></td>
                  <td class="">内存数：<span class="num">xxxxx</span></td>
                  <td class="">下行带宽：<span class="num">xxxxx</span></td>
                  <td class="">总日租金：<span class="num">xxxxx</span></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, computed, ref, inject, onBeforeMount, onBeforeUnmount, onMounted, getCurrentInstance, watch, nextTick } from "vue";
  import { useI18n } from "vue-i18n";
  import { useStore } from "vuex"
  import { useRoute, useRouter } from 'vue-router'
  import { getLongMachinesList, getShortMachinesList } from '@/utils/getWeb3Connect.js'
  export default defineComponent({
    name: 'device',
    setup() {
      const store = useStore()
      const router = useRouter()
      const loading = inject( '$loading')
      let lan = computed(() => {
        return store.state.lan
      })
      const { t, locale } = useI18n();
      const instance = getCurrentInstance()
      const timer = ref(null)
      const linkHref = (el) => {
        window.open(el, 'target')
      }
      const model_type = ref('long')
      const choosetype = ref(1)
      const choose = (val) => {
        choosetype.value = val
      }
      const Machine_status = ref('')
      const gpuNum = ref('')
      const options = ref(
        [{
          value: '',
          label: t('All')
        }, {
          value: 'rented',
          label: t('Rented')
        }, {
          value: 'online',
          label: t('Idle')
        }]
      )
      const options1 = ref(
        [{
          value: '',
          label: t('All')
        }, {
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '5'
        }, {
          value: '6',
          label: '6'
        }, {
          value: '7',
          label: '7'
        }, {
          value: '8',
          label: '8'
        }, {
          value: '9',
          label: '9'
        }, {
          value: '10',
          label: '10'
        }]
      )
      const SelectStatus = (val) => {
        console.log(val, 'val');
      }
      const SelectNum = (val) => {
        console.log(val, 'val');
      }
      const data_loading = ref(null)
      const machine_list = ref([])
      const getData = async (el) => {
        data_loading.value = loading.service({target: '.cont_right', background: 'rgba(122, 122, 122, 0.6)'})
        if (el == 'long') {
          model_type.value = 'long'
          // machine_list.value = await getLongMachinesList()
          // console.log(machine_list.value, 'machine_list');
        } else {
          model_type.value = 'short'
          // machine_list.value = await getShortMachinesList()
        }
        data_loading.value.close()
      }
      onMounted(async () => {
        await nextTick();
        // await getData('long')
      })
      onBeforeUnmount(() => {
        if (timer.value) {
          clearInterval(timer.value);
          timer.value = null;
        }
      })
      watch(
        () => locale.value,
        () => {
          options.value = [{
            value: '',
            label: t('All')
          }, {
            value: 'rented',
            label: t('Rented')
          }, {
            value: 'online',
            label: t('Idle')
          }]
          options1[0] = {
            value: '',
            label: t('All')
          }
        }
      )
      return {
        lan,
        options,
        options1,
        model_type,
        choosetype,
        choose,
        gpuNum,
        machine_list,
        Machine_status,
        SelectStatus,
        SelectNum,
        getData
      };
    }
  })
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
      margin:200px 0 40px;
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
          background: #03FF91;
        }
        &:hover {
          color: #000;
          background: #03FF91;
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
    align-items: flex-start;
    .cont_left {
      position: sticky;
      top: 50px;
      width: 264px;
      min-height: 600px;
      padding: 20px;
      margin-right: 30px;
      border-radius: 32px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.05);
      .model {
        width: 100%;
        height: 90px;
        color: #fff;
        line-height: 1;
        font-size: 20px;
        padding: 0 30px;
        cursor: pointer;
        font-weight: 600;
        transition: 0.5s ease;
        font-family: Monda;
        text-align: center;
        align-items: center;
        margin-bottom: 12px;
        border-radius: 17px;
        display: inline-flex;
        justify-content:center;
        box-sizing: border-box;
        background: rgba(255, 255, 255, .1);
        &:last-child {
          margin-bottom: 0;
        }
        &.active {
          color: #000;
          background: #03FF91;
        }
        &:hover {
          color: #000;
          background: #03FF91;
        }
      }
    }
    .cont_right {
      flex: 1;
      padding: 20px 10px;
      border-radius: 23px;
      box-sizing: border-box;
      border: 1px solid rgba(255, 255, 255, .2);
      .right_top {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        .text2_tx {
          color: #fff;
          display: flex;
          font-size: 20px;
          font-family: Monda;
          align-items: center;
          margin-bottom: 12px;
          span {
            margin: 0 10px;
          }
        }
        .select_width210 {
          width: 120px;
          margin: 0 10px;
        }
      }
      .right_con {
        .deviceInfo {
          width: 100%;
          padding: 10px;
          margin-top: 20px;
          border-radius: 19px;
          box-sizing: border-box;
          background: rgba(255, 255, 255, .05);
          &:first-child {
            margin-top: 10px;
          }
          .machine_top {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .machine_id {
              color: #fff;
              font-size: 16px;
              border-radius: 9px;
              margin-right: 20px;
              font-family: Monda;
              padding: 10px 15px;
              margin-bottom: 10px;
              word-break: break-word;
              box-sizing: border-box;
              background: rgba(255, 255, 255, .1);
            }
            .machine_text {
              color: #fff;
              font-size: 16px;
              margin-right: 20px;
              font-family: Monda;
              margin-bottom: 10px;
              .text {
                color: rgba(255, 255, 255, .6);
              }
            }
          }
          .machine_info {
            width: 100%;
            overflow: hidden;
            border-radius: 10px;
            .table_cont {
              width: 100%;
              text-align: left;
              border-collapse: collapse;
              tr.theader {
                color: #000;
                font-size: 20px;
                font-weight: 600;
                font-family: Monda;
                background: #03FF91;
                th {
                  line-height: 1;
                  border: none;
                  padding: 10px;
                }
              }
              th {
                padding: 0 15px;
              }
              td {
                padding: 10px;
                font-size: 16px;
                font-family: Monda;
                border-top: 1px solid #000;
                color: rgba(255, 255, 255, 0.6);
                background: rgba(255, 255, 255, 0.05);
                border-right: 1px solid rgba(255, 255, 255, .1);
                &:last-child {
                  border-right: 0;
                }
                &.num {
                  color: #fff;
                }
              }
            }
            .width270 {
              width: 270px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .device {
    .page_cont2 {
      .cont_left {
        width: 200px;
        min-height: auto;
        padding: 10px;
        margin-right: 20px;
        border-radius: 22px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        .model {
          width: 100%;
          height: 70px;
          color: #fff;
          line-height: 1;
          font-size: 16px;
          padding: 0 30px;
          cursor: pointer;
          font-weight: 600;
          font-family: Monda;
          text-align: center;
          align-items: center;
          margin-bottom: 12px;
          border-radius: 17px;
          display: inline-flex;
          justify-content:center;
          box-sizing: border-box;
          background: rgba(255, 255, 255, .1);
          &:last-child {
            margin-bottom: 0;
          }
          &.active {
            color: #000;
            background: #03FF91;
          }
        }
      }
      .cont_right {
        flex: 1;
        padding: 10px;
        min-height: 600px;
        border-radius: 16px;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, .2);
        .right_top {
          .text2_tx {
            color: #fff;
            font-size: 16px;
            font-family: Monda;
            margin-bottom: 12px;
          }
          .select_width210 {
            width: 120px;
            margin: 0 10px;
          }
        }
        .right_con {
          .deviceInfo {
            .machine_top {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              .machine_id {
                font-size: 14px;
              }
              .machine_text {
                font-size: 14px;
              }
            }
            .machine_info {
              .table_cont {
                tr.theader {
                  font-size: 14px;
                  th {
                    line-height: 1;
                    border: none;
                    padding: 5px;
                  }
                }
                th {
                  padding: 0 15px;
                }
                td {
                  padding: 5px;
                  font-size: 14px;
                  &:last-child {
                    border-right: 0;
                  }
                }
              }
              .width270 {
                width: 270px;
              }
            }
          }
        }
      }
    }
  }
  
}

@media screen and (max-width: 900px) {
  .device {
    .page_cont2 {
      flex-wrap: wrap;
      .cont_left {
        z-index: 5;
        display: flex;
        width: 100%;
        padding: 10px;
        flex-wrap: wrap;
        margin-right: 0;
        min-height: auto;
        align-items: center;
        border-radius: 22px;
        margin-bottom: 30px;
        box-sizing: border-box;
        justify-content: space-between;
        background: rgba(14, 14, 14, 1);
        .model {
          width: 20%;
          height: 70px;
          color: #fff;
          margin: 5px;
          line-height: 1;
          font-size: 16px;
          padding: 0 10px;
          cursor: pointer;
          font-weight: 600;
          min-width: 130px;
          font-family: Monda;
          text-align: center;
          align-items: center;
          border-radius: 17px;
          display: inline-flex;
          justify-content:center;
          box-sizing: border-box;
          background: rgba(255, 255, 255, .1);
          &:last-child {
            margin-bottom: 5px;
          }
          &.active {
            color: #000;
            background: #03FF91;
          }
        }
      }
      .cont_right {
        width: 100%;
        padding: 10px;
        min-height: 600px;
        border-radius: 16px;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, .2);
        .right_top {
          .text2_tx {
            color: #fff;
            font-size: 16px;
            font-family: Monda;
            margin-bottom: 12px;
          }
          .select_width210 {
            width: 120px;
            margin: 0 10px;
          }
        }
        .right_con {
          .deviceInfo {
            .machine_top {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              .machine_id {
                font-size: 14px;
              }
              .machine_text {
                font-size: 14px;
              }
            }
            .machine_info {
              .table_cont {
                tr.theader {
                  font-size: 14px;
                  th {
                    line-height: 1;
                    border: none;
                    padding: 5px;
                  }
                }
                th {
                  padding: 0 15px;
                }
                td {
                  padding: 5px;
                  font-size: 14px;
                  &:last-child {
                    border-right: 0;
                  }
                }
              }
              .width270 {
                width: 270px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<style>
.el-input__wrapper {
  background: transparent !important;
}
.el-input__inner {
  color: #38EED6 !important;
}
</style>

