<template>
 <v-app>
    <v-toolbar app flat>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">SKOOLAIDE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title flat> 
        <span class="text-uppercase">Have an account? Log In</span>
      </v-toolbar-title>
      <v-toolbar-items>
        
      </v-toolbar-items>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Get Started</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <h1>Guide and reward student success</h1>
      <p class="headline">SkoolAide helps you set the right goals to earn<br>
      rewards you want on your way to success!</p>
      <v-spacer></v-spacer>
      <v-btn flat class="">Get started</v-btn>
      <v-btn flat>Watch Video</v-btn>
    </v-content>

    <v-content>
      <GetStarted />
      <Cards />
    </v-content>

    <v-content>
      <HelloWorld/>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Cards from '@/components/Cards'
import GetStarted from '@/components/GetStarted'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Cards,
    GetStarted
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.gold-button {
  background-color: #CEA955;
}
</style>

