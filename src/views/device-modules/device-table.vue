<template>
  <div class="flex flex-col md:flex-row w-full">
    <!-- 左侧型号选择 -->
    <!-- <div class="cont_left">
      <el-tooltip v-for="(model, index) in gpuModels" :key="index" v-if="gpuModels.length !== 0">
        <template #content> {{ model.label }}</template>

        <ElButton
          class="model !max-w-[300px] text-nowrap overflow-ellipsis overflow-hidden"
          :class="{ active: choosetype === model.label }"
          :loading="model.loading"
          :disabled="model.loading"
          @click="choose(model)"
        >
          {{ getAfterNvidia(model.label) }}
        </ElButton>
      </el-tooltip>
      <ElButton v-else :diasabled="true" class="model"> NO GPU </ElButton>
    </div> -->

    <!-- 右侧内容 -->
    <div class="cont_right" v-loading="tableLoading">
      <!-- 筛选部分 -->
      <div class="right_top px-[10px] !grid !grid-cols-1 md:!grid-cols-3 !gap-5 md:!gap-10 !mb-[15px]">
        <p v-for="(filter, index) in filters" :key="index" class="text2_tx">
          <span class="text-[#03ff91]"> {{ $t(filter.label) }}</span>
          <el-select
            v-if="filter.type === 'select'"
            class="el-select-type select_width210"
            v-model="filter.model"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="filter.onChange"
          >
            <el-option
              v-for="option in filter.options"
              :key="option.value"
              :label="option.label"
              :value="option.label"
            />
          </el-select>
          <span v-else class="text-[#03ff91]">{{ filter.v }}</span>
        </p>
      </div>
      <tr class="theader grid items-center grid-cols-3 md:grid-cols-8">
        <th v-for="(header, hIndex) in tableHeaders" :key="hIndex" :colspan="header.colspan || 1">
          {{ header.label }}
        </th>
      </tr>
      <!-- 机器列表 -->
      <div class="right_con flex flex-col">
        <div class="deviceInfo" v-if="machine_list.length !== 0" v-for="(machine, index) in machine_list" :key="index">
          <div class="machine_top">
            <div class="machine_id flex items-center">
              {{ $t('machine_id') }}:

              <el-tooltip>
                <template #content> {{ machine.machineId }}</template>
                <div class="!max-w-[350px] text-nowrap overflow-ellipsis overflow-hidden">
                  {{ machine.machineId }}
                </div>
              </el-tooltip>
            </div>
            <div class="machine_text">
              {{ $t('machine_is_rented') }}：<span class="text-[#03ff91]">{{
                machine.isRented ? $t('machine_rented') : $t('machine_idle')
              }}</span>
            </div>
            <div class="machine_text">
              {{ $t('machine_is_online') }}：<span class="text-[#03ff91]">{{
                machine.online ? $t('machine_yes') : $t('machine_no')
              }}</span>
            </div>
          </div>
          <div class="machine_info">
            <table class="table_cont">
              <tr>
                <td
                  class="max-w-[50px]"
                  v-for="(header, hIndex) in tableHeaders"
                  :key="hIndex"
                  :colspan="header.colspan || 1"
                >
                  <el-tooltip>
                    <template #content> {{ formatCellValue(machine, header.key) }}</template>
                    <div class="flex items-center">
                      <span :class="header.class">
                        {{ formatCellValue(machine, header.key) }}
                      </span>
                      <component
                        v-if="header.c"
                        :is="header.c"
                        class="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                        @click="copyText(machine[header.key])"
                      />
                    </div>
                  </el-tooltip>
                </td>
              </tr>
            </table>
          </div>
          <ElDivider v-if="index !== machine_list.length - 1" style="border-top: 1px #03ff91 var(--el-border-style)" />
        </div>
        <el-empty v-else :description="$t('machine_no_data')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, h, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { getAllMachineInfos, getIdleMachineInfos, getRentedMachineInfos, getGpuTypeValues } from '@/api/home';
import BN from 'bn.js';
import { Icon } from '@iconify/vue';
import { useClipboard } from '@vueuse/core';

