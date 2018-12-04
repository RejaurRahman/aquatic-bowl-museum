<template>
  <div class="staff-inner-container">
    <div class="staff-block" v-for="staff in staffs">
      <a data-target="staffModal" class="staff meet-staff" @click="openModal(staff.staffid)">
        <img :src="require('../assets/images/staff/'+staff.image+'.jpg')">
        <h4>{{staff.name}}</h4>
        <p class="jobTitle"><span>{{staff.jobtitle}}</span></p>
      </a>
    </div>
    <div class="modal" id="staffModal" data-reveal :class="{'is-active':showModal}" v-show="showModal" @close="showModal = false">
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
      activeTeam: function(){
        return this.staffs[this.currentMember];
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
  .staffSection {
    padding-bottom: 50px;
    .staff-block {
      display: inline-flex;
      width: 25%;
      img {
        padding-top: 50px;
      }
      h4 {
        text-transform: uppercase;
        font-size: 22px;
        line-height: 30px;
        font-weight: 800;
        color: #000;
        padding-left: 15px;
        padding-right: 15px;
      }
      p {
        font-size: 18px;
        line-height: 24px;
        color: #000;
        padding-left: 15px;
        padding-right: 15px;
      }
    }
    .modal { 
    	.modal-content {
    		background: #FFF;
    		padding: 20px;
    		position: relative;
        text-align: left;
        overflow: visible;
        h3 {
          text-transform: uppercase;
          font-size: 32px;
          line-height: 38px;
          font-weight: 800;
          color: #000;
        }
        h4 {
          font-size: 24px;
          line-height: 30px;          
          font-weight: 500;
          color: #000;
          margin-bottom: 16px;
        }
    	}
    	.modal-close {
    	  position: absolute;
    		top: -14px;
    		right: -14px;
    		background: url("../assets/images/close-button.png");
        background-repeat: no-repeat;
        background-size: contain;
        width: 30px;
        height: 29px;
    		color: transparent;
        padding: 0px;
        max-height: inherit;
        max-width: inherit;
        min-height: inherit;
        min-width: inherit;
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