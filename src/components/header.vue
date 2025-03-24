<template>
  <div class="header">
    <div class="meau" :class="{ w1200: isphone && href == '/Protocol' }">
      <div class="content hide">
        <img class="logo" src="../assets/logo.png" alt="deeplink logo" />
        <div class="nav">
          <div class="nav1" :class="{ active: href == '/' }" @click="linkHref('/')">{{ $t('meau.nav1') }}</div>
          <div class="nav1" :class="{ active: href == '/longterm' }" @click="linkHref('/longterm')">
            {{ $t('meau.nav2') }}
          </div>
          <div class="nav1" :class="{ active: href == '/shortterm' }" @click="linkHref('/shortterm')">
            {{ $t('meau.nav3') }}
          </div>
          <div class="nav1" :class="{ active: href == '/device' }" @click="linkHref('/device')">
            {{ $t('meau.nav4') }}
          </div>
        </div>
        <div class="nav2">
          <img class="icon1" src="../assets/icon.png" alt="" />
          <el-dropdown popper-class="demo-dropdown" @command="handleCommand">
            <span class="el-dropdown-link">{{ text }}</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="en">ENGLISH</el-dropdown-item>
                <el-dropdown-item command="zh">简体中文</el-dropdown-item>
                <el-dropdown-item command="ko">한국어</el-dropdown-item>
                <el-dropdown-item command="ja">日本語</el-dropdown-item>
                <el-dropdown-item command="ru">Русский</el-dropdown-item>
                <el-dropdown-item command="vn">Việt nam</el-dropdown-item>
                <!-- <el-dropdown-item command="es">Español</el-dropdown-item> -->
                <el-dropdown-item command="fr">Français</el-dropdown-item>
                <el-dropdown-item command="de">Deutsch</el-dropdown-item>
                <el-dropdown-item command="tr">Türkçe</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <img class="icon2" src="../assets/arrow.png" alt="" />
        </div>
      </div>
      <div class="content show">
        <img class="logo" src="../assets/mobile/logo.png" alt="deeplink logo" />
        <div class="nav1 active" @click="linkHref1()">
          {{ meauText }}<img class="icon2" src="../assets/arrow.png" alt="" />
        </div>
        <div class="nav2" @click="drawer1 = true">
          <img class="icon1" src="../assets/icon.png" alt="" />{{ text
          }}<img class="icon2" src="../assets/arrow.png" alt="" />
        </div>
      </div>
      <el-drawer v-model="drawer" custom-class="drawerInfo" :lock-scroll="true" :with-header="false" direction="btt">
        <template #default>
          <div class="meauInfo">
            <div class="meaulist" :class="{ active: href == '/' }" @click="linkHref('/')">{{ $t('meau.nav1') }}</div>
            <div class="meaulist" :class="{ active: href == '/longterm' }" @click="linkHref('/longterm')">
              {{ $t('meau.nav2') }}
            </div>
            <div class="meaulist" :class="{ active: href == '/shortterm' }" @click="linkHref('/shortterm')">
              {{ $t('meau.nav3') }}
            </div>
            <div class="meaulist" :class="{ active: href == '/device' }" @click="linkHref('/device')">
              {{ $t('meau.nav4') }}
            </div>
          </div>
        </template>
      </el-drawer>
      <el-drawer v-model="drawer1" custom-class="drawerInfo" :lock-scroll="true" :with-header="false" direction="btt">
        <template #default>
          <div class="meauInfo">
            <div class="meaulist" @click="handleCommand('en')">ENGLISH</div>
            <div class="meaulist" @click="handleCommand('zh')">简体中文</div>
            <div class="meaulist" @click="handleCommand('ko')">한국어</div>
            <div class="meaulist" @click="handleCommand('ja')">日本語</div>
            <div class="meaulist" @click="handleCommand('ru')">Русский</div>
            <div class="meaulist" @click="handleCommand('vn')">Việt nam</div>

            <!-- <div class="meaulist" @click="handleCommand('es')">Español</div> -->
            <div class="meaulist" @click="handleCommand('fr')">Français</div>
            <div class="meaulist" @click="handleCommand('de')">Deutsch</div>
            <div class="meaulist" @click="handleCommand('tr')">Türkçe</div>
          </div>
        </template>
      </el-drawer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref, onMounted, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Header',
  setup() {
    const { t, locale } = useI18n();
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    let lan = computed(() => store.state.lan);
    const text = ref('ENGLISH');
    const dialogTableVisible = ref(false);
    const ishover = ref(false);
    const dialogTitle = ref('');
    const lanObj = {
      en: 'ENGLISH',
      ko: '한국어',
      zh: '简体中文',
      ja: '日本語',
      ru: 'Русский',
      vn: 'Việt nam',
      es: 'Español',
      fr: 'Français',
      de: 'Deutsch',
      tr: 'Türkçe',
    };
    const showObj = ref({});
    const href = ref('/');
    const meauText = ref('');
    const handleCommand = (command) => {
      text.value = lanObj[command];
      locale.value = command;
      localStorage.setItem('lan', command);
      store.commit('changeLan', command);
      drawer1.value = false;
      if (href.value == '/') {
        meauText.value = t('meau.nav1');
      } else if (href.value == '/longterm') {
        meauText.value = t('meau.nav2');
      } else if (href.value == '/shortterm') {
        meauText.value = t('meau.nav3');
      } else if (href.value == '/device') {
        meauText.value = t('meau.nav4');
      }
    };
    const change = (el) => {
      ishover.value = el;
    };
    const linkHref = (el) => {
      router.push({ path: el });
      href.value = el;
      localStorage.setItem('path', el);
      store.commit('changePath', el);
      console.log(el, 'el');
      if (el == '/') {
        meauText.value = t('meau.nav1');
      } else if (el == '/longterm') {
        meauText.value = t('meau.nav2');
      } else if (el == '/shortterm') {
        meauText.value = t('meau.nav3');
      } else if (el == '/device') {
        meauText.value = t('meau.nav4');
      }
      drawer.value = false;
    };
    const drawer = ref(false);
    const drawer1 = ref(false);
    const drawer2 = ref(false);
    const linkHref1 = () => {
      drawer.value = true;
    };
    const openDraw2 = () => {
      drawer.value = false;
      drawer2.value = true;
    };
    const isPc = () => {
      if (
        window.navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        return true; // 移动端
      } else {
        return false; // PC端
      }
    };
    const isphone = ref(false);
    onMounted(() => {
      text.value = lanObj[lan.value];
      href.value = store.state.path;
      if (href.value == '/') {
        meauText.value = t('meau.nav1');
      } else if (href.value == '/longterm') {
        meauText.value = t('meau.nav2');
      } else if (href.value == '/shortterm') {
        meauText.value = t('meau.nav3');
      } else if (href.value == '/device') {
        meauText.value = t('meau.nav4');
      }
      isphone.value = isPc();
    });
    watch(route, (newValue) => {
      if (href.value == '/') {
        meauText.value = t('meau.nav1');
      } else if (href.value == '/longterm') {
        meauText.value = t('meau.nav2');
      } else if (href.value == '/shortterm') {
        meauText.value = t('meau.nav3');
      } else if (href.value == '/device') {
        meauText.value = t('meau.nav4');
      }
      href.value = newValue.path;
    });
    watch(lan, (newValue) => {});
    return {
      lan,
      text,
      dialogTableVisible,
      dialogTitle,
      showObj,
      ishover,
      href,
      isphone,
      handleCommand,
      change,
      linkHref,
      drawer,
      linkHref1,
      meauText,
      drawer1,
      drawer2,
      openDraw2,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: relative;
  z-index: 5;
  width: 100%;
  font-style: normal;
  font-family: Monda;
  .meau {
    width: 100%;
    height: 106px;
    background: rgba(255, 255, 255, 0.05);
    // background: #363F5E;
    .content {
      max-width: 1400px;
      width: 100%;
      height: 106px;
      margin: auto;
      display: flex;
      align-items: center;
      font-size: 16px;
      padding: 0 50px;
      line-height: 24px;
      font-style: normal;
      box-sizing: border-box;
      justify-content: space-between;
      color: rgba(255, 255, 255, 0.5);
      &.hide {
        display: flex;
      }
      &.show {
        display: none;
      }
      .logo {
        width: 200px;
        cursor: pointer;
      }
      .nav {
        display: flex;
        align-items: center;
        .nav1 {
          cursor: pointer;
          display: block;
          margin: 0 20px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.6);
          &.active {
            color: #ffffff;
            // font-weight: 600;
          }
          &:hover {
            color: #ffffff;
            // font-weight: 600;
          }
          .el-dropdown-link {
            font-size: 16px;
            &.active {
              color: #ffffff;
            }
            // color: rgba(255, 255, 255, 0.6);
          }
        }
        .nav_new {
          cursor: pointer;
          display: flex;
          font-weight: 500;
          margin-right: 50px;
          align-items: center;
          &:hover {
            color: #ffffff;
          }
          .el-dropdown {
            font-weight: 500;
            margin: 0 5px;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.6);
            &:hover {
              font-weight: 600;
              color: #ffffff;
            }
            &.active {
              color: #ffffff;
              font-weight: 600;
            }
          }
          .icon1 {
            width: 20px;
            height: 20px;
          }
          .icon2 {
            width: 10px;
            height: 6px;
          }
        }
      }
      .nav2 {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #ffffff;
        &:hover {
          color: #ffffff;
        }
        .el-dropdown {
          font-weight: 500;
          color: #ffffff;
          margin: 0 5px;
        }
        .icon1 {
          width: 20px;
          height: 20px;
        }
        .icon2 {
          width: 10px;
          height: 6px;
        }
      }
    }
  }
}

