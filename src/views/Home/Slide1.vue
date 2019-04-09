<template>
  <div class="home-container">
    <div class="home-slide-section">
      <div class="home-slide-inner">
        <div class="container">
          <div class="container-section">
            <div class="top-inner-section">
              <h1>discover the aquatic bowl experience</h1>
              <button class="blue-button link-icon" @click="discoverZone()">
                <span>view the fish zones</span>
              </button>
            </div>
            <div class="bottom-inner-section">
              <p>At our lively charity we always aim to prevent wasteful use of our water animals. By visiting Aquatic Bowl Museum you will be contributing to protect the marine environment as well as possibly having a great water living experience here.</p>
            </div>
            <img src="../../assets/images/home/slide-asset-3.png" class="screen-image display-other-responsive">
          </div>
        </div>
      </div>
      <div class="bottom-section">
        <div class="mouse-animate"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Slide1",
    methods:{
      discoverZone() {
        this.$router.push('/discover-zone')
        window.scrollTo(0, 0)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home-container {
    .home-slide-section {
      background-image: url('../../assets/images/home/backgrounds/homepage-slide-1-bg.jpg');
      background-position: center center;
      background-size: cover !important;
      @media screen and (max-width: 850px) {
        background: #e7f1f3 !important;
      }
      .home-slide-inner {
        @media screen and (max-width: 1023px) {
          padding-top: 7.438rem !important;
        }
      }
      .container {
        height: 100%;
        .container-section {
          height: 100%;
          .top-inner-section {
            height: 60%;
            margin-left: 65%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media screen and (max-width: 850px) {
              height: 100%;
              margin-left: 0rem;
            }
            h1 {
              font-size: 3.75rem;
              line-height: 3.688rem;
              text-transform: uppercase;
              text-align: left;
              font-weight: 700;
              padding-right: 1.563rem;
              padding-bottom: 1.563rem;
              color: #008080;                     
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
            }
            button {
              text-transform: uppercase;
              border: 2px solid #008080;
              display: block;
              padding: 0rem 1.25rem;
              line-height: 3.938rem;
              width: 280px;
              color: #008080;
              text-align: center;
              font-size: 1.125rem;
              font-weight: bold;
              position: relative;
              cursor: pointer;
              background: #FFF;
              margin-top: 1.25rem;
              transition: all 500ms ease;
              &:hover {
                background: #008080;
                color: #FFF;
                border: 2px solid #008080;
                transition: all 500ms ease;
              }
            }
          }
          img {
            @media screen and (max-width: 850px) {
              padding-top: 1.125rem;
            }
          }
          .bottom-inner-section {
            height: calc(30% - 80px);
            margin-top: 10%;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media screen and (max-width: 850px) {
              height: 100%;
              width: 100%;
              margin-top: 2rem;
            }
            p {
              text-align: left;
              @media screen and (min-width: 1025px) and (max-width: 1087px) {
                padding-left: 0.9375rem;
              }
            }
          }
        }
      }
    }
  }
</style>