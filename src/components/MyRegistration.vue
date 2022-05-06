<template>
  <div class="reg-form">
    <div class="tabs">
      <div
          class="tab"
          v-for="tab in tabs"
          :key="tab"
          @click="selectTab(tab)"
          :class="{'active': currentTab === tab}"
      >
        {{tab}}
      </div>
    </div>
    <div class="reg-body">
      <h3 class="title">{{currentTab}}</h3>
      <form
          v-if="currentTab==='kiru'"
          @submit.prevent="signInSubmit()"
      >
        <div class="input-row">
          <i class="reg-icon">
            <img src="/assets/icons/user.svg"  alt="user-icon">
          </i>
          <input type="text" placeholder="login" class="reg-input" v-model="form.login">
        </div>

        <div class="input-row">
          <i class="reg-icon">
            <img src="/assets/icons/pass.svg" alt="pass-icon">
          </i>
          <input type="password" placeholder="kupiya soz" class="reg-input" v-model="form.password">
        </div>

        <input class="reg-btn" type="submit" value="kiru"/>
      </form>
      <template v-if="currentTab==='tirkelu'">
        <div class="input-row">
          <i class="reg-icon">
            <img src="/assets/icons/user.svg" alt="user-icon">
          </i>
          <input type="text" placeholder="login" class="reg-input">
        </div>

        <div class="input-row">
          <i class="reg-icon">
            <img src="/assets/icons/mail.svg" alt="mail-icon">
          </i>
          <input type="email" placeholder="poshta" class="reg-input">
        </div>

        <div class="input-row">
          <i class="reg-icon">
            <img src="/assets/icons/pass.svg" alt="pass-icon">
          </i>
          <input type="password" placeholder="kupiya soz" class="reg-input">
        </div>

        <div class="input-row">
          <i class="reg-icon">
            <img src="/assets/icons/pass.svg" alt="pass-icon">
          </i>
          <input type="password" placeholder="kupiya soz tagy da" class="reg-input">
        </div>

        <button class="reg-btn">tirkelu</button>
      </template>
    </div>
  </div>

  <v-snackbar
      v-model="snackbar.active"
      :timeout="4000"
      :value="true"
      top
      right
      color="error"
  >
    <div
        v-for="error in form.errors"
        :key="error">
      {{error}}
    </div>
  </v-snackbar>
</template>

<script>

const axios = require('axios').default;

export default {
  name: "my-registration",
  data() {
    return {
      tabs: ['kiru', 'tirkelu'],
      currentTab: 'kiru',
      form: {
        login: '',
        password: '',
        errors: []
      },
      snackbar: {
        active: false,
        color: ''
      }
    }
  },
  methods: {
    selectTab(tabName) {
      this.currentTab = tabName;
    },
    signInSubmit: function() {
      this.form.errors = [];
      if (this.form.login && this.form.password) {
        console.log('yes')
        axios.get(`http://localhost/wordle-php/api/user/login.php?login=${this.form.login}&password=${this.form.password}`)
        .then(res => {
          console.log(res.data)
          this.form.errors = [];
          if (res.data.status) {
            const {id, login} = res.data;
            localStorage.setItem('user', JSON.stringify({id, login}))
            this.$store.commit('activateSignupDialog', false)
          } else {
            this.form.errors.push(res.data.message);
          }
          this.snackbar.active = !!this.form.errors.length;
        }, err => {
          console.log(err)
        })
      } else {
        if (!this.form.login) {
          this.form.errors.push('bos login')
        }
        if (!this.form.password) {
          this.form.errors.push('bos parol')
        }
        this.snackbar.active = !!this.form.errors.length;
      }
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>

<style scoped lang="scss">

.reg-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  .tabs {
    display: flex;
    .tab {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 50%;
      height: 40px;
      background: #3F72AF;
      color: #fff;
      &.active {
        background: #fff;
        color: #3F72AF;
      }
    }
  }
}

.reg-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 20px 30px;
}

.title {
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #112D4E;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.input-row {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
}

.reg-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
}

.reg-input {
  border: none;
  border-bottom: 1px solid #3F72AF;
  width: 100%;
  padding: 0 30px;
  outline: none;
}

.reg-btn {
  padding: 4px 22px;
  background: #112D4E;
  color: #F9F7F7;
  border-radius: 20px;
  margin-top: auto;
}
</style>