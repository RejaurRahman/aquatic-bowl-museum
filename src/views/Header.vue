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
        <div class="navbar-start">
          <a class="navbar-item page1" @click.prevent="goToMenu('/')" :class="{'router-link-exact-active': $route.path == '/'}">home</a>
          <a class="navbar-item page2" @click.prevent="goToMenu('/about')" :class="{'router-link-exact-active': $route.path == '/about'}">about</a>
          <a class="navbar-item page3" @click.prevent="goToMenu('/discover-zone')" :class="{'router-link-exact-active': $route.path == '/discover-zone' || $route.path.includes('/animalprofile') }">discover zone</a>
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
      goToMenu(path) {
        this.showNav = !this.showNav;

        var siteHtml = document.querySelector('html');
        siteHtml.classList.remove('hide-scrollbar');

        this.$router.push({ path:path });

        window.scrollTo(0, 0)
      },
      menuClicked() {
        this.showNav = !this.showNav;

        var siteHtml = document.querySelector('html');
        siteHtml.classList.add('hide-scrollbar');

        if (this.showNav == false) {
          siteHtml.classList.remove('hide-scrollbar');
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  .navbar {
    width: 100%;
    height: 6.563rem;
    position: absolute;
    top: 0rem;
    z-index: 3;
    background: transparent;
    @media (max-width: 849px) {
      &::before {
        content: none !important;
      }
    }
    &::before {
      content: '';
      width: 50%;
      height: 100%;
      position: absolute;
      background: #38d6d3;
    }
    &.homeNav, &.otherNav {
      &::after {
        content: '';
        width: 50%;
        height: 100%;
        margin-left: 50%;
        position: absolute;
        z-index: -1;
      }
      @media (max-width: 849px) {
        &::after {
          content: none !important;
        }
      }
    }
    &.homeNav {
      &::after {
        background: #FFF;
        opacity: 0.6;
      }
      .navbar-menu {
        .navbar-start {
          .navbar-item {
            color: #444;
            transition: all 500ms ease;
            &.router-link-exact-active {
              color: #008080;
              transition: all 500ms ease;
            }
            &:hover {
              color: #008080;
              transition: all 500ms ease;
            }
          }
        }
      }
    }
    &.otherNav {
      background: #008080;
      &::after {
        background: #008080;
      }
      .navbar-menu {
        .navbar-start {
          .navbar-item {
            color: #FFF;
            transition: all 500ms ease;
            &.router-link-exact-active {
              color: #38d6d3;
              transition: all 500ms ease;
            }
            &:hover {
              color: #38d6d3;
              transition: all 500ms ease;
            }
          }
        }
      }
    }
    @media (max-width: 1084px) {
      position: fixed;
    }
    .container {
      .logo-section {
        height: 6.563rem;
        min-height: 100%;
        padding: 0.85rem .75rem;
        margin-left: 0px;
        @media (min-width: 1085px) {
          width: 50%;
        }
        @media (max-width: 1085px) {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
          background: #38d6d3;
        }
        .navbar-item {
          padding: 0rem;
          display: block;
          img {
            display: block;
            margin: 0rem auto;
            max-height: 4.75rem;
            @media (max-width: 639px) {
              margin: 0.85rem auto 0px auto;
              max-height: 3rem;
            }
          }
        }
      }
      .navbar-burger {
        top: 50%;
        right: 0.75rem;
        margin-top: calc(-3.25rem / 2);
        @media (min-width: 1085px) {
          display: none !important;
        }
        &:hover, &:focus {
          background: transparent;
          outline: none;
        }
        span {
          height: 0.5rem;
          border-radius: 0.5rem;
          &:nth-child(1) {
            top: calc(50% - 1.375rem);
          }
          &:nth-child(2) {
            top: calc(50% - 0.1875rem);
          }
          &:nth-child(3) {
            top: calc(50% - -0.9375rem);
          }
        }
        &.is-active {
          span {
            &:nth-child(1) {
              top: calc(50% - 0.375rem);
            }
            &:nth-child(2) {
              top: calc(50% - 0.0625rem);
            }
            &:nth-child(3) {
              top: calc(50% - -0.25rem);
            }
          }
        }
        span {
          width: 100%;
          left: 0rem;
          background: #FFF;
        }
      }
      .navbar-menu {
        position: relative;
        @media (min-width: 1085px) and (max-width: 1088px) {
          width: 100%;
        }
        @media (min-width: 1085px) {
          display: flex;
          background: transparent;
          box-shadow: none;
          padding: 0rem;
        }
        @media (max-width: 1084px) {
          padding: 2.5rem 0rem;
          background: #38d6d3;
        }
        .navbar-start {
          margin-left: auto;
          margin-right: 0rem;
          @media (min-width: 1085px) and (max-width: 1088px) {
            width: 100%;
            display: flex;
            margin: 0rem 1.188rem;
            flex-direction: row;
            justify-content: flex-end;
          }
          @media screen and (min-width: 1088px) and (max-width: 1088px) {
            width: calc(50% - 1.875rem) !important;
          }
          .navbar-item {
            font-size: 1.25rem;
            line-height: 1.25rem;
            font-weight: normal;
            text-transform: uppercase;
            margin-right: 2.5rem;
            padding: 0rem;
            @media (min-width: 1280px) and (max-width: 1471px) {
              font-size: 1.125rem;
              line-height: 1.125rem;
              margin-right: 2.5rem;
            }
            @media (min-width: 1085px) and (max-width: 1279px) {
              font-size: 1rem;
              line-height: 1rem;
              margin-right: 1.563rem;
            }
            @media (min-width: 1085px) and (max-width: 1088px) {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            @media (max-width: 1084px) {
              margin-right: 0rem;
              color: #FFF;
              padding: 1.25rem 2.5rem;
              text-align: left;
              font-weight: bold;
              text-shadow: none;
              &.router-link-exact-active {
                color: #008080;
              }
            }
            &:last-child {
              margin-right: 0rem;
            }
            &.router-link-exact-active {
              background: transparent;
            }
            &:hover {
              background: transparent;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1085px) and (max-width: 1279px) {
    .navbar {
      .container {
        max-width: 960px !important;
        width: 960px !important;
        display: inline-flex;
      }
    }
  }
</style>
