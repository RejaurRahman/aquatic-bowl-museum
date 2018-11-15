<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand logo-section">
        <a class="navbar-item" href="/">
          <img src="../assets/images/logo-white.png" alt="">
        </a>
        <div class="navbar-burger" @click="menuClicked();" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu menu-section" :class="{ 'is-active': showNav }">
        <div class="background-menu-layer"></div>
        <div class="navbar-start">
          <router-link class="navbar-item page1" to="/">home</router-link>
          <router-link class="navbar-item page2" to="/about">about aquatic bowl life</router-link>
          <router-link class="navbar-item page2" to="/discover-zone">discover zone</router-link>
        </div>
      </div>
    </div>  
  </nav>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        activePage: 'page1',
        showNav: false
      }
    },

    methods: {
      menuClicked() {
        this.showNav = !this.showNav;

        var siteHtml = document.querySelector('html');
        var overlay = document.querySelector('.navbar-overlay');

        siteHtml.classList.toggle('hide-scrollbar');
        overlay.classList.toggle('display-overlay')
      }
    },

    watch: {
      '$route'(to) {
        if (to.name == 'home') {
          var navbar = document.querySelector('nav.navbar');
          navbar.classList.add('homeNavbar');
          navbar.classList.remove('notHomeNavbar');
        } else if (to.name !== 'home') {
          var navbar = document.querySelector('nav.navbar');
          navbar.classList.add('notHomeNavbar');
          navbar.classList.remove('homeNavbar');
        }
      }
    },

    mounted() {
      if (this.$route.name == 'home') {
        var navbar = document.querySelector('nav.navbar');
        navbar.classList.add('homeNavbar');
        navbar.classList.remove('notHomeNavbar');
      } else if (this.$route.name != 'home') {
        var navbar = document.querySelector('nav.navbar');
        navbar.classList.add('notHomeNavbar');
        navbar.classList.remove('homeNavbar');
      }
    }
  }
</script>

<style scoped lang="scss">
  .navbar {
    width: 100%;
    height: 105px;
    background-color: transparent;
    position: absolute;
    top: 0px;
    z-index: 3;
    &.notHomeNavbar {
      background: #38d6d3;
      .background-menu-layer {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100%;
        background: url("../assets/images/home/home-banner.jpg");
        background-size: cover;
        background-position: top -220px center;
        background-repeat: no-repeat;
      }
    }
    @media (max-width: 1085px) {
      position: fixed;
    }
    .container {
      .logo-section {
        height: 105px;
        min-height: 100%;
        padding: 0.85rem .75rem;
        margin-left: 0px;
        @media (min-width: 1086px) {
          width: 50%;
        }
        @media (max-width: 1085px) {
          padding-left: 20px;
          padding-right: 20px;
          background: #38d6d3;
        }
        .navbar-item {
          padding: 0px;
          display: block;
          img {
            display: block;
            margin: 0px auto;
            max-height: 4.75rem;
          }
        }
      }
      .navbar-burger {
        top: 4px;
        @media (min-width: 1086px) {
          display: none !important;
        }
        &:hover, &:focus {
          background: transparent;
          outline: none;
        }
        span {
          height: 8px;
          border-radius: 8px 8px 8px 8px;
          &:nth-child(1) {
            top: calc(50% - 22px);
          }
          &:nth-child(2) {
            top: calc(50% - 3px);
          }
          &:nth-child(3) {
            top: calc(50% - -15px);
          }
        }
        &.is-active {
          span {
            &:nth-child(1) {
              top: calc(50% - 6px);
            }
            &:nth-child(2) {
              top: calc(50% - 1px);
            }
            &:nth-child(3) {
              top: calc(50% - -4px);
            }
          }
        }
        span {
          width: 100%;
          left: 0px;
          background: #FFF;
        }
      }
      .navbar-menu {
        position: relative;
        @media (min-width: 1086px) {
          display: flex;
          background: transparent;
          box-shadow: none;
          padding: 0px;
        }
        @media (max-width: 1085px) {
          padding: 40px 0px;
          background: #38d6d3;
        }
        .navbar-start {
          margin-left: auto;
          margin-right: 0px;
          @media (min-width: 1086px) and (max-width: 1088px) {
            width: 100%;
            display: flex;
            margin: 0px 19.225px;
          }
          .navbar-item {
            color: #FFF;
            font-size: 20px;
            line-height: 20px;
            font-weight: normal;
            text-transform: uppercase;
            margin-right: 40px;
            padding: 0px;
            text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
            @media (min-width: 1280px) and (max-width: 1471px) {
              font-size: 18px;
              line-height: 18px;
              margin-right: 40px;
            }
            @media (min-width: 1086px) and (max-width: 1279px) {
              font-size: 16px;
              line-height: 16px;
              margin-right: 25px;
            }
            @media (min-width: 1086px) and (max-width: 1088px) {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            @media (max-width: 1085px) {
              margin-right: 0px;
              color: #FFF;
              padding: 20px 40px;
              text-align: left;
              font-weight: bold;
              text-shadow: none;
            }
            &:last-child {
              margin-right: 0px;
            }
            &.router-link-exact-active {
              color: #28817f;
              background: transparent;
              transition: all 500ms ease;
            }
            &:hover {
              color: #28817f;
              background: transparent;
              transition: all 500ms ease;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1086px) and (max-width: 1279px) {
    .navbar {
      .container {
        max-width: 960px !important;
        width: 960px !important;
        display: inline-flex;
      }
    }
  }
</style>