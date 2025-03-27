<template>
  <div class="longTerm">
    <div class="home_bg"></div>
    <div class="page_cont1">
      <div class="title animation_hide" v-animate="{ delay: 0, class: 'amplify' }">
        <p>{{ $t('long_rule.title') }}</p>
      </div>
      <div class="text animation_hide" v-animate="{ delay: 0, class: 'amplify' }">
        {{ $t('long_rule.text1', { long_num: long_num }) }}
      </div>
      <div class="text1 animation_hide" v-animate="{ delay: 0, class: 'amplify' }">{{ $t('long_rule.text2') }}</div>
    </div>
    <div class="page_cont5 delay300 animation_hide" v-animate="{ delay: 300, class: 'fadeInUp' }">
      <div class="title1">{{ $t('long_rule.cont5.title4', { price: dlcPrice?.dlc_price || 0 }) }}</div>
      <div class="text2">
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_1') }}</p>
          <el-select
            class="el-select-type select_width210"
            v-model="gpu_type2"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectGPU2"
          >
            <el-option
              v-for="(item, index) in options"
              :key="item.value"
              :label="item.name + '-Mem:' + item.men"
              :value="item.cuda + '_' + item.men + '_' + item.large + '_' + index"
            ></el-option>
          </el-select>
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_2') }}</p>
          <el-select
            class="el-select-type select_width210"
            v-model="mem_num2"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectMem2"
          >
            <el-option
              v-for="(item, index) in mem_num_list"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_3') }}</p>
          <el-select
            class="el-select-type select_width210"
            v-model="nft_num"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectNftnum2"
          >
            <el-option
              v-for="(item, index) in nft_num_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_4') }}</p>
          <el-select
            class="el-select-type select_width"
            v-model="local2"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectLocal2"
          >
            <el-option
              v-for="(item, index) in options3"
              :key="item.value"
              :label="item.name"
              :value="item.value + '_' + index"
            ></el-option>
          </el-select>
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_5') }}</p>
          <el-select
            class="el-select-type select_width210"
            v-model="stak_dlc_num"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectStakDLC2"
          >
            <el-option
              v-for="(item, index) in stak_dlc_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_6') }}</p>
          <el-select
            class="el-select-type select_width"
            v-model="race_stage"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectRace2"
          >
            <el-option
              v-for="(item, index) in race_stage_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_7') }}</p>
          <el-select
            class="el-select-type select_width210"
            v-model="join_gpu_num"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectJoinGPU2"
          >
            <el-option
              v-for="(item, index) in join_gpu_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="text">{{ $t('long_rule.cont5.text4_8') }}</div>
      <div class="title1">
        {{
          $t('long_rule.cont5.title5', {
            dlc_num: dlc_earning,
            usdt_num: dlc_usdt_earning,
            price: dlcPrice?.dlc_price || 0,
          })
        }}
      </div>
    </div>
    <div class="page_cont2 delay300 animation_hide" v-animate="{ delay: 300, class: 'fadeInUp' }">
      <div class="title">{{ $t('long_rule.cont2.title') }}</div>
      <div class="text">
        {{ $t('long_rule.cont2.text1_1') }}
        <a href="https://www.deeplink.cloud/node" target="_blank">https://www.deeplink.cloud/node</a>
        {{ $t('long_rule.cont2.text1_2') }}
      </div>
      <div class="text1">{{ $t('long_rule.cont2.text2_1') }}</div>
      <div class="btns">
        <div class="btn">
          <p class="btn_title">{{ $t('long_rule.cont2.text3_1') }}</p>
          <p class="btn_text">{{ $t('long_rule.cont2.text3_2') }}</p>
        </div>
        <div class="btn">
          <p class="btn_title">{{ $t('long_rule.cont2.text4_1') }}</p>
          <p class="btn_text">{{ $t('long_rule.cont2.text4_2') }}</p>
        </div>
      </div>
      <div class="require">
        <div class="req_text1">
          <p class="text_top">{{ $t('long_rule.cont2.text5_1') }}</p>
          <p class="text_bottom">{{ $t('long_rule.cont2.text5_2') }}</p>
        </div>
        <div class="req_text2">
          <p class="text_top">{{ $t('long_rule.cont2.text6_1') }}</p>
          <p class="text_bottom">{{ $t('long_rule.cont2.text6_2') }}</p>
        </div>
        <div class="req_text2">
          <p class="text_top">{{ $t('long_rule.cont2.text7_1') }}</p>
          <p class="text_bottom">{{ $t('long_rule.cont2.text7_2') }}</p>
        </div>
        <div class="req_text2">
          <p class="text_top">{{ $t('long_rule.cont2.text8_1') }}</p>
          <p class="text_bottom">{{ $t('long_rule.cont2.text8_2') }}</p>
        </div>
      </div>
    </div>
    <div class="page_cont3 delay300 animation_hide" v-animate="{ delay: 300, class: 'fadeInUp' }">
      <div class="page3_bg"></div>
      <div class="title">{{ $t('long_rule.cont3.title') }}</div>
      <div class="text">{{ $t('long_rule.cont3.text') }}</div>
      <div class="page_cont">
        <el-scrollbar>
          <div class="cont_table">
            <table class="table_cont">
              <tr class="theader">
                <th class="">{{ $t('long_rule.cont3.li1') }}</th>
                <th class="">{{ $t('long_rule.cont3.li2') }}</th>
                <th class="">{{ $t('long_rule.cont3.li3') }}</th>
                <th class="">{{ $t('long_rule.cont3.li4') }}</th>
                <th class="">{{ $t('long_rule.cont3.li5') }}</th>
                <th class="">{{ $t('long_rule.cont3.li6') }}</th>
                <th class="">{{ $t('long_rule.cont3.li7') }}</th>
                <th class="">{{ $t('long_rule.cont3.li8') }}</th>
              </tr>
              <tr>
                <td class="" rowspan="2">4060</td>
                <td class="" rowspan="2">3027</td>
                <td class="" rowspan="2">8</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">334.87</td>
                <td class="">170.11</td>
                <td class="">42.53</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">444.58</td>
                <td class="">225.85</td>
                <td class="">56.46</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4060ti</td>
                <td class="" rowspan="2">4352</td>
                <td class="" rowspan="2">8</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">372.59</td>
                <td class="">189.28</td>
                <td class="">47.32</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">482.31</td>
                <td class="">245.01</td>
                <td class="">61.25</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4060ti</td>
                <td class="" rowspan="2">4352</td>
                <td class="" rowspan="2">16</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">470.35</td>
                <td class="">238.94</td>
                <td class="">59.74</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">580.07</td>
                <td class="">294.67</td>
                <td class="">73.67</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4070</td>
                <td class="" rowspan="2">5888</td>
                <td class="" rowspan="2">12</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">472.80</td>
                <td class="">240.18</td>
                <td class="">60.05</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">582.51</td>
                <td class="">295.92</td>
                <td class="">73.98</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4070 SUPER</td>
                <td class="" rowspan="2">7168</td>
                <td class="" rowspan="2">12</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">507.55</td>
                <td class="">257.84</td>
                <td class="">64.46</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">617.26</td>
                <td class="">313.57</td>
                <td class="">78.39</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4070ti</td>
                <td class="" rowspan="2">7680</td>
                <td class="" rowspan="2">12</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">520.57</td>
                <td class="">264.45</td>
                <td class="">66.11</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">630.29</td>
                <td class="">320.19</td>
                <td class="">80.05</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4070 Ti Super</td>
                <td class="" rowspan="2">8448</td>
                <td class="" rowspan="2">16</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">601.62</td>
                <td class="">305.62</td>
                <td class="">76.41</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">711.33</td>
                <td class="">361.36</td>
                <td class="">90.34</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4080</td>
                <td class="" rowspan="2">9728</td>
                <td class="" rowspan="2">16</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">635.61</td>
                <td class="">322.89</td>
                <td class="">80.72</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">745.32</td>
                <td class="">378.62</td>
                <td class="">94.66</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4080 SUPER</td>
                <td class="" rowspan="2">10240</td>
                <td class="" rowspan="2">16</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">648.57</td>
                <td class="">329.47</td>
                <td class="">82.37</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">758.29</td>
                <td class="">385.21</td>
                <td class="">96.30</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4080ti</td>
                <td class="" rowspan="2">14080</td>
                <td class="" rowspan="2">20</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">807.81</td>
                <td class="">410.37</td>
                <td class="">102.59</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">917.52</td>
                <td class="">466.10</td>
                <td class="">116.53</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4090</td>
                <td class="" rowspan="2">16384</td>
                <td class="" rowspan="2">24</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">929.76</td>
                <td class="">472.32</td>
                <td class="">118.08</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">1039.47</td>
                <td class="">528.05</td>
                <td class="">132.01</td>
              </tr>
              <tr>
                <td class="" rowspan="2">4090ti</td>
                <td class="" rowspan="2">18176</td>
                <td class="" rowspan="2">24</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">972.01</td>
                <td class="">493.78</td>
                <td class="">123.45</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">1081.72</td>
                <td class="">549.52</td>
                <td class="">137.38</td>
              </tr>
              <tr>
                <td class="" rowspan="2">5070</td>
                <td class="" rowspan="2">10240</td>
                <td class="" rowspan="2">12</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">579.98</td>
                <td class="">294.63</td>
                <td class="">73.66</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">689.69</td>
                <td class="">350.36</td>
                <td class="">87.59</td>
              </tr>
              <tr>
                <td class="" rowspan="2">5070ti</td>
                <td class="" rowspan="2">12288</td>
                <td class="" rowspan="2">16</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">697.44</td>
                <td class="">354.30</td>
                <td class="">88.57</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">807.15</td>
                <td class="">410.03</td>
                <td class="">102.51</td>
              </tr>
              <tr>
                <td class="" rowspan="2">5080</td>
                <td class="" rowspan="2">16384</td>
                <td class="" rowspan="2">16</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">784.21</td>
                <td class="">398.38</td>
                <td class="">99.59</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">893.92</td>
                <td class="">454.11</td>
                <td class="">113.53</td>
              </tr>
              <tr>
                <td class="" rowspan="2">5090</td>
                <td class="" rowspan="2">18432</td>
                <td class="" rowspan="2">32</td>
                <td class="">4</td>
                <td class="">128</td>
                <td class="">1108.02</td>
                <td class="">562.87</td>
                <td class="">140.72</td>
              </tr>
              <tr>
                <td class="">4</td>
                <td class="">512</td>
                <td class="">1217.74</td>
                <td class="">618.61</td>
                <td class="">154.65</td>
              </tr>
            </table>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <div class="page_cont4 delay300 animation_hide" v-animate="{ delay: 300, class: 'fadeInUp' }">
      <div class="title">{{ $t('long_rule.cont4.title') }}</div>
      <div class="page_cont">
        <div class="cont_table">
          <table class="table_cont">
            <tr class="theader">
              <th class="">{{ $t('long_rule.cont4.li1') }}</th>
              <th class="">{{ $t('long_rule.cont4.li2') }}</th>
              <th class="">{{ $t('long_rule.cont4.li1') }}</th>
              <th class="">{{ $t('long_rule.cont4.li2') }}</th>
            </tr>
            <tr>
              <td class="">{{ $t('long_rule.cont4.li_text1') }}</td>
              <td class="">1</td>
              <td class="">{{ $t('long_rule.cont4.li_text2') }}</td>
              <td class="">1.2</td>
            </tr>
            <tr>
              <td class="">{{ $t('long_rule.cont4.li_text3') }}</td>
              <td class="">1.3</td>
              <td class="">{{ $t('long_rule.cont4.li_text4') }}</td>
              <td class="">1.5</td>
            </tr>
            <tr>
              <td class="">{{ $t('long_rule.cont4.li_text5') }}</td>
              <td class="">1.6</td>
              <td class="">{{ $t('long_rule.cont4.li_text6') }}</td>
              <td class="">1.6</td>
            </tr>
            <tr>
              <td class="">{{ $t('long_rule.cont4.li_text7') }}</td>
              <td class="">1.7</td>
              <td class="">{{ $t('long_rule.cont4.li_text8') }}</td>
              <td class="">1.3</td>
            </tr>
            <tr>
              <td class="">{{ $t('long_rule.cont4.li_text9') }}</td>
              <td class="">1.3</td>
              <td class="">{{ $t('long_rule.cont4.li_text10') }}</td>
              <td class="">1.5</td>
            </tr>
            <tr>
              <td class="">{{ $t('long_rule.cont4.li_text11') }}</td>
              <td class="">1.5</td>
              <td class="">{{ $t('long_rule.cont4.li_text12') }}</td>
              <td class="">1.5</td>
            </tr>
            <tr>
              <td class="">{{ $t('long_rule.cont4.li_text13') }}</td>
              <td class="">1.3</td>
              <td class=""></td>
              <td class=""></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="text1">{{ $t('long_rule.cont4.text1') }}</div>
      <div class="text2">
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont4.text2') }}</p>
          <el-select
            class="el-select-type select_width"
            v-model="gpu_type1"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectGPU1"
          >
            <el-option
              v-for="(item, index) in options"
              :key="item.value"
              :label="item.name + '-Mem:' + item.men"
              :value="item.cuda + '_' + item.men + '_' + item.large + '_' + index"
            ></el-option>
          </el-select>
        </div>
        <!-- <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont4.text3') }}</p>
          <el-select class="select_width210" v-model="gpu_num1" :placeholder="$t('long_rule.cont4.text6')" @change='SelectGpuNum1'>
              <el-option v-for="(item, index) in options1 " :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div> -->
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont4.text4') }}</p>
          <el-select
            class="select_width210"
            v-model="mem_num1"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectMem1"
          >
            <el-option
              v-for="(item, index) in options2_1"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont4.text5') }}</p>
          <el-select
            class="select_width"
            v-model="local1"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectLocal1"
          >
            <el-option
              v-for="(item, index) in options3"
              :key="item.value"
              :label="item.name"
              :value="item.value + '_' + index"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="text1">{{ $t('long_rule.cont4.text7', { total: machinePoints }) }}</div>
    </div>
    <div class="page_cont5 delay300 animation_hide" v-animate="{ delay: 300, class: 'fadeInUp' }">
      <div class="title">{{ $t('long_rule.cont5.title') }}</div>
      <div class="text">{{ $t('long_rule.cont5.text1') }}</div>
      <div class="text">
        <p>{{ $t('long_rule.cont5.text2', { n_gpu1: 100 }) }}</p>
        <p>{{ $t('long_rule.cont5.text3') }}</p>
      </div>
      <div class="text">
        <p>{{ $t('long_rule.cont5.text4', { n_gpu2: 200 }) }}</p>
        <p>{{ $t('long_rule.cont5.text5') }}</p>
      </div>
      <div class="text">
        <p>{{ $t('long_rule.cont5.text6', { n_gpu3: 300 }) }}</p>
        <p>{{ $t('long_rule.cont5.text7') }}</p>
      </div>
      <!-- <div class="text">{{ $t('long_rule.cont5.text8') }}</div> -->
      <div class="text">{{ $t('long_rule.cont5.text9') }}</div>
      <div class="text">
        <p>{{ $t('long_rule.cont5.text10') }}</p>
        <p>{{ $t('long_rule.cont5.text11') }}</p>
        <div class="formula">
          <span>B<sub>i</sub> = </span>
          <div class="fraction">
            <div class="numerator">
              H<sub>i</sub>&nbsp;&middot;&nbsp;T<sub>i</sub>&nbsp;&middot;&nbsp;ln(max(10000, P<sub
                style="font-size: 12px"
                >i</sub
              >))
            </div>
            <div class="denominator">
              &sum;<sup>N</sup><sub style="margin-left: -10px">j=1</sub> H<sub>j</sub> &middot;
              T<sub>j</sub>&nbsp;&middot;&nbsp;ln(max(10000, P<sub style="font-size: 12px">j</sub>))
            </div>
          </div>
          <span class="product"> <span>·</span> R</span>
        </div>
      </div>
      <div class="text">
        <p>{{ $t('long_rule.cont5.text12') }}</p>
        <p>P<sub>i</sub>：{{ $t('long_rule.cont5.text13') }}</p>
        <p>H<sub>i</sub>：{{ $t('long_rule.cont5.text14') }}</p>
        <p>T<sub>i</sub>：{{ $t('long_rule.cont5.text15') }}</p>
      </div>
      <div class="title1">{{ $t('long_rule.cont5.title1') }}</div>
      <div class="text">
        <p>{{ $t('long_rule.cont5.text1_1') }}</p>
        <p>{{ $t('long_rule.cont5.text1_2') }}</p>
        <p>{{ $t('long_rule.cont5.text1_3') }}</p>
        <p>{{ $t('long_rule.cont5.text1_4') }}</p>
      </div>
      <div class="title1">{{ $t('long_rule.cont5.title2') }}</div>
      <div class="text">
        <p>{{ $t('long_rule.cont5.text2_1') }}</p>
      </div>
      <div class="blockcon">
        <div class="block block1">
          <div class="top_title">{{ $t('long_rule.cont5.block_title1') }}</div>
          <div class="top_text">
            {{ $t('long_rule.cont5.block_text1_1') }}
            <a href="https://galaxyrace.deepbrainchain.org/rule" target="_blank"
              >https://galaxyrace.deepbrainchain.org/rule</a
            >
            {{ $t('long_rule.cont5.block_text1_2') }}
          </div>
        </div>
        <!-- <div class="block block2">
          <div class="top_title">{{ $t('long_rule.cont5.block_title2') }}</div>
          <div class="top_text">{{ $t('long_rule.cont5.block_text2') }}</div>
        </div> -->
      </div>
      <div class="title1">{{ $t('long_rule.cont5.block_title2') }} {{ $t('long_rule.cont5.block_text2') }}</div>
      <!-- <div class="text">{{ $t('long_rule.cont5.block_text2') }}</div> -->
      <div class="text2">
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont4.text2') }}</p>
          <el-select
            class="el-select-type select_width"
            v-model="gpu_type"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectGPU"
          >
            <el-option
              v-for="(item, index) in options"
              :key="item.value"
              :label="item.name + '-Mem:' + item.men"
              :value="item.cuda + '_' + item.men + '_' + item.large + '_' + index"
            ></el-option>
          </el-select>
        </div>
        <!-- <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont4.text3') }}</p>
          <el-select class="select_width210" v-model="gpu_num" :placeholder="$t('long_rule.cont4.text6')" @change='SelectGpuNum'>
              <el-option v-for="(item, index) in options1 " :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div> -->
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont4.text4') }}</p>
          <el-select
            class="select_width210"
            v-model="mem_num"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectMem"
          >
            <el-option
              v-for="(item, index) in options2"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont4.text5') }}</p>
          <el-select
            class="select_width"
            v-model="local"
            :placeholder="$t('long_rule.cont4.text6')"
            @change="SelectLocal"
          >
            <el-option
              v-for="(item, index) in options3"
              :key="item.value"
              :label="item.name"
              :value="item.value + '_' + index"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="text">
        {{
          $t('long_rule.cont5.text3_13', {
            usdt1: Income,
            dbc: price3,
            usdt2: price1,
            dbc_price: dbcPrice,
            usdt3: price2,
          })
        }}
      </div>
      <!-- <div class="title1">{{ $t('long_rule.cont5.title4') }}</div>
      <div class="text2">
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_1') }}</p>
          <el-select class="el-select-type select_width210" v-model="gpu_type2" :placeholder="$t('long_rule.cont4.text6')" @change='SelectGPU2'>
            <el-option v-for="(item, index) in options " :key="item.value" :label="item.name + '-Mem:' + item.men" :value="item.cuda+'_'+item.men+'_'+item.large+'_'+index"></el-option>
          </el-select> 
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_2') }}</p>
          <el-select class="el-select-type select_width210" v-model="mem_num2" :placeholder="$t('long_rule.cont4.text6')" @change='SelectMem2'>
            <el-option v-for="(item, index) in mem_num_list " :key="item.value" :label="item.name" :value="item.value"></el-option>
          </el-select> 
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_3') }}</p>
          <el-select class="el-select-type select_width210" v-model="nft_num" :placeholder="$t('long_rule.cont4.text6')" @change='SelectNftnum2'>
            <el-option v-for="(item, index) in nft_num_list " :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select> 
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_4') }}</p>
          <el-select class="el-select-type select_width" v-model="local2" :placeholder="$t('long_rule.cont4.text6')" @change='SelectLocal2'>
            <el-option v-for="(item, index) in options3 " :key="item.value" :label="item.name" :value="item.value +'_'+index"></el-option>
          </el-select>
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_5') }}</p>
          <el-select class="el-select-type select_width210" v-model="stak_dlc_num" :placeholder="$t('long_rule.cont4.text6')" @change='SelectStakDLC2'>
            <el-option v-for="(item, index) in stak_dlc_list " :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select> 
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_6') }}</p>
          <el-select class="el-select-type select_width" v-model="race_stage" :placeholder="$t('long_rule.cont4.text6')" @change='SelectRace2'>
            <el-option v-for="(item, index) in race_stage_list " :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select> 
        </div>
        <div class="text_select">
          <p class="text2_tx">{{ $t('long_rule.cont5.text4_7') }}</p>
          <el-select class="el-select-type select_width210" v-model="join_gpu_num" :placeholder="$t('long_rule.cont4.text6')" @change='SelectJoinGPU2'>
            <el-option v-for="(item, index) in join_gpu_list " :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select> 
        </div>
      </div>
      <div class="text">{{ $t('long_rule.cont5.text4_8') }}</div>
      <div class="title1">{{ $t('long_rule.cont5.title5', {dlc_num: dlc_earning, usdt_num: dlc_usdt_earning }) }}</div> -->
      <div class="require">
        <div class="req_text3">
          <p class="text_top">{{ $t('long_rule.cont5.req_title1') }}</p>
          <p class="text_bottom">{{ $t('long_rule.cont5.req_text1') }}</p>
        </div>
        <div class="req_text3">
          <p class="text_top">{{ $t('long_rule.cont5.req_title2') }}</p>
          <p class="text_bottom">{{ $t('long_rule.cont5.req_text2') }}</p>
        </div>
        <div class="req_text3">
          <p class="text_top">{{ $t('long_rule.cont5.req_title3') }}</p>
          <p class="text_bottom">{{ $t('long_rule.cont5.req_text3') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  ref,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  getCurrentInstance,
  watch,
  nextTick,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { dbcPriceOcw, dlcPriceOcw } from '@/api/http';
import { getRewardInfo } from '@/api/wss';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { useIntervalFn } from '@vueuse/core';

export default defineComponent({
  name: 'longTerm',
  setup() {
    const store = useStore();
    const router = useRouter();
    let lan = computed(() => {
      return store.state.lan;
    });
    const { t, locale } = useI18n();
    const instance = getCurrentInstance();
    const timer = ref(null);
    const long_num = ref(0);
    const linkHref = (el) => {
      window.open(el, 'target');
    };

    // 获取DLC价格
    let dlcPrice = ref(null);
    const { pause, resume, isActive } = useIntervalFn(
      async () => {
        const res = await dlcPriceOcw();
        if (res.code === '10502') {
          dlcPrice.value = res.content;
          dlc_price.value = res.content.dlc_price;
        } else {
          window.$message.error('DLC价格获取失败');
        }
      },
      10000,
      { immediateCallback: true }
    );
    const options = ref([
      { name: '2080', cuda: '2944', men: '8', large: 1 },
      { name: '2080s', cuda: '3072', men: '8', large: 1 },
      { name: '2080ti', cuda: '4352', men: '11', large: 1 },
      { name: '3060', cuda: '3584', men: '12', large: 1 },
      { name: '3060ti', cuda: '4864', men: '8', large: 1 },
      { name: '3070', cuda: '5888', men: '8', large: 1 },
      { name: '3070ti', cuda: '6144', men: '8', large: 1 },
      { name: '3080', cuda: '8704', men: '10', large: 1 },
      { name: '3080ti', cuda: '10240', men: '12', large: 1 },
      { name: '3090', cuda: '10496', men: '24', large: 1 },
      { name: '4060', cuda: '3072', men: '8', large: 1 },
      { name: '4060ti', cuda: '4352', men: '8', large: 1 },
      { name: '4060ti', cuda: '4352', men: '16', large: 1 },
      { name: '4070', cuda: '5888', men: '12', large: 1 },
      { name: '4070 SUPER', cuda: '7168', men: '12', large: 1 },
      { name: '4070ti', cuda: '7680', men: '12', large: 1 },
      { name: '4070 Ti Super', cuda: '8448', men: '16', large: 1 },
      { name: '4080', cuda: '9728', men: '16', large: 1 },
      { name: '4080 SUPER', cuda: '10240', men: '16', large: 1 },
      { name: '4080ti', cuda: '14080', men: '20', large: 1 },
      { name: '4090', cuda: '16384', men: '24', large: 1 },
      { name: '4090ti', cuda: '18176', men: '24', large: 1 },
      { name: '5070', cuda: '10240', men: '12', large: 1 },
      { name: '5070ti', cuda: '12288', men: '16', large: 1 },
      { name: '5080', cuda: '16384', men: '16', large: 1 },
      { name: '5090', cuda: '18432', men: '32', large: 1 },
    ]);
    const options1 = ref([
      { label: 1, value: 1 },
      // {label: 2, value: 2},
      // {label: 3, value: 3},
      // {label: 4, value: 4},
      // {label: 5, value: 5},
      // {label: 6, value: 6},
      // {label: 7, value: 7},
      // {label: 8, value: 8}
    ]);
    const options2 = ref([]);
    const options2_1 = ref([]);
    const options3 = ref([
      { name: t('country.country1'), key: 1, value: 1 },
      { name: t('country.country2'), key: 2, value: 1.2 },
      { name: t('country.country3'), key: 3, value: 1.3 },
      { name: t('country.country4'), key: 4, value: 1.5 },
      { name: t('country.country5'), key: 5, value: 1.6 },
      { name: t('country.country6'), key: 6, value: 1.6 },
      { name: t('country.country7'), key: 7, value: 1.7 },
      { name: t('country.country8'), key: 8, value: 1.3 },
      { name: t('country.country9'), key: 9, value: 1.3 },
      { name: t('country.country10'), key: 10, value: 1.5 },
      { name: t('country.country11'), key: 11, value: 1.5 },
      { name: t('country.country12'), key: 12, value: 1.5 },
      { name: t('country.country13'), key: 13, value: 1.3 },
    ]);
    const gpu_type = ref('');
    const gpu_num = ref(1);
    const mem_num = ref('');
    const local = ref('');

    const gpu_type1 = ref('');
    const gpu_num1 = ref(1);
    const mem_num1 = ref('');
    const local1 = ref('');

    const numList = ref([]);
    const Income = ref(0); // 月收益
    const dbcPrice = ref(0.0019); // dbc价格
    const price1 = ref(0); // 链上收益奖励DBC数量等值USDT数量
    const price2 = ref(0); // 租金收益
    const price3 = ref(0); // 链上收益奖励DBC数量
    const countVideo_num = ref(0); // 显存
    const countGpu_num = ref(1); // 显卡数量
    const countMem_num = ref(0); // 内存
    const countLarge_num = ref(1); // 大模型系数
    const countCuda_core = ref(0); // cuda数量
    const countLocal_num = ref(0); // 地域系数
    const totalCalcPoints = ref(0); // 总算力值
    const machineCalcPoints = ref(0); // 整机算力值
    const machinePoints = ref(0); // 整机算力值

    const countVideo_num1 = ref(0); // 显存
    const countGpu_num1 = ref(0); // 显卡数量
    const countMem_num1 = ref(0); // 内存
    const countLarge_num1 = ref(1); // 大模型系数
    const countCuda_core1 = ref(0); // cuda数量
    const countLocal_num1 = ref(0); // 地域系数
    const SelectGPU = (val) => {
      const arr = val.split('_');
      countCuda_core.value = arr[0];
      countVideo_num.value = arr[1];
      countLarge_num.value = arr[2];
      MonthlyIncome();
    };
    const SelectGpuNum = (val) => {
      countGpu_num.value = val;
      options2.value = [];
      mem_num.value = '';
      for (let i = 0; i < numList.value.length; i++) {
        let mem_value = val * numList.value[i];
        options2.value.push({ name: mem_value, value: mem_value });
      }
      mem_num.value = val * numList.value[0];
      countMem_num.value = val * numList.value[0];
      MonthlyIncome();
    };
    const SelectMem = (val) => {
      countMem_num.value = val;
      console.log(countMem_num.value, 'countMem_num.value');
      MonthlyIncome();
    };
    const SelectLocal = (val) => {
      const arr = val.split('_');
      countLocal_num.value = arr[0];
      MonthlyIncome();
    };

    const SelectGPU1 = (val) => {
      const arr = val.split('_');
      countCuda_core1.value = arr[0];
      countVideo_num1.value = arr[1];
      countLarge_num1.value = arr[2];
      machineCalc();
    };
    const SelectGpuNum1 = (val) => {
      countGpu_num1.value = val;
      options2_1.value = [];
      mem_num1.value = '';
      for (let i = 0; i < numList.value.length; i++) {
        let mem_value = val * numList.value[i];
        options2_1.value.push({ name: mem_value, value: mem_value });
      }
      mem_num1.value = val * numList.value[0];
      countMem_num1.value = val * numList.value[0];
      machineCalc();
    };
    const SelectMem1 = (val) => {
      countMem_num1.value = val;
      machineCalc();
    };
    const SelectLocal1 = (val) => {
      const arr = val.split('_');
      countLocal_num1.value = arr[0];
      machineCalc();
    };
    const machineCalc = () => {
      if (
        countCuda_core1.value &&
        countVideo_num1.value &&
        countGpu_num1.value &&
        countMem_num1.value &&
        countLarge_num1.value &&
        countLocal_num1.value
      ) {
        machinePoints.value =
          countPoint(
            countGpu_num1.value,
            countMem_num1.value,
            countCuda_core1.value,
            countVideo_num1.value,
            countLocal_num1.value
          ) * countLarge_num1.value;
      }
    };
    const countPoint = (Gpu_Num, Mem, Cuda, M_value, coe) => {
      var num =
        Math.round((Gpu_Num * 25 + Mem / 3.5 + Math.sqrt(Cuda) * Math.sqrt(M_value / 10) * Gpu_Num) * coe * 100) / 100;
      return num;
    };
    const MonthlyIncome = () => {
      console.log(
        countCuda_core.value,
        countVideo_num.value,
        dbcPrice.value,
        countGpu_num.value,
        countMem_num.value,
        countLarge_num.value
      );
      console.log(countLocal_num.value, totalCalcPoints.value);
      if (
        countCuda_core.value &&
        countVideo_num.value &&
        dbcPrice.value &&
        countGpu_num.value &&
        countMem_num.value &&
        countLarge_num.value &&
        countLocal_num.value &&
        totalCalcPoints.value
      ) {
        machineCalcPoints.value = countPoint(
          countGpu_num.value,
          countMem_num.value,
          countCuda_core.value,
          countVideo_num.value,
          countLocal_num.value
        );

        price1.value =
          Math.round(
            (machineCalcPoints.value / totalCalcPoints.value) *
              547945 *
              dbcPrice.value *
              1.3 *
              countLarge_num.value *
              100
          ) / 100;
        price2.value = Math.round(machineCalcPoints.value * 0.01693 * countLarge_num.value * 100 * 0.3) / 100;
        price3.value =
          Math.round((machineCalcPoints.value / totalCalcPoints.value) * 547945 * 1.3 * countLarge_num.value * 100) /
          100;
        Income.value =
          Math.round(
            ((machineCalcPoints.value / totalCalcPoints.value) * 547945 * dbcPrice.value * 1.3 -
              machineCalcPoints.value * 0.01693 * 0.3) *
              countLarge_num.value *
              100
          ) / 100;
      }
    };
    const getPrice = async () => {
      const priceData = await dbcPriceOcw();
      if (priceData.status == 1) {
        dbcPrice.value = priceData.content.dbc_price;
      }
      const rewardInfo = await getRewardInfo();
      totalCalcPoints.value = rewardInfo.totalCalcPoints / 100;
    };

    // 计算DLC每天DLC收益
    const dlc_price = ref(0);
    const gpu_type2 = ref('');
    const mem_num2 = ref('');
    const nft_num = ref('');
    const local2 = ref('');
    const stak_dlc_num = ref('');
    const race_stage = ref('');
    const join_gpu_num = ref('');
    const mem_num_list = ref([]);
    const nft_num_list = ref([
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 },
      { label: 6, value: 6 },
      { label: 7, value: 7 },
      { label: 8, value: 8 },
      { label: 9, value: 9 },
      { label: 10, value: 10 },
      { label: 11, value: 11 },
      { label: 12, value: 12 },
      { label: 13, value: 13 },
      { label: 14, value: 14 },
      { label: 15, value: 15 },
      { label: 16, value: 16 },
      { label: 17, value: 17 },
      { label: 18, value: 18 },
      { label: 19, value: 19 },
      { label: 20, value: 20 },
    ]);
    const stak_dlc_list = ref([
      { label: '0', value: 1 },
      { label: '10,000', value: 10000 },
      { label: '50,000', value: 20000 },
      { label: '100,000', value: 100000 },
      { label: '200,000', value: 200000 },
      { label: '500,000', value: 500000 },
      { label: '1,000,000', value: 1000000 },
      { label: '5,000,000', value: 5000000 },
      { label: '10,000,000', value: 10000000 },
    ]);
    const race_stage_list = ref([
      { label: t('long_rule.cont5.text4_6_1'), value: 6000000 },
      { label: t('long_rule.cont5.text4_6_2'), value: 8000000 },
      { label: t('long_rule.cont5.text4_6_3'), value: 19330000 },
    ]);

    const join_gpu_list = ref([
      { label: 500, value: 500 },
      { label: 600, value: 600 },
      { label: 700, value: 700 },
      { label: 800, value: 800 },
      { label: 900, value: 900 },
      { label: 1000, value: 1000 },
      { label: 1500, value: 1500 },
      { label: 2000, value: 2000 },
      { label: 3000, value: 3000 },
      { label: 4000, value: 4000 },
      { label: 5000, value: 5000 },
    ]);
    const countCuda_core2 = ref(0); // cuda数量
    const selectlocal_num2 = ref(0); // 大模型系数
    const countVideo_num2 = ref(0); // 显存
    const SelectGPU2 = (val) => {
      const arr = val.split('_');
      countCuda_core2.value = arr[0];
      countVideo_num2.value = arr[1];
      DayDLCIncome();
    };
    const SelectMem2 = (val) => {
      DayDLCIncome();
    };
    const SelectNftnum2 = (val) => {
      DayDLCIncome();
    };
    const SelectLocal2 = (val) => {
      const arr = val.split('_');
      selectlocal_num2.value = arr[0];
      DayDLCIncome();
    };
    const SelectStakDLC2 = (val) => {
      DayDLCIncome();
    };
    const SelectRace2 = (val) => {
      DayDLCIncome();
    };
    const SelectJoinGPU2 = (val) => {
      DayDLCIncome();
    };
    const dlc_earning = ref(0);
    const dlc_usdt_earning = ref(0);
    const DayDLCIncome = () => {
      if (
        gpu_type2.value &&
        mem_num2.value &&
        nft_num.value &&
        local2.value &&
        stak_dlc_num.value &&
        race_stage.value &&
        join_gpu_num.value
      ) {
        // 单个GPU的算力值
        const signle_gpu_num = countPoint(
          1,
          mem_num2.value,
          countCuda_core2.value,
          countVideo_num2.value,
          selectlocal_num2.value
        );
        console.log(signle_gpu_num, 'signle_gpu_num');
        // // 计算基础奖励

        // const top_num = signle_gpu_num * 86400 * nft_num.value
        // // 底部求和公式 // 4060 1卡 32G 中国 算力 83.72
        // const bottom_num = 83.72 * 86400 * 10 * join_gpu_num.value
        // const basic_reward = (top_num / bottom_num) * race_stage.value
        // // 计算非线性奖励

        // // 计算 max(0, P_i - P_0)
        // const maxValue = Math.max(0, stak_dlc_num.value - 10000);
        // // 计算分数 max(0, P_i - P_0) / P_0
        // const fraction = maxValue / 10000;
        // // 计算 ln(1 + fraction)
        // const result = Math.log(1 + fraction);
        // // 非线性奖励 α 为 0.1
        // const log_reward = 0.1 * result
        // console.log(basic_reward, log_reward, 'basic_reward');

        // 计算奖励
        // 非线性ln
        const result1 = Math.log(Math.max(10000, stak_dlc_num.value == 1 ? 10000 : stak_dlc_num.value));
        const result = Math.log(Math.max(10000, 100000));
        const top_num = signle_gpu_num * 86400 * nft_num.value * result1;
        const bottom_num = 83.72 * 86400 * 10 * join_gpu_num.value * result;
        dlc_earning.value = ((top_num / bottom_num) * race_stage.value).toFixed(4);
        dlc_usdt_earning.value = ((top_num / bottom_num) * race_stage.value * dlc_price.value).toFixed(2);
      }
    };

    onMounted(async () => {
      await getPrice();
      await nextTick();
      for (let i = 1; i < 33; i++) {
        numList.value.push(16 * i);
        mem_num_list.value.push({ name: 16 * i, value: 16 * i });
        options2_1.value.push({ name: 16 * i, value: 16 * i });
        options2.value.push({ name: 16 * i, value: 16 * i });
      }
    });
    onBeforeUnmount(() => {
      if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
      }
    });
    watch(
      () => locale.value,
      () => {
        (options3.value = [
          { name: t('country.country1'), key: 1, value: 1 },
          { name: t('country.country2'), key: 2, value: 1.2 },
          { name: t('country.country3'), key: 3, value: 1.3 },
          { name: t('country.country4'), key: 4, value: 1.5 },
          { name: t('country.country5'), key: 5, value: 1.6 },
          { name: t('country.country6'), key: 6, value: 1.6 },
          { name: t('country.country7'), key: 7, value: 1.7 },
          { name: t('country.country8'), key: 8, value: 1.3 },
          { name: t('country.country9'), key: 9, value: 1.3 },
          { name: t('country.country10'), key: 10, value: 1.5 },
          { name: t('country.country11'), key: 11, value: 1.5 },
          { name: t('country.country12'), key: 12, value: 1.5 },
          { name: t('country.country13'), key: 13, value: 1.3 },
        ]),
          (race_stage_list.value = [
            { label: t('long_rule.cont5.text4_6_1'), value: 6000000 },
            { label: t('long_rule.cont5.text4_6_2'), value: 8000000 },
            { label: t('long_rule.cont5.text4_6_3'), value: 19330000 },
          ]);
      }
    );
    return {
      lan,
      gpu_type,
      gpu_num,
      mem_num,
      local,
      gpu_type1,
      gpu_num1,
      mem_num1,
      local1,
      Income,
      dbcPrice,
      price1,
      price2,
      price3,
      options,
      options1,
      options2,
      options2_1,
      options3,
      long_num,
      machinePoints,
      SelectGPU,
      SelectGpuNum,
      SelectMem,
      SelectLocal,
      SelectGPU1,
      SelectGpuNum1,
      SelectMem1,
      SelectLocal1,
      dlcPrice,
      // DLC收益字段
      gpu_type2,
      mem_num2,
      nft_num,
      local2,
      stak_dlc_num,
      race_stage,
      join_gpu_num,
      nft_num_list,
      stak_dlc_list,
      race_stage_list,
      join_gpu_list,
      mem_num_list,
      dlc_earning,
      dlc_usdt_earning,
      SelectGPU2,
      SelectMem2,
      SelectNftnum2,
      SelectLocal2,
      SelectStakDLC2,
      SelectRace2,
      SelectJoinGPU2,
    };
  },
});
</script>

