import {createStore} from "vuex";

export default createStore({
  state: {
    currentLetter: '',
    warningMessage: false,
    winDialog: false,
    registrationDialog: false
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
    },
    activateSignupDialog(state, bool) {
      state.registrationDialog = bool;
    }
  },
  actions: {}
})
