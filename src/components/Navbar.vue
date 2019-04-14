<template>
  <nav>
    <v-toolbar app flat scroll-toolbar-off-screen>
      <v-toolbar-title class="headline text-uppercase">
        <router-link router :to="logo.href">
        <img :src="logo.src" />
        <!-- <v-img :src="logo.miniLogo" hidden-sm-and-up/> -->
        </router-link>
        <!-- <span class="font-weight-light">KARK</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title flat > 
        <span class="text-uppercase accent--text mr-3 hidden-sm-and-down">Have an account? </span>
      </v-toolbar-title>
      <v-toolbar-items>
        
      </v-toolbar-items>
      <v-btn large flat class="accent" href="https://www.skoolaide.com/#/start" >
        <span class="ma-1">Log In</span>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: {
          name: 'logo',
          src: require('../assets/logo/logo.png'),
          miniLogo: require('../assets/logo/logo_sm.png'),
          href: '/'
        }
      
    }
  }
  
}
</script>

<style>

</style>
