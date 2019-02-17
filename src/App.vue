<template>
  <div id="app">
    <Header :class="{ 'homeNav': $route.path == '/', 'otherNav': $route.path !== '/' }"></Header>
    <router-view />
  </div>
</template>

<script>
  import './assets/fonts/fonts.scss';
  import 'bulma/css/bulma.min.css';
  import 'fullpage.js/dist/fullpage.min.css';
  import Header from "./views/Header.vue"
  import Home from "./views/Home.vue"
  import About from "./views/About.vue"
  import DiscoverZone from "./views/DiscoverZone.vue"
  import Privacy from "./views/Privacy.vue"
  import Terms from "./views/Terms.vue"

  export default {
    name: 'app',

    components: {
      Header,
      Home,
      About,
      DiscoverZone,
      Privacy,
      Terms
    },
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

  html {
    &.hide-scrollbar {
      body {
        @media (max-width: 1085px) {
          .navbar-overlay {
            opacity: 0.75;
            position: fixed;
          }
        }
      }
    }
  }

  .social-section {
    text-align: left;
    border-top: 1px solid #008080;
    padding-top: 50px;
    margin-bottom: 50px;
    @media (min-width: 40em) and (max-width: 1085px) {
      margin-right: 50px;
      margin-left: 50px;
    }
    @media screen and (max-width: 39.9375em) {
      margin-right: 20px;
      margin-left: 20px;
    }
    p {
      color: #444;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      height: 48px;
      text-transform: uppercase;
      font-weight: 500;
      vertical-align: top;
      padding-right: 15px;
      font-size: 18px;
    }
    .share_twitter, .share_facebook, .share_linkedIn, .share_mail {
      width: 44px;
      display: inline-block;
      margin-right: 10px;
      &:hover {
        a {
          svg {
            fill: #444;
            transition: fill 0.5s ease;
          }
        }
      }
      &:hover, &:focus {
        a {
          background: none;
          transition: none;
        }
      }
      a {
        display: block;
        border: none;
        width: inherit;
        height: inherit;
        line-height: inherit;
        transition: none;
        background: none;
        @media screen and (max-width: 39.9375em) {
          width: 100% !important;
        }
        svg {
          fill: #008080;
          transition: fill 0.5s ease;
        }
      }
    }
  }

  .home-page {
    .fp-section {
      padding: 0px;
      &:last-child {
        height: 100% !important;
        .fp-tableCell {
          height: 100%!important;
        }
      }
      .fp-tableCell {
        .home-container {
          .home-slide-section {
            height: 100vh;
            background-repeat: no-repeat !important;
            justify-content: space-between;
            .home-slide-inner {
              margin: 0px;
              padding-top: 119px;
              height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          }
        }
      }
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