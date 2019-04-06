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
            h1 {
              font-size: 60.5579px;
              line-height: 59.2168px;
              text-transform: uppercase;
              text-align: left;
              font-weight: 700;
              padding-right: 25px;
              padding-bottom: 25px;
              color: #008080;                     
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
              @media (min-width: 1024px) and (max-height: 640px) {
                font-size: 37.7568px !important;
                line-height: 36.2956px !important;
              }
              @media (min-width: 1024px) and (min-height: 640px) and (max-height: 700px) {
                padding-bottom: 15px;
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
              &:hover {
                background: #008080;
                color: #FFF;
                border: 2px solid #008080;
                transition: all 500ms ease;
              }
            }
          }
          .bottom-inner-section {
            height: calc(30% - 80px);
            margin-top: 10%;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
              text-align: left;
            }
          }
        }
      }
    }
  }
</style>