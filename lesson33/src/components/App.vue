<template>
    <div id="app" class="container">
        <h1>Curso de Vue - styde.net</h1>

        <app-tasks></app-tasks>

        <footer class="footer">
            <p>&copy; 2017 Styde.net.</p>
        </footer>
    </div>
</template>

<script>
import Tasks from "components/Task/Tasks.vue"

export default {
    components: {
        'app-tasks': Tasks
    }
}
</script>

<style lang="scss">
    @import "src/sass/app";

    body {
        margin: 10px;
    }

    .container {
        max-width: 650px;

        h2 {
            margin-bottom: 20px;
        }

        footer {
            margin: 40px 0;
            padding-top: 20px;
            border-top: 1px solid #ccc;
            color: #999;
        }
    }
</style>











