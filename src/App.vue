<template>
  <Header></Header>
  <BgIcon></BgIcon>
  <router-view/>
  <Footer></Footer>
  <!-- <iframe v-show="false" src="https://fanyi.baidu.com/" width="100px" height="100px" frameborder="0"></iframe> -->
</template>

<script>
  // @ is an alias to /src
  import { defineComponent, ref } from "vue";
  import Header from "@/components/header.vue";
  import Footer from "@/components/footer.vue";
  import BgIcon from "@/components/bgicon.vue";
  export default defineComponent({
    name: 'App',
    components: {
      Header,
      Footer,
      BgIcon
    }
  })
</script>

<style lang="scss">

@font-face {
  font-family: "Outfit";
  src: local("Hellix-Regular"), url('assets/fonts/outfit/Outfit-Regular.ttf') format('truetype');
  font-display: fallback;
}

@font-face {
  font-family: "Monda";
  src: local("Hellix-Regular"), url('assets/fonts/monda/Monda-Regular.ttf') format('truetype');
  font-display: fallback;
}

#app {
  position: relative;
  background: #000;
  min-width: 600px;
  // overflow: hidden;
}
body, p, div, span, li {
  margin: 0;
}


.demo-dropdown {
  border: none !important;
  border-radius: 12px !important;
  background: #000 !important;
  .el-dropdown-menu {
    background: #000 !important;
  }
  .el-dropdown-menu__item {
    color: rgba(255, 255, 255, 0.6);
    padding: 10px 20px;
    .flag {
      width: 20px;
      margin-left: 4px;
    }
  }
  .el-dropdown-menu__item:not(.is-disabled):focus {
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
  }
  .el-dropdown-menu__item:not(.is-disabled):hover {
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
  }
}
.el-popper__arrow {
  display: none;
}
.el-dialog__body {
  padding-top: 0 !important;
}

.animation_hide {
  visibility: hidden;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0,100%,0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0,-100%,0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%,0,0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%,0,0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes amplify {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fadeInUp {
  animation-name: fadeInUp;
  animation-duration: 1.5s;
}
.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 1.5s;
}
.fadeInLeft {
  animation-name: fadeInLeft;
  animation-duration: 1.5s;
}
.fadeInRight {
  animation-name: fadeInRight;
  animation-duration: 1.5s;
}
.amplify {
  animation-name: amplify;
  animation-duration: 2s;
}
.delay100 {
  animation-delay: 100ms; 
}
.delay200 {
  animation-delay: 200ms; 
}
.delay300 {
  animation-delay: 300ms; 
}
.delay400 {
  animation-delay: 400ms; 
}
.delay500 {
  animation-delay: 500ms; 
}
.delay600 {
  animation-delay: 600ms; 
}
.delay700 {
  animation-delay: 700ms; 
}
.delay800 {
  animation-delay: 800ms; 
}
.delay900 {
  animation-delay: 900ms; 
}

</style>
