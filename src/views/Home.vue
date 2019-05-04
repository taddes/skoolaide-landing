<template>
 <v-app>
  <v-img :src="banner.src" alt="Skoolaide">
    <v-content app class="pa-2 white--text hidden-md-and-down" id="banner-content" >
        <h1>Guide and reward student success</h1>
        <p class="headline">SkoolAide helps you <strong>set</strong> goals and <strong>earn</strong><br> rewards for doing well in school!</p>
        <v-spacer></v-spacer>
        <v-btn large class="" color="success" href="https://www.skoolaide.com/#/start" >Get started</v-btn>
        <VideoModal />
      </v-content>
      <br>
      <br>
      <br>
     <v-content app class="pa-2 white--text hidden-md-and-down" id="tagline-content">
        <h1>{{ tagLine.subheader }}</h1>
      </v-content>
  </v-img>

    <v-content class="pa-2 ma-2 hidden-lg-and-up text-xs-center" >
      <v-spacer></v-spacer>
      <br>
      <h1>Guide and reward student success</h1>
      <p class="headline">SkoolAide helps you <strong>set</strong> goals and <strong>earn</strong> rewards for doing well in school!</p>
      <v-spacer></v-spacer>
      <v-btn large class="" color="success" href="https://www.skoolaide.com/#/start" >Get started</v-btn>
      <VideoModal />
    </v-content>

      <v-content class="pa-2 ma-2 hidden-lg-and-up text-xs-center" >
        <h1>{{ tagLine.subheader }}</h1>
      </v-content>
 
    <v-layout
      align-center
      column
      justify-center
    >


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
      tagLine: {
        header: 'SkoolAide allows students to get rewarded for doing well in school.',
        subheader: 'Set goals.  Reach them. Unlock the reward that you earned!',
      },
      banner: {
        name: 'banner',
        src: require('../assets/images/banner.png')
      },
      logo: require('../assets/logo/logo_white.png'),
      footer: [
        {
          name: 'footer2',
          src: require('../assets/images/footer2.png')
        },
        {
          name: 'footer4',
          src: require('../assets/images/footer4.png')
        },
        {
          name: 'footer6',
          src: require('../assets/images/footer6.png')
        }
      ]
    }
  }
}
</script>

<style>
#banner-content {
  margin-top: 170px;
  margin-left: 50px;
}
#tagline-content {
  margin-left: 50px;
}

</style>

