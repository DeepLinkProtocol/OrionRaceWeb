export default {
  All: '全部',
  Rented: '已租用',
  Idle: '空闲',
  meau: {
    back: '返回官网',
    nav1: 'Orion竞赛',
    nav2: '长租规则',
    nav3: '短租规则',
    nav4: '设备列表',
  },
  footer: {
    link: '了解更多',
    community: '关注社区',
    tip: '说明：社区包含 Twitter、telegram、reddit、medium、discord、tiktok、YouTube',
  },

  home: {
    title1: 'Orion',
    title2: 'GPU算力竞赛',
    text: 'DeepLink协议的Orion GPU算力竞赛是一项重要的激励竞赛，旨在鼓励矿工积极参与DeepLink网络测试。这一竞赛是全球最大云游戏协议平台DeepLink正式推出前的重要准备步骤，为未来的全球用户提供坚实的技术基础和高效的算力保障。',
    text1: '当前DeepLink网络中GPU总数量为{gpu_num}张',
    text2: '竞赛已经启动，一旦GPU数量达到标准，奖励将会开始！',
    btn_text1: '长租模式竞赛 - 已经开始',
    btn_title1: '当前 {long_term} GPUs',
    btn_text2: '短租模式竞赛 - 已经开始',
    btn_title2: '当前 {short_term} GPUs',
    cont2_text1:
      'Orion算力竞赛的Token奖励总数为30亿枚，其中长租模式总共奖励为20亿DLC，短租模式总奖励10亿DLC奖励，持续180天时间，竞赛总共分为3次，每次持续60天时间，每次间隔5-10天时间',
    cont2_btn1: '长租模式',
    cont2_btn2: '短租模式',
    cont3: {
      text1: '总算力值',
      text2: 'GPU总数',
      text3: '算池总数',
      text4: 'GPU租用率',
      text5: 'DLC租金数',
      text6: 'DLC销毁数',
      text7: '矿机DLC质押数',
    },
    cont4: {
      li1: '竞赛排名',
      li2: '矿工名称',
      li3: '算力值',
      li4: 'GPU数量',
      li5: '租用率',
      li6: '租金数',
      li7: '已解锁奖励数',
      li8: '奖励总数',
    },
  },
  long_rule: {
    title: '长租模式竞赛规则',
    text1: '当前DeepLink网络中长租模式GPU总数量为 {long_num}',
    text2: '竞赛期间矿工可以收到总共20亿DLC的奖励，用户支付的DLC租金100%销毁',
    cont2: {
      title: '一.参与规则',
      text1_1: '参与猎户座算力竞赛的矿工，需要持有节点NFT（详细了解节点：',
      text1_2:
        '）。竞赛期间，一个GPU机器可以持有多个节点，奖励Token数量和节点数量是乘数关系。单个机器持有节点NFT上限是20个。',
      text2_1:
        'GPU服务器参数最低要求： \n 算力服务器各项参数只有满足最低要求，\n 才可以通过验证人审核上线，否则无法获得收益',
      text3_1: 'GPU',
      text3_2: '必须英伟达Nvidia系列显卡；显卡型号为20、30、40、50系列',
      text4_1: '内存',
      text4_2: '内存最低要求每卡16G，建议32G',
      text5_1: 'CPU',
      text5_2:
        '满足云游戏的要求：Intel/AMD，主频3.0GHz或者睿频3.5GHz以上；每个GPU需要单独配置一个CPU,且可以流畅运行黑神话悟空.比如：Intel CPU 10代及以上的版本,AMD 5600及以上版本',
      text6_1: '硬盘',
      text6_2: '系统盘100G SSD以上,数据盘 SSD 3T以上 ，或者采用无盘系统的方式',
      text7_1: '位置',
      text7_2: '建议机器放置在IDC数据中心从而避免网路和电不稳定导致惩罚',
      text8_1: '网络带宽',
      text8_2: '建议每个GPU机器至少10M上行带宽',
    },
    cont3: {
      title: '二.算力值计算规则',
      text: '整个生态中用户端的租用费用统一参考算力值系统定价。DLC租金收益是 0.6美金/C/月. 计算模型如下：整机算力值=(25 * 卡数 + 内存/3.5 + (√(cuda数量) * √(显存/10)) * 显卡数量)，当地域系数为1时算力值如下：',
      li1: '显卡类型',
      li2: 'Cuda core',
      li3: '显存',
      li4: '显卡卡数',
      li5: '内存(G)',
      li6: '整机算力(C)',
      li7: '整机租金(美金)',
      li8: '租金元/月/卡(美金)',
    },
    cont4: {
      title: '三.地域系数如下',
      li1: '地域系数',
      li2: '系数',
      li_text1: '中国大陆',
      li_text2: '北美',
      li_text3: '南美',
      li_text4: '欧洲',
      li_text5: '中东',
      li_text6: '韩国',
      li_text7: '日本',
      li_text8: '中国台湾',
      li_text9: '中国香港和澳门',
      li_text10: '马来西亚',
      li_text11: '印尼',
      li_text12: '新加坡',
      li_text13: '越南',
      text1: '机器算力值计算公式：(25 * 卡数 + 内存/3.5 + (√(cuda数量) * √(显存/10)) * 显卡数量)*地域系数*大模型系数',
      text2: '机器型号:',
      text3: '显卡数量:',
      text4: '内存数量:',
      text5: '地域:',
      text6: '请选择',
      text7: '当前机器算力值为: {total}',
    },
    cont5: {
      title: '四.奖励机制（基于DBC AI公链的EVM兼容的DLC，浏览器地址：https://www.dbcscan.io/）',
      text1:
        '猎户座算力竞赛的IDC长租模式GPU机器Token奖励总数为20亿枚，时间持续180天。竞赛总共分为3次。每次间隔5-10天时间。',
      text2: '竞赛一：每个类型GPU数量只有达到{n_gpu1}个，竞赛才开始正式启动。',
      text3: '60天，每天600万枚，10％立马得到，90％ 180天解锁，每天解锁0.5%。',
      text4: '竞赛二：每个类型GPU数量只有达到{n_gpu2}个，竞赛才开始正式启动。',
      text5: '60天，每天800万枚，10％立马得到，90％ 180天解锁，每天解锁0.5%。',
      text6: '竞赛三：每个类型GPU数量只有达{n_gpu3}个，竞赛才开始正式启动。',
      text7: '60天， 每天 1933万枚，10％立马得到，90％ 180天解锁，每天解锁0.5%。',
      text8: 'Listing交易所后，测试币可以1：1兑换主网币',
      text9: 'DeepLink采用非线性奖励算法',

      text10:
        '这个系统的奖励每天的总token数量是固定的，机器获得奖励与机器的算力值X以及机器加入挖矿的有效时间Y,以及机器的质押Token数量有关系，质押的Token越多奖励越多，但是不能呈现线性增长关系。0-10000个币奖励基数是一样的，当超过10000个币奖励与函数呈现关联.如果机器处于被租用状态算力值增加30%',
      text11: '奖励计算公式：',
      text12: 'R：每天的总奖励Token数量（固定值）',
      text13: '第i台机器的质押Token数量',
      text14: '第i台机器的算力值',
      text15: '第i台机器的有效挖矿时间',
      text16: '',

      title1: '质押数量：',
      text1_1: '1）质押时可任意选择质押数量或者不质押',
      text1_2: '2）质押数量在0-10000个，获得奖励的数量一样，超过10000后非线形增长',
      text1_3: '3）当质押数量不足10000时，每次提取奖励都会先沉淀为质押，直到满足10000',
      text1_4:
        '4）100000个币的奖励是质押10000个币的1.23026倍，即大约增加了23.03%，100万个币的奖励是质押10000个币的1.46052倍，即大约增加了46.05%，质押1000万个币的奖励是质押10000个币的1.69078倍，即大约增加了69.08%，质押10000万个币的奖励是质押10000个币的1.92103倍，即大约增加了92.10%',

      title2: '奖励提取：',
      text2_1:
        '每24小时可以提取一次，每次提取时，对于新产生的奖励，其中10%可立即提取，其中90%锁定180天，锁定的部分每次提取时可提取0.5%，180天后可全部提取',

      block_title1: '特别注意：',
      block_text1_1: '长租模式 需要先把GPU机器加入到DBC网路中，参考文档：',
      block_text1_2:
        '。然后矿工自己将机器租用后才可以加入到DLC的网络中。从而同时获得DBC和DLC两份收益，加入到DBC的网络中可以获得的DBC收益=DBC的奖励- 30%租金',
      block_title2: '机器每天DBC收益计算公式：',
      block_text2:
        '整机算力值/全网总算力值*547,945*DBC价格*地域系数**1.3（被租用算力值增加30%） - 整机算力值*地域系数*0.01693*30%（每个单位算力值每天收益是0.01693美元）',
      text3_13:
        '当前每天收益为: {usdt1} USD等值DBC = 链上奖励收益: {dbc} DBC(等值 {usdt2} USD 当前DBC价格: {dbc_price} USD) - 30%租金: {usdt3} USD等值DBC',
      title4: '机器每天DLC收益计算公式：DLC按照{price}U的价格计算，',
      text4_1: 'GPU型号：',
      text4_2: '内存数量：',
      text4_3: '节点NFT数量：',
      text4_4: '地域：',
      text4_5: '质押DLC数量：',
      text4_6: '竞赛阶段：',
      text4_6_1: '阶段一： 每天600万DLC',
      text4_6_2: '阶段二： 每天800万DLC',
      text4_6_3: '阶段三： 每天1933万DLC',
      text4_7: '参赛GPU总数：',
      text4_8: '(总GPU统一按照4060 32G，NFT 平均10个, 平均质押10万个 计算)',
      title5: '链上奖励收益: {dlc_num} DLC(等值 {usdt_num} USD 当前DLC价格: {price} USD)',
      req_title1: '五.举报以及验证机制 (基于DBC AI公链的EVM兼容的 DLC)',
      req_text1:
        'DLC租用机器的用户随时可以发起举报，举报的时候需要质押10000个DLC，当举报的时候，举报的人举报信息会进入DBC的验证人验证流程',
      req_title2: '六.惩罚机制(基于DBC AI公链的EVM兼容的 DLC)',
      req_text2:
        'DLC举报被验证后，如果验证有问题，则按照规则扣除DBC质押币，DLC最多只扣除1万个DLC币，不扣除更多, 这些质押币全部奖励给举报用户',
      req_title3: '七.支付以及销毁机制 (基于DBC AI公链的EVM兼容的 DLC)',
      req_text3:
        '用户支付DLC(DLC网络中的GPU价格比DBC网络中GPU的价格上浮20％），获得机器的租用权利，用户支付的DLC 100%进入销毁智能合约，销毁智能合约可以查询每笔支付和销毁记录',
    },
  },
  short_rule: {
    title: '短租模式竞赛规则',
    text1: '当前DeepLink网络中短租模式GPU总数量为 {short_num}',
    text2: '竞赛期间矿工可以收到总共10亿DLC的奖励，用户支付的DLC租金 100%销毁',
    cont2: {
      title: '一.参与规则',
      text1_1: '参与猎户座算力竞赛的矿工，需要持有节点NFT（详细了解节点：',
      text1_2:
        '）。竞赛期间，一个GPU机器可以持有多个节点，奖励Token数量和节点数量是乘数关系。单个机器持有节点NFT上限是20个。',
      text2_1: 'GPU服务器参数最低要求： \n 算力服务器各项参数只有满足最低要求',
      text3_1: 'GPU',
      text3_2: '必须英伟达Nvidia系列显卡；显卡型号为20、30、40、50系列',
      text4_1: '内存',
      text4_2: '内存最低要求每卡16G，建议32G',
      text5_1: 'CPU',
      text5_2:
        '满足云游戏的要求：Intel/AMD，主频3.0GHz或者睿频3.5GHz以上；每个GPU需要单独配置一个CPU,且可以流畅运行黑神话悟空.比如：Intel CPU 10代及以上的版本,AMD 5600及以上版本',
      text6_1: '硬盘',
      text6_2: '系统盘2T SSD以上，数据盘1T以上',
      text7_1: '位置',
      text7_2: '机器可以放置在家中',
      text8_1: '网络带宽：',
      text8_2: '建议每个GPU机器至少10M上行带宽',
    },
    cont3: {
      title: '二.算力值计算规则',
      text: '整个生态中用户端的租用费用统一参考算力值系统定价。DLC租金收益是 0.508美金/C/月。计算模型如下：整机算力值=(25 * 卡数 + 内存/3.5 + (√(cuda数量) * √(显存/10)) * 显卡数量)，算力值如下：',
    },
    cont4: {
      title: '三.地域系数如下',
      text1: '机器算力值计算公式：(25 * 卡数 + 内存/3.5 + (√(cuda数量) * √(显存/10)) * 显卡数量) * 大模型系数',
      text2: '机器型号:',
      text3: '显卡数量:',
      text4: '内存数量:',
      text5: '地域:',
      text6: '请选择',
      text7: '当前机器算力值为: {total}',
    },
    cont5: {
      title: '四.奖励机制 （基于DBC AI公链的EVM兼容的DLC，浏览器地址：https://www.dbcscan.io/）',
      text1:
        '猎户座算力竞赛的个人短租GPU机器Token奖励总数为10亿枚，时间持续180天。竞赛总共分为3次。每次间隔5-10天时间。',
      text2: '竞赛一：每个类型GPU数量只有达到{n_gpu1}个，竞赛才开始正式启动。',
      text3: '60天，每天300万枚，10％立马得到，90％ 180天解锁，每天解锁0.5%。',
      text4: '竞赛二：每个类型GPU数量只有达到{n_gpu2}个，竞赛才开始正式启动。',
      text5: '60天，每天400万枚，10％立马得到，90％ 180天解锁，每天解锁0.5%。',
      text6: '竞赛三：每个类型GPU数量只有达到{n_gpu3}个，竞赛才开始正式启动。',
      text7: '60天， 每天 966.5万枚，10％立马得到，90％ 180天解锁，每天解锁0.5%。',
      text8: 'Listing交易所后，测试币可以1：1兑换主网币',
      text9: 'DeepLink采用非线性奖励算法',

      text10:
        '这个系统的奖励每天的总token数量是固定的，机器获得奖励与机器的算力值X以及机器加入挖矿的有效时间Y,以及机器的质押Token数量有关系，质押的Token越多奖励越多，但是不能呈现线性增长关系。0-10000个币奖励基数是一样的，当超过10000个币奖励与函数呈现关联.如果机器处于被租用状态算力值增加30%',
      text11: '奖励计算公式：',
      text12: 'R：每天的总奖励Token数量（固定值）',
      text13: '第i台机器的质押Token数量',
      text14: '第i台机器的算力值',
      text15: '第i台机器的有效挖矿时间',
      text16: '',

      title1: '质押数量：',
      text1_1: '1）质押时可任意选择质押数量或者不质押',
      text1_2: '2）质押数量在0-10000个，获得奖励的数量一样，超过10000后非线形增长',
      text1_3: '3）当质押数量不足10000时，每次提取奖励都会先沉淀为质押，直到满足10000',
      text1_4:
        '4）100000个币的奖励是质押10000个币的1.23026倍，即大约增加了23.03%，100万个币的奖励是质押10000个币的1.46052倍，即大约增加了46.05%，质押1000万个币的奖励是质押10000个币的1.69078倍，即大约增加了69.08%，质押10000万个币的奖励是质押10000个币的1.92103倍，即大约增加了92.10%',

      title2: '奖励提取：',
      text2_1:
        '奖励可随时提取。如果一开始没有质押DLC或质押数量不足10000，则奖励收益会沉淀为质押的DLC，一直到1万个DLC。<br>1) 租金会沉淀为质押金，一直到10000个DLC。<br>2) 最短必须出租2小时，最长出租时间无限制，当剩余可用时长少于1小时机器将不能出租，且不计入在线奖励，矿工可以随时增加时长，但是每次增加时长最少增加2小时。',

      title4: '机器每天DLC收益计算公式：DLC按照{price}U的价格计算',
      text4_8: '(总GPU统一按照4060 32G，NFT 平均10个, 平均质押1万个 计算)',
      title5: '链上奖励收益: {dlc_num} DLC(等值 {usdt_num} USD 当前DLC价格: {price} USD)',

      req_title1: '五. 在线检测机制',
      req_text1_1:
        '机器常驻有DBC AI公链的检测机制，上报信息给DBC分布式检测集群，用来判断机器是否处于在线状态，当不处于在线状态则扣除在线奖励。如果在用户使用过程中出现中断则扣除DLC给用户。惩罚的数量限制：',
      req_text1_2: '1）如果没质押任何币，则只惩罚当前出租的DLC租金收益,最多惩罚2个小时租金',
      req_text1_3: '2）如果质押了DLC, 则惩罚1000个DLC',
      req_title2: '六. 机器举报规则',
      req_text2: '当任何用户判断机器配置可能作假，可以发起举报，举报成功将会扣除机器所有质押币，并且停止任何奖励',
      req_title3: '质押10000个DLC，并且发送举报信息到链上',
      req_text3: '由DeepLink官方授权的验证人可以参与验证，每次验证人的数量为5个，采用多数原则',

      text4_6_1: '阶段一： 每天300万DLC',
      text4_6_2: '阶段二： 每天400万DLC',
      text4_6_3: '阶段三： 每天966.5万DLC',
    },
  },
  country: {
    country1: '中国',
    country2: '北美',
    country3: '南美',
    country4: '欧洲',
    country5: '中东',
    country6: '韩国',
    country7: '日本',
    country8: '中国台湾',
    country9: '中国香港和澳门',
    country10: '马来西亚',
    country11: '印尼',
    country12: '新加坡',
    country13: '越南',
  },
  device: {
    title: '全网设备列表',
    title1: '查看不同型号GPU的机器数量、机器状态、机器的详细信息。',
    table: {
      text1: '机器使用状态:',
      text2: 'GPU数量:',
      text3: '机器总数:',
      text4: '空闲机器数:',
    },
  },
  machine_id: '机器ID',
  machine_is_rented: '是否被租用',
  machine_rented: '被租用',
  machine_idle: '空闲',
  machine_is_online: '是否在线',
  machine_yes: '是',
  machine_no: '否',
  machine_no_data: '暂无数据',

  deviceUniqueId: '机器ID',
  minerLocation: '旷工地址',
  gpuCount: 'GPU数量',
  computeCapacity: '总算力',
  isActive: '是否在线',
  isPledged: '是否质押',
  pledgeTotal: '质押总金额',
  pledgeExpiration: '质押结束时间',

  yesOption: '是',
  noOption: '否',
  gpuType: 'GPU类型',
};
