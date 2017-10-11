<template>
	<button @click="increment" class="btn btn-primary">Incrementar</button>
</template>

<script>
	import { mapMutations } from 'vuex'

	export default {
		methods: mapMutations(['increment'])
	}
</script>