<template>
    <div>
        <h2 class="subtitle">{{ title }}</h2>

        <form @submit.prevent="save">
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" v-model="draft.title" class="form-control" id="title">
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea id="description" cols="30" rows="6" v-model="draft.description" class="form-control"></textarea>
            </div>

            <button class="btn btn-primary">{{ action }}</button>
        </form>
    </div>
</template>

<script>
	export default {
		props: ['title', 'action', 'task'],
		data() {
			return {
				draft: clone(this.task)
			}
		},
		methods: {
			save() {
				this.$emit('save', this.draft);
			}
		}
	}
</script>









