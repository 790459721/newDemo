<template>
  <div class="service_home_wrapper">
    <header class="home_header">
      <div class="header_area">服务地区：{{ province || '定位中' }}</div>
      <div class="push_message">
        <div class="header_status">你还有服务暂未预约</div>
        <div class="header_btn">现在去预约</div>
      </div>
    </header>
    <main class="content_main">
      <div
        class="content_item"
        v-for="(item, index) in pageData"
        :key="index"
        @click="jumpServiceDetail(item.id)"
      >
        <img class="content_img" :src="item.bannerImg" />
      </div>
    </main>

    <div class="tab_bottom_box">
      <div :class="[`tab_item`, `${tabState === 'home' ? 'active' : ''}`]">
        <div class="tab_icon iconfont icon-home"></div>
        <div class="tab_name">首页</div>
      </div>
      <div
        :class="[`tab_item`, `${tabState === 'center' ? 'active' : ''}`]"
        @click="jumpCenter"
      >
        <div class="tab_icon iconfont icon-my"></div>
        <div class="tab_name">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
import BMap from 'BMap'
import './ServiceHome.less'
export default {
  name: 'ServiceHome',
  data: () => ({
    title: 'Home',
    province: '',
    pageData: [],
    tabState: ''
  }),
  mounted() {
    this.getLocation()
  },
  methods: {
    // 获取经纬度
    getLocation() {
      const that = this
      const geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        // eslint-disable-next-line no-undef
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          const latitude = r.point.lat;
          const longitude = r.point.lng;
          that.getLocalAddress(longitude, latitude)
        } else {
          that.province = '定位失败'
        }
      });
      //   that.loadData()
    },
    // 经纬度解析地址
    getLocalAddress(longitude, latitude) {
      const that = this
      const lnglat = new BMap.Point(longitude, latitude)
      const gc = new BMap.Geocoder();  //初始化，Geocoder类
      gc.getLocation(lnglat, function (rs) {   //getLocation函数用来解析地址信息，分别返回省市区街等
        const { addressComponents: { province } } = rs
        console.log(rs);
        that.province = province
      });
    },
    loadData() {
      //   Web.post('http://fx.test.dashubao.top/remoting/product/index', {
      //     token: this.token
      //   }, res => {
      //     if (res.err_code === 0) {
      //       this.pageData = [...res.data]
      //     }
      //   })
    },
    jumpCenter() {
      this.$router.push('/serviceDetail')
      // window.location.replace('personalCenter.html')
    },
    // jumpServiceDetail(productId) {
    //   Web.go('serviceDetail.html?productId=' + productId)
    // }
  },
}
</script>

<style>
</style>