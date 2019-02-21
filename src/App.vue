<template>
  <div id='ele-app'>

    <div class="ele-main">
      <router-view></router-view>
    </div>

    <!-- 导航条 -->
    <router-view name="tabbar"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
  #ele-app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