const props = defineProps({
  type: {
    type: String,
    default: 'long',
  },
});

const { t, locale } = useI18n();
// 使用 VueUse 的 useClipboard 钩子
const { copy, copied } = useClipboard();

// 表格logding
const tableLoading = ref(false);

// 复制函数
const copyText = async (text) => {
  console.log(text);
  await copy(text);
  if (copied.value) {
    window.$message.success('复制成功');
  }
};
// 机器列表（更新为新字段）
const machine_list = ref([]);
// 表格表头（使用指定字段）

const tableHeaders = computed(() => {
  return [
    {
      label: t('deviceUniqueId'),
      key: 'machineId',
      class: '!max-w-[60px] text-nowrap overflow-ellipsis overflow-hidden',
      c: () => h(Icon, { icon: `mdi:content-copy` }),
    },
    {
      label: t('minerLocation'),
      key: 'holder',
      class: '!max-w-[60px] text-nowrap overflow-ellipsis overflow-hidden',
      c: () => h(Icon, { icon: `mdi:content-copy` }),
    }, // 地址较长，占两列
    {
      label: t('gpuCount'),
      key: 'totalGPUCount',
      class: '!max-w-[30px] text-nowrap overflow-ellipsis overflow-hidden',
    },
    {
      label: t('computeCapacity'),
      key: 'totalCalcPoint',
      class: '!max-w-[60px] text-nowrap overflow-ellipsis overflow-hidden',
    },
    { label: t('isActive'), key: 'online', class: '!max-w-[40px] text-nowrap overflow-ellipsis overflow-hidden' },
    // { label: '是否被租用', key: 'isRented' },
    { label: t('isPledged'), key: 'isStaking', class: '!max-w-[40px] text-nowrap overflow-ellipsis overflow-hidden' },
    {
      label: t('pledgeTotal'),
      key: 'totalReservedAmount',
      class: '!max-w-[90px] text-nowrap overflow-ellipsis overflow-hidden',
    },
    {
      label: t('pledgeExpiration'),
      key: 'stakeEndTimestamp',
      class: '!max-w-[90px] text-nowrap overflow-ellipsis overflow-hidden',
    },
  ];
});

// 初始化表格数据长租
const getMachineInfosH = async (gpuType) => {
  tableLoading.value = true;
  const response = await getAllMachineInfos(gpuType);
  tableLoading.value = false;
  machine_list.value = response.machineInfos;
  console.log(machine_list.value, response, '初始化表格数据长租');

  filters.value[1].v = machine_list.value.length;
};
// 查询空闲机器
const getIdleMachineInfosH = async (gpuType) => {
  tableLoading.value = true;
  const response = await getIdleMachineInfos(gpuType);
  tableLoading.value = false;
  machine_list.value = response.machineInfos;
  filters.value[1].v = machine_list.value.length;
};
// 查询租用机器
const getRentedMachineInfosH = async (gpuType) => {
  tableLoading.value = true;
  const response = await getRentedMachineInfos(gpuType);
  tableLoading.value = false;
  machine_list.value = response.machineInfos;
  filters.value[1].v = machine_list.value.length;
};

// 获取gpu列表
const getGpusH = async () => {
  const res = await getGpuTypeValues();
  console.log(res, '获取gpu列表');
  filters.value[2].options = res.gpuTypeValues.map((item) => {
    return {
      label: item.value,
      value: item.id,
      loading: false,
    };
  });
};

let choosetype = ref('');
// 筛选选项
const filters = ref([
  {
    label: 'device.table.text1', // 机器状态
    type: 'select',
    model: null,
    options: [
      { value: 'all', label: t('All') },
      { value: 'rented', label: t('Rented') },
      { value: 'online', label: t('Idle') },
    ],
    onChange: async (val) => {
      console.log(val);
      if (val === '已租用') {
        // 已租用
        getRentedMachineInfosH(choosetype.value);
      } else if (val === '空闲') {
        // 空闲
        getIdleMachineInfosH(choosetype.value);
      } else if (val === '全部') {
        // 全部
        getMachineInfosH(choosetype.value);
      }
    },
  },
  {
    label: 'GPU类型', // 机器状态
    type: 'select',
    model: null,
    options: [],
    onChange: async (val) => {
      console.log(val);
      choosetype.value = val;
      filters.value[0].model = null;
      await getMachineInfosH(val);
    },
  },
  { label: 'device.table.text3', type: 'static', v: 500 },
]);

