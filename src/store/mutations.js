import * as types from './mutation-types'

const mutations  = {
  [types.ADDGOODS](state,goods) {
    const oldGoods = state.goodsList.find(item => item.id === goods.id)
    if (oldGoods) {
      oldGoods.count++
    } else {
      state.goodsList.push({
        ...goods,
        count: 1,
        checked: false
      })
    }
  }
}


export default mutations