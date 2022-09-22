<template>
  <header class="header-bar">
    <a href="javascript:;">
      <i class="iconfont icon-shouhuodizhi"></i>
      <output>送至：今天吃点啥呀</output>
      <i class="iconfont icon-xiangyoujiantou"></i>
    </a>
    <a href="javascript:;">
      <i class="iconfont icon-sousuo"></i>
    </a>
  </header>
</template>

<script>
export default {
  name: 'header-bar'
}
</script>

<style lang="scss" scoped>
  .header-bar{
    @include wh(100%,98px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    a{
      color: $color-text-grey;
      font-size: 24px;
      output {
        padding: 0 10px;
      }
      i{
        font-size: 28px;
      }
    }
  }
</style>
