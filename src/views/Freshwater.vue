<template>
  <div class="body-container">
    <div class="zone-details freshwater-zone-details" v-if="!noAnimalData">
      <div :class="[AquaticAnimalData.isActive ? 'animal-block is-active' : 'animal-block ']">
        <div class="heading-section" v-if="AquaticAnimalData.animalAssetPath != null" :class="AquaticAnimalData.animalAssetPath" :style="{'background': 'url(' + require('../assets/images/zones/freshwater/' + AquaticAnimalData.animalAssetPath + '/cover.jpg') + ')'}">
          <h1>{{ AquaticAnimalData.heading }}</h1>
          <span class="scientific-name">{{ AquaticAnimalData.scientificName }}</span>
        </div>
        <div class="animal-info-section" :style="{'background': AquaticAnimalData.hexCode}">
          <span class="arrow-left" @click="goLeft()"></span>
          <span class="arrow-right" @click="goRight()"></span>
          <div class="animal-info-container container">
            <div class="animal-info-inner">
              <div class="animal-category">
                <!-- <a :class="[animal.isActive ? 'is-active': '']" @click="showAnimalDetails(animal, k)" v-for="(animal, k, i) in freshwaterDetails" :key="i">{{k}}</a> -->
                <select v-model="selectedFish">
                  <option value="" selected>{{activeAnimal}} </option>
                  <option v-for="(animal, k, i) in freshwaterDetails" :key="i" :value="animal">{{animal.heading}}</option>
                </select>
                <div class="did-you-know" :style="{'background': AquaticAnimalData.hexCode}">
                  <span>{{ AquaticAnimalData.didYouKnow }}</span>
                </div>
                <button @click="backToDiscover()">back to freshwater</button>
                <img :src="require('../assets/images/zones/freshwater/'+AquaticAnimalData.animalAssetPath+'/vector.png')" v-if="AquaticAnimalData.animalAssetPath != null">
                <div class="social-section">
                  <p>share:</p>
                  <div class="share_twitter">
                    <a href="" class="aquatic-bowl-museum_shareTwitter" data-destination-url="" target="_blank" title="Tweet">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path d="M34.5 16.7c0 0 3.2 0.4 4.1-0.2 -1.5 0.8-3 1.8-4.2 3 0 0 1.2 13.3-12.7 16.5 0 0-7.2 0.6-12.3-3.3 0 0 5.5 1.5 8.5-1.9 0 0-5.1 0.5-6.4-3.5 1.2 0 2.4-0.2 3.6-0.5 0 0-4.8-0.9-4.7-5.7 0.8 0.5 1.7 0.7 2.7 0.7 0 0-4-3.6-1.5-7.8 0 0 5.3 6.5 11.9 6.1 -0.8-3 1-6.1 4.1-6.9 2-0.5 4 0.1 5.4 1.5 1.4-0.3 2.7-0.9 3.9-1.9C36.8 13 36.9 14.8 34.5 16.7z"/>
                        <path d="M23.5 46C11.1 46 1 35.9 1 23.5 1 11.1 11.1 1 23.5 1 35.9 1 46 11.1 46 23.5 46 35.9 35.9 46 23.5 46zM23.5 2C11.6 2 2 11.6 2 23.5 2 35.4 11.6 45 23.5 45 35.4 45 45 35.4 45 23.5 45 11.6 35.4 2 23.5 2z"/>
                      </svg>
                    </a>
                  </div>
                  <div class="share_facebook">
                    <a href="" class="aquatic-bowl-museum_shareFacebook" data-destination-url="" target="_blank" title="Share on Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path d="M19.1 20.6h-4.9V25h4.9v13h5.8V25h5.8v-4.3h-5.8v-1.7c0-1.3 1.4-4 3.4-4h2.4v-4.3h-5.1C18.5 11.5 19.1 20.6 19.1 20.6z"/>
                        <path d="M23.5 46C11.1 46 1 35.9 1 23.5 1 11.1 11.1 1 23.5 1 35.9 1 46 11.1 46 23.5 46 35.9 35.9 46 23.5 46zM23.5 2C11.6 2 2 11.6 2 23.5 2 35.4 11.6 45 23.5 45 35.4 45 45 35.4 45 23.5 45 11.6 35.4 2 23.5 2z"/>
                      </svg>
                    </a>
                  </div>
                  <div class="share_linkedIn">
                    <a href="" class="aquatic-bowl-museum_shareIn" data-destination-url="" target="_blank" title="Share on LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path d="M33.3 12H13.7c-0.9 0-1.7 0.7-1.7 1.7v19.7c0 0.9 0.8 1.7 1.7 1.7h19.6c0.9 0 1.7-0.7 1.7-1.7V13.7C35 12.7 34.2 12 33.3 12zM18.8 31.6h-3.4v-11h3.4V31.6L18.8 31.6zM17.1 19.1c-1.1 0-2-0.9-2-2 0-1.1 0.9-2 2-2s2 0.9 2 2C19.1 18.2 18.2 19.1 17.1 19.1zM31.6 31.6h-3.4v-5.3c0-1.3 0-2.9-1.8-2.9 -1.8 0-2 1.4-2 2.8v5.4H21v-11h3.3v1.5h0c0.5-0.9 1.6-1.8 3.2-1.8 3.5 0 4.1 2.3 4.1 5.2L31.6 31.6 31.6 31.6z"/>
                        <path d="M23.5 46C11.1 46 1 35.9 1 23.5 1 11.1 11.1 1 23.5 1 35.9 1 46 11.1 46 23.5 46 35.9 35.9 46 23.5 46zM23.5 2C11.6 2 2 11.6 2 23.5 2 35.4 11.6 45 23.5 45 35.4 45 45 35.4 45 23.5 45 11.6 35.4 2 23.5 2z"/>
                      </svg>
                    </a>
                  </div>
                  <div class="share_mail">
                    <a href="" class="aquatic-bowl-museum_shareMail" data-destination-url="" target="_blank" title="Send email">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path d="M37.5 34H12c-1.1 0-2-0.9-2-2V13.3h25.5c1.1 0 2 0.9 2 2V34zM11 14.3V32c0 0.6 0.5 1 1 1h24.5V15.3c0-0.6-0.5-1-1-1H11z"/>
                          <polygon points="23.8 26.9 13.6 20.7 14.2 19.8 23.8 25.7 33.3 19.8 33.9 20.7 "/>
                        <path d="M23.5 46C11.1 46 1 35.9 1 23.5 1 11.1 11.1 1 23.5 1 35.9 1 46 11.1 46 23.5 46 35.9 35.9 46 23.5 46zM23.5 2C11.6 2 2 11.6 2 23.5 2 35.4 11.6 45 23.5 45 35.4 45 45 35.4 45 23.5 45 11.6 35.4 2 23.5 2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a :class="[animal.isActive ? 'is-active': '']" v-if="!animal.isActive" @click="showAnimalDetails(animal, k)" v-for="(animal, k, i) in freshwaterDetails" :key="i">{{k}}</a>
  </div>
