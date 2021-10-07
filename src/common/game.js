export default class Game {
  result = []
  award = [] // 用于统计

  // 随机生成一组博饼结果
  generateResult() {
    this.result = []
    for (let i = 0; i < 6; i++) {
      this.result.push(Math.floor(Math.random() * 6) + 1)
    }
    return this._judgeAward()
  }

  // 统计结果
  _countResult() {
    this.award = new Array(6).fill(0)
    this.result.forEach(item => {
      this.award[item - 1]++
    })
    return this
  }

  // 判断奖项
  _judgeAward() {
    this._countResult()
    const award = this.award
    let awardTitle = ''
    let rank = -1
    if (award[3] === 4 && award[0] === 2) {
      awardTitle = '状元插金花'
      rank = 1
    } else if (award[3] === 6) {
      awardTitle = '状元红六勃'
      rank = 2
    } else if (award[0] === 6) {
      awardTitle = '状元遍地锦'
      rank = 3
    } else if (award[1] === 6 || award[2] === 6 || award[4] === 6 || award[5] === 6) {
      awardTitle = '状元黑六勃'
      rank = 4
    } else if (award[3] === 5) {
      awardTitle = '状元五红'
      rank = 5
    } else if (award[0] === 5 || award[1] === 5 || award[2] === 5 || award[4] === 5 || award[5] === 5) {
      awardTitle = '状元五子登科'
      rank = 6
    } else if (award[3] === 4) {
      awardTitle = '状元四红'
      rank = 7
    } else if (new Set(this.result).size === 6) {
      awardTitle = '对堂'
      rank = 8
    } else if (award[3] === 3) {
      awardTitle = '三红'
      rank = 9
    } else if (award[0] === 4 || award[1] === 4 || award[2] === 4 || award[4] === 4 || award[5] === 4) {
      awardTitle = '四进'
      rank = 10
    } else if (award[3] === 2) {
      awardTitle = '二举'
      rank = 11
    } else if (award[3] === 1) {
      awardTitle = '一秀'
      rank = 12
    } else {
      awardTitle = '落榜'
    }

    return {
      awardTitle: awardTitle,
      rank: rank,
      result: this.result
    }
  }
}