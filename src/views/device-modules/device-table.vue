<template>
  <div class="flex flex-col md:flex-row">
    <!-- 左侧型号选择 -->
    <div class="cont_left">
      <div
        v-for="(model, index) in gpuModels"
        :key="index"
        class="model"
        :class="{ active: choosetype === model.value }"
        @click="choose(model.value)"
      >
        {{ model.label }}
      </div>
    </div>

    <!-- 右侧内容 -->
    <div class="cont_right">
      <!-- 筛选部分 -->
      <div class="right_top">
        <p v-for="(filter, index) in filters" :key="index" class="text2_tx">
          {{ $t(filter.label) }}
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
              :value="option.value"
            />
          </el-select>
          <span v-else>{{ filter.v }}</span>
        </p>
      </div>

      <!-- 机器列表 -->
      <div class="right_con">
        <div class="deviceInfo" v-for="(machine, index) in filteredMachineList" :key="index">
          <div class="machine_top">
            <div class="machine_id flex items-center">
              机器ID:

              <el-tooltip>
                <template #content> {{ machine.machineId }}</template>
                <div class="!max-w-[350px] text-nowrap overflow-ellipsis overflow-hidden">
                  {{ machine.machineId }}
                </div>
              </el-tooltip>
            </div>
            <div class="machine_text">
              是否被租用：<span class="text">{{ machine.isRented ? '被租用' : '空闲' }}</span>
            </div>
            <div class="machine_text">
              是否在线：<span class="text">{{ machine.online ? '是' : '否' }}</span>
            </div>
          </div>
          <div class="machine_info">
            <table class="table_cont">
              <tr class="theader">
                <th v-for="(header, hIndex) in tableHeaders" :key="hIndex" :colspan="header.colspan || 1">
                  {{ header.label }}
                </th>
              </tr>
              <tr>
                <td
                  class="max-w-[50px]"
                  v-for="(header, hIndex) in tableHeaders"
                  :key="hIndex"
                  :colspan="header.colspan || 1"
                >
                  <el-tooltip>
                    <template #content> {{ formatCellValue(machine, header.key) }}</template>
                    <div class="!max-w-[60px] text-nowrap overflow-ellipsis overflow-hidden">
                      {{ formatCellValue(machine, header.key) }}
                    </div>
                  </el-tooltip>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { getMachineInfos } from '@/api/home';
import { ElTooltip } from 'element-plus';

const { t, locale } = useI18n();

// GPU 型号
const gpuModels = ref([
  { label: 'RTX 4060', value: 1 },
  { label: 'RTX 4070', value: 2 },
  { label: 'RTX 4070Ti', value: 3 },
  { label: 'RTX 4080', value: 4 },
]);
const choosetype = ref(1);

const choose = (val) => {
  choosetype.value = val;
};

// 筛选选项
const Machine_status = ref('all');
const gpuNum = ref('');
// 刷选的数据
const filters = ref([
  {
    label: 'device.table.text1', // 机器状态
    type: 'select',
    model: 'all',
    options: [
      { value: 'all', label: t('All') },
      { value: 'rented', label: t('Rented') },
      { value: 'online', label: t('Idle') },
    ],
    onChange: (val) => console.log('Status:', val),
  },

  { label: 'device.table.text3', type: 'static', v: 666 },
  { label: 'device.table.text4', type: 'static', v: 666 },
]);

// 机器列表（更新为新字段）
const machine_list = ref([]);

// 表格表头（使用指定字段）
const tableHeaders = ref([
  { label: '机器ID', key: 'machineId' },
  { label: '旷工地址', key: 'holder', colspan: 2 }, // 地址较长，占两列
  { label: 'GPU数量', key: 'totalGPUCount' },
  { label: '总算力', key: 'totalCalcPoint' },
  { label: '是否在线', key: 'online' },
  { label: '是否被租用', key: 'isRented' },
  { label: '是否质押', key: 'isStaking' },
  { label: '质押总金额', key: 'totalReservedAmount' },
  { label: '质押结束时间', key: 'stakeEndTimestamp' },
]);

// 过滤后的机器列表
const filteredMachineList = computed(() => {
  let list = [...machine_list.value];
  if (Machine_status.value) {
    list = list.filter((machine) => (Machine_status.value === 'rented' ? machine.isRented : !machine.isRented));
  }
  if (gpuNum.value) {
    list = list.filter((machine) => machine.totalGPUCount === Number(gpuNum.value));
  }
  if (choosetype.value) {
    // 当前数据无 gpuType，暂不实现型号过滤
  }
  return list;
});

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

// 初始化加载数据
onMounted(async () => {
  const response = await getMachineInfos();
  machine_list.value = response.machineInfos;
  console.log('Machine Infos:', response.machineInfos);
});
</script>

<style lang="scss" scoped>
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
  padding: 20px 10px;
  border-radius: 23px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.2);
  .right_top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 58px;

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
      margin-top: 50px;
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

          .text {
            color: rgba(255, 255, 255, 0.6);
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
            background: #03ff91;

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
@media screen and (max-width: 1200px) {
  .cont_left {
    width: 200px;
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
    min-height: 600px;
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
      width: 20%;
      height: 70px;
      margin: 5px;
      font-size: 16px;
      padding: 0 10px;
      min-width: 130px;
    }
  }
  .cont_right {
    width: 100%;
    padding: 10px;
    min-height: 600px;
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
