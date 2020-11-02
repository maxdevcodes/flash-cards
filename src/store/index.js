import { createStore } from "vuex";

export default createStore({
  state: {
    topics: [
      {id:0, name:'vue'},
      {id:1, name:'vuex'},
    ],
    cardset: [
      {
        set: 'vue', 
        cards: [
          {id:0, text: 'Question 1?', answer: 'correct answer', accuracy: 0},
          {id:1, text: 'Question 2?', answer: 'correct answer', accuracy: 0}
        ]
      }
    ]
  },
  getters: {
    getTopics: state => {
      console.log("state", state);
      return state.topics;
    },
    getCards: state => topic => {      
      return state.cardset.find(e => {
        return e.set == topic
      });
    }
  },
  mutations: {
    setAccuracy(state, payload) {
      state.cardset.find(e => e.set == payload.cardset).cards.find(e => e.id == payload.cardId).accuracy = payload.newAccuracy;
    }
  },
  actions: {},
  modules: {}
});
