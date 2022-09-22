<template>
  <div class="pic">
    <dl
     v-for="(item, index) in list"
     :key="index"
    >
     <dt>
      <img :src="item.img" alt="">
     </dt>
     <dd>
      <header>
       <h2 class="title">{{item.name}}</h2>
       <p>累计销售{{416786}}份 / 以拼{{2374}}份</p >
       <label-bar :list="['自营', '京东']" />
      </header>
      <footer>
       <p>
        <span>￥<b>{{item.price | formatPrice}}</b></span>
        <s>￥{{item.price | formatPrice}}</s>
       </p >
      </footer>
     </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: {
    list: Array
  },
  filters: {
    formatPrice (price) {
      return price / 100
    }
  }
}
</script>

<style lang="scss" scoped>
  .pic{
    dl{
      display: flex;
      padding: 30px;
      font-size: 24px;
      background: #fff;
      border-top: 1px solid #ccc;
    dt{
      @include wh(240px, 240px);
      margin-right: 30px;
    img{
      @include wh(240px, 240px);
     }
    }
    dd{
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     height: 240px;
     header{
      .title{
       @include ellipsis(2);
       color: #111;
       font-size:32px;
       line-height: 45px;
      }
      p{
       margin: 10px 0 20px 0;
       color:#999;
      }
     }
     footer{
      p{
       span{
        color: orangered;
        b{
         font-size: 36px;
        }
       }
       s{
        color:#ccc;
       }
      }
     }
    }
   }
  }
</style>
