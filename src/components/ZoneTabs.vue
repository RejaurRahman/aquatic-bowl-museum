<template>
  <div>
    <div class="discover-tabs">
      <ul>
        <li v-for="tab in tabs" @click="selectedResultsTab(tab)">
          <a :class="{'is-active':tab.name === selectedTab.name}">{{tab.name}}</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div v-show="selectedTab.name=='freshwater'">
        <p>Fresh water is considered as naturally occurring water on many sufaces on the planet including: ponds, rivers, streams, glaciers and lakes. Fresh water is characterized by the public as having low concentrations levels of dissolved salts and other totally dissolved solids.</p>
        <p>The term "Fresh water" excludes seawater and brackish water although at times it will include waters which are  mineral-rich, such as chalybeate springs. Majority of the surface of fresh water and ground water can be highly unsuitable for people to drink without any small amount of purification due to the existance of chemical or biological contaminants.</p>
      </div>
      <div v-show="selectedTab.name=='saltwater'">
        <p>Saline water which is most commonly known around the world as salt water is water that will contain a huge amount of concentrated dissolved salts (mainly Sodium chloride. Salt water is mainly used for making food or maintaining to the original state and is mentioned as mostly saltier than the sea water and is called also as brine.</p>
        <p>Salt water is considered more dense than fresh water, which means that it will have more matter per its volume. Fresh water normally has a density of 1 g/ml, where as salt water can have an average density of around 1.025 g/ml.</p>
      </div>
      <div v-show="selectedTab.name=='ocean'">
        <p>An ocean is referred as the largest area of salt water between any continent. They are described as very big and they normally have the purpose of joining smaller sea together. Together, the oceans today are viewed as one ocean, because all the oceans across the world are joined. The smallest ocean in the world is Arctic Ocean. The deepest ocean in the world is Pacific ocean.</p>
        <p>Although mostly pulic have the perception that the ocean colour is blue due to the water level reflecting the blue sky, it can be considered as not true. The Water has a very small amount of blue color which ca only be viewed when there is a lot of water seen.</p>
        <p>However, the main reason of the colour of the ocean to be perceived as blue or blue with green colour of the oceans is due to the water absorbing the red section of the incoming light and it reflects the green and blue part of the light. After that We can then see the reflected light contrasting as the colour of water.</p>
      </div>
      <div v-show="selectedTab.name=='shark'">
        <p>Sharks are described as a group of fish characterized by a cartilaginous skeleton with five to seven gill slits on either side of the head as well as pectoral fins. The earliest known sharks back date to living more than 420 million years ago. Sharks are commonly found in all kind of sea water with of depths of 2,000 metres (6,600 ft). They are mostly found outside freshwater other than the Bull Shark and the River Shark, which can survive in both sea water and fresh water.</p>
        <p>Well known shark species recognised across the world are the following the Great White Shark, Tiger Shark, Blue Shark, Mako Shark and the Hammerhead Shark which can only be characterised as apex predators which are normally placed at the top of their underwater food chain.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ZoneTabs",
    data() {
      return {
        selectedTab: {
          name: 'freshwater'
        },
        tabs: [
          {
            name: 'freshwater'
          },
          {
            name: 'saltwater'
          },
          {
            name: 'ocean'
          },
          {
            name: 'shark'
          }
        ]
      }
    },

    methods:{
      selectedResultsTab(tab) {
        this.selectedTab = tab
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .tabSection {
    @media (max-width: 849px) {
      margin-left: 1.25rem;
      margin-right: 1.25rem;
      margin-bottom: 3.125rem;
    }
  }

  .discover-tabs {
    align-items: stretch;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    ul {
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #38d6d3;
      display: flex;
      flex-grow: 1;
      margin-top: 1.875rem;
      padding-left: 0rem;
      @media (max-width: 1280px) {
        display: block;
      }
      li {
        display: block;
        margin-left: 0.625rem;
        margin-right: 0.625rem;
        @media (max-width: 1280px) {
          margin-right: 0rem;
          margin-left: 0rem;
        }
        a {
          align-items: center;
          color: #38d6d3;
          display: flex;
          justify-content: center;
          margin-bottom: -1px;
          padding: 0rem;
          vertical-align: top;
          text-transform: uppercase;
          font-size: 0.875rem;
          line-height: 1.875rem;
          cursor: pointer;
          font-weight: 500;
          width: 7.188rem;
          border-top: 1px solid #38d6d3;
          border-left: 1px solid #38d6d3;
          border-right: 1px solid #38d6d3;
          transition: all 500ms ease;
          @media (max-width: 1280px) {
            display: block;
            width: 100%;
          }
          &.is-active {
            background: #38d6d3;
            color: #FFF;
            transition: all 500ms ease;
          }
        }
      }
    }
  }

  .content {
    margin-top: 1.25rem;
    p {
      color: #FFF;
    }
  }
</style>