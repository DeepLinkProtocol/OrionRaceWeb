<template>
  <div class="homepage">
    <div class="home_bg"></div>

    <!-- 第一部分：标题和文本 -->
    <div class="page_cont1">
      <div class="title animation_hide" v-animate="{ delay: 0, class: 'amplify' }">
        <p>{{ $t('home.title1') }}</p>
        <p>{{ $t('home.title2') }}</p>
      </div>
      <div class="text delay100 animation_hide" v-animate="{ delay: 100, class: 'amplify' }">
        {{ $t('home.text') }}
      </div>
      <div class="text1 delay200 animation_hide" v-animate="{ delay: 200, class: 'amplify' }">
        {{ $t('home.text2') }}
      </div>
      <!-- 按钮列表 -->
      <div class="btnList">
        <div
          v-for="(btn, index) in btnList"
          :key="index"
          class="btn animation_hide"
          :class="`delay${300 + index * 100}`"
          v-animate="{ delay: 300 + index * 100, class: 'fadeInUp' }"
        >
          <div class="top_text">{{ $t(btn.textKey) }}</div>
          <div class="top_title">{{ $t(btn.titleKey, { [btn.valueKey]: btn.value }) }}</div>
        </div>
      </div>
    </div>

    <!-- 第二部分：文本和切换按钮 -->
    <div class="page_cont2">
      <div class="cont2_text delay500 animation_hide" v-animate="{ delay: 500, class: 'fadeInUp' }">
        {{ $t('home.cont2_text1') }}
      </div>
      <div class="cont2_btns delay600 animation_hide" v-animate="{ delay: 600, class: 'fadeInUp' }">
        <el-button
          v-for="(btn, index) in cont2Buttons"
          :key="index"
          :loading="btn.loading"
          class="cont2_btn"
          :class="{ active: model_type === btn.type }"
          @click="changeModelType(btn)"
        >
          {{ $t(btn.label) }}
        </el-button>
      </div>
    </div>

    <!-- 第三部分：统计数据 -->
    <div class="page_cont3 delay300 animation_hide" v-animate="{ delay: 300, class: 'fadeInDown' }">
      <div v-for="(item, index) in OrionDataList" :key="index" class="cont3_btn">
        <div class="title">{{ $t(item.titleKey) }}</div>
        <div class="text">{{ formatWithThousandSeparator(item.value) }}</div>
      </div>
    </div>

    <!-- 第四部分：表格 -->
    <div class="page_cont4">
      <div class="page4_bg"></div>
      <div class="page_cont">
        <el-scrollbar>
          <div class="cont_table animation_hide" v-animate="{ delay: 0, class: 'amplify' }">
            <table v-if="currentDataList.length" class="table_cont w-full border-collapse text-left font-monda">
              <tr class="theader bg-[#03ff91] text-black text-[18px] font-semibold">
                <th v-for="(header, index) in tableHeaders" :key="index" :class="header.class" class="p-[15px]">
                  {{ $t(header.label) }} {{ header.suffix || '' }}
                </th>
              </tr>
              <tr v-for="el in currentDataList" :key="el.index" class="border-t-[10px] border-t-black">
                <td class="num text-white font-semibold text-[16px] bg-[rgba(255,255,255,0.1)] p-[15px]">
                  {{ el.index }}
                </td>
                <td
                  class="w-[270px] text-[16px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.1)] p-[15px] break-all"
                >
                  {{ el.holder.substr(0, 30) }} <br />
                  {{ el.holder.substr(30, 100) }}
                </td>
                <td class="text-[16px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.1)] p-[15px]">
                  {{ formatWithThousandSeparator(el.calc_point) }}
                </td>
                <td class="text-[16px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.1)] p-[15px]">
                  {{ formatWithThousandSeparator(el.gpu_num) }}
                </td>
                <td class="text-[16px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.1)] p-[15px]">
                  {{
                    formatWithThousandSeparator(
                      el.gpu_num ? ((el.rent_gpu / el.gpu_num) * 100).toFixed(2) + '%' : '0.00%'
                    )
                  }}
                </td>
                <td class="text-[16px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.1)] p-[15px]">
                  {{ formatWithThousandSeparator(el.rent_reward) }}
                </td>
                <td class="text-[16px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.1)] p-[15px]">
                  {{ formatWithThousandSeparator(el.released_reward) }}
                </td>
                <td class="text-[16px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.1)] p-[15px]">
                  {{ formatWithThousandSeparator(el.total_reward) }}
                </td>
              </tr>
            </table>
            <table v-else class="table_cont w-full border-collapse text-left font-monda">
              <tr class="theader bg-[#03ff91] text-black text-[18px] font-semibold">
                <th v-for="(header, index) in tableHeaders" :key="index" :class="header.class" class="p-[15px]">
                  {{ $t(header.label) }}
                </th>
              </tr>
              <tr>
                <td
                  colspan="8"
                  class="nodata h-[400px] text-center text-[40px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.1)]"
                >
                  No Data
                </td>
              </tr>
            </table>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { getStateSummaries, getLongStakeHolders } from '@/api/home';
