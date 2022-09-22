<template>
  <div class="tab-bar">
    <nav>
      <a
      v-for="(item, index) in tabs"
      :key="index"
      :class="{
        active: activeIndex === index
      }"
      href="javascript:;"
      @click="(change(index))"
      >{{item.text}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    tabs: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
      this.$emit('change', index, this.tabs[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar{
  @include wh(100%, 92px);
  background: #fff;
  overflow: auto;
  nav{
    @include wh(auto, 92px);
    display: flex;
    flex-direction: row;
    align-items: center;
    a{
      text-align: center;
      font-size: 28px;
      color: #4A4A4A;
      padding: 0 20px;
      flex-shrink: 0;
      display: block;
      height: 100%;
      line-height: 92px;
      &.active{
        color: red;
        font-size: 32px;
        font-weight: bold;
      }
    }
  }
}
</style>
