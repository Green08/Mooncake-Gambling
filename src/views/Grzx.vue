<template>
  <div class="grzx">
    <img src="../assets/back.svg" alt="" class="back" @click="goBack">
    <div class="nav">个人中心</div>
    <div class="user">
        <div class="pic"></div>
    </div>
    <img src="../assets/grjl.png" alt="" class="grjl">
    <div class="record"></div>
  </div>
</template>

<script>
export default {
  name: 'Grzx',
  components: {
  },
  data() {
    return {
    }
  },
  
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/animation.scss";

.grzx {
  position: relative;
  height: 100vh;
  padding:0px;
  margin:0px;
  // overflow: hidden;
  background: url("../assets/bg1@3x.png") no-repeat;
  background-position:center;
  background-size: cover;
}
.back{
  position: absolute;
  margin-top: 88px;
  margin-left: 35px;
  height: 45px;
}
.nav{
  width: 200px;
  height: 80px;
  margin-top: 88px;
  margin-left: 100px;
  position: absolute;
  font-size: 35px;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  letter-spacing: 2px;
}
.user{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 208px;
  top:196px;
  background: rgba(0,0,0,0.00);
  border: 2px solid #dfb47c;
  border-radius: 50px;
}
.pic{
  position: absolute;
  top:36px;
  left:34px;
  width: 136px;
  height: 136px;
  background: #ffffff;
  border-radius: 50%;
}
.grjl{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top:460px;
  width: 220px;
  height: 98px;
  z-index: 1;
}
.record{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top:508px;
  width: 90%;
  height: 55%;
  background: rgba(0,0,0,0.30);
  border: 2px solid #dfb47c;
  border-radius: 50px;
}
</style>