<style lang="scss" scoped>
.longTerm {
  position: relative;
  z-index: 2;
  width: 100%;
  min-width: 600px;
  font-style: normal;
  overflow: hidden;
  .home_bg {
    position: absolute;
    z-index: 2;
    top: -200px;
    right: -630px;
    width: 1517px;
    height: 1517px;
    background: url(../assets/home/bg1.png) no-repeat 100%/100%;
  }
  .page {
    position: relative;
    z-index: 10;
    min-width: 600px;
  }
  .page_cont1 {
    position: relative;
    width: 90%;
    margin: auto;
    max-width: 1200px;
    overflow: hidden;
    text-align: left;
    .title {
      color: #fff;
      line-height: 1;
      font-size: 80px;
      font-weight: 600;
      max-width: 1200px;
      margin-top: 200px;
      font-family: Monda;
      p {
        margin-bottom: 30px;
        :last-child {
          margin-bottom: 0;
        }
      }
    }
    .text {
      font-size: 24px;
      font-weight: 600;
      font-family: Monda;
      margin-bottom: 100px;
      color: rgba(255, 255, 255, 0.5);
    }
    .text1 {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      font-family: Monda;
      margin-bottom: 30px;
    }
  }
  .page_cont2 {
    position: relative;
    z-index: 5;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 50px auto;
    align-items: center;
    justify-content: space-between;
    .title {
      width: 100%;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      font-family: Monda;
      margin-bottom: 20px;
    }
    .text {
      width: 100%;
      font-size: 16px;
      max-width: 1050px;
      font-family: Monda;
      margin-bottom: 70px;
      color: rgba(255, 255, 255, 0.6);
      & a {
        // text-decoration: none;
        color: rgba(255, 255, 255, 0.6);
      }
    }
    .text1 {
      width: 540px;
      color: #fff;
      font-size: 20px;
      line-height: 40px;
      font-family: Monda;
      margin-bottom: 90px;
      white-space: break-spaces;
    }
    .btns {
      flex: 1;
      display: flex;
      margin-bottom: 90px;
      justify-content: space-between;
      .btn {
        cursor: pointer;
        min-width: 260px;
        text-align: left;
        font-family: Monda;
        margin-right: 18px;
        padding: 20px 30px;
        border-radius: 16px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.1);
        &:last-child {
          margin-right: 0;
        }
        .btn_title {
          font-size: 20px;
          font-weight: 600;
          color: #00ff4d;
          margin-bottom: 10px;
        }
        .btn_text {
          color: #fff;
          font-size: 16px;
        }
      }
    }
    .require {
      gap: 5px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 60px;
      justify-content: space-between;
      .req_text1 {
        width: 540px;
        margin-bottom: 30px;
        padding: 20px 30px;
        border-radius: 16px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.1);
      }
      .req_text2 {
        width: 260px;
        margin-bottom: 30px;
        padding: 20px 30px;
        border-radius: 16px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.1);
      }
      .text_top {
        // color: #fff;
        font-size: 20px;
        font-weight: 600;
        color: #00ff4d;
        font-family: Monda;
        margin-bottom: 20px;
      }
      .text_bottom {
        color: #fff;
        font-size: 16px;
        font-family: Monda;
        // color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  .page_cont3 {
    position: relative;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin-bottom: 70px;
    align-items: center;
    justify-content: space-between;
    .page3_bg {
      position: absolute;
      top: -800px;
      right: -35%;
      width: 1430px;
      height: 1516px;
      background: url(../assets/home/page4_bg.png) no-repeat 100%/100%;
    }
    .title {
      width: 100%;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      font-family: Monda;
      margin-bottom: 20px;
    }
    .text {
      width: 100%;
      font-size: 16px;
      font-family: Monda;
      margin-bottom: 50px;
      color: rgba(255, 255, 255, 0.6);
      & a {
        // text-decoration: none;
        color: rgba(255, 255, 255, 0.6);
      }
    }
    .page_cont {
      width: 100%;
      display: flex;
      overflow: hidden;
      border-radius: 8px;
      flex-direction: column;
      .cont_table {
        width: 100%;
        border-radius: 20px;
        box-sizing: border-box;
        .table_cont {
          width: 100%;
          min-width: 800px;
          border-collapse: collapse;
          tr.theader {
            color: #000;
            font-size: 20px;
            font-weight: 600;
            font-family: Monda;
            background: #03ff91;
            th {
              border: none;
              line-height: 1;
              padding: 10px 15px;
            }
          }
          th {
            text-align: center;
            padding: 0 15px;
          }
          td {
            font-size: 16px;
            font-family: Monda;
            padding: 10px 15px;
            text-align: center;
            color: rgba(255, 255, 255, 0.6);
            background: rgba(255, 255, 255, 0.1);
            border-top: 3px solid #000;
            border-bottom: 0;
            &.num {
              color: #fff;
              font-weight: 600;
            }
          }
        }
        .width270 {
          width: 270px;
        }
      }
    }
  }
  .page_cont4 {
    position: relative;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin-bottom: 46px;
    align-items: center;
    justify-content: space-between;
    .title {
      width: 100%;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      font-family: Monda;
      margin-bottom: 20px;
    }
    .page_cont {
      width: 100%;
      display: flex;
      overflow: hidden;
      border-radius: 8px;
      margin-bottom: 70px;
      flex-direction: column;
      .cont_table {
        width: 100%;
        border-radius: 20px;
        box-sizing: border-box;
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
              border: none;
              padding: 10px 15px;
            }
          }
          th {
            text-align: center;
            padding: 0 15px;
          }
          td {
            font-size: 16px;
            font-family: Monda;
            padding: 10px 15px;
            text-align: center;
            color: rgba(255, 255, 255, 0.6);
            background: rgba(255, 255, 255, 0.1);
            border-top: 3px solid #000;
            border-bottom: 0;
            &.num {
              color: #fff;
              font-weight: 600;
            }
          }
        }
        .width270 {
          width: 270px;
        }
      }
    }
    .text1 {
      width: 100%;
      color: #fff;
      font-size: 24px;
      font-family: Monda;
      margin-bottom: 24px;
    }
    .text2 {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .text_select {
        display: flex;
        align-items: center;
      }
      .text2_tx {
        color: #fff;
        font-size: 20px;
        font-family: Monda;
        margin-bottom: 12px;
        width: max-content;
      }
      .select_width210 {
        width: 120px;
        margin: 0 20px 12px 10px;
      }

      .select_width {
        margin: 0 20px 12px 10px;
      }
    }
  }
  .page_cont5 {
    position: relative;
    z-index: 10;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    align-items: center;
    justify-content: space-between;
    .title {
      width: 100%;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      font-family: Monda;
      margin-bottom: 20px;
    }
    .text {
      width: 100%;
      font-size: 16px;
      line-height: 30px;
      font-family: Monda;
      margin-bottom: 20px;
      color: rgba(255, 255, 255, 0.6);
    }
    .title1 {
      width: 100%;
      color: #fff;
      margin: 20px 0;
      font-size: 20px;
      font-family: Monda;
    }
    .blockcon {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      font-family: Monda;
      margin: 90px 0 35px;
      justify-content: space-between;
      .block {
        // width: 49%;
        display: flex;
        padding: 40px;
        border-radius: 26px;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: space-between;
      }
      .block1 {
        background: #03ff91;
      }
      .block2 {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.15);
        .top_title {
          color: #fff;
        }
        .top_text {
          color: rgba(255, 255, 255, 0.6);
        }
      }
      .top_title {
        width: 100%;
        color: #000;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .top_text {
        width: 100%;
        color: #000;
        font-size: 16px;
        word-break: break-all;
        color: rgba(0, 0, 0, 0.6);
        a {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .text2 {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .text_select {
        display: flex;
        align-items: center;
      }
      .text2_tx {
        color: #fff;
        font-size: 20px;
        font-family: Monda;
        margin-bottom: 12px;
        min-width: fit-content;
      }
      .select_width210 {
        width: 120px;
        margin: 0 20px 12px 10px;
      }

      .select_width {
        margin: 0 20px 12px 10px;
      }
    }
    .require {
      gap: 5px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 100px 0 60px;
      justify-content: space-between;
      .req_text1 {
        width: 540px;
        margin-bottom: 30px;
      }
      .req_text2 {
        width: 260px;
        margin-bottom: 30px;
      }
      .req_text3 {
        width: 360px;
        margin-bottom: 30px;
      }
      .text_top {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        font-family: Monda;
        margin-bottom: 20px;
      }
      .text_bottom {
        font-size: 16px;
        font-family: Monda;
        color: rgba(255, 255, 255, 0.6);
      }
    }
    .formula {
      display: flex;
      align-items: center;
      text-align: center;
      margin-top: 20px;
      font-size: 20px;
      font-family: 'MJXTEX-I';
    }
    .fraction {
      display: inline-block;
      vertical-align: middle;
      text-align: center;
    }
    .fraction .numerator {
      // display: flex;
      // align-items: center;
      // justify-content: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
      padding: 5px;
    }
    .fraction .denominator {
      padding-top: 2px;
    }
    .product,
    .sum {
      display: inline-block;
      vertical-align: middle;
      margin: 0 5px;
    }

    .formula1 {
      display: flex;
      align-items: center;
      text-align: center;
      margin-top: 20px;
      font-size: 20px;
      font-family: 'MJXTEX-I';
    }
    .formula1 .fraction {
      display: inline-block;
      vertical-align: middle;
      text-align: center;
    }
    .formula1 .fraction .numerator {
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
      padding: 5px;
    }
    .formula1 .fraction .denominator {
      padding-top: 2px;
    }
    .formula1 .max-function {
      display: inline-block;
      vertical-align: middle;
    }
  }
}

@media screen and (max-width: 1300px) {
  .longTerm {
  }
}

@media screen and (max-width: 900px) {
  .longTerm {
    .page_cont3 {
      .page_cont {
        .cont_table {
          .table_cont {
            tr.theader {
              font-size: 12px;
            }
          }
        }
      }
    }
    .page_cont5 {
      .require {
        .req_text3 {
          width: 100%;
        }
      }
    }
  }
}

:deep(.el-select__wrapper) {
  background: transparent !important;
  min-width: 120px !important;
}
</style>

<style>
.el-input__wrapper {
  background: transparent !important;
}
.el-input__inner {
  color: #38eed6 !important;
}
</style>
