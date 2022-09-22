<template>
  <div class="classify-page">
    分类
  </div>
</template>

<script>
import scroll from '@/mixins/scroll'
export default {
  name: 'classify-index',
  mixins: [scroll],
  scrollBottom () {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>
.classify-page{
   height: 200vh;
}
</style>
