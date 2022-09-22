<template>
  <div>
    <label v-for="(item, index) in list" :key="index">{{item}}</label>
    </div>
</template>

<script>
export default {
  name: 'label-bar',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  label{
  padding: 0.05rem 0.2rem;
  background: orangered;
  border-radius: 0.3rem;
  margin-right:0.05rem;
  color:#fff;
  }
</style>
