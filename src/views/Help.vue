<template>
  <div class="help">
    <img src="../assets/back.svg" alt="" class="back" @click="goBack">
    <div class="nav">帮 助</div>
    <div class="rule"></div>
    <img src="../assets/yxgz.png" alt="" class="yxgz">
    <img src="../assets/rules.png" alt="" class="rules">
  </div>
</template>

<script>
export default {
  name: 'Help',
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

.help {
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

.grjl{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top:460px;
  width: 220px;
  height: 98px;
  z-index: 1;
}
.rule{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top:242px;
  width: 90%;
  height: 700px;
  background: rgba(0,0,0,0.30);
  border: 2px solid #dfb47c;
  border-radius: 50px;
}
.yxgz{
  position: absolute;
  width: 220px;
  height: 98px;
  top: 194px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.rules{
  position: absolute;
  top:350px;
  width: 85%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 22px;
}
</style>
