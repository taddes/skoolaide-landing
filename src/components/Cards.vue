<template>
  <div class="cards">
    <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12 sm6 md6 lg6 v-for="card in cards" :key="card.title">
          <v-card class="rounded-card text-xs-center ma-4" min-height="400px">
              <img :src="card.icon" height="100px" alt="card.title" class="mt-5"/>
            <v-card-text class="px-5">
              <div class="headline mb-3">{{ card.title }}</div>
              <div class="paragraph">{{ card.paragraph }}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn class="secondary mb-4" href="https://www.skoolaide.com/#/start" >
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
          paragraph: 'Create your profile and take our personality & interests test.  Discover your \'best fit\' jobs and careers.',
          icon: require('../assets/icons/Customized_A.png') },
         {title: 'Focus on your strengths',
          paragraph: 'Find jobs and careers where you will be a natural.  Build a plan that sets you up for success!',
          icon: require('../assets/icons/FocusStrengths_A.png') },
         {title: 'Build a digital village',
          paragraph: 'Invite your parents, teachers or mentors to be your advocates this year.',
          icon: require('../assets/icons/DigitalVillage_A.png') },
         {title: 'Set goals, choose rewards',
          paragraph: 'Build your support team – Create a goals and rewards plan together – Redeem your rewards when you hit your goals!',
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
  </style>
  