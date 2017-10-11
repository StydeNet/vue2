<template>
	<button @click="decrement" class="btn btn-danger">Disminuir</button>
</template>

<script>
	import { mapMutations } from 'vuex'

	export default {
		methods: mapMutations(['decrement'])
	}
</script>