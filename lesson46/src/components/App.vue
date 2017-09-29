<template>
    <div id="app" class="container">
        <h1>Curso de Vue - styde.net</h1>

        <ul class="nav nav-tabs">
            <router-link tag="li" :to="{name: 'dashboard'}" active-class="active" exact><a>Dashboard</a></router-link>
            <router-link tag="li" :to="{name: 'tasks'}" active-class="active"><a>Tareas</a></router-link>
        </ul>

        <router-view></router-view>

        <footer class="footer">
            <p>&copy; 2017 Styde.net.</p>
        </footer>
    </div>
</template>

<script>
export default {
    //
}
</script>

<style lang="scss">
    @import "src/sass/app";

    body {
        margin: 10px;
    }

    .container {
        max-width: 920px;

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












