<template>
  <div class="cards">
    <v-container class="text-xs-center">
      <h1>SkoolAide helps you 'get paid' for doing well in school!</h1>
      <p>Set goals.  Reach them. Unlock the reward that you earned!</p>
      <v-spacer></v-spacer>
 
      <v-layout  wrap>
        <v-flex xs12 sm6 md6 lg3 v-for="card in cards" :key="card.title">
          <v-hover>
          <v-card class="rounded-card text-xs-center ma-3" slot-scope="{hover}" :class="`elevation-${hover ? 12 : 2}`">
              <v-img :src="card.image" height="200px" alt="card.title"></v-img>
            <v-card-title class="justify-center">
              <div class="headline">{{ card.title }}</div>
            </v-card-title>
            <v-card-actions>
            </v-card-actions>
          </v-card>
          </v-hover>
        </v-flex>
          </v-layout>
         
        <v-layout class="justify-center" align-center justify-center> 
          <v-btn large class="text--uppercase white--text secondary mt-5" href="https://www.skoolaide.com/#/start">
            <span>Sign up today</span>
          </v-btn>
        </v-layout>
    
      <v-spacer></v-spacer>

    </v-container>
  </div>
  
</template>

 <script>

 export default {
   data() {
     return {
       header: 'SkoolAide helps you \'get paid\' for doing well in school.',
       subheader: 'Build your team. Set your goals. Unlock your reward once you\'ve earned it!',
       cards: [
         {title: 'Unlock video games',
          image: require('../assets/images/gaming.png') },
         {title: 'Unlock gift cards',
          image: require('../assets/images/mc.png') },
         {title: 'Unlock clothes',
          image: require('../assets/images/jeans.png') },
         {title: 'Unlock shoes',
          image: require('../assets/images/white_shoes.png') },
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
  
  .green {
    background-color:#22B573;
  }
  </style>
  