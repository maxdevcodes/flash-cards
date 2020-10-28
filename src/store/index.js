import { createStore } from "vuex";

export default createStore({
  state: {
    topics: [
      {id:0, name:'vue'},
      {id:1, name:'vuex'},
    ],
  },
  getters: {
    getTopics: state => {
      console.log("state", state);
      return state.topics;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
