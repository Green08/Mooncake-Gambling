<template>
  <div class="mode">
    <div class="container">
      <img src="../assets/djms.png" alt="" class="button"  @click="goDjms">
      <img src="../assets/grzx.png" alt="" class="button"  @click="goGrzx">
      <img src="../assets/cjfj.png" alt="" class="button"  @click="goDjms">
      <img src="../assets/jrfj.png" alt="" class="button"  @click="goDjms">
      <img src="../assets/bz.png" alt="" class="button"  @click="goHelp">
      <img src="../assets/sz.png" alt="" class="button"  @click="goSetting">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goDjms () {
      this.$router.push({
        name: 'Game'
      })
    },
    goGrzx (){
      this.$router.push({
        name: 'Grzx'
      })
    },
    goSetting (){
      this.$router.push({
        name: 'Setting'
      })
    },
    goHelp (){
      this.$router.push({
        name: 'Help'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/animation.scss";

.mode {
  position: absolute;
  height: 100vh;
  padding:0px;
  margin:0px;
  background: url("../assets/bg1@3x.png") no-repeat;
  background-position:center;
  background-size: cover;
}
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30%;
}
.button{
  width: 312px;
  height: 138px;
  justify-content: center;
  flex:0 1 auto;
  margin: 50px 30px;
}
</style>
