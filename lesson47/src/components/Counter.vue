<template>
	<div>
		<h2>{{ count }}</h2>
		<increment @increment="increment"/>
		<decrement @decrement="decrement"/>
	</div>
</template>

<script>
	import Increment from './Increment.vue'
	import Decrement from './Decrement.vue'

	export default {
		components: {
			Increment,
			Decrement
		},
		data() {
			return {
				count: 0
			}
		},
		methods: {
			increment() {
				this.count++
			},
			decrement() {
				this.count--
			}
		}
	}
</script>