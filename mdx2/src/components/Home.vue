// ddsfec
// 首页
<template >
    <div id="home">
      <ul >
          <li v-for="item in tablist" :key="item">{{item}}</li>
      </ul>
      <h1>home</h1>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      tabname: '菜单',
      tablist: ['tab1', 'tab2', 'tab3'],
      show: true
    }
  }
}
</script>
