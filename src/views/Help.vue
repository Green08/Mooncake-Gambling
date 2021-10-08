<template>
  <div class="help">
    <div class="nav">帮 助</div>
    <div class="user">
        <div class="pic"></div>
    </div>
    <img src="../assets/bz.png" alt="" class="bz">
    <div class="record"></div>
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
.nav{
  width: 200px;
  height: 80px;
  margin-top: 88px;
  margin-left: 50px;
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
