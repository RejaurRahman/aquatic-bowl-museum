<template>
  <div id="app">
    <Header class="headerSection"></Header>
    <router-view />
    <Footer></Footer>
    <a @click="BackToTop()" class="backToTop">
      <img src="./assets/images/back-to-top.png">
      <span>scroll to top</span>
    </a>
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
    },

    mounted() {
      window.onscroll = function() {
        scrollFunction()
      };

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.querySelector('.backToTop').style.display = "block";
          document.querySelector('.backToTop').style.animation = "showScrollTopBtn 2s 1";
        } else {
          document.querySelector('.backToTop').style.display = "none";
          document.querySelector('.backToTop').style.animation = "hideScrollTopBtn 2s 1";
        }
      }
    },

    methods: {
      BackToTop() {
        document.querySelector('.headerSection').scrollIntoView({
          behavior: 'smooth'
        });
      },
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
      opacity: 0px;
      &.display-overlay {
        opacity: 0.75;
        position: fixed;
      }
    }
  }

  .facilities-columns {
    margin: 0px;
    .facilities-inner {
      h4 {
        text-transform: uppercase;
      }
      p {
        span {
          display: block;
          margin-bottom: 15px;
        }
      }
    }
  }

  .hide-scrollbar {
    overflow-y: hidden;
  }

  .modal {
    .modal-content {
      p {
        color: #000;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0px;
        }
      }     
    }
  }

  .backToTop {
    transition: all 1s ease;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 0;
    cursor: pointer;
    &:hover, &:focus {
      outline: none;
    }
    span {
      display: block;
      color: #28817f;
      text-transform: uppercase;
      font-size: 18px;
      line-height: 21px;
      font-weight: 500;
    }
    img {
      display: block;
      margin: 0px auto 10px auto;
    }
  }

  @keyframes showScrollTopBtn {
   from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hideScrollTopBtn {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>