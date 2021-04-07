export default {
  //异步 必须提交到mutations
  //购物车
  addShopp(context, payload) {
    //数组查找
    let iid = context.state.shoppList.find(
      obj => obj.detailsID == payload.detailsID
    );
    //判断是否有
    if (iid) {
      // a.count += 1;
      //有
      context.commit("addCont", iid);
    } else {
      //没有
      payload.count = 1;
      // context.state.shoppList.push(payload);
      context.commit("addToCont", payload);
    }
  },
  //更改选中
  isUp(context, payload) {
    context.commit("isShowUp", payload)
  },
  //添加成功提示
  successMesg(context, payload) {
    context.commit("mSuccessMesg", payload)
  },
  //把没选中都过滤出来
  deleteShopp(context) {
    let deleteFalse = context.state.shoppList.filter(obj => {
      return obj.checkbox == true
    })
    context.commit("deletes", deleteFalse)
  }

}