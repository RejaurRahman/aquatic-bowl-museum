<template>
  <div class="staff-inner-container">
    <div class="staff-section-heading-copy"> 
      <div class="container">
        <div class="columns no-margin">
          <div class="column is-12"> 
            <h2>meet the management team</h2>
            <p>There is a huge ocean of opportunity at Aquatic Bowl Museum. There is every chance we have role which will be perfect for your skillset and experience. We do prefer people who just do not with the job title. We are looking for candidates who strive to reach their full potential and are ambitious in acquiring a personal short term or long term goal and not afraid to swim upstream to achieve the goal.</p>
            <p>Meet the management team below.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="staff-block" v-for="staff in getLastName">
      <a data-target="staffModal" class="staff meet-staff" @click="openModal(staff.staffid)">
        <img :src="require('../assets/images/staff/' + staff.image + '.jpg')">
        <h4>{{staff.name}}</h4>
        <p class="jobTitle"><span>{{staff.jobtitle}}</span></p>
      </a>
    </div>
    <div class="modal" id="staffModal" data-reveal :class="{ 'is-active': showModal }" v-show="showModal" @close="showModal = false">
      <div class="modal-background"></div>
      <div class="modal-content">
        <h3 v-if="activeTeam">{{activeTeam.name}}</h3>
        <h4 v-if="activeTeam">{{activeTeam.jobtitle}}</h4>
        <div v-if="activeTeam" v-html="activeTeam.bio"></div>
        <button class="modal-close" @click="closeModal" aria-label="close"></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MeetStaff",
    data() {
      return {
        current: 0,
        showModal: false,
        currentMember: null
      }
    },

    computed: {
      activeTeam: function() {
        return this.staffs[this.currentMember];
      },
      getLastName:function() {
        var filteredList=this.$options.filters.pluck(this.staffs);
        return filteredList;
      }
    },

    methods:{
      openModal(staffid) {
        this.currentMember = staffid;
        this.showModal = true;
        document.querySelectorAll('.modal-background')[0].style.display = 'block';

        var siteHtml = document.querySelector('html');
        siteHtml.classList.add('hide-scrollbar');
      },
      closeModal: function() {
        this.showModal = false;
        document.querySelectorAll('.modal-background')[0].style.display = 'none';
        var siteHtml = document.querySelector('html');
        siteHtml.classList.remove('hide-scrollbar');
      }
    },

    props: [
      'staffs'
    ]
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .staff-section-heading-copy {
    h2 {
      text-transform: uppercase;
      font-size: 2rem;
      line-height: 2.375rem;
      font-weight: 800;
      color: #000;
      padding-top: 3.125rem;
      padding-bottom: 1.25rem;
      padding-left: 1.875rem;
      padding-right: 1.875rem;
    }
    p {
      font-size: 1rem;
      color: #000;
      font-weight: normal;
      margin-bottom: 1.25rem;
      padding-left: 1.875rem;
      padding-right: 1.875rem;
    }
  }

  .staffSection {
    padding-bottom: 3.125rem;
    .staff-block {
      display: inline-flex;
      width: 25%;
      @media (min-width: 768px) and (max-width: 1024px) {
        width: 33.33%;
      }
      @media (min-width: 62.5rem) and (max-width: 767px) {
        width: 50%;
      }
      @media (max-width: 639px) {
        width: 100%;
      }
      img {
        padding-top: 3.125rem;
      }
      h4 {
        text-transform: uppercase;
        font-size: 1.375rem;
        line-height: 1.875rem;
        font-weight: 800;
        color: #000;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem;
      }
      p {
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: #000;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem;
      }
    }
    .modal {
      .modal-background {
        background: rgba(#000,.45);
      }
    	.modal-content {
    		background: #FFF;
    		padding: 1.25rem;
    		position: relative;
        text-align: left;
        overflow: visible;
        @media (max-width: 768px) {
          overflow-x: hidden;
          overflow-y: visible;
        }
        @media (max-width: 639px) {
          width: calc(100% - 1.875rem);
          margin-right: auto;
          margin-left: auto;
        }
        h3 {
          text-transform: uppercase;
          font-size: 2rem;
          line-height: 2.375rem;
          font-weight: 800;
          color: #000;
        }
        h4 {
          font-size: 1.5rem;
          line-height: 1.875rem;          
          font-weight: 500;
          color: #000;
          margin-bottom: 1rem;
        }
    	}
    	.modal-close {
    	  position: absolute;
    		top: -0.875rem;
    		right: -0.875rem;
    		background: url("../assets/images/close-button.png");
        background-repeat: no-repeat;
        background-size: contain;
        width: 1.875rem;
        height: 1.813rem;
    		color: transparent;
        padding: 0rem;
        max-height: inherit;
        max-width: inherit;
        min-height: inherit;
        min-width: inherit;
        @media (max-width: 639px) {
          top: 5px;
          right: 5px;
        }
        &::before {
          content: none;
        }
        &::after {
          content: none;
        }
    	}
		}
  }
</style>