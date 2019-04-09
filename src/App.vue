<template>
  <div class="app-container">
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
  .app-container {
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
      top: 0rem;
      opacity: 0rem;
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
    .display-other-responsive {
      @media (min-width: 850px) {
        display: none !important;
      }
      @media (max-width: 849px) {
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
    .no-margin {
      margin: 0rem;
    }
  }

  .facilities-columns {
    margin: 0rem;
    .facilities-inner {
      h4 {
        text-transform: uppercase;
      }
      p {
        span {
          display: block;
          margin-bottom: 0.9375rem;
        }
      }
    }
  }

  html {
    overflow-x: hidden;
    &.hide-scrollbar {
      overflow-y: hidden;
    }  
  }

  .modal {
    .modal-content {
      p {
        color: #000;
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0rem;
        }
      }     
    }
  }

  .backToTop {
    transition: all 1s ease;
    position: fixed;
    bottom: 1.25rem;
    right: 1.875rem;
    z-index: 0;
    cursor: pointer;
    &:hover, &:focus {
      outline: none;
    }
    span {
      display: block;
      color: #28817f;
      text-transform: uppercase;
      font-size: 1.125rem;
      line-height: 1.313rem;
      font-weight: 500;
    }
    img {
      display: block;
      margin: 0rem auto 0.625rem auto;
    }
  }

  html {
  overflow-x: hidden !important;
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
    padding-top: 3.125rem;
    margin-bottom: 3.125rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (min-width: 40em) and (max-width: 1085px) {
      margin-right: 3.125rem;
      margin-left: 3.125rem;
    }
    @media screen and (max-width: 39.9375em) {
      margin-right: 1.25rem;
      margin-left: 1.25rem;
    }
    p {
      color: #444;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      height: 3rem;
      text-transform: uppercase;
      font-weight: 500;
      vertical-align: top;
      padding-right: 0.9375rem;
      font-size: 1.125rem;
    }
    .social-section-icons {
      display: inline-flex;
    }
    .share_twitter, .share_facebook, .share_linkedIn, .share_mail {
      width: 2.75rem;
      display: inline-block;
      margin-right: 0.625rem;
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
        pointer-events: none;
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
      padding: 0rem;
      @media screen and (max-width: 1023px) {
        height: 100% !important;
        display: block !important;
        .fp-tableCell {
          height: 100% !important;
          display: block !important;
        }        
      }
      &:last-child {
        height: 100% !important;
        .fp-tableCell {
          height: 100% !important;
        }
      }
      .fp-tableCell {
        .home-container {
          .home-slide-section {
            height: 100vh;
            background-repeat: no-repeat !important;
            justify-content: space-between;
            @media screen and (min-width: 101.5rem) and (max-height: 639px) {
              height: 100%;
            }
            @media screen and (max-width: 1023px) {
              height: 100%;
              padding: 3.125rem 0rem;
            }
            .home-slide-inner {
              margin: 0rem;
              padding-top: 119px;
              height: calc(100vh - 3.75rem);
              display: flex;
              flex-direction: column;
              justify-content: center;
              @media screen and (min-width: 101.5rem) and (max-height: 639px) {
                height: calc(100% - 3.75rem);
              }
              @media screen and (max-width: 1023px) {
                height: calc(100% - 3.75rem);
                padding-top: 0rem;
                padding-left: 1.125rem;
                padding-right: 1.125rem;
              }
              .slide-2-image, .slide-3-image {
                @media screen and (max-width: 1023px) {
                  width: 100%;
                }
              }
              img {
                display: block;
                &.center-image {
                  margin-left: auto;
                  margin-right: auto;
                }
                &.screen-image {
                  max-height: 100vh;
                  @media screen and (max-width: 1023px) {
                    max-height: 100%;
                  }
                }
              }
              .main-text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 0rem;
                padding-right: 0rem;
                @media (max-width: 1023px) {
                  width: 100%;
                }
                &.suitable-vertically {
                  @media screen and (min-width: 1088px) and (max-width: 1279px) {
                    padding-left: 0rem !important;
                  }
                  @media screen and (max-width: 1023px) {
                    display: block !important;
                  }
                  @media screen and (max-width: 1023px) {
                    padding: 0rem;
                  }
                  h1 {
                    font-size: 3.75rem;
                    line-height: 3.688rem;
                    text-transform: uppercase;
                    text-align: left;
                    font-weight: 700;
                    padding-right: 1.563rem;
                    padding-bottom: 1.563rem;
                    &.color-green {
                      color: #008080;                     
                    }
                    @media screen and (min-width: 1472px) and (min-height: 62.5rem) and (max-height: 800px) {
                      font-size: 6.913006993006993vh !important;
                      line-height: 6.75990675990676vh !important;
                    }
                    @media screen and (min-width: 1280px) and (max-width: 1471px) and (min-height: 62.5rem) and (max-height: 800px) {
                      font-size: 5.8995056422569vh !important;
                      line-height: 5.671195139973794vh !important;
                    }
                    @media screen and (min-width: 101.5rem) and (max-width: 1279px) and (min-height: 62.5rem) and (max-height: 800px) {
                      font-size: 4.872064825930372vh !important;
                      line-height: 4.643754323647267vh !important;
                    }
                    @media screen and (min-width: 101.5rem) and (max-height: 639px) {
                      font-size: 2.813rem !important;
                      line-height: 2.875rem !important;
                    }
                    @media screen and (max-width: 1023px) {
                      font-size: 2rem !important;
                      line-height: 2.063rem !important;
                    }
                    @media screen and (min-width: 101.5rem) and (min-height: 62.5rem) and (max-height: 700px) {
                      padding-bottom: 0.9375rem;
                    }
                    span {
                      display: block;
                    }
                  }
                  p {
                    @media screen and (min-width: 101.5rem) and (min-height: 62.5rem) and (max-height: 700px) {
                      font-size: 1rem;
                    }
                  }
                }
                @media screen and (min-width: 101.5rem) and (max-width: 1087px) {
                  padding-left: 1.25rem;
                }
                p {
                  text-align: left;
                  font-size: 1.125rem;
                  font-weight: 400;
                  padding-right: 1.875rem;
                  &.color-black {
                    color: #000;
                  }
                  span {
                    text-transform: uppercase;
                    font-weight: bold;
                  }
                }
                .social-section {
                  padding-top: 0.9375rem;
                  margin-bottom: 0rem;
                  margin-left: 0rem;
                  margin-right: 0rem;
                  p {
                    color: #008080;
                    font-weight: bold;
                    @media screen and (max-width: 639px) {
                      padding-right: 0.625rem;
                    }
                  }
                }
                button {
                  text-transform: uppercase;
                  border: 2px solid #008080;
                  display: block;
                  padding: 0rem 1.25rem;
                  line-height: 3.938rem;
                  width: 17.5rem;
                  color: #008080;
                  text-align: center;
                  font-size: 1.125rem;
                  font-weight: bold;
                  position: relative;
                  cursor: pointer;
                  background: #FFF;
                  margin-top: 1.25rem;
                  transition: all 500ms ease;
                  @media (max-width: 639px) {
                    width: 280px;
                    font-size: 1rem;
                  }
                  @media (max-height: 640px) {
                    line-height: 8.411214953271028vh;
                  }
                  &:hover {
                    background: #008080;
                    color: #FFF;
                    border: 2px solid #008080;
                    outline: none;
                    transition: all 500ms ease;
                  }

                  &:focus {
                    outline: none;
                  }
                }
              }
            }
            .bottom-section {
              height: 3.75rem;
              position: relative;
              .mouse-animate {
                background: #008080 linear-gradient(transparent 0%, transparent 50%, darken(#008080,11%) 50%, darken(#008080,11%) 100%);
                position: relative;
                width: 2rem;
                height: 3.063rem;
                background-size: 100% 100%;
                border-radius: 100px;
                background-size: 225%;
                display: block;
                margin: 0rem auto;
                animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
                &::before, &::after {
                  content: "";
                  position: absolute;
                  top: 0rem;
                  right: 0rem;
                  bottom: 0rem;
                  left: 0rem;
                  margin: auto;
                }
                &::before {
                  width: calc(2rem - 0.375rem);
                  height: calc(3.063rem - 0.375rem);
                  background: #FFF;
                  border-radius: 100px;
                }
                &::after {
                  background: darken(#008080,11%);
                  width: 0.625rem;
                  height: 0.625rem;
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
    height: calc(100vh - 4.063rem * 2);
    margin-top: 4.063rem;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
    top: 0rem;
    transition: all 500ms ease;
    @media (max-width: 1023px) {
      display: none !important;
    }
    &:not(.left-side-nav) {
      right: 0rem !important;
      transition: all 500ms ease;
      ul {
        li {
          a {
            span {
              &.nav-icon {
                margin: 0rem 0rem 0rem auto !important;
              }
            }
          }
        }
      }
    }
    &.left-side-nav {
      left: 0rem !important;
      transition: all 500ms ease;
      ul {
        li {
          a {
            span {
              &.nav-icon {
                margin: 0rem auto 0rem 0rem !important;
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
                margin-bottom: 0rem !important;
              }
            }
          }
        }
        a {
          display: block;
          position: relative;
          padding-top: 0.6875rem;
          padding-bottom: 0.6875rem;
          &.active, &.hover-view {
            span {
              &.nav-icon {
                border-radius: 0rem !important;
                width: 5.625rem !important;
                height: 0.4375rem !important;
                left: 0rem;
                transition: all 500ms ease;
              }
            }
          }
          span {
            &.nav-icon {
              display: block;
              background: #38d6d3;
              width: 3rem;
              height: 0.125rem;
              left: 1.875rem;
              border-radius: 0rem;
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
        z-index: 2;
        .VueCarousel-slide {
          .animal-bg {
            height: 80vh;
            width: 100%;
            @media (min-width: 769px) and (max-width: 1024px) {
              height: 50vh;
            }
            @media (max-width: 768px) {
              height: 40vh;
            }
            img {
              display: block;
            }
          }
        }
      }
      .VueCarousel-pagination {
        margin: 0rem auto;
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
        @media screen and (max-width: 768px) {
          padding-right: 0rem;
        }
        .VueCarousel-dot-container {
          margin-top: 0rem !important;
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
            padding: 0rem !important;
            margin: 0rem 0.625rem !important;
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

  .animal-box {
    p {
      font-size: 1.125rem;
      font-weight: 300;
      span {
        display: block;
        margin-bottom: 1.25rem;
        &.highlighted-text {
          color: #38d6d3;
          font-size: 1.25rem;
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
    transform: scale(1) translateY(-1.25rem);
  }
  6% {
    opacity: 1;
    transform: scale(0.9) translateY(1.25rem/4);
  }
  14% {
    opacity: 0;
    transform: scale(0.4) translateY(1.25rem*2);
  }
  15%, 19% {
    opacity: 0;
    transform: scale(0.4) translateY(-1.25rem);
  }
  28%, 29.99% {
    opacity: 1;
    transform: scale(1) translateY(-1.25rem);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-1.25rem);
  }
  36% {
    opacity: 1;
    transform: scale(0.9) translateY(1.25rem/4);
  }
  44% {
    opacity: 0;
    transform: scale(0.4) translateY(1.25rem*2);
  }
  45%, 49% {
    opacity: 0;
    transform: scale(0.4) translateY(-1.25rem);
  }
  58%, 59.99% {
    opacity: 1;
    transform: scale(1) translateY(-1.25rem);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-1.25rem);
  }
  66% {
    opacity: 1;
    transform: scale(0.9) translateY(1.25rem/4);
  }
  74% {
    opacity: 0;
    transform: scale(0.4) translateY(1.25rem*2);
  }
  75%, 79% {
    opacity: 0;
    transform: scale(0.4) translateY(-1.25rem);
  }
  88%, 100% {
    opacity: 1;
    transform: scale(1) translateY(-1.25rem);
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
    .staffSection .staff-block,
    .discover-zone-section .aligned-flex {
      display: inline-block !important;
    }
    .navbar.homeNav {
      background: #FFF;
    }
    .social-section {
      padding-top: 0rem;
    }
  }

  @supports (-ms-ime-align: auto) {
   .centered-flex {
      display: block !important;
    }
  }
</style>