import { request, gql } from 'graphql-request';

// 测试网 GraphQL 端点
const endpoint = process.env.VUE_APP_API_URL_SHORT;

// 查询 stateSummaries
export async function getStateSummariesShort() {
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
export async function getShortStakeHoldersShort() {
  const query = gql`
    query LongStakeHolders {
      stakeHolders(first: 1000, orderBy: totalCalcPoint, orderDirection: desc, where: { totalStakingGPUCount_gt: 0 }) {
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

// 获取长租GPU
export async function getGpuTypeValuesShort() {
  const query = gql`
    query GetGpuTypeValues {
      gpuTypeValues {
        id
        value
      }
    }
  `;
  return await request(endpoint, query);
}

// 获取当前时间戳（秒）
const getCurrentTimestamp = () => Math.floor(Date.now() / 1000);

// 查询所有机器 (isStaking: true)
export async function getAllMachineInfosShort(gpuType) {
  const query = gql`
    query AllMachineInfos($gpuType: String) {
      machineInfos(
        first: 1000,
        orderBy: totalCalcPoint,
        orderDirection: desc,
        where: { 
          isStaking: true
          ${gpuType && gpuType !== '' ? 'gpuType: $gpuType' : ''}
        }
      ) {
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
  return await request(endpoint, query, { gpuType: gpuType && gpuType !== '' ? gpuType : undefined });
}

// 查询空闲机器
export async function getIdleMachineInfosShort(gpuType) {
  const currentTimestamp = getCurrentTimestamp();
  const query = gql`
    query IdleMachineInfos($gpuType: String, $currentTimestamp: BigInt!) {
      machineInfos(
        first: 1000,
        orderBy: totalCalcPoint,
        orderDirection: desc,
        where: { 
          isRented: false,
          online: true,
          registered: true,
          nextCanRentTimestamp_lt: $currentTimestamp
          ${gpuType && gpuType !== '' ? 'gpuType: $gpuType' : ''}
        }
      ) {
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
  return await request(endpoint, query, {
    gpuType: gpuType && gpuType !== '' ? gpuType : undefined,
    currentTimestamp,
  });
}

// 查询已租用机器
export async function getRentedMachineInfosShort(gpuType) {
  const query = gql`
    query RentedMachineInfos($gpuType: String) {
      machineInfos(
        first: 1000,
        orderBy: totalCalcPoint,
        orderDirection: desc,
        where: { 
          isRented: true,
          isStaking: true
          ${gpuType && gpuType !== '' ? 'gpuType: $gpuType' : ''}
        }
      ) {
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
  return await request(endpoint, query, { gpuType: gpuType && gpuType !== '' ? gpuType : undefined });
}
