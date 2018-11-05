<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <div class="navbar-overlay"></div>
  </div>
</template>

<script>
  import './assets/fonts/fonts.scss';
  import 'bulma/css/bulma.min.css';
  import Header from "./views/Header.vue"
  import Footer from "./views/Footer.vue"

  export default {
    name: 'app',

    components: {
      Header,
      Footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .navbar-overlay {
      background: #000;
      z-index: 2;
      height: 100%;
      width: 100%;
      display: block;
      top: 0px;
      opacity: 0;
      &.display-overlay {
        opacity: 0.75;
        position: fixed;
      }        
    }
  }

  .hide-scrollbar {
    overflow-y: hidden;
  }
</style>