// 格式化单元格值
const formatCellValue = (machine, key) => {
  if (!machine) return 'N/A';
  if (key === 'isRented' || key === 'online' || key === 'isStaking') {
    return machine[key] ? '是' : '否';
  }
  if (key === 'stakeEndTimestamp') {
    return machine[key] ? new Date(machine[key] * 1000).toLocaleDateString() : '未质押';
  }
  if (key === 'totalReservedAmount') {
    return (Number(machine[key]) / 1e18).toFixed(2) + ' DLC';
  }
  if (key === 'holder') {
    return `${machine[key].substr(0, 6)}...${machine[key].substr(-4)}`;
  }
  return machine[key];
};

watchEffect(async () => {
  getGpusH();
  // 获取短租表格
  getMachineInfosH();
  console.log('是时候获取短租表格了');
});
// 监听machine_list
watch(
  () => machine_list.value,
  () => {
    filters.value[2].v = machine_list.value.length;
  }
);
</script>

<style lang="scss" scoped>
:deep(.el-button + .el-button) {
  margin-left: 0 !important;
}
.cont_left {
  position: sticky;
  top: 50px;
  max-width: 230px;
  padding: 20px;
  margin-right: 15px;
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
    font-weight: 600;
    transition: 0.5s ease;
    font-family: Monda;
    text-align: center;
    align-items: center;
    margin-bottom: 12px;
    border-radius: 17px;
    display: inline-flex;
    justify-content: center;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.1);
    &:last-child {
      margin-bottom: 0;
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
.cont_right {
  flex: 1;
  padding: 20px 10px;
  border-radius: 23px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.2);
  .right_top {
    .text2_tx {
      display: flex;
      align-items: center;

      color: #fff;
      font-size: 20px;
      font-family: Monda;
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
      padding: 0 10px;
      border-radius: 19px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.05);

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
          background: rgba(255, 255, 255, 0.1);
        }

        .machine_text {
          color: #fff;
          font-size: 16px;
          margin-right: 20px;
          font-family: Monda;
          margin-bottom: 10px;
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
            border-right: 1px solid rgba(255, 255, 255, 0.1);

            &:last-child {
              border-right: 0;
            }
          }
        }
      }
    }
  }
}
tr.theader {
  color: #000;
  font-size: 20px;
  font-weight: 600;
  font-family: Monda;
  background: #03ff91;
  width: 100% !important;

  th {
    line-height: 1;
    border: none;
    padding: 10px;
  }
}
@media screen and (max-width: 1200px) {
  .cont_left {
    max-width: 230px;
    min-height: auto;
    padding: 10px;
    margin-right: 20px;
    border-radius: 22px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.05);
    .model {
      height: 70px;
      font-size: 16px;
    }
  }
  .cont_right {
    flex: 1;
    padding: 10px;
    border-radius: 16px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.2);
    .right_top {
      .text2_tx {
        font-size: 16px;
      }
    }
    .right_con {
      .deviceInfo {
        .machine_top {
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
                padding: 5px;
              }
            }
            td {
              padding: 5px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .flex {
    flex-wrap: wrap;
  }
  .cont_left {
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
      height: 70px;
      font-size: 16px;
      padding: 0 10px;
      min-width: 130px;
    }
  }
  .cont_right {
    width: 100%;
    padding: 10px;
    border-radius: 16px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.2);
    .right_top {
      .text2_tx {
        font-size: 16px;
      }
    }
    .right_con {
      .deviceInfo {
        .machine_top {
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
                padding: 5px;
              }
            }
            td {
              padding: 5px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
