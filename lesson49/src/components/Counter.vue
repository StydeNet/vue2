<template>
	<div>
		<h2>{{ msg }} {{ tripleCounter }}</h2>
		<increment />
		<decrement />
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Increment from './Increment.vue'
	import Decrement from './Decrement.vue'

	export default {
		components: {
			Increment,
			Decrement
		},
		computed: {
			...mapGetters(['tripleCounter']),
			msg() {
				return 'El contador multiplicado por 3 vale: '
			}
		}
	}
</script>