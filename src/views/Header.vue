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
          <a class="navbar-item page2" @click.prevent="goToMenu('about')" :class="{'router-link-exact-active': $route.path == '/about'}">about</a>
          <a class="navbar-item page3" @click.prevent="goToMenu('discover-zone')" :class="{'router-link-exact-active': $route.path == '/discover-zone'}">discover zone</a>
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

        this.$router.push({path:path});
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
    height: 105px;
    position: absolute;
    top: 0px;
    z-index: 3;
    background: transparent;
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
        height: 105px;
        min-height: 100%;
        padding: 0.85rem .75rem;
        margin-left: 0px;
        @media (min-width: 1085px) {
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
        @media (min-width: 1085px) {
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
        @media (min-width: 1085px) and (max-width: 1088px) {
          width: 100%;
        }
        @media (min-width: 1085px) {
          display: flex;
          background: transparent;
          box-shadow: none;
          padding: 0px;
        }
        @media (max-width: 1084px) {
          padding: 40px 0px;
          background: #38d6d3;
        }
        .navbar-start {
          margin-left: auto;
          margin-right: 0px;
          @media (min-width: 1085px) and (max-width: 1088px) {
            width: 100%;
            display: flex;
            margin: 0px 19.225px;
            flex-direction: row;
            justify-content: flex-end;
          }
          @media screen and (min-width: 1088px) and (max-width: 1088px) {
            width: calc(50% - 30px) !important;
          }
          .navbar-item {
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
            @media (min-width: 1085px) and (max-width: 1279px) {
              font-size: 16px;
              line-height: 16px;
              margin-right: 25px;
            }
            @media (min-width: 1085px) and (max-width: 1088px) {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            @media (max-width: 1084px) {
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