<template>
  <div class="cards">
    <v-container>
      <h1>SkoolAide helps you 'get paid' for doing well in school!</h1>
          <p>Set goals. Hit them. Unlock a reward that you choose!</p>
      <v-layout row wrap>

        <v-flex xs12 sm6 md6 lg3 v-for="card in cards" :key="card.title">
          <v-card class="rounded-card text-xs-center ma-3">
              <v-img :src="card.image" height="200px" alt="card.title"></v-img>
            <v-card-title class="justify-center">
              <div class="headline">{{ card.title }}</div>
            </v-card-title>
            <v-card-actions>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex class="justify-center">
          <v-btn large class="text--uppercase white--text gold-button">
            <span>Sign up today</span>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>

   

    </v-container>
  </div>
  
</template>

 <script>

 export default {
   data() {
     return {
       cards: [
         {title: 'Unlock video games',
          image: require('../assets/images/gaming.png') },
         {title: 'Unlock gift cards',
          image: require('../assets/images/tesla.png') },
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
  