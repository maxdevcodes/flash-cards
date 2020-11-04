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
        currentSequence: [],
        cards: [
          {id:0, text: 'Question 1?', answer: 'correct answer', accuracy: 0},
          {id:1, text: 'Question 2?', answer: 'correct answer', accuracy: 0},
          {id:2, text: 'Question 3?', answer: 'correct answer', accuracy: 0},
          {id:3, text: 'Question 4?', answer: 'correct answer', accuracy: 0}
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
        if(e.set == topic) {
          e.currentSequence = e.cards.map(e => {
            return e.id
          });

          e.currentSequence.forEach((card, i) => {
            let j = Math.floor(Math.random() * i);
            let aux = e.currentSequence[i];
            e.currentSequence[i] = e.currentSequence[j];
            e.currentSequence[j] = aux;  
          });

          return true; 
        }else {
          return false;
        }
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
