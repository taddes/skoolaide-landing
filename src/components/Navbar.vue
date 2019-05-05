<template>
  <nav>
    <v-toolbar app flat scroll-toolbar-off-screen>
      <v-toolbar-title class="headline text-uppercase">
        <router-link router :to="logo.href">
        <img id="logo" :src="logo.src" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title flat > 
        <span class="text-uppercase accent--text mr-3 hidden-sm-and-down">Have an account? </span>
      </v-toolbar-title>
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
#logo {
  margin-top: 6px;
}
@media screen and (max-width: 378px) {
  #logo {
    width:150px;
    height: auto;
    margin-top:8px;
  }
}

</style>
