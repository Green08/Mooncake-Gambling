<template>
  <div class="play">
    <!-- <img src="../assets/title.png" alt="" class="title"> -->
    <!-- <img src="../assets/rabbit.png" alt="" class="rabbit"> -->
    <div class="bowl-container" @click="handleStart" id="bowl">
      <div class="dice dice4 dice-position1"></div>
      <div class="dice dice4 dice-position2"></div>
      <div class="dice dice1 dice-position3"></div>
      <div class="dice dice1 dice-position4"></div>
      <div class="dice dice4 dice-position5"></div>
      <div class="dice dice4 dice-position6"></div>
    </div>
    <img src="../assets/back.svg" alt="" class="back" @click="goBack">
    <div class="nav">单机模式</div>
    <img src="../assets/yyy.png" alt="" class="btn-yyy"  @click="handleStart">
    <img src="../assets/博饼记录.png" alt="" class="bbjl">
    <div class="award" v-show="isShow">{{this.newTitle}}</div>
    <div class="record-box">
      <div class='listone' v-for='(item,index) in jllist' :key='index'>
          <div class='dict'>{{index+1}}</div>
          <div>获得了</div>
          <div>{{item.name}}</div>
          <div class='imgout'>
            <div v-for='(val,e) in item.imglist' :key='e'>
              <img :src="require('../assets/'+(val)+'.png')" alt="">
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Game from '../common/game.js'
import $ from 'jquery'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      result: [],
      rank: -1,
      awardTitle: '',
      newTitle: '',
      game: new Game(),
      loading: false,
      content: '',
      isShow: false,
      jllist:[],
      imglist:[]
    }
  },
  
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    getlist(){

    },
    handleStart () {
      if (this.loading) {
        return
      }
      const res = this.game.generateResult()
      this.result = res.result
      this.rank = res.rank
      this.awardTitle = res.awardTitle
      this.setDice()
      this.isShow= false
    },
    
    // 获取六个骰子的位置
    getPosition () {
      const positions = [1, 2, 3, 4, 5, 6, 7, 8]
      let res = []
      for (let i = 0; i < 6; i++) {
        res.push(positions.splice(Math.floor(Math.random() * positions.length), 1)[0])
      }
      return res
    },
    setDice () {
      this.loading = true
      $('#bowl').removeClass('active')
      $('#bowl').addClass('inactive')
      const positions = this.getPosition()
      $.each($('#bowl .dice'), (index, item) => {
        $(item).removeClass()
        $(item).addClass(`dice dice${this.result[index]} dice-position${positions[index]}`)
      })
      setTimeout(() => {
        $('#bowl').removeClass('inactive')
        $('#bowl').addClass('active')
        this.showAwardTitle()
      }, 200)
    },
    showAwardTitle () {
      // Set a delay so that the result does not appear until the animation ends
      setTimeout(() => {
        this.loading = false
        this.newTitle=this.awardTitle
        this.imglist=this.result
        this.jllist.push({
          name:this.newTitle,
          imglist:this.imglist
        })
        console.log(this.newTitle)
        console.log(this.imglist)
        this.isShow= true
      }, 1200)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/animation.scss";

.play {
  position: relative;
  height: 100vh;
  padding:0px;
  margin:0px;
  // overflow: hidden;
  background: url("../assets/bg1@3x.png") no-repeat;
  background-position:center;
  background-size: cover;
}
.title {
  width: 500px;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
}
.bowl-container {
  width: 500px;
  height: 289px;
  position: absolute;
  top: 450px;
  left: 50%;
  transform: translateX(-50%);
  background: url("../assets/底盘@3x.png") no-repeat;
  background-size: cover;
  .dice {
    width: 80px;
    height: 80px;
    position: absolute;
    &.dice1 {
      background: url("../assets/dice_1.png") no-repeat;
      background-size: cover;
    }
    &.dice2 {
      background: url("../assets/dice_2.png") no-repeat;
      background-size: cover;
    }
    &.dice3 {
      background: url("../assets/dice_3.png") no-repeat;
      background-size: cover;
    }
    &.dice4 {
      background: url("../assets/dice_4.png") no-repeat;
      background-size: cover;
    }
    &.dice5 {
      background: url("../assets/dice_5.png") no-repeat;
      background-size: cover;
    }
    &.dice6 {
      background: url("../assets/dice_6.png") no-repeat;
      background-size: cover;
    }
    &.dice-position1 {
      top: 20px;
      left: 150px;
    }
    &.dice-position2 {
      top: 140px;
      left: 170px;
    }
    &.dice-position3 {
      top: 140px;
      left: 250px;
    }
    &.dice-position4 {
      top: 40px;
      left: 330px;
    }
    &.dice-position5 {
      top: 120px;
      left: 350px;
    }
    &.dice-position6 {
      top: 20px;
      left: 240px;
    }
    &.dice-position7 {
      top: 120px;
      left: 80px;
    }
    &.dice-position8 {
      top: 50px;
      left: 90px;
    }
  }
  &.active {
    .dice {
      display: block;
      &.dice-position1 {
        animation: diceAnimation 1s cubic-bezier(0.39, 0.12, 0.85, 0.48);
      }
      &.dice-position2 {
        animation: diceAnimation2 800ms cubic-bezier(0.39, 0.12, 0.85, 0.48);
      }
      &.dice-position3 {
        animation: diceAnimation3 600ms cubic-bezier(0.39, 0.12, 0.85, 0.48);
      }
      &.dice-position4 {
        animation: diceAnimation 750ms cubic-bezier(0.39, 0.12, 0.85, 0.48);
      }
      &.dice-position5 {
        animation: diceAnimation2 500ms cubic-bezier(0.39, 0.12, 0.85, 0.48);
      }
      &.dice-position6 {
        animation: diceAnimation3 678ms cubic-bezier(0.39, 0.12, 0.85, 0.48);
      }
      &.dice-position7 {
        animation: diceAnimation3 800ms cubic-bezier(0.39, 0.12, 0.85, 0.48);
      }
      &.dice-position8 {
        animation: diceAnimation 800ms cubic-bezier(0.39, 0.12, 0.85, 0.48);
      }
    }
  }
  &.inactive {
    .dice {
      display: none;
    }
  }
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
.btn-yyy{
  width: 350px;
  position: absolute;
  top: 222px;
  left: 50%;
  transform: translateX(-50%);
}
.bbjl{
  position: absolute;
  width: 220px;
  height: 98px;
  top: 950px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.award{
  position: absolute;
  top: 788px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 66px;
  color: rgb(255, 255, 255);
  font-family: xingkai;
}
.record-box{
  width: 90%;
  height: 490px;
  position: absolute;
  white-space: nowrap;  
  left: 50%;
  transform: translateX(-50%);
  top: 1000px;
  background: rgba(0,0,0,0.30);
  border: 2px solid #dfb47c;
  border-radius: 50px;
  overflow-y:auto;
  padding:60px 20px;
  box-sizing: border-box;
}
.listone{
  width:100%;
  height:40px;
  color:#fff;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.imgout{
  width:160px;
  display:flex;
  height:40px;
  align-items: center;
}
.listone img{
  height:30px;
}
.dict{
  width:10px;
  text-align:center;
}
</style>