.lan_En.header {
  .meau {
    .content {
      padding: 0 120px;
      font-size: 14px;
      .nav {
        .nav1 {
          margin-right: 20px;
        }
        .nav_new {
          margin-right: 20px;
        }
        .nav2 {
          margin-left: 0;
        }
      }
    }
  }
}

.detailsInfo {
  width: 100%;
  text-align: center;
  .img {
    width: 100%;
    display: flex;
    overflow: hidden;
    max-height: 350px;
    align-items: center;
    img {
      width: 100%;
    }
  }
  p {
    font-size: 14px;
    color: #1f1f1f;
    margin-top: 10px;
    a {
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 1400px) {
  .header {
    .meau {
      .content {
        padding: 0 30px;
      }
    }
  }
  .lan_En.header {
    .meau {
      .content {
        padding: 0 30px;
        font-size: 13px;
        .nav {
          .nav1 {
            margin-right: 15px;
          }
          .nav2 {
            margin-left: 0;
          }
          .nav_new {
            margin-right: 15px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .header {
    min-width: 600px;
    .meau {
      height: 70px;
      .content {
        height: 70px;
        font-size: 20px;
        padding: 0 50px;
        color: rgba(255, 255, 255, 0.8);
        &.hide {
          display: none;
        }
        &.show {
          display: flex;
        }
        .logo {
          width: 60px;
          height: 36px;
        }
        .nav1 {
          cursor: pointer;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          .icon2 {
            margin-left: 5px;
          }
          &.active {
            color: #ffffff;
            font-weight: 600;
          }
          &:hover {
            color: #ffffff;
            font-weight: 600;
          }
          .el-dropdown-link {
            font-size: 16px;
            &.active {
              color: #ffffff;
            }
            // color: rgba(255, 255, 255, 0.6);
          }
        }
        .nav2 {
          cursor: pointer;
          display: flex;
          align-items: center;
          font-weight: 500;
          font-size: 18px;
          color: #ffffff;
          &:hover {
            color: #ffffff;
          }
          .el-dropdown {
            font-weight: 500;
            color: #ffffff;
            margin: 0 5px;
          }
          .icon1 {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
          .icon2 {
            width: 10px;
            height: 6px;
            margin-left: 5px;
          }
        }
      }
    }
  }
  .lan_En.header {
    .meau {
      .content {
        font-size: 20px;
      }
    }
  }
}
</style>

<style lang="scss">
.drawerInfo {
  height: initial !important;
  max-height: 90vh !important;
  border-radius: 20px 20px 0 0;
  .el-drawer__body {
    padding: 0;
  }
}
.meauInfo {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .meaulist {
    width: 100%;
    cursor: pointer;
    padding: 20px 0;
    font-size: 34px;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    color: rgba(54, 63, 94, 0.6);
    &.active {
      font-weight: 600;
      color: #363f5e;
      background: rgba(54, 63, 94, 0.08);
    }
    &:hover {
      font-weight: 600;
      color: #363f5e;
      background: rgba(54, 63, 94, 0.08);
    }
  }
}
</style>
