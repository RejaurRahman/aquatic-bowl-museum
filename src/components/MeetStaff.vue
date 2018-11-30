<template>
  <div>
    <div class="staff-block" v-for="staff in staffs">
      <a data-open="staff-Modal" :data-advisor-name="staff.name" class="staff meet-staff" @click="openModal(staff.staffid)">
        <img :src="require('../assets/images/staff/'+staff.image+'.jpg')">
        <h4>{{staff.name}}</h4>
        <p class="jobTitle"><span>{{staff.jobtitle}}</span></p>
      </a>
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
        return this.staff[this.currentMember];
      }
    },

    methods:{
      openModal(speakerId){
        this.currentMember = staffid;
        this.showModal = true;
      },
      closeModal: function() {
        this.showModal = false;
        document.querySelectorAll('.reveal-overlay')[0].style.display = 'none';
      }
    },

    props: [
      'staffs'
    ]
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>