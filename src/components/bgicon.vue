<template>
  <div class="bgicon">
    <div class="icon1"></div>
    <div class="icon2"></div>
    <div class="icon3 graduallyShow"></div>
    <div class="icon4 graduallyShow1"></div>
    <div class="icon5 line"></div>
    <div class="icon6 rotation"></div>
    <!-- <div class="icon7"></div> -->
  </div>
</template>

<script>
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: 'App',
  })
</script>

<style lang="scss">
.bgicon {
  position: absolute;
  right: 0;
  z-index: 1;
  top: 106px;
  width: 100%;
  height: 799px;
  min-width: 600px;
  overflow: hidden;
  background: url(../assets/home/bg.png) round 100%/100%;
  .icon1 {
    position: absolute;
    z-index: 2;
    top: 50px; 
    left: 53%;
    width: 192px;
    height: 193px;
    background: url(../assets/home/icon1.png) no-repeat 100%/100%;
  }
  .icon2 {
    position: absolute;
    z-index: 2;
    top: 485px;
    right: 5%;
    width: 192px;
    height: 193px;
    background: url(../assets/home/icon2.png) no-repeat 100%/100%;
  }
  .icon3 {
    position: absolute;
    z-index: 2;
    top: 162px;
    left: 54%;
    width: 10px;
    height: 9px;
    background: url(../assets/home/star1.png) no-repeat 100%/100%;
  }
  .icon4 {
    position: absolute;
    z-index: 2;
    top: 162px;
    right: 23%;
    width: 10px;
    height: 9px;
    background: url(../assets/home/star1.png) no-repeat 100%/100%;
  }
  .icon5 {
    position: absolute;
    z-index: 2;
    top: 122px;
    right: 35%;
    width: 10px;
    height: 9px;
    background: url(../assets/home/star1.png) no-repeat 100%/100%;
  }
  .icon6 {
    position: absolute;
    top: 47px;
    right: -220px;
    width: 752px;
    height: 741px;
    opacity: 1;
    border-radius: 100%;
    background-image: linear-gradient(0deg, #000000, transparent), url(../assets/home/star.png);
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .icon7 {
    position: absolute;
    z-index: 2;
    top: -200px;
    right: -500px;
    width: 1517px;
    height: 1517px;
    background: url(../assets/home/bg1.png) no-repeat 100%/100%;
  }
}

@keyframes graduallyShow {
  10% {
    top: 162px;
    left: 54%;
    width: 10px;
    height: 9px;
  }
  30% {
    top: 142px;
    left: 53%;
    width: 44px;
    height: 42px;
  }
  60% {
    top: 142px;
    left: 53%;
    width: 44px;
    height: 42px;
  }
  90% {
    top: 162px;
    left: 54%;
    width: 10px;
    height: 9px;
  }
  100% {
    top: 162px;
    left: 54%;
    width: 10px;
    height: 9px;
  }
}
@keyframes graduallyShow1 {
  10% {
    top: 162px;
    right: 23%;
    width: 10px;
    height: 9px;
  }
  30% {
    top: 142px;
    right: 22%;
    width: 44px;
    height: 42px;
  }
  60% {
    top: 142px;
    right: 22%;
    width: 44px;
    height: 42px;
  }
  90% {
    top: 162px;
    right: 23%;
    width: 10px;
    height: 9px;
  }
  100% {
    top: 162px;
    right: 23%;
    width: 10px;
    height: 9px;
  }
}

@keyframes rotation {
  0% {
    transform:rotate(0deg)
  }
  25% {
    transform:rotate(-80deg)
  }
  75% {
    transform:rotate(80deg)
  }
  100% {
    transform:rotate(0deg)
  }
}

@keyframes line {
  0% {
    top: 122px;
    right: 35%;
    width: 10px;
    height: 9px;
  }
  35% {
    top: 100px;
    right: 8%;
    width: 44px;
    height: 42px;
  }
  65% {
    top: 460px;
    right: 8%;
    width: 44px;
    height: 42px;
  }
  85% {
    top: 122px;
    right: 35%;
    width: 10px;
    height: 9px;
  }
  100% {
    top: 122px;
    right: 35%;
    width: 10px;
    height: 9px;
  }
}

.graduallyShow {
  animation-duration: 8s;
  animation-timeline: auto;
  animation-name: graduallyShow;
  animation-iteration-count: infinite;
}
.graduallyShow1 {
  animation-delay: 4s;
  animation-duration: 8s;
  animation-timeline: auto;
  animation-name: graduallyShow1;
  animation-iteration-count: infinite;
}
.rotation {
  animation-duration: 4s;
  animation-timeline: auto;
  animation-name: rotation;
  animation-iteration-count: infinite;
}
.line {
  animation-delay: 8s;
  animation-duration: 10s;
  animation-timeline: auto;
  animation-name: line;
  animation-iteration-count: infinite;
}
</style>
