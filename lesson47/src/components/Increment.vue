<template>
	<button @click="increment" class="btn btn-primary">Incrementar</button>
</template>

<script>
	export default {
		methods: {
			increment() {
				this.$emit('increment')
			}
		}
	}
</script>