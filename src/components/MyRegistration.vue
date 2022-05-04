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
      <div v-if="currentTab==='kiru'">
        <div class="input-row">
          <i class="reg-icon">
            <img :src="'./icons/user.svg'" >
          </i>
          <input type="text" placeholder="login">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "my-registration",
  data() {
    return {
      tabs: ['kiru', 'tirkelu'],
      currentTab: 'kiru'
    }
  },
  methods: {
    selectTab(tabName) {
      this.currentTab = tabName;
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
}

.title {
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #112D4E;
  text-transform: uppercase;
}
</style>