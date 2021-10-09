<template>
  <div class="setting">
    <img src="../assets/back.svg" alt="" class="back" @click="goBack">
    <div class="nav">设置</div>
    <div class="sz">
      <div class="box">
        <div class="option">
          <div class="title">音乐</div>
          <div class="switch">
            <SSwitch v-model="value" text="on|off"></SSwitch>
          </div>
          <div class="line"></div>
        </div>
        <div class="option">
          <div class="title">音效</div>
          <div class="switch">
            <SSwitch v-model="value" text="on|off"></SSwitch>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SSwitch from '../common/Switch.vue'
export default {
  name: 'Setting',
  components: {
    SSwitch
  },
  data() {
    return {
      value:''
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

.setting {
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
.sz{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 500px;
  top:196px;
  background: rgba(0,0,0,0.50);
  border: 2px solid #dfb47c;
  border-radius: 50px;
}
.box{
  display: flex;
  flex-direction:column
}
.option{
  position: relative;
  width:100%;
  height:100px;
}
.title{
  position: absolute;
  top: 50px;
  left: 10%;
  font-size: 36px;
  color: #ffffff;
}
.switch{
  width: 102px;
  height: 68px;
  position: absolute;
  top: 50px;
  right: 10%;
}
.line{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top:123px;
  width: 88%;
  border: 1px solid #b6b6b6;
}
</style>
