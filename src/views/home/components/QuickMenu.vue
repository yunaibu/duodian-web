<template>
  <div class="quick-menu">
    <swiper>
      <!-- slides -->
      <swiper-slide
        v-for="(item, index) in Math.ceil(list.length / 10)"
        :key="index"
      >
      <div class="grid">
        <a
          v-for="(subitem, subindex) in list.slice(index * 10, index * 10 + 10)"
          :key="subindex"
          href="javaceript:;"
          >
          <img class="icon" :src="subitem.icon" />
          <span>{{subitem.text}}</span>
        </a>
      </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'quick-menu',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.grid{
  display: grid;
  grid-template-columns:repeat(5, 20%);
  grid-template-rows: 156px 156px;
  background: #fff;
  .icon{
    @include wh(80px,80px)
  }
  a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    span{
      color: $color-text-grey;
      font-size: 24px;
      margin-top: 10px;
    }
  }
}
</style>
