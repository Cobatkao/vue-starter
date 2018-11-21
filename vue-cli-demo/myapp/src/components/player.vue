<template>
	<div>
		<h1>球员页面</h1>
		<ul>
			<li>编号：{{ detail.uid }}</li>
			<li>名字：{{ detail.name }}</li>
			<li>得分：{{ detail.point }}</li>
		</ul>
		<router-link :to="profile">简介</router-link>
		<router-link :to="stat">数据</router-link>
		<hr/>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'Player',
		data() {
			return {
				detail: {},
				profile: '',
				stat: ''
			}
		},
		mounted() {
			this.detail = this.getPlayer(this.$route.params.uid)
			this.profile = '/player/' + this.$route.params.uid + '/profile'
			this.stat = '/player/' + this.$route.params.uid + '/stat'
		},
		beforeRouteUpdate(to, from, next) {
			this.detail = this.getPlayer(to.params.uid)
			this.profile = '/player/' + to.params.uid + '/profile'
			this.stat = '/player/' + to.params.uid + '/stat'
			next()
		},
		methods: {
			getPlayer(uid) {
				switch(uid.toString()) {
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