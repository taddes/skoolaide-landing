<template>
  <div class="cards">
    <v-container>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="card in cards" :key="card.title">
          <v-card class="text-xs-center ma-3">
              <v-img :src="card.image" height="200px" alt="card.title"></v-img>
            <v-card-title>
              <div class="headline">{{ card.title }}</div>
            </v-card-title>
            <v-card-actions>

            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>

      <v-btn class="text--uppercase">
        <span>Sign up today</span>
      </v-btn>

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
  
  </style>
  