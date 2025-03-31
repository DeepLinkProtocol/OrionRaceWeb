export default {
  All: 'All',
  Rented: 'Rented',
  Idle: 'Idle',
  meau: {
    back: 'Back to Official Website',
    nav1: 'Orion GPU Race',
    nav2: 'Long-term Rental Mode',
    nav3: 'Short-term Rental Mode',
    nav4: 'Device List',
  },
  footer: {
    link: 'Learn More',
    community: 'Follow the Community',
    tip: 'Note: The community includes Twitter, Telegram, Reddit, Medium, Discord, TikTok, YouTube',
  },

  home: {
    title1: 'Orion GPU Race ',
    title2: '',
    text: "The Orion GPU Race under the DeepLink Protocol is a significant incentive competition aimed at encouraging miners to actively participate in testing the DeepLink network. This competition is an essential preparatory step before the official launch of DeepLink, the world's largest cloud gaming protocol platform, providing a solid technical foundation and efficient computing power support for future global users",
    text1: 'The current total number of GPUs in the DeepLink network is {gpu_num}',
    text2: 'The competition has started, and rewards will begin once the number of GPUs meets the standard!',
    btn_text1: 'Long-term Rental Mode Competition - Has Started',
    btn_title1: 'Current {long_term} GPUs',
    btn_text2: 'Short-term Rental Mode Competition - Has Started',
    btn_title2: 'Current {short_term} GPUs ',

    cont2_text1:
      'The total token reward for the Orion computing power competition is 3 billion, with 2 billion DLC for long-term rental mode and 1 billion DLC for short-term rental mode, lasting 180 days. The competition is divided into three rounds, each lasting 60 days with intervals of 5-10 days.',
    cont2_btn1: 'Long-term rental mode',
    cont2_btn2: 'Short-term rental mode',
    cont3: {
      text1: 'Total \n Computing Power',
      text2: 'Total Number \n of GPUs',
      text3: 'Total Number of \n Computing Pools',
      text4: 'GPU Rental Rate',
      text5: 'Number of \n DLC Rentals',
      text6: 'Number of \n DLC Burned',
      text7: 'Number of DLC \n Pledged for Miners',
    },
    cont4: {
      li1: 'Competition Ranking',
      li2: 'Miner Name',
      li3: 'Computing Power',
      li4: 'Number of GPUs',
      li5: 'Rental Rate',
      li6: 'Number of Rentals',
      li7: 'Unlocked Rewards',
      li8: 'Total Rewards',
    },
  },
  long_rule: {
    title: 'Long-term Rental Mode Competition Rules',
    text1: 'The current total number of GPUs in long-term rental mode in the DeepLink network is {long_num}',
    text2:
      'During the competition, miners can receive a total reward of 2 billion DLC, and 100% of the DLC rental fees paid by users will be burned',
    cont2: {
      title: '1. Participation Rules',
      text1_1:
        'Miners participating in the Orion computing power competition need to hold a Node NFT ( learn more about the node: ',
      text1_2:
        '). During the competition, a single GPU machine can hold multiple nodes, and the number of reward tokens is multiplied by the number of nodes. The maximum number of Node NFTs per machine is 20.',
      text2_1:
        "Minimum requirements for GPU server parameters: \n The computing power server must meet the minimum requirements \n to pass the verifier's review and go online, otherwise, it will not be able to earn revenue.",
      text3_1: 'GPU',
      text3_2: 'Must be an Nvidia series graphics card; models from the 20, 30, 40, or 50 series',
      text4_1: 'Memory',
      text4_2: 'Minimum requirement is 16G per card, 32G recommended',
      text5_1: 'CPU',
      text5_2:
        'Must meet cloud gaming requirements: Intel/AMD, main frequency 3.0GHz or turbo frequency above 3.5GHz; each GPU requires a separate CPU and must be able to run Black Myth: Wukong smoothly, e.g., Intel 10th generation or above, AMD 5600 or above',
      text6_1: 'Hard Disk',
      text6_2: 'System disk should be over 100G SSD, data disk should be over 3T SSD, or use a diskless system',
      text7_1: 'Location',
      text7_2:
        'It is recommended to place the machine in an IDC data center to avoid penalties due to unstable network and power',
      text8_1: 'Network Bandwidth',
      text8_2: 'It is recommended that each GPU machine have at least 10M upstream bandwidth',
    },
    cont3: {
      title: '2. Computing Power Calculation Rules',
      text: 'The rental fees for user terminals across the entire ecosystem are uniformly based on the computing power value system pricing. The DLC rental income is 0.6 USD/C/month. The calculation model is as follows: Whole machine computing power = (25 * number of cards + memory/3.5 + (√(number of CUDA cores) * √(memory/10)) * number of GPUs), when the local area coefficient is 1, the computing power value is as follows:',
      li1: 'GPU Type',
      li2: 'CUDA Cores',
      li3: 'Memory',
      li4: 'Number of GPUs',
      li5: 'Memory (G)',
      li6: 'Whole Machine Computing Power (C)',
      li7: 'Whole Machine Rental (USD)',
      li8: 'Rental Rate per Card per Month (USD)',
    },
    cont4: {
      title: '3. Regional Coefficients',
      li1: 'Region',
      li2: 'Coefficient',
      li_text1: 'Mainland China',
      li_text2: 'North America',
      li_text3: 'South America',
      li_text4: 'Europe',
      li_text5: 'Middle East',
      li_text6: 'South Korea',
      li_text7: 'Japan',
      li_text8: 'Taiwan, China',
      li_text9: 'Hong Kong and Macau, China',
      li_text10: 'Malaysia',
      li_text11: 'Indonesia',
      li_text12: 'Singapore',
      li_text13: 'Vietnam',
      text1:
        'Machine computing power calculation formula: (25 * number of cards + memory/3.5 + (√(number of CUDA cores) * √(memory/10)) * number of GPUs) * regional coefficient * large model coefficient',
      text2: 'Machine Model:',
      text3: 'Number of GPUs:',
      text4: 'Memory Size:',
      text5: 'Region:',
      text6: 'Please Select',
      text7: "The current machine's computing power value is: {total}",
    },
    cont5: {
      title:
        '4. Reward Mechanism (Based on EVM-compatible DLC on DBC AI Public Chain, Browser Address: https://test.dbcscan.io/)',
      text1:
        'The total token reward for the IDC long-term rental mode GPU machines in the Orion computing power competition is 2 billion, lasting for 180 days. The competition is divided into 3 rounds, with a 5-10 day interval between each round.',
      text2:
        'Competition 1: The competition will officially start only when the number of GPUs of each type reaches {n_gpu1}.',
      text3:
        '60 days, 6 million tokens per day, 10% received immediately, 90% unlocked over 180 days, with 0.5% unlocking daily.',
      text4:
        'Competition 2: The competition will officially start only when the number of GPUs of each type reaches {n_gpu2}.',
      text5:
        '60 days, 8 million tokens per day, 10% received immediately, 90% unlocked over 180 days, with 0.5% unlocking daily.',
      text6:
        'Competition 3: The competition will officially start only when the number of GPUs of each type reaches {n_gpu3}.',
      text7:
        '60 days, 19.33 million tokens per day, 10% received immediately, 90% unlocked over 180 days, with 0.5% unlocking daily.',
      text8: 'After listing on the exchange, test tokens can be exchanged 1:1 for mainnet tokens.',
      text9: 'DeepLink uses a non-linear reward algorithm.',

      text10:
        "The total number of tokens rewarded by this system is fixed daily. The rewards a machine receives are related to the machine's computing power X, the effective mining time Y, and the number of staked tokens. The more tokens staked, the greater the reward; however, it does not follow a linear growth relationship. The reward base for 0-10,000 tokens is the same, but for amounts over 10,000 tokens, the reward is calculated based on a function. If the machine is in a rented state, its computing power increases by 30%.",
      text11: 'Reward Calculation Formula:',
      text12: 'R: Total number of reward tokens daily (fixed value)',
      text13: 'The staked token amount for machine i',
      text14: 'The computing power of machine i',
      text15: 'The effective mining time of machine i',
      text16: '',
      title1: 'Staked Amount:',
      text1_1: '1) You can choose any amount of staked tokens or choose not to stake.',
      text1_2:
        '2) For staked amounts between 0-10,000, the reward amount is the same; for amounts over 10,000, rewards grow non-linearly.',
      text1_3:
        '3) When the staked amount is below 10,000, each reward extraction will first contribute to the stake until 10,000 is met.',
      text1_4:
        '4) The reward for 100,000 tokens is 1.23026 times the reward for staking 10,000 tokens, which is an increase of about 23.03%. For 1,000,000 tokens, the reward is 1.46052 times, or an increase of about 46.05%. For 10,000,000 tokens, the reward is 1.69078 times, an increase of about 69.08%, and for 100,000,000 tokens, the reward is 1.92103 times, about a 92.10% increase.',
      title2: 'Reward Extraction:',
      text2_1:
        'You can extract rewards every 24 hours. For each extraction, 10% of the newly generated rewards are immediately available, while 90% are locked for 180 days. The locked portion releases 0.5% at each extraction, with full release after 180 days.',

      block_title1: 'Special Attention:',
      block_text1_1:
        'Long-term rental mode requires adding the GPU machine to the DBC network first. Reference document:',
      block_text1_2:
        '. Then miners need to rent the machine themselves before it can join the DLC network, thereby obtaining both DBC and DLC earnings. The DBC earnings after joining the DBC network = DBC rewards - 30% rental fee.',
      block_title2: 'Machine Daily DBC Earnings Calculation Formula:',
      block_text2:
        'Whole machine computing power / total network computing power * 547,945 * DBC price * regional coefficient * 1.3 (computing power increases by 30% when rented) - whole machine computing power * regional coefficient * 0.01693 * 30% (daily earnings per unit computing power is 0.01693 USD).',
      text3_13:
        'The current daily earnings are: {usdt1} USD equivalent in DBC = On-chain rewards: {dbc} DBC (equivalent to {usdt2} USD at the current DBC price of {dbc_price} USD) - 30% rental fee: {usdt3} USD equivalent in DBC.',
      title4: 'Machine Daily DLC Earnings Calculation Formula: DLC calculated at {price} USD per unit.',
      text4_1: 'GPU Model:',
      text4_2: 'Memory Size:',
      text4_3: 'Number of Node NFTs:',
      text4_4: 'Region:',
      text4_5: 'Amount of DLC Staked:',
      text4_6: 'Competition Phase:',
      text4_6_1: 'Phase 1: 6 million DLC per day.',
      text4_6_2: 'Phase 2: 8 million DLC per day.',
      text4_6_3: 'Phase 3: 19.33 million DLC per day.',
      text4_7: 'Total number of participating GPUs:',
      text4_8:
        '(The total GPU is uniformly calculated based on 4060 model, 32GB, with an average of 10 NFTs and an average stake of 100,000 tokens)',
      title5: 'On-chain rewards: {dlc_num} DLC (equivalent to {usdt_num} USD at the current DLC price of {price} USD).',
      req_title1: '5. Reporting and Verification Mechanism (Based on EVM-compatible DLC on the DBC AI Public Chain)',
      req_text1:
        'Users renting DLC machines can report at any time. A deposit of 10,000 DLC is required to initiate a report. When reporting, the report information will enter the DBC verifier validation process.',
      req_title2: '6. Penalty Mechanism (Based on EVM-compatible DLC on the DBC AI Public Chain)',
      req_text2:
        'After the DLC report is verified, if there is an issue with the verification, DBC staked tokens will be deducted according to the rules, and a maximum of 10,000 DLC tokens will be deducted. These staked tokens will be rewarded to the reporting user.',
      req_title3: '7. Payment and Burning Mechanism (Based on EVM-compatible DLC on the DBC AI Public Chain)',
      req_text3:
        'Users pay DLC (GPU prices in the DLC network are 20% higher than in the DBC network) to obtain the machine rental rights. The DLC paid by users will be 100% burned in the smart contract, which can be queried for each payment and burning record.',
    },
  },
  short_rule: {
    title: 'Short-term Rental Mode Competition Rules',
    text1: 'The current number of GPUs in the short-term rental mode on the DeepLink network is {short_num}.',
    text2:
      'During the competition, miners can receive a total reward of 1 billion DLC, and the DLC rental fees paid by users will be 100% burned.',
    cont2: {
      title: '1. Participation Rules',
      text1_1:
        'Miners participating in the Orion computing power competition need to hold a Node NFT ( For more information on nodes:',
      text1_2:
        '). During the competition, a single GPU machine can hold multiple nodes, and the number of reward tokens is proportional to the number of nodes. The maximum number of Node NFTs a single machine can hold is 20.',
      text2_1:
        'Minimum requirements for GPU server parameters: \n The parameters of the computing power server must meet the minimum requirements.',
      text3_1: 'GPU',
      text3_2: 'Must be an Nvidia series graphics card; models include the 20, 30, 40, and 50 series.',
      text4_1: 'Memory',
      text4_2: 'Minimum memory requirement is 16G per card, 32G is recommended.',
      text5_1: 'CPU',
      text5_2:
        'Must meet cloud gaming requirements: Intel/AMD with a base frequency of 3.0GHz or boost frequency of at least 3.5GHz; each GPU requires a separate CPU, capable of smoothly running Black Myth: Wukong. For example: Intel CPUs of 10th generation or above, AMD 5600 or above.',
      text6_1: 'Hard Drive',
      text6_2: 'System disk 2T SSD or more, data disk 1T or more',
      text7_1: 'Location',
      text7_2: 'The machine can be placed at home.',
      text8_1: 'Network Bandwidth:',
      text8_2: 'Each GPU machine should have at least 10M upload bandwidth.',
    },
    cont3: {
      title: '2. Computing Power Calculation Rules',
      text: 'In the entire ecosystem, rental fees for users are uniformly based on the computing power value pricing system. The DLC rental income is 0.508 USD/C/month. The calculation model is as follows: Whole machine computing power value = (25 * number of cards + memory/3.5 + (√(number of CUDA cores) * √(video memory/10)) * number of graphics cards). ',
    },
    cont4: {
      title: '3. Regional Coefficients',
      li1: 'Region',
      li2: 'Coefficient',
      li_text1: 'Mainland China',
      li_text2: 'North America',
      li_text3: 'South America',
      li_text4: 'Europe',
      li_text5: 'Middle East',
      li_text6: 'South Korea',
      li_text7: 'Japan',
      li_text8: 'Taiwan, China',
      li_text9: 'Hong Kong and Macau, China',
      li_text10: 'Malaysia',
      li_text11: 'Indonesia',
      li_text12: 'Singapore',
      li_text13: 'Vietnam',
      text1:
        'Machine computing power calculation formula: (25 * number of cards + memory/3.5 + (√(number of CUDA cores) * √(memory/10)) * number of GPUs) * large model coefficient',
      text2: 'Machine Model:',
      text3: 'Number of GPUs:',
      text4: 'Memory Size:',
      text5: 'Region:',
      text6: 'Please Select',
      text7: "The current machine's computing power value is: {total}",
    },
    cont5: {
      title:
        "4. Reward Mechanism (Based on DBC AI Public Chain's EVM-compatible DLC, browser address: https://test.dbcscan.io/)",
      text1:
        'The total token reward for individual short-term rental GPU machines in the Orion computing power competition is 1 billion, lasting for 180 days. The competition is divided into 3 phases, with an interval of 5-10 days between each.',
      text2:
        'Competition Phase 1: The competition officially starts only when the number of each type of GPU reaches {n_gpu1}.',
      text3:
        '60 days, 3 million tokens per day, 10% unlocked immediately, 90% unlocked over 180 days, with 0.5% unlocked daily.',
      text4:
        'Competition Phase 2: The competition officially starts only when the number of each type of GPU reaches {n_gpu2}.',
      text5:
        '60 days, 4 million tokens per day, 10% unlocked immediately, 90% unlocked over 180 days, with 0.5% unlocked daily.',
      text6:
        'Competition Phase 3: The competition officially starts only when the number of each type of GPU reaches {n_gpu3}.',
      text7:
        '60 days, 9.665 million tokens per day, 10% unlocked immediately, 90% unlocked over 180 days, with 0.5% unlocked daily.',
      text8: 'After listing on the exchange, test tokens can be exchanged 1:1 for mainnet tokens.',
      text9: 'DeepLink uses a non-linear reward algorithm.',
      text10:
        "The total number of tokens rewarded by this system is fixed daily. The rewards a machine receives are related to the machine's computing power X, the effective mining time Y, and the amount of staked tokens. The more tokens staked, the greater the reward; however, it does not follow a linear growth relationship. The reward base for 0-1,000 tokens is the same, but for amounts over 1,000 tokens, the reward is calculated based on a function. If the machine is in a rented state, its computing power increases by 30%.",
      text11: 'Reward Calculation Formula:',
      text12: 'R: Total daily reward token amount (fixed value)',
      text13: 'Staked token amount for machine i',
      text14: 'Computing power of machine i',
      text15: 'Effective mining time of machine i',
      text16: '',
      title1: 'Staked Amount:',
      text1_1: '1) You can choose any amount to stake or choose not to stake.',
      text1_2:
        '2) For staked amounts between 0-1,000, the reward amount is the same; for amounts over 1,000, rewards grow non-linearly.',
      text1_3:
        '3) When the staked amount is below 1,000, each reward extraction will first contribute to the stake until 1,000 is met.',
      text1_4:
        '4) The reward for 10,000 tokens is 1.23026 times the reward for staking 1,000 tokens, which is an increase of about 23.03%. For 100,000 tokens, the reward is 1.46052 times, or an increase of about 46.05%. For 1,000,000 tokens, the reward is 1.69078 times, an increase of about 69.08%, and for 10,000,000 tokens, the reward is 1.92103 times, about a 92.10% increase.',
      title2: 'Reward Extraction:',
      text2_1:
        'You can extract rewards every 24 hours. For each extraction, 10% of the newly generated rewards are immediately available, while 90% are locked for 180 days. The locked portion releases 0.5% at each extraction, with full release after 180 days.',

      title4: 'Daily DLC Revenue Calculation Formula: DLC is calculated at a price of {price} USD.',
      text4_8:
        '(The total GPU is calculated uniformly based on 4060 32G, with an average of 10 NFTs and an average stake of 10,000 tokens)',
      title5:
        'On-Chain Reward Earnings: {dlc_num} DLC (equivalent to {usdt_num} USD at the current DLC price of {price} USD).',

      req_title1: '5. Online Detection Mechanism',
      req_text1_1:
        'The machine is subject to the detection mechanism of the DBC AI public chain, which reports information to the DBC distributed detection cluster to determine whether the machine is online. If it is not online, the online rewards will be deducted. If interruptions occur during user usage, DLC will be deducted from the user. Penalty limits:',
      req_text1_2:
        '1) If no coins are staked, only the current rental DLC earnings will be penalized, up to a maximum of 2 hours of rental fees.',
      req_text1_3: '2) If DLC is staked, a penalty of 1,000 DLC will be imposed.',
      req_title2: '6. Machine Reporting Rules',
      req_text2:
        "If any user suspects that the machine's configuration may be fraudulent, they can initiate a report. If successful, all staked coins will be deducted from the machine, and any rewards will be stopped.",
      req_title3: 'Stake 10,000 DLC and send the report information to the chain',
      req_text3:
        'Validators authorized by DeepLink can participate in verification, with 5 validators involved in each verification, following a majority rule.',

      text4_6_1: 'Phase 1: 3 million DLC per day.',
      text4_6_2: 'Phase 2: 4 million DLC per day.',
      text4_6_3: 'Phase 3: 9.665 million DLC per day.',
    },
  },
  country: {
    country1: 'China',
    country2: 'North America',
    country3: 'South America',
    country4: 'Europe',
    country5: 'Middle East',
    country6: 'South Korea',
    country7: 'Japan',
    country8: 'Taiwan, China',
    country9: 'Hong Kong and Macau, China',
    country10: 'Malaysia',
    country11: 'Indonesia',
    country12: 'Singapore',
    country13: 'Vietnam',
  },
  device: {
    title: 'Global Device List',
    title1: 'View the number of machines, machine status, and detailed information for different models of GPUs.',
    table: {
      text1: 'Machine Usage Status:',
      text2: 'Number of GPUs:',
      text3: 'Total Number of Machines:',
      text4: 'Number of Idle Machines:',
    },
  },
  machine_id: 'Machine ID',
  machine_is_rented: 'Whether it is rented',
  machine_rented: 'Rented',
  machine_idle: 'Idle',
  machine_is_online: 'Whether it is online',
  machine_yes: 'Yes',
  machine_no: 'No',
  machine_no_data: 'No data available',

  deviceUniqueId: 'Machine ID',
  minerLocation: 'Miner Address',
  gpuCount: 'GPU Quantity',
  computeCapacity: 'Total Computing Power',
  isActive: 'Online Status',
  isPledged: 'Staked Status',
  pledgeTotal: 'Total Staked Amount',
  pledgeExpiration: 'Stake End Time',

  yesOption: 'Yes',
  noOption: 'No',
};
