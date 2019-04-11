<template>
  <div class="cards">
    <v-container>

      <v-layout row wrap>
        <v-flex xs12 sm6 md6 lg6 v-for="card in cards" :key="card.title">
          <v-card class="rounded-card text-xs-center ma-4" height="350px">
              <img :src="card.icon" height="100px" alt="card.title" class="mt-4"/>
            <v-card-text class="px-5">
              <div class="headline mb-3">{{ card.title }}</div>
              <div class="paragraph">{{ card.paragraph }}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn class="gold-button mb-4">
                <span class="text-uppercase white--text">Get Started</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
  
</template>

 <script>

 export default {
   data() {
     return {
       cards: [
         {title: 'Customized for you',
          paragraph: 'Create your profile and take our personality & interests test.  Discover your strengths & passions',
          icon: require('../assets/icons/Customized_A.png') },
         {title: 'Focus on your strengths',
          paragraph: 'Find jobs and careers where you will be a natural.  Build a plan that sets you up for success!',
          icon: require('../assets/icons/FocusStrengths_A.png') },
         {title: 'Build a digital village',
          paragraph: 'Invite your parents, teachers or mentors to be your advocates this year.',
          icon: require('../assets/icons/DigitalVillage_A.png') },
         {title: 'Set goals, choose rewards',
          paragraph: 'Set achieveable goals and work towards them. Be rewarded for your success and learn from challenges.',
          icon: require('../assets/icons/SetGoals_A.png') },
       ]
     }
   }
   
 }
 </script>

  <style>
  .rounded-card {
    border-radius: 10px;
  }
  .gold-button {
  background: #CEA955 !important;
  }
  
  </style>
  