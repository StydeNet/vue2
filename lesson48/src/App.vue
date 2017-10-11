<template>
  <div id="app" class="container">
    <h1>Vuex</h1>
    <counter/>

    <p>El contador es: {{ count }}</p>
  </div>
</template>

<script>
import store from './store'
import Counter from './components/Counter.vue'

export default {
  components: {
    Counter
  },
  name: 'app',
  computed: {
    count() {
      return store.state.count;
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

