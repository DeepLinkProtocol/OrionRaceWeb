import axios from "@/utils/axios"

// 获取DBC价格
export const dbcPriceOcw = () => {
  return axios({
    method: "get",
    url: 'https://dbchaininfo.congtu.cloud/query/dbc_info?language=CN' 
  });
};