import { getStateSummariesShort, getShortStakeHoldersShort } from '@/api/home-short';
import { formatWithThousandSeparator } from '@/utils/formatNumber';

// 模拟数据
const model_type = ref('long');

// 第一部分按钮数据
const btnList = ref([
  { textKey: 'home.btn_text1', titleKey: 'home.btn_title1', valueKey: 'long_term', value: 100 },
  { textKey: 'home.btn_text2', titleKey: 'home.btn_title2', valueKey: 'short_term', value: 100 },
]);

// 第二部分切换按钮
const cont2Buttons = ref([
  { type: 'long', label: 'home.cont2_btn1', loading: false },
  { type: 'short', label: 'home.cont2_btn2', loading: false },
]);

// 第三部分统计数据
const OrionDataList = ref([
  { titleKey: 'home.cont3.text1', value: 0 }, // total_calc_point
  { titleKey: 'home.cont3.text2', value: 0 }, // total_gpu_num
  { titleKey: 'home.cont3.text3', value: 0 }, // total_address
  { titleKey: 'home.cont3.text4', value: 0 }, // rental_rate
  { titleKey: 'home.cont3.text5', value: 0 }, // total_dlc
  { titleKey: 'home.cont3.text6', value: 0 }, // total_dlc (重复)
  { titleKey: 'home.cont3.text7', value: 0 }, // total_rent_dlc
]);

// 长租和短租表格数据，统一管理在一个响应式对象中
const tableData = ref({
  long: [],
  short: [],
});

// 根据 model_type 计算当前显示的表格数据
const currentDataList = computed(() => tableData.value[model_type.value]);

// 表格头部配置
const tableHeaders = [
  { label: 'home.cont4.li1', class: '' },
  { label: 'home.cont4.li2', class: '' },
  { label: 'home.cont4.li3', class: '' },
  { label: 'home.cont4.li4', class: '' },
  { label: 'home.cont4.li5', class: '' },
  { label: 'home.cont4.li6', class: '', suffix: '(DLC)' },
  { label: 'home.cont4.li7', class: '', suffix: '(DLC)' },
  { label: 'home.cont4.li8', class: '', suffix: '(DLC)' },
];

// 获取门槛数据长租
const getStateSummariesH = async () => {
  const res = await getStateSummaries();
  console.log(res, 'Pppppp获取门槛数据长租');
  if (res.stateSummaries.length === 0) {
    btnList.value[0].value = 100; // 直接更新 btnList 中的值
    OrionDataList.value[0].value = 0;
    OrionDataList.value[1].value = 0;
    OrionDataList.value[2].value = 0;
    OrionDataList.value[3].value = 0;

    // OrionDataList.value[4].value = 0;
    OrionDataList.value[5].value = 0;
    OrionDataList.value[6].value = 0;
  } else {
    // if (result.toNumber() < 0) {
    //   btnList.value[0].value = 0;
    // } else {
    //   btnList.value[0].value = result.toNumber(); // 直接更新 btnList 中的值
    // }
    // btnList.value[0].value = res.stateSummaries[0].totalStakingGPUCount;
    btnList.value[0].value = res.stateSummaries[0].totalStakingGPUCount;
    OrionDataList.value[0].value = Number(res.stateSummaries[0].totalCalcPoint) / 100;
    OrionDataList.value[1].value = res.stateSummaries[0].totalStakingGPUCount;
    OrionDataList.value[2].value = res.stateSummaries[0].totalCalcPointPoolCount;
    OrionDataList.value[3].value =
      Number(res.stateSummaries[0].totalRentedGPUCount) !== 0
        ? `${(
            (Number(res.stateSummaries[0].totalRentedGPUCount) / Number(res.stateSummaries[0].totalStakingGPUCount)) *
            100
          ).toFixed(4)}%`
        : 0;

    // OrionDataList.value[4].value = (res.stateSummaries[0].totalBurnedRentFee / 1e18).toFixed(4);
    OrionDataList.value[5].value = (res.stateSummaries[0].totalBurnedRentFee / 1e18).toFixed(4);
    OrionDataList.value[6].value = (res.stateSummaries[0].totalReservedAmount / 1e18).toFixed(0);
  }
};

