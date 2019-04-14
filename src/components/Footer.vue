<template>
  <div id="footer">
    <v-footer height="auto" >
        <v-card  class="flex text-xs-center" flat tile >
            <v-img contain :src="logo" id="footer-logo"></v-img>
        <v-card-text>
          <span>Follow us:</span>
          <v-btn v-for="icon in icons" :key="icon.name" class="mx-3" dark icon :href="icon.href" target="_blank">
            <img size="24px" :src="icon.src" />
          </v-btn>
        </v-card-text>
      <v-card-actions class="justify-center">
        &copy;2019 SkoolAide All Rights Reserved
      </v-card-actions>
      <v-card-actions class="justify-center">
       <router-link router :to="privacyPolicy">Privacy Policy</router-link> | <router-link router :to="TermsAndConditions">Terms of service</router-link>
      </v-card-actions>

      </v-card>
    </v-footer>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      logo: require('../assets/logo/logo.png'),
      icons: [
        {
          name: 'Twitter',
          src: require('../assets/icons/twt.png'),
          href: 'https://twitter.com/skoolaide'
        },
        {
          name: 'Facebook',
          src: require('../assets/icons/fb.png'),
          href: 'https://www.facebook.com/SKoolAide/'
        },
        {
          name: 'Instagram',
          src: require('../assets/icons/ins.png')
        }
      ],
      privacyPolicy: '/privacy-policy',
      TermsAndConditions: '/terms-and-conditions'

    }
  }
  
}
</script>

<style>
#footer-logo {
  width: 200px;
  margin-left:20px;
  height: auto;
  margin: 0 auto;
}

</style>
