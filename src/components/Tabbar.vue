<template>
  <div id="ele-tabbar">
    <ul>
      <router-link
        tag="li"
        :to="link.path"
        v-for="link in navs"
        :key="link.path"
      >
        <span class="icon" v-html="link.meta.icon"></span>
        <span class="text">{{link.meta.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import routes from '@/router/routes.js'

export default {
  name: 'Tabbar',
  data () {
    return {
      navs: routes.filter(route => route.meta.isNav === true)
    }
  }
}
</script>

<style lang='scss' scoped>
  #ele-tabbar {
    height: 13.3vw;
    border-top: 1px solid #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #8e8e93;

        &.router-link-exact-active,
        &.router-link-active {
          color: #0089dc;
        }

        span {
          display: block;

          &.icon {
            font-size: 5.3vw;
            font-family: 'iconfont';
            margin-bottom: 2vw;
          }

          &.text {
            font-size: 3.2vw;
          }
        }

      }
    }
  }
</style>
