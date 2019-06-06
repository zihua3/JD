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
		<nut-scroller
			:is-un-more="true" 
			:is-loading="isLoading"
			:type="'vertical'"
			@loadMore="loadMoreVert"
			@pulldown="pulldown"
			v-if="enableScroll">
			<div slot="list" class="nut-vert-list-panel">
					<div class="nut-vert-list-item">
							<dl class="nut-scroller-item-info">
									<slot></slot>
							</dl>
					</div>
			</div>
		</nut-scroller>

		<template v-else>
			<slot></slot>
		</template>
	</div>
</template>
<script>
import { clearTimeout, setTimeout } from 'timers';
	export default {
		name: "v-app",
		props: {
			// 页面标题
      title: {
        type: String,
        default: ""
      },
			// 是否启用nut-scroll，默认启用
      enableScroll: {
        type: Boolean,
        default: true
      },
		},
		data() {
			return {
				isLoading: false,
				times: null,
			}
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
	}
</script>

