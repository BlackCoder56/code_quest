<template>
    <div class="home">
      <ChallengesPage/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ChallengesPage from '@/components/ChallengesPage.vue';
  
  export default {
    name: 'ChallengeView',
    components: {
        ChallengesPage
    }
  }
  </script>
  