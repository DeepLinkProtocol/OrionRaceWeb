<template>
  <div class="footer" :class="{ lan_En: lan != 'zh', w1200: isphone && href == '/Protocol' }">
    <div class="content hide">
      <img class="logo" src="../assets/logo.png" alt="" />
      <div class="left">
        <div class="community">
          <p class="title">{{ $t('footer.community') }}</p>
          <div class="follow">
            <div class="list" v-for="item in hrefObj" @click="showModel(item.link)">
              <div class="li_img"><img :src="item.img" alt="" /></div>
              <div class="li_country" v-if="item.img_cry"><img :src="item.img_cry" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content show">
      <img class="logo" src="../assets/logo.png" alt="" />
      <div class="community">
        <p class="title">{{ $t('footer.community') }}</p>
        <div class="follow">
          <div class="list" v-for="item in hrefObj" @click="showModel(item.link)">
            <div class="li_img"><img :src="item.img" alt="" /></div>
            <div class="li_country" v-if="item.img_cry"><img :src="item.img_cry" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import twitter from '../assets/ri_twitter.png';
import telegram from '../assets/ri_telegram.png';
import medium from '../assets/ri_medium.png';
import youtube from '../assets/ri_youtube.png';
import facebook from '../assets/ri_facebook.png';
import instagram from '../assets/ri_instagram.png';
import tiktok from '../assets/ri_tiktok.png';
import discord from '../assets/ri_discord.png';
import ja_cry from '../assets/Japan.png';
import ar_cry from '../assets/ar.png';
import ve_cry from '../assets/ve.png';
import in_cry from '../assets/in.png';
import kr_cry from '../assets/kr.png';
import zh_cry from '../assets/zh.png';
export default defineComponent({
  name: 'header',
  setup() {
    const router = useRouter();
    // const lan = ref(localStorage.getItem('lan') || 'en')
    const store = useStore();
    let lan = computed(() => store.state.lan);
    const href = computed(() => store.state.path);
    const text = ref('简体中文');
    const { locale } = useI18n();
    const dialogTableVisible = ref(false);
    const ishover = ref(false);
    const dialogTitle = ref('');
    const lanObj = {
      en: 'ENGLISH',
      ko: '한국어',
      zh: '简体中文',
    };
    const hrefObj = ref([
      {
        img: discord,
        link: 'https://discord.com/invite/hCSAF3QC8U',
      },
      {
        img: tiktok,
        link: 'https://www.tiktok.com/@deeplinkglobal',
      },
      {
        img: instagram,
        link: 'https://instagram.com/deeplinkglobal',
      },
      {
        img: facebook,
        link: 'https://www.facebook.com/deeplinkcloud',
      },
      {
        img: youtube,
        link: 'https://youtube.com/@deeplinkglobal',
      },
      {
        img: medium,
        link: 'https://medium.com/@DeepLinkGlobal',
      },
      // {
      //   img: telegram,
      //   img_cry: in_cry,
      //   link: 'https://t.me/DeepLinkIndia',
      // },
      {
        img: telegram,
        img_cry: kr_cry,
        link: 'https://t.me/deeplinkkorea',
      },
      // {
      //   img: telegram,
      //   img_cry: ve_cry,
      //   link: 'https://t.me/DeepLinkVietnamese',
      // },
      // {
      //   img: telegram,
      //   img_cry: ar_cry,
      //   link: 'https://t.me/DeepLinkAfrica',
      // },
      {
        img: telegram,
        img_cry: ja_cry,
        link: 'https://t.me/DeepLinkJapan',
      },
      {
        img: telegram,
        img_cry: zh_cry,
        link: 'https://t.me/DeepLinkChina',
      },
      // {
      //   img: telegram,
      //   link: 'https://t.me/deeplinkglobal',
      // },
      {
        img: twitter,
        img_cry: ja_cry,
        link: 'https://x.com/DeepLinkJapan',
      },
      {
        img: twitter,
        link: 'https://twitter.com/DeepLinkGlobal',
      },
    ]);
    const showObj = ref({});
    const handleCommand = (command) => {
      lan.value = command;
      text.value = lanObj[command];
      locale.value = lan.value;
      localStorage.setItem('lan', command);
    };
    const showModel = (command) => {
      window.open(command, '_blank');
    };
    const change = (el) => {
      ishover.value = el;
    };
    const linkHref = (el) => {
      router.push({ path: el });
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
      isphone.value = isPc();
    });
    return {
      lan,
      text,
      href,
      hrefObj,
      dialogTableVisible,
      dialogTitle,
      showObj,
      ishover,
      isphone,
      handleCommand,
      showModel,
      change,
      linkHref,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  width: 100%;
  margin: auto;
  // height: 300px;
  max-width: 1200px;
  font-style: normal;
  background: #000;
  .content {
    width: 100%;
    // height: 300px;
    margin: auto;
    padding: 30px 0;
    box-sizing: border-box;
    &.hide {
      display: block;
    }
    &.show {
      display: none;
    }
    .logo {
      width: 265px;
      height: 26px;
      margin-bottom: 30px;
    }
    .left {
      display: flex;
      .link {
        width: 350px;
        a {
          font-size: 20px;
          color: #03ff91;
          padding: 15px 40px;
          border-radius: 14px;
          display: inline-block;
          text-decoration: none;
          box-sizing: border-box;
          backdrop-filter: blur(6px);
          background: hsla(0, 0%, 100%, 0.1);
        }
      }
      .community {
        flex: 1;
        .follow {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          // flex-direction: row-reverse;
          .list {
            padding: 10px;
            cursor: pointer;
            border-radius: 8px;
            margin: 25px 10px 0;
            display: inline-flex;
            align-items: center;
            backdrop-filter: blur(6px);
            background: hsla(0, 0%, 100%, 0.1);

            .li_img {
              width: 40px;
              height: 40px;
              img {
                width: 40px;
              }
            }
            .li_country {
              width: 30px;
              margin-left: 10px;
              img {
                width: 30px;
              }
            }
          }
        }
      }
      .title {
        font-size: 36px;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 10px;
        color: rgba(255, 255, 255, 1);
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

@media screen and (max-width: 1200px) {
  .footer {
    min-width: 600px;
    height: initial;
    padding-bottom: 30px;
    .content {
      height: initial;
      text-align: center;
      padding: 30px 0 0;
      &.hide {
        display: none;
      }
      &.show {
        display: block;
      }
      .logo {
        margin-bottom: 10px;
      }

      .title {
        font-weight: 500;
        font-size: 30px;
        line-height: 34px;
        text-align: center;
        margin: 20px 0;
        color: rgba(255, 255, 255, 1);
      }
      .community {
        width: 90%;
        margin: auto;
        .title {
          text-align: center;
        }
        .follow {
          display: flex;
          justify-content: center;
          flex-wrap: wrap-reverse;
          flex-direction: row-reverse;
          .list {
            padding: 10px;
            cursor: pointer;
            margin: 15px 10px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            backdrop-filter: blur(6px);
            background: hsla(0, 0%, 100%, 0.1);
            .li_img {
              width: 40px;
              height: 40px;
              img {
                width: 40px;
              }
            }
            .li_country {
              width: 30px;
              margin-left: 10px;
              img {
                width: 30px;
              }
            }
          }
        }
      }
      .link {
        width: 100%;
        a {
          font-size: 20px;
          color: #03ff91;
          padding: 15px 40px;
          border-radius: 14px;
          display: inline-block;
          text-decoration: none;
          box-sizing: border-box;
          backdrop-filter: blur(6px);
          background: hsla(0, 0%, 100%, 0.1);
        }
      }
    }
  }
  .lan_En.footer {
    .content {
      padding: 30px 0 0;
    }
  }
}
</style>
