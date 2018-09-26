<template>
  <div id="app" class="app">
    <CoorLayout></CoorLayout>
    <FootLayout></FootLayout>
  </div>
</template>

<script>
import CoorLayout from './components/layout/CoorLayout'
import FootLayout from './components/layout/FootLayout'
export default {
  name: 'App',
  components: { CoorLayout, FootLayout }
}
</script>
<style scoped>
.app{
 margin: 0;
}
</style>
