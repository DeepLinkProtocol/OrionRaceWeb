import { ref } from 'vue';
import contractAbi from './abi/abi1.json';
import Web3 from 'web3';

export const useCalc = () => {
  let calcLoading = ref(false);
  // 计算算力值的函数
  function calculateMachinePoints(gpuType, ramNumber) {
    // 解析 gpuType
    const [cuda, videoMemory, largeCoefficient] = gpuType.split('_').map(Number);
    const memory = Number(ramNumber);
    const gpuCount = 1; // 默认显卡数量

    // 验证输入
    if (!cuda || !videoMemory || !largeCoefficient || !memory || memory <= 0) {
      return 0; // 输入不完整或无效时返回 0
    }

    // 计算算力值
    const basePoints = 25 * gpuCount + memory / 3.5 + Math.sqrt(cuda) * Math.sqrt(videoMemory / 10) * gpuCount;

    // 保留两位小数并乘以大模型系数
    return Math.round(basePoints * largeCoefficient * 100) / 100;
  }

  // Web3 初始化
  const web3 = new Web3('https://rpc.dbcwallet.io'); // 替换为你的 RPC 节点
  const contractAddress = '0x6268Aba94D0d0e4FB917cC02765f631f309a7388'; // 替换为实际合约地址

  const contract = new web3.eth.Contract(contractAbi, contractAddress);
  // 调用合约方法计算奖励
  async function fetchRewards(calcPoint, nftCount, dlcCount, step) {
    try {
      // 先计算算力值
      if (!calcPoint || !nftCount || !dlcCount) {
        window.$message.error('请填写完整的参数');
        return false;
      }
      console.log(calcPoint, nftCount, dlcCount);
      console.log(web3.utils.toWei(dlcCount.toString(), 'ether'));
      // 调用合约方法
      const result = await contract.methods
        .preCalculateRewards(
          (calcPoint * 10000).toFixed(0), // 转换为 wei
          nftCount,
          web3.utils.toWei(dlcCount.toString(), 'ether')
        )
        .call();
      console.log(result, '原始结果', '2999667954082392398899440');
      const rewardValue = web3.utils.fromWei(result.toString(), 'ether');
      let finalRewardValue;
      if (step === 3000000) {
        // 阶段一：300万，直接返回
        finalRewardValue = Number(rewardValue).toFixed(4);
      } else if (step === 4000000) {
        // 阶段二：400万，乘以 400万/300万
        finalRewardValue = ((Number(rewardValue) * 4000000) / 3000000).toFixed(4);
      } else if (step === 9665000) {
        // 阶段三：966.5万，乘以 966.5万/300万
        finalRewardValue = ((Number(rewardValue) * 9665000) / 3000000).toFixed(4);
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
    calculateMachinePoints,
    fetchRewards,
    calcLoading,
  };
};
