<!--
/**
 * 页面底部导航栏
 *
 * @author lijj
 * @create 2019-06-09
 */
 -->

<style scoped>
  .v-nav{
    position: fixed;
    top:  0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    box-shadow: 0px -1px 6px 1px #eee;
  }
  .icon{
    width: 25%;
  }
  .iconfont{
    font-size: 22px !important;
  }
  .icon p{
    font-size: 8px;
  }
</style>

<template>
  <div class="v-nav">
    <div class="icon">
      <i class="iconfont icon-shouye"></i>
      <p>首页</p>
    </div>

    <div class="icon">
      <i class="iconfont icon-fenlei"></i>
      <p>分类</p>
    </div>

    <div class="icon">
      <i class="iconfont icon-gouwuche"></i>
      <p>购物车</p>
    </div>

    <div class="icon">
      <i class="iconfont icon-wode"></i>
      <p>我的</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'v-nav', 
  };
</script>