// 获取门槛数据短租
const getStateSummariesShortH = async () => {
  const res = await getStateSummariesShort();
  console.log(res, 'Pppppp获取门槛数据短租');
  if (res.stateSummaries.length === 0) {
    btnList.value[1].value = 0; // 直接更新 btnList 中的值
    OrionDataList.value[0].value = 0;
    OrionDataList.value[1].value = 0;
    OrionDataList.value[2].value = 0;
    OrionDataList.value[3].value = 0;

    // OrionDataList.value[4].value = 0;
    OrionDataList.value[5].value = 0;
    OrionDataList.value[6].value = 0;
  } else {
    // const totalStaking = new BN(res.stateSummaries[0].totalStakingGPUCount);
    // const result = new BN(100).sub(totalStaking);

    // if (result.toNumber() < 0) {
    //   btnList.value[1].value = 0; // 直接更新 btnList 中的值
    // } else {
    //   btnList.value[1].value = result.toNumber(); // 直接更新 btnList 中的值
    // }
    btnList.value[1].value = res.stateSummaries[0].totalStakingGPUCount;
    OrionDataList.value[0].value = Number(res.stateSummaries[0].totalCalcPoint) / 10000;
    OrionDataList.value[1].value = res.stateSummaries[0].totalStakingGPUCount;
    OrionDataList.value[2].value = res.stateSummaries[0].totalCalcPointPoolCount;
    OrionDataList.value[3].value =
      Number(res.stateSummaries[0].totalRentedGPUCount) == 0
        ? `${(
            (Number(res.stateSummaries[0].totalRentedGPUCount) / Number(res.stateSummaries[0].totalStakingGPUCount)) *
            100
          ).toFixed(4)}%`
        : 0;

    // OrionDataList.value[4].value = (res.stateSummaries[0].totalBurnedRentFee / 1e18).toFixed(4);
    OrionDataList.value[5].value = (res.stateSummaries[0].totalBurnedRentFee / 1e18).toFixed(4);
    OrionDataList.value[6].value = (res.stateSummaries[0].totalReservedAmount / 1e18).toFixed(0);
  }
};

// 获取门槛数据短租
const getStateSummariesShortH2 = async () => {
  const res = await getStateSummariesShort();
  console.log(res, '门槛数据短租66666666666');
  if (res.stateSummaries.length === 0) {
    btnList.value[1].value = 100;
  } else {
    btnList.value[1].value = res.stateSummaries[0].totalStakingGPUCount;
  }
};
getStateSummariesShortH2();

// 请求数据计算后的奖励数据--长租
async function fetchWalletRewards() {
  try {
    const response = await fetch('https://dbcscan.io/nestapi/machine/getAllWalletRewards');
    const result = await response.json();
    if (result.code === 200 && result.data.length > 0) {
      return result.data;
    }
  } catch (error) {
    return [];
  }
}

// 处理长租数据
const fetchLongStakeHolders = async () => {
  try {
    const response = await getLongStakeHolders();
    // 请求数据
    const rs = await fetchWalletRewards();
    console.log(rs, '请求数据请求数据请求数据');
    const stakeHolders = response.stakeHolders || [];
    tableData.value.long = stakeHolders.map((el, index) => {
      // 查找匹配的 rs 记录
      const matchingReward = rs.find((reward) => reward.walletAddress === el.holder);
      console.log(matchingReward, 'matchingRewardmatchingRewardmatchingReward');
      // 计算 total_reward
      let totalReward;
      if (matchingReward) {
        // 如果找到匹配的记录，total_reward = totalReleasedRewardAmount + lockedReward
        totalReward = (Number(el.totalReleasedRewardAmount) / 1e18 + Number(matchingReward.lockedReward)).toFixed(4);
      } else {
        // 如果没有匹配的记录，使用原来的 totalClaimedRewardAmount
        totalReward = 0;
      }

      return {
        index: index + 1, // 竞赛排名
        holder: el.holder, // 矿工名称
        calc_point: Number(el.totalCalcPoint) / 100, // 算力值
        gpu_num: Number(el.totalStakingGPUCount), // GPU数量
        rent_gpu: Number(el.rentedGPUCount), // 租用GPU数
        rent_reward: (Number(el.burnedRentFee) / 1e18).toFixed(4), // 租金数 (DLC)
        released_reward: (Number(el.totalReleasedRewardAmount) / 1e18).toFixed(4), // 已解锁奖励数 (DLC)
        total_reward: totalReward, // 奖励总数 (DLC)
      };
    });
    if (tableData.value.long.length > 0) {
      const total = tableData.value.long.reduce((sum, item) => {
        return sum + (Number(item.total_reward) || 0); // 处理空值或未定义字段
      }, 0);
      OrionDataList.value[4].value = total.toFixed(4);
    }
  } catch (error) {
    console.error('Failed to fetch long stake holders:', error);
    tableData.value.long = []; // 请求失败时清空长租数据
  }
};

// 请求数据计算后的奖励数据--短租
async function fetchWalletRewardsShort() {
  try {
    const response = await fetch('https://dbcscan.io/nestapi/machine/getAllWalletRewardsShort');
    // const response = await fetch('http://localhost:3001/machine/getAllWalletRewardsShort');
    const result = await response.json();
    if (result.code === 200 && result.data.length > 0) {
      return result.data;
    }
  } catch (error) {
    return [];
  }
}
// 处理短租数据
const fetchShortStakeHolders = async () => {
  try {
    const response = await getShortStakeHoldersShort(); // 获取子图短租数据
    console.log(response, '短租总数据');
    const rs = await fetchWalletRewardsShort(); // 获取后端计算的 lockedRewardShort

    console.log(response, '短租子图数据');
    console.log(rs, '短租锁定奖励数据');

    const stakeHolders = response.stakeHolders || [];
    console.log(stakeHolders, '短租数据holder');
    tableData.value.short = stakeHolders.map((el, index) => {
      const matchingReward = rs.find((reward) => reward.walletAddress === el.holder);
      console.log(matchingReward, '对应的数据');
      // 计算 total_reward（lockedRewardShort + totalReleasedRewardAmount）
      let totalReward = 0;
      if (matchingReward) {
        totalReward = (Number(el.totalReleasedRewardAmount) / 1e18 + Number(matchingReward.lockedReward)).toFixed(4);
      }

      return {
        index: index + 1,
        holder: el.holder,
        calc_point: Number(el.totalCalcPoint) / 10000,
        gpu_num: Number(el.totalStakingGPUCount),
        rent_gpu: Number(el.rentedGPUCount),
        rent_reward: (Number(el.burnedRentFee) / 1e18).toFixed(4),
        released_reward: (Number(el.totalReleasedRewardAmount) / 1e18).toFixed(4),
        total_reward: totalReward,
      };
    });
    if (tableData.value.short.length > 0) {
      const total = tableData.value.short.reduce((sum, item) => {
        return sum + (Number(item.total_reward) || 0); // 处理空值或未定义字段
      }, 0);
      OrionDataList.value[4].value = total.toFixed(4);
    }
  } catch (error) {
    console.error('Failed to fetch short stake holders:', error);
    tableData.value.short = []; // 请求失败清空
  }
};
// 切换长租和短租
const changeModelType = async (btn) => {
  console.log(btn, 'typetype');
  model_type.value = btn.type;
  if (btn.type === 'long') {
    btn.loading = true;
  } else {
    btn.loading = true;
  }
  btn.loading = false;

  console.log(btn, 'typetype');
};

watchEffect(() => {
  if (model_type.value === 'long') {
    getStateSummariesH();
    fetchLongStakeHolders();
  } else {
    getStateSummariesShortH();
    fetchShortStakeHolders();
    getStateSummariesShortH2();
  }
});
</script>

<!-- 样式保持不变 -->

<style lang="scss" scoped>
:deep(.el-button + .el-button) {
  margin-left: 0 !important;
}
.homepage {
  position: relative;
  z-index: 2;
  width: 100%;
  min-width: 600px;
  font-style: normal;
  overflow: hidden;
  .home_bg {
    position: absolute;
    z-index: 2;
    top: -200px;
    right: -630px;
    width: 1517px;
    height: 1517px;
    background: url(../assets/home/bg1.png) no-repeat 100%/100%;
  }
  .page {
    position: relative;
    z-index: 10;
    min-width: 600px;
  }
  .page_cont1 {
    position: relative;
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
      margin-top: 120px;
      font-family: Monda;
      p {
        margin-bottom: 30px;
        :last-child {
          margin-bottom: 0;
        }
      }
    }
    .text {
      width: 80%;
      font-size: 24px;
      font-weight: 600;
      font-family: Monda;
      margin-bottom: 20px;
      color: rgba(255, 255, 255, 0.5);
    }
    .text1 {
      width: 80%;
      font-size: 24px;
      font-weight: 600;
      font-family: Monda;
      margin-bottom: 70px;
      color: rgba(255, 255, 255, 0.5);
    }
    .btnList {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 170px;
      .btn {
        position: relative;
        color: #fff;
        line-height: 1;
        cursor: pointer;
        font-size: 36px;
        font-weight: 600;
        margin-top: 20px;
        margin-right: 24px;
        padding: 20px 30px;
        font-family: Monda;
        border-radius: 17px;
        background: rgba(3, 255, 145, 0.1);
        border: 1px solid rgba(3, 255, 145, 0.2);
        .top_text {
          font-size: 16px;
          color: #03ff91;
          font-family: Monda;
          margin-bottom: 10px;
        }
      }
    }
  }
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
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  .homepage {
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
            }
          }
        }
      }
    }
  }
}
</style>

<style>
td {
  margin: 0;
}
</style>
