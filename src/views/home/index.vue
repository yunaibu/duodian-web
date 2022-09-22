<template>
  <div>
    <header-bar />
    <banner :list="banner" />
    <quick-menu :list="mall_nav"/>
    <each-day :list="banner"/>
    <div ref="content">
      <tab-bar
        class="tab"
        ref="tabbar"
        :tabs="hot_nav"
        @change="navchange"
      />
      <product-list :list="products"/>
    </div>
    <!-- <tody />
    <menu /> -->
  </div>
</template>

<script>
// import Product from '../../../../../9.5 month/src/views/home/main/Product.vue'
import HeaderBar from './components/HeaderBar.vue'
// import jsonp from '@/utils/jsonp'
import Banner from './components/Banner.vue'
import QuickMenu from './components/QuickMenu.vue'
import EachDay from './components/EachDay.vue'
import scroll from '@/mixins/scroll'
export default {
  name: 'home-index',
  mixins: [scroll],
  components: {
    HeaderBar,
    Banner,
    QuickMenu,
    EachDay
  },
  data () {
    return {
      banner: [],
      mall_nav: [],
      hot_nav: [],
      products: [],
      fatchProductParams: {
        page: 1,
        page_size: 10,
        classid: 1
      }
    }
  },
  watch: {
    fatchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    // jsonp('http://localhost:7001/api/home').then((res) => {
    //   console.log(res)
    // })
    // this.$axios.get('/api/home').then((res) => {
    //   console.log(res)
    // }).catch((e) => {
    //   console.log(e)
    // })
    this.initData()
    // this.fetchProductList()
  },
  scrollBottom () {
    this.fatchProductParams.page += 1
  },
  methods: {
    initData () {
      this.$api.home.base().then(res => {
        this.banner = res.data.data.banner
        this.mall_nav = res.data.data.mall_nav
        this.hot_nav = res.data.data.hot_nav.concat(res.data.data.hot_nav)
      })
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fatchProductParams)
      if (this.fatchProductParams.page === 1) {
        this.products = res.data.data
      } else {
        this.products = this.products.concat(res.data.data)
      }
    },
    navchange (index, item) {
      this.fatchProductParams.classid = item.id
      this.fatchProductParams.page = 1
      const top = this.$refs.content.offsetTop
      const scrollTop = document.querySelector('html').scrollTop
      if (scrollTop > top) {
        window.scrollTo(0, this.$refs.content.offsetTop)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab{
  position: sticky;
  top: 0;
  z-index: 20;
}
</style>
