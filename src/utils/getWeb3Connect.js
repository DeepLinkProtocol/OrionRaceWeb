import Web3 from 'web3';
import { long_abi } from './long_abi.js'
import { short_abi } from './short_abi.js'

let web3conn = null;

const ContractLongAddress = '0x9bdDa3beBc7dCEB33636ee2ABD26A30191701494';
const ContractLongABI = long_abi;


const ContractShortAddress = '0x5f8bf45dd6d87494814bcd8f3c321bd1ce4d0391';
const ContractShortABI = short_abi;

// 链接BSC节点
export const getWEB3Connect = async () => {
  try {
    if (web3conn) {
      const Listening = await web3conn.eth.net.isListening()
      if (Listening) {
        return web3conn
      } else {
        web3conn = new Web3('https://rpc-testnet.dbcwallet.io');
        return web3conn
      }
    } else {
      web3conn = new Web3('https://rpc-testnet.dbcwallet.io');
      return web3conn
    }
  } catch (error) {
    console.log(error.message);
  }
}

// 获取长租数据的列表内容
export const getLongTopStakeHolders = async () => {
  try {
    const web3 = await getWEB3Connect()
    const contract = new web3.eth.Contract(ContractLongABI, ContractLongAddress);
    const LongTopStakeHolders = await contract.methods.getTopStakeHolders(0, 10).call()
    return LongTopStakeHolders
  } catch (error) {
    console.log(error);
  }
}

// 获取长租相关的数据内容
export const getLongDataInfo = async () => {
  // 实例化合约
  const web3 = await getWEB3Connect()
  const contract = new web3.eth.Contract(ContractLongABI, ContractLongAddress);
  // 方法
  const getdata = await contract.methods.getStateSummary().call()
  const total_calc_point = Number(getdata.totalCalcPoint) // 总算力值
  const total_gpu_num = Number(getdata.totalGPUCount) // 总质押GPU数量
  const total_address = Number(getdata.totalCalcPointPoolCount) // 算池总数
  const total_dlc = (Number(getdata.totalBurnedRentFee)/Math.pow(10, 18)).toFixed(4) // 总dlc租金
  const total_destr_dlc = total_dlc// dlc销毁租金
  const total_rent_gpu = Number(getdata.totalRentedGPUCount) // 租用GPU数量
  const total_rent_dlc = Number(getdata.totalReservedAmount) // 矿机DLC质押数
  const rental_rate = total_gpu_num ? (((total_rent_gpu/total_gpu_num)*100).toFixed(2))+'%' : '0.00%'
  return {
    total_calc_point,
    total_gpu_num,
    total_dlc,
    total_address,
    total_rent_gpu,
    total_rent_dlc,
    rental_rate,
    total_destr_dlc
  }
}

export const getLongMachinesList = async () => {
  // getMachinesInStaking
  const web3 = await getWEB3Connect()
  const contract = new web3.eth.Contract(ContractLongABI, ContractLongAddress);
  const MachineData = await contract.methods.getMachinesInStaking(0, 10).call()
  let LongMachinesList = []
  for (let i = 0; i < MachineData.length; i ++) {
    const el = MachineData[i]
    const data = await contract.methods.isRented(el).call()
    LongMachinesList.push({
      machine_id: el,
      isrented: data
    })
  }
  return LongMachinesList
}

// 获取短租模式数据
export const getShortDataInfo = async () => {
  // 实例化合约
  const web3 = await getWEB3Connect()
  const contract = new web3.eth.Contract(ContractShortABI, ContractShortAddress);
  // 方法
  const getdata = await contract.methods.getStateSummary().call()
  const total_calc_point = Number(getdata.totalCalcPoint) // 总算力值
  const total_gpu_num = Number(getdata.totalGPUCount) // 总质押GPU数量
  const total_address = Number(getdata.totalCalcPointPoolCount) // 算池总数
  const total_dlc = (Number(getdata.totalBurnedRentFee)/Math.pow(10, 18)).toFixed(4) // 总dlc租金
  const total_destr_dlc = total_dlc// dlc销毁租金
  const total_rent_gpu = Number(getdata.totalRentedGPUCount) // 租用GPU数量
  const total_rent_dlc = Number(getdata.totalReservedAmount) // 矿机DLC质押数
  const rental_rate = total_gpu_num ? (((total_rent_gpu/total_gpu_num)*100).toFixed(2))+'%' : '0.00%'
  return {
    total_calc_point,
    total_gpu_num,
    total_dlc,
    total_address,
    total_rent_gpu,
    total_rent_dlc,
    rental_rate,
    total_destr_dlc
  }
}

// 获取短租数据的列表内容
export const getShortTopStakeHolders = async () => {
  try {
    const web3 = await getWEB3Connect()
    const contract = new web3.eth.Contract(ContractShortABI, ContractShortAddress);
    const ShortTopStakeHolders = await contract.methods.getTopStakeHolders(0, 10).call()
    return ShortTopStakeHolders
  } catch (error) {
    console.log(error);
  }
}


export const getShortMachinesList = async () => {
  const web3 = await getWEB3Connect()
  const contract = new web3.eth.Contract(ContractShortABI, ContractShortAddress);
  const MachineData = await contract.methods.getMachinesInStaking(0, 10).call()
  let ShortMachinesList = []
  for (let i = 0; i < MachineData.length; i ++) {
    const el = MachineData[i]
    const data = await contract.methods.isRented(el).call()
    const data1 = await contract.methods.getMachineUploadInfo(el).call()
    console.log(data1, 'data1');
    ShortMachinesList.push({ machine_id: el, isrented: data , ...data1})
  }
  console.log(ShortMachinesList, 'ShortMachinesList');
  return ShortMachinesList
}