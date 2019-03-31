<template>
  <div id="app">
    <Header :class="{ 'homeNav': $route.path == '/', 'otherNav': $route.path !== '/' }"></Header>
    <router-view
      @directionSliderNav="v => directionSliderNav = v"
      :directionSliderNav="directionSliderNav"
    ></router-view>
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
    data() {
      return {
        directionSliderNav: true
      }
    },
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
    .centered-flex {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
    .display-alternate-desktop {
      @media (min-width: 1024px) {
        display: block !important;
      }
      @media (max-width: 1023px) {
        display: none !important;
      }
    }
    .display-desktop {
      @media (min-width: 1024px) {
        display: flex !important;
      }
      @media (max-width: 1023px) {
        display: none !important;
      }
    }
    .display-responsive {
      @media (min-width: 1024px) {
        display: none !important;
      }
      @media (max-width: 1023px) {
        display: block !important;
      }
    }
    .column-reversed {
      @media (max-width: 1023px) {
        display: flex !important;
        flex-direction: column-reverse;
      }
    }
    .display-block-responsive {
      @media (max-width: 1023px) {
        display: block !important;
      }
    }
    .position-relative {
      position: relative;
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
              height: calc(100vh - 60px);
              display: flex;
              flex-direction: column;
              justify-content: center;
              @media (max-width: 1023px) {
                height: calc(100% - 60px);
              }
              img {
                display: block;
                &.center-image {
                  margin-left: auto;
                  margin-right: auto;
                }
                &.screen-image {
                  max-height: 100vh;
                }
              }
              .main-text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 0px;
                padding-right: 0px;
                @media (max-width: 1023px) {
                  width: 100%;
                }
                &.suitable-vertically {
                  @media (min-width: 1088px) and (max-width: 1279px) {
                    padding-left: 0px !important;
                  }
                  @media (max-width: 1023px) {
                    display: block !important;
                  }
                  @media (max-width: 1023px) {
                    padding: 0px;
                  }
                  h1 {
                    font-size: 60.5579px;
                    line-height: 59.2168px;
                    text-transform: uppercase;
                    text-align: left;
                    font-weight: 700;
                    padding-right: 25px;
                    padding-bottom: 25px;
                    &.color-green {
                      color: #008080;                     
                    }
                    @media (min-width: 1472px) and (min-height: 640px) and (max-height: 800px) {
                      font-size: 6.913006993006993vh !important;
                      line-height: 6.75990675990676vh !important;
                    }
                    @media (min-width: 1280px) and (max-width: 1471px) and (min-height: 640px) and (max-height: 800px) {
                      font-size: 5.8995056422569vh !important;
                      line-height: 5.671195139973794vh !important;
                    }
                    @media (min-width: 1088px) and (max-width: 1279px) and (min-height: 640px) and (max-height: 800px) {
                      font-size: 4.872064825930372vh !important;
                      line-height: 4.643754323647267vh !important;
                    }
                    @media (min-width: 1024px) and (max-width: 1087px) and (min-height: 640px) and (max-height: 800px) {
                      font-size: 4.99776710684274vh !important;
                      line-height: 4.769456604559634vh !important;
                    }
                    @media (min-width: 1024px) and (min-height: 640px) and (max-height: 700px) {
                      padding-bottom: 15px;
                    }
                    span {
                      display: block;
                    }
                  }
                  p {
                    @media (min-width: 1024px) and (min-height: 640px) and (max-height: 700px) {
                      font-size: 16px;
                    }
                  }
                }
                @media (min-width: 1024px) and (max-width: 1087px) {
                  padding-left: 20px;
                }
                p {
                  text-align: left;
                  font-size: 18px;
                  font-weight: 400;
                  padding-right: 30px;
                  &.color-black {
                    color: #000;
                  }
                  span {
                    text-transform: uppercase;
                    font-weight: bold;
                  }
                }
                .social-section {
                  padding-top: 15px;
                  margin-bottom: 0px;
                  p {
                    color: #008080;
                    font-weight: bold;
                  }
                }
                button {
                  text-transform: uppercase;
                  border: 2px solid #008080;
                  display: block;
                  padding: 0px 20px;
                  line-height: 63px;
                  width: 280px;
                  color: #008080;
                  text-align: center;
                  font-size: 18px;
                  font-weight: bold;
                  position: relative;
                  cursor: pointer;
                  background: #FFF;
                  margin-top: 20px;
                  transition: all 500ms ease;
                  @media (max-width: 639px) {
                    width: 100%;
                    font-size: 16px;
                  }
                  @media (max-height: 640px) {
                    line-height: 8.411214953271028vh;
                  }
                  &:hover {
                    background: #008080;
                    color: #FFF;
                    border: 2px solid #008080;
                    transition: all 500ms ease;
                  }

                  &:focus {
                    outline: none;
                  }
                }
              }
            }
            .bottom-section {
              height: 60px;
              position: relative;
              .mouse-animate {
                background: #008080 linear-gradient(transparent 0%, transparent 50%, darken(#008080,11%) 50%, darken(#008080,11%) 100%);
                position: relative;
                width: 32px;
                height: 49px;
                background-size: 100% 100%;
                border-radius: 100px;
                background-size: 225%;
                display: block;
                margin: 0px auto;
                animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
                &::before, &::after {
                  content: "";
                  position: absolute;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                  margin: auto;
                }
                &::before {
                  width: 32px - 6px;
                  height: 49px - 6px;
                  background: #FFF;
                  border-radius: 100px;
                }
                &::after {
                  background: darken(#008080,11%);
                  width: 10px;
                  height: 10px;
                  border-radius: 100%;
                  animation: trackBallSlide 5s linear infinite;
                }
              }
            }
          }
        }
      }
    }
  }

  #home-nav {
    position: fixed;
    display: flex;
    height: calc(100vh - 65px * 2);
    margin-top: 65px;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
    top: 0px;
    transition: all 500ms ease;
    @media (max-width: 1023px) {
      display: none !important;
    }
    &:not(.left-side-nav) {
      right: 0px !important;
      transition: all 500ms ease;
      ul {
        li {
          a {
            span {
              &.nav-icon {
                margin: 0px 0px 0px auto !important;
              }
            }
          }
        }
      }
    }
    &.left-side-nav {
      left: 0px !important;
      transition: all 500ms ease;
      ul {
        li {
          a {
            span {
              &.nav-icon {
                margin: 0px auto 0px 0px !important;
              }
            }
          }
        }
      }
    }
    ul {
      li {
        &:last-child {
          a {
            span {
              &.nav-icon {
                margin-bottom: 0px !important;
              }
            }
          }
        }
        a {
          display: block;
          position: relative;
          padding-top: 11px;
          padding-bottom: 11px;
          &.active, &.hover-view {
            span {
              &.nav-icon {
                border-radius: 0px !important;
                width: 90px !important;
                height: 7px !important;
                left: 0px;
                transition: all 500ms ease;
              }
            }
          }
          span {
            &.nav-icon {
              display: block;
              background: #38d6d3;
              width: 48px;
              height: 2px;
              left: 30px;
              border-radius: 0px;
              transition: all 500ms ease;
            }
          }
        }
      }
    }
  }

  .animal-profile-container {
    position: relative;
    .animal-selection {
      .VueCarousel-wrapper {
        .VueCarousel-slide {
          .animal-bg {
            height: 80vh;
            width: 100%;
            img {
              display: block;
            }
          }
        }
      }
      .VueCarousel-pagination {
        margin: 0px auto;
        padding-right: 10%;
        @media screen and (min-width: 1472px) {
          max-width: 1344px;
          width: 1344px;
        }
        @media screen and (min-width: 1280px) and (max-width: 1471px) {
          max-width: 1152px;
          width: 1152px;
        }
        @media screen and (min-width: 1088px) and (max-width: 1279px) {
          max-width: 960px;
          width: 960px;
        }
        .VueCarousel-dot-container {
          margin-top: 0px !important;
          position: relative;
          z-index: 1;
          @media screen and (min-width: 1472px) {
            margin-left: calc(1344px / 2 + 15%);
          }
          @media screen and (min-width: 1280px) and (max-width: 1471px) {
            margin-left: calc(1280px / 2 + 15%);
          }
          @media screen and (min-width: 1088px) and (max-width: 1279px) {
            margin-left: calc(960px / 2 + 15%);
          }
          .VueCarousel-dot {
            padding: 0px !important;
            margin: 0px 10px !important;
            &:hover, &:focus {
              outline: none;
            }
            &:not(.VueCarousel-dot--active) {
              background: #008080 !important;
              transition: all 500ms ease;
            }
            &.VueCarousel-dot--active {
              background: #38d6d3 !important;
              transition: all 500ms ease;
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

@keyframes colorSlide {
  0% { background-position: 0% 100%; }
  20% { background-position: 0% 0%; }
  21% { background: #008080; }
  29.99% { 
    background: darken(#008080,11%);
    background-position: 0% 0%;
  }
  30% {
    background: #008080;
    background-position: 0% 100%;
  }
  50% { background-position: 0% 0%; }
  51% { background: #008080; }
  59.99% {
    background: darken(#008080,11%);
    background-position: 0% 0%;
  }
  60% {
    background: #008080;
    background-position: 0% 100%;
  }
  80% { background-position: 0% 0%; }
  81% { background: #008080; }
  89.99%, 100% { background: darken(#008080,11%); }
}

@keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  6% {
    opacity: 1;
    transform: scale(0.9) translateY(20px/4);
  }
  14% {
    opacity: 0;
    transform: scale(0.4) translateY(20px*2);
  }
  15%, 19% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  28%, 29.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  36% {
    opacity: 1;
    transform: scale(0.9) translateY(20px/4);
  }
  44% {
    opacity: 0;
    transform: scale(0.4) translateY(20px*2);
  }
  45%, 49% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  58%, 59.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  66% {
    opacity: 1;
    transform: scale(0.9) translateY(20px/4);
  }
  74% {
    opacity: 0;
    transform: scale(0.4) translateY(20px*2);
  }
  75%, 79% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  88%, 100% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
}

@keyframes nudgeMouse {
  0% { transform: translateY(0); }
  20% { transform: translateY(8px); }
  30% { transform: translateY(0); }
  50% { transform: translateY(8px); }
  60% { transform: translateY(0); }
  80% { transform: translateY(8px); }
  90% { transform: translateY(0); }
}

@keyframes nudgeText {
  0% { transform: translateY(0); }
  20% { transform: translateY(2px); }
  30% { transform: translateY(0); }
  50% { transform: translateY(2px); }
  60% { transform: translateY(0); }
  80% { transform: translateY(2px); }
  90% { transform: translateY(0); }
}

@keyframes colorText {
  21% { color: #008080; }
  30% { color: darken(#008080,11%); }
  51% { color: #008080; }
  60% { color: darken(#008080,11%); }
  81% { color: #008080; }
  90% { color: darken(#008080,11%); }
}

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
   .centered-flex {
      display: block !important;
    }
  }

  @supports (-ms-ime-align: auto) {
   .centered-flex {
      display: block !important;
    }
  }
</style>