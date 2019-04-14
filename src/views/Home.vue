<template>
 <v-app>
    <!-- <v-toolbar app flat>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">SKOOLAIDE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title flat> 
        <span class="text-uppercase">Have an account? Log In</span>
      </v-toolbar-title>
      <v-toolbar-items>
        
      </v-toolbar-items> -->
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Get Started</span>
      </v-btn>
    </v-toolbar> -->
  
    <v-img :src="banner.src" class="mt-4" />
 
    <v-layout
      align-center
      column
      justify-center
    >
    <v-content class="pa-2">
      <h1>Guide and reward student success</h1>
      <p class="headline">SkoolAide helps you <strong>set</strong> goals and <strong>earn</strong> rewards for doing well in school!</p>
      <v-spacer></v-spacer>
      <v-btn large class="" color="success" href="https://www.skoolaide.com/#/start" >Get started</v-btn>
      <VideoModal />
    </v-content>

    <v-content>
      <GetStarted />
      <Cards class="mb-5"/>
    </v-content>

    </v-layout>
    <v-carousel class="mb-4 elevation-0" hide-controls="false" hide-delimiters="true" height="auto" light="true" interval="7000" >
      <v-carousel-item v-for="image in footer" :key="image.name" :src="image.src" ></v-carousel-item>
    </v-carousel>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </v-app>
</template>

<script>
import Cards from '@/components/Cards'
import GetStarted from '@/components/GetStarted'
import VideoModal from '@/components/VideoModal'


export default {
  name: 'App',
  components: {
    Cards,
    GetStarted,
    VideoModal
  },
  data () {
    return {
      youtubeLink: 'https://www.youtube.com/watch?v=dtFj96Zu_Kg',
      banner: {
        name: 'banner',
        src: require('../assets/images/banner.png')
      },
      logo: require('../assets/logo/logo_white.png'),
      footer: [
        {
          name: 'footer1',
          src: require('../assets/images/footer1.png')
        },
        {
          name: 'footer2',
          src: require('../assets/images/footer2.png')
        },
        {
          name: 'footer3',
          src: require('../assets/images/footer3.png')
        }
      ]
    }
  }
}
</script>

<style>

</style>

