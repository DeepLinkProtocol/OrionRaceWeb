<template>
  <div>
    <div class="page_cont2">
      <div class="cont2_text delay500 animation_hide" v-animate="{ delay: 500, class: 'fadeInUp' }">
        {{ $t('home.cont2_text1') }}
      </div>
      <div class="cont2_btns delay600 animation_hide" v-animate="{ delay: 600, class: 'fadeInUp' }">
        <div class="cont2_btn" :class="{ active: model_type == 'long' }" @click="getModelData('long')">
          {{ $t('home.cont2_btn1') }}
        </div>
        <div class="cont2_btn" :class="{ active: model_type == 'short' }" @click="getModelData('short')">
          {{ $t('home.cont2_btn2') }}
        </div>
      </div>
    </div>
    <div class="page_cont3 delay300 animation_hide" v-animate="{ delay: 300, class: 'fadeInDown' }">
      <div class="cont3_btn">
        <div class="title">{{ $t('home.cont3.text1') }}</div>
        <div class="text">{{ OrionData.total_calc_point }}</div>
      </div>
      <div class="cont3_btn">
        <div class="title">{{ $t('home.cont3.text2') }}</div>
        <div class="text">{{ OrionData.total_gpu_num }}</div>
      </div>
      <div class="cont3_btn">
        <div class="title">{{ $t('home.cont3.text3') }}</div>
        <div class="text">{{ OrionData.total_address }}</div>
      </div>
      <div class="cont3_btn">
        <div class="title">{{ $t('home.cont3.text4') }}</div>
        <div class="text">{{ OrionData.rental_rate }}</div>
      </div>
      <div class="cont3_btn">
        <div class="title">{{ $t('home.cont3.text5') }}</div>
        <div class="text">{{ OrionData.total_dlc }}</div>
      </div>
      <div class="cont3_btn">
        <div class="title">{{ $t('home.cont3.text6') }}</div>
        <div class="text">{{ OrionData.total_dlc }}</div>
      </div>
      <div class="cont3_btn">
        <div class="title">{{ $t('home.cont3.text7') }}</div>
        <div class="text">{{ OrionData.total_rent_dlc }}</div>
      </div>
    </div>
    <div class="page_cont4">
      <div class="page4_bg"></div>
      <div class="page_cont">
        <el-scrollbar>
          <div class="cont_table animation_hide" v-animate="{ delay: 0, class: 'amplify' }">
            <table class="table_cont" v-if="DataList.length">
              <tr class="theader">
                <th class="">{{ $t('home.cont4.li1') }}</th>
                <th class="width270">{{ $t('home.cont4.li2') }}</th>
                <th class="">{{ $t('home.cont4.li3') }}</th>
                <th class="">{{ $t('home.cont4.li4') }}</th>
                <th class="">{{ $t('home.cont4.li5') }}</th>
                <th class="">{{ $t('home.cont4.li6') }}(DLC)</th>
                <th class="">{{ $t('home.cont4.li7') }}(DLC)</th>
                <th class="">{{ $t('home.cont4.li8') }}(DLC)</th>
              </tr>
              <tr v-for="el in DataList">
                <td class="num">{{ el.index }}</td>
                <td class="width270">
                  {{ el.holder.substr(0, 30) }} <br />
                  {{ el.holder.substr(30, 100) }}
                </td>
                <td class="">{{ el.calc_point }}</td>
                <td class="">{{ el.gpu_num }}</td>
                <td class="">{{ el.gpu_num ? ((el.rent_gpu / el.gpu_num) * 100).toFixed(2) + '%' : '0.00%' }}</td>
                <td class="">{{ el.rent_reward }}</td>
                <td class="">{{ el.released_reward }}</td>
                <td class="">{{ el.total_reward }}</td>
              </tr>
            </table>
            <table class="table_cont width100" v-else>
              <tr class="theader">
                <th class="">{{ $t('home.cont4.li1') }}</th>
                <th class="width270">{{ $t('home.cont4.li2') }}</th>
                <th class="">{{ $t('home.cont4.li3') }}</th>
                <th class="">{{ $t('home.cont4.li4') }}</th>
                <th class="">{{ $t('home.cont4.li5') }}</th>
                <th class="">{{ $t('home.cont4.li6') }}</th>
                <th class="">{{ $t('home.cont4.li7') }}</th>
                <th class="">{{ $t('home.cont4.li8') }}</th>
              </tr>
              <tr>
                <td colspan="8" class="nodata">No Data</td>
              </tr>
            </table>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import { ref } from "vue"
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>

<style lang="scss" scoped>
.page_cont2 {
  position: relative;
  z-index: 7;
  width: 90%;
  gap: 20px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  .cont2_text {
    flex: 1;
    color: #fff;
    font-size: 20px;
    max-width: 600px;
    min-width: 540px;
    line-height: 40px;
    font-family: Monda;
    margin-bottom: 50px;
  }
  .cont2_btns {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    justify-content: space-between;
    .cont2_btn {
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
.page_cont3 {
  position: relative;
  width: 90%;
  gap: 5px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-bottom: 70px;
  align-items: center;
  justify-content: space-between;
  .cont3_btn {
    padding: 10px;
    overflow: hidden;
    text-align: center;
    border-radius: 19px;
    margin-bottom: 20px;
    white-space: break-spaces;
    background: rgba(3, 255, 145, 0.1);
    border: 1px solid rgba(3, 255, 145, 0.15);
    .title {
      height: 35px;
      font-size: 16px;
      line-height: 1;
      font-family: Monda;
      color: rgba(255, 255, 255, 0.6);
    }
    .text {
      color: #03ff91;
      font-size: 16px;
      font-weight: 600;
      font-family: Monda;
    }
  }
}
.page_cont4 {
  position: relative;
  z-index: 5;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 200px;
  .page4_bg {
    position: absolute;
    top: -500px;
    left: 50%;
    right: 50%;
    margin-left: -715px;
    width: 1430px;
    height: 1516px;
    background: url(../assets/home/page4_bg.png) no-repeat 100%/100%;
  }
  .page_cont {
    width: 100%;
    display: flex;
    overflow: hidden;
    border-radius: 8px;
    flex-direction: column;
    .cont_table {
      width: 100%;
      box-sizing: border-box;
      .table_cont {
        width: 1200px;
        text-align: left;
        border-collapse: collapse;
        &.width100 {
          width: 100%;
        }
        tr.theader {
          color: #000;
          font-size: 18px;
          font-weight: 600;
          font-family: Monda;
          background: #03ff91;
          th {
            border: none;
            line-height: 1;
            padding: 10px 15px;
          }
        }
        th {
          padding: 0 15px;
        }
        td {
          font-size: 16px;
          font-family: Monda;
          padding: 10px 15px;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.1);
          border-top: 10px solid #000;
          border-bottom: 0;
          &.num {
            color: #fff;
            font-weight: 600;
          }
        }
      }
      .nodata {
        width: 100%;
        height: 400px;
        text-align: center;
        font-size: 40px !important;
      }
      .width270 {
        width: 270px;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .homepage {
    .page_cont1 {
      .text {
        width: 100%;
      }
      .text1 {
        width: 100%;
      }
    }
    .page_cont4 {
      .page_cont {
        .cont_table {
          .table_cont {
            &.width100 {
              width: 100%;
              tr.theader {
                font-size: 10px;
              }
              .width270 {
                width: unset;
              }
            }
          }
        }
      }
    }
  }
}
:deep(.el-select__selected-item) {
  color: #38eed6 !important;
  background-color: red;
}
</style>