</template>

<script>
  import freshwaterDetails from '../assets/js/freshwater-data.js';

  export default {
    name: "Freshwater",

    metaInfo: {
      title: 'Aquatic Bowl Museum | Freshwater Zone',
      meta: [
        {
          vmid: 'description',
          'property': 'description',
          'content': 'Freshwater Zone description'
        },
        {
          vmid: 'og:title',
          property: 'og:title', 
          content: 'Freshwater Zone OG Title'
        },
        {
          vmid: 'og:type',
          property: 'og:type', 
          content: 'Freshwater Zone website'
        },
        {
          vmid: 'og:url',
          property: 'og:url', 
          content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/#/freshwater-zone'
        },
        {
          vmid: 'og:image',
          property: 'og:image', 
          content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/img/home-banner.53bc1824.jpg'
        },
        {
          vmid: 'og:description',
          'property': 'og:description',
          'content': 'Freshwater Zone OG description'
        }
      ]
    },

    data() {
      return {
        freshwaterDetails: '',
        AquaticAnimalData: '',
        AnimalNames: [],
        activeAnimal: '',
        activeAnimalDetail: '',
        showFreshWaterZone: false,
        noAnimalData: false,
        showDropDown: false,
        selectedFish:'',
      }
    },
    
    watch:{
      selectedFish(value){
        if (value != null) {
          this.showAnimalDetails(value,value.heading.replace(' ', ''));
        }
      }
    },

    methods:{
      goRight() {
        var index = this.AnimalNames.indexOf(this.activeAnimal);
        var getNextAnimal;
        
        if (index == this.AnimalNames.length - 1) {
          getNextAnimal = this.AnimalNames[index - (this.AnimalNames.length - 1)];
        } else {
          getNextAnimal = this.AnimalNames[index + 1];
        }
        
        this.showAnimalDetails(this.freshwaterDetails[getNextAnimal], getNextAnimal);
      },
      
      goLeft() {
        var index = this.AnimalNames.indexOf(this.activeAnimal);
        var getNextAnimal;
        
        if (index == 0) {
          getNextAnimal = this.AnimalNames[this.AnimalNames.length - 1];
        } else {
          getNextAnimal = this.AnimalNames[index - 1];
        }
        
        this.showAnimalDetails(this.freshwaterDetails[getNextAnimal], getNextAnimal);
      },

      showAnimalDetails(animal, k) {
        for (var item in this.freshwaterDetails) {
          if (item == k) {
            this.$router.push('/freshwater-zone/' + this.freshwaterDetails[item].animalAssetPath);

            this.freshwaterDetails[item].isActive = true;
            this.activeAnimal = item;
          } else {
            this.freshwaterDetails[item].isActive = false;
          }
        }
        this.AquaticAnimalData = animal;
      },

      backToDiscover() {
        this.$router.push("/discover-zone");
      }
    },
    
    beforeRouteLeave(to, from, next){
      for (var item in this.freshwaterDetails) {
        if (item == 'GoldFish') {
          this.freshwaterDetails[item].isActive = true;
          this.activeAnimal = item;
        } else {
          this.freshwaterDetails[item].isActive = false;
        }
      }
      next();
    },
    
    mounted() {
      var AnimalArrays = [];
      if (this.$route.path == '/freshwater-zone' || this.$route.params.fish_name != null) {
        this.freshwaterDetails = freshwaterDetails;
      } else {
        this.noAnimalData = true;
      }

      for (var item in this.freshwaterDetails) {
        AnimalArrays.push(item);
        if (this.freshwaterDetails[item].isActive == true) {
          this.activeAnimal = item.toString();
          this.activeAnimalDetail = this.freshwaterDetails[item];
        }
      }
      this.AnimalNames = AnimalArrays;
      this.showAnimalDetails(this.activeAnimalDetail, this.activeAnimal);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body-container {
    padding-top: 105px;
    .social-section {
      margin-bottom: 0px;
    }
  }
</style>