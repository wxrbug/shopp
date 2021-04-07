import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations"
import actions from "./actions"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //商品数据
    shoppList: [],
    //控制导航栏显示
    isTabbar: true,
    //控制提示框显示
    messageName:{
      isMessage:false,
      message:""
    }
  },
  getters: {},
  //才能改state数据   同步
  mutations,
  //异步 必须提交到mutations
  actions,
  //模块
  modules: {}
});