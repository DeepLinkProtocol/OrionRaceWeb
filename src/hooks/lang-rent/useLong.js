import contractAbi from './abi/abi1.json';
import Web3 from 'web3';
import { ref } from 'vue';
export const useLong = () => {
  // 计算算力值
  function calculateMiningPower(gpuType, local, memory) {
    // 解析 gpuType: 7680_12_1_15 -> [cuda, videoMemory]
    const [cuda, videoMemory] = gpuType.split('_').map(Number);
    // 解析 local: 1.2_1 -> regionCoefficient
    const regionCoefficient = Number(local.split('_')[0]);
    const ram = Number(memory);
    const cardCount = 1; // 显卡数量固定为 1
    const largeCoefficient = 1; // 大模型系数固定为 1

    // 验证输入
    if (!cuda || !videoMemory || !regionCoefficient || !ram || ram <= 0) {
      return 0; // 输入不完整或无效时返回 0
    }

    // 计算算力值: (25 + 内存/3.5 + √(cuda数量) * √(显存/10)) * 地域系数
    const points = (25 + ram / 3.5 + Math.sqrt(cuda) * Math.sqrt(videoMemory / 10)) * regionCoefficient;

    // 保留两位小数
    return Math.round(points * 100) / 100;
  }

  // 调用合约
  // Web3 初始化
  const web3 = new Web3('https://rpc.dbcwallet.io'); // 替换为你的 RPC 节点
  const contractAddress = '0x3C059Dbe0f42d65acD763c3c3DA8B5a1B12bB74f'; // 替换为实际合约地址
  const contract = new web3.eth.Contract(contractAbi, contractAddress);

  let calcLoading = ref(false);

  // 调用合约方法计算奖励
  async function fetchRewards(calcPoint, nftCount, dlcCount, step) {
    try {
      calcLoading.value = true;
      // 先计算算力值
      if (!calcPoint || !nftCount || !dlcCount) {
        window.$message.error('请填写完整的参数');
        return false;
      }
      console.log(calcPoint, nftCount, dlcCount);
      // 调用合约方法
      const result = await contract.methods
        .preCalculateRewards((calcPoint * 100).toFixed(0), nftCount, web3.utils.toWei(dlcCount.toString(), 'ether'))
        .call();
      console.log(
        '参数',
        (calcPoint * 100).toFixed(0), // 转换为 wei
        nftCount,
        web3.utils.toWei(dlcCount.toString(), 'ether')
      );
      console.log(result, '原始结果');
      const rewardValue = web3.utils.fromWei(result.toString(), 'ether');
      let finalRewardValue;
      if (step === 6000000) {
        // 阶段一：600万，直接返回
        finalRewardValue = Number(rewardValue).toFixed(4);
      } else if (step === 8000000) {
        // 阶段二：400万，乘以 400万/600万
        finalRewardValue = ((Number(rewardValue) * 8000000) / 6000000).toFixed(4);
      } else if (step === 19330000) {
        // 阶段三：966.5万，乘以 966.5万/300万
        finalRewardValue = ((Number(rewardValue) * 19330000) / 6000000).toFixed(4);
      } else {
        return 0;
      }
      calcLoading.value = false;
      return finalRewardValue;
    } catch (error) {
      console.error('Error fetching rewards:', error);
      window.$message.error(`调用合约失败:${error.message}`);

      return 0;
    }
  }
  return {
    calculateMiningPower,
    fetchRewards,
    calcLoading,
  };
};
