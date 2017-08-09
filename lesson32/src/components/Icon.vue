<template>
    <span :class="cssClasses" aria-hidden="true"></span>
</template>

<script>
export default {
    props: ['img'],
    computed: {
        cssClasses() {
            return 'glyphicon glyphicon-'+this.img;
        }
    }
}
</script>