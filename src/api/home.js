import { request, gql } from 'graphql-request';

// 测试网 GraphQL 端点
const endpoint = 'http://8.214.55.62:8022/subgraphs/name/long-staking-state';

// 查询 stateSummaries
export async function getStateSummaries() {
  const query = gql`
    query StateSummaries {
      stateSummaries(first: 1) {
        id
        totalGPUCount
        totalStakingGPUCount
        totalCalcPointPoolCount
        totalRentedGPUCount
        totalBurnedRentFee
        totalReservedAmount
        totalCalcPoint
      }
    }
  `;
  return await request(endpoint, query);
}

// 获取长租表格数据
export async function getLongStakeHolders() {
  const query = gql`
    query LongStakeHolders {
      stakeHolders(first: 20, orderBy: totalCalcPoint, orderDirection: desc) {
        id
        holder
        totalCalcPoint
        totalStakingGPUCount
        rentedGPUCount
        burnedRentFee
        totalReleasedRewardAmount
        totalClaimedRewardAmount
      }
    }
  `;
  return await request(endpoint, query);
}

// 获取长租表格数据（调整为 MachineInfo 查询）
export async function getMachineInfos() {
  const query = gql`
    query MachineInfos {
      machineInfos(first: 20, orderBy: totalCalcPoint, orderDirection: desc) {
        id
        holder
        machineId
        totalCalcPoint
        totalCalcPointWithNFT
        fullTotalCalcPoint
        totalGPUCount
        rentedGPUCount
        totalReservedAmount
        burnedRentFee
        stakeEndTimestamp
        nextCanRentTimestamp
        isStaking
        online
        isRented
        registered
        gpuType
      }
    }
  `;
  return await request(endpoint, query);
}
