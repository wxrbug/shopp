export default {
  //才能改state数据   同步
  //导航栏显示
  isShow(state, payload) {
    state.isTabbar = payload;
  },
  //数量cont+1
  addCont(state, payload) {
    payload.count++;
  },
  //只有一个就添加进去
  addToCont(state, payload) {
    //添加一个属性选中
    payload.checkbox = true;
    state.shoppList.push(payload);
  },
  //更改选中
  isShowUp(state, payload) {
    state.shoppList[payload].checkbox = !state.shoppList[payload].checkbox
  },
  //添加成功提示
  mSuccessMesg(state, payload) {
    state.messageName.isMessage = true
    state.messageName.message = payload
  },
  //删除商品   直接赋值
  deletes(state, payload) {
    state.shoppList = payload
  }

}