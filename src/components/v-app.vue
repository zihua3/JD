<!--
/**
 * APP通用页面容器
 *
 * @author lijj
 * @create 2019-06-07
 */
 -->

<style scoped>
	
</style>

<template>
  <div class="v-app">
	<template>
		<slot></slot>
		<!-- 底部导航 -->
		<v-nav v-if="isFooter"></v-nav>
	</template>
	</div>
</template>
<script>
import { clearTimeout, setTimeout } from 'timers';
import VNav from './v-nav';
	export default {
		name: "v-app",
		components: {VNav},
		props: {
			// 页面标题
      title: {
        type: String,
        default: ""
      },
			// 是否启动顶部导航栏
			isFooter: {
				type: Boolean,
        default: true
			}
		},
		data() {
			return {
				isLoading: false,
				times: null,
			};
		},
		watch: {
      title: {
        handler() {
          this.setPageTitle();
        },
        immediate: true
			},
		},
		methods: {
			// 设置页面标题
			setPageTitle() {
				if (!this.$stringUtils.isNull(this.title)) {
          document.title = this.title;
        }
      },
			// 上拉加载回调
			loadMoreVert() {
				this.isLoading = true;
				clearTimeout(this.times);
				this.times = setTimeout(() => {
					this.isLoading = false;
				});
			},
			// 下拉刷新回调
			pulldown() {
				this.isLoading = true;
				clearTimeout(this.times);
				this.times = setTimeout(() => {
					this.isLoading = false;
				});
			}
		}
	};
</script>

