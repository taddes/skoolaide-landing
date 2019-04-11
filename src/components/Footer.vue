<template>
  <div id="footer">
    <v-footer>
        <v-card class="flex" flat tile>
          <v-card-title class="teal text--uppercase">
        <strong class="subheading">Have An Account? Log In</strong>

        <v-spacer></v-spacer>
        <v-card-text>
          <span>Follow us:</span>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

      </v-card-title>

      <v-card-actions class="justify-right">
        &copy;2019 SkoolAide All Rights Reserved
      </v-card-actions>
      <v-card-actions class="justify-right">
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
      icons: ['instagram', 'alarm', 'credit_card'],
      privacyPolicy: '/privacy-policy',
      TermsAndConditions: '/terms-and-conditions',

    }
  }
  
}
</script>

<style>

</style>
