<template>
  <div class="each-day">
    <a
    class="texts"
    href="javascript:;">
      <output>每日必购</output>
      <span>大家都在买</span>
    </a>
    <a class="photos">
      <img
        v-for="(item, index) in list"
        :key="index"
        href="javascript:;"
        :src="item.image" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'each-day',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  .each-day{
    @include wh(100%, auto);
    background: #fff;
    .texts{
      display: flex;
      align-items: center;
      height:98px;
      color: $color-text-grey;
      font-size: 24px;
      output {
        font-size: 28px;
        font-weight: bold;
        color: #000;
        padding: 0 10px;
      }
      span{
        color: #000;
      }
    }
    .photos{
      width:100%;
      display: flex;
      img{
        @include wh(33%,250px)
      }
    }
  }
</style>
