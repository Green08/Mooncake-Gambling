<template>
  <div class="rule-container">
    <div class="title">活动规则</div>
    <img src="../assets/rules.png" alt="" class="rule-img">
    <div class="btn-back" @click="back2Home">返回首页</div>
  </div>
</template>

<script>
export default {
  methods: {
    back2Home () {
      this.$router.go(-1)
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
  background: url("../assets/bg.png") no-repeat;
  background-size: cover;

  .title {
    margin-top: 100px;
    font-size: 50px;
    font-weight: bold;
    color: #FEE7BD;
    line-height: 100px;
  }
  .rule-img {
    width: 650px;
  }
  .btn-back {
    margin-top: 50px;
    padding: 15px 50px;
    border-radius: 20px;
    background: #A72A2A;
    color: #FEE7BD;
    font-size: 30px;
  }
}
</style>