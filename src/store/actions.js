import * as types from './mutation-types'

export const addToCart = function ({ commit }, goods) {
  commit(types.ADDGOODS, goods)
}

