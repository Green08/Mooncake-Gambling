<template>
  <div class="rule-container">
    <div class="box"></div>
    <img src="../assets/start-into.png" alt="" class="btn-into"  @click="goGame">
    <div class="btn-rule" @click="goRule"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goGame () {
      this.$router.push({
        name: 'Mode'
      })
    },
    goRule () {
      this.$router.push({
        name: 'Rule'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.rule-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/bg2@3x.png") no-repeat;
  background-position:center center;
  background-size: cover;

  .box {
    height: 60%;
  }
  .btn-into {
    position: absolute;
    bottom: 250px;
    width: 350px;
    left: 50%;
    transform: translateX(-50%);
  }
  .btn-rule {
    width: 400px;
    height: 86px;
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: url("../assets/btn_rule.png") no-repeat;
    background-size: cover;
  }
}
</style>