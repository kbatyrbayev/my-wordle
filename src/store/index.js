import {createStore} from "vuex";

export default createStore({
  state: {
    currentLetter: '',
    warningMessage: false,
    winDialog: false
  },
  getters: {
    getLetter(state) {
      return state.currentLetter
    }
  },
  mutations: {
    changeLetter(state, letter) {
      state.currentLetter = letter;
    },
    activateWarningMessage(state) {
      state.warningMessage = true;
    },
    activateWinDialog(state) {
      state.winDialog = true;
    }
  },
  actions: {}
})
