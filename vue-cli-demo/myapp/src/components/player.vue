<template>
	<div>
		<h1>球员页面</h1>
		<p>{{ detail }}</p>
	</div>
</template>

<script>
	export default {
		name: 'Player',
		data() {
			return {
				detail: {}
			}
		},
		mounted() {
			this.detail = this.getPlayer(this.$route.params.uid)
		},
		beforeRouteUpdate(to, from, next) {
			this.detail = this.getPlayer(to.params.uid)
			next()
		},
		methods: {
			getPlayer(uid) {
				switch(uid) {
					case '1':
						return {uid: 1, name: '库里', point: 26}
						break
					case '2':
						return {uid: 2, name: '加内特', point: 32}
						break
					case '3':
						return {uid: 3, name: '哈登', point: 17}
						break
					default:
						return {uid: -1}
				}
			}
		}
	}
</script>