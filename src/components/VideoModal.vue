<template>
    <v-dialog v-model="dialog" max-width="800" height="1000">
      <template v-slot:activator="{ on }">
        <v-btn large v-on="on" @click="playVideo()">
          <v-icon left>play_arrow</v-icon>
          <span >Watch Video</span> 
      </v-btn>
      </template>
      <v-card height="500px">
        <v-btn flat @click="dialog = false, stopVideo()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-layout justify-center>
          <youtube :video-id="videoId" ref="youtube"></youtube>
        </v-layout>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: 'dtFj96Zu_Kg'
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    stopVideo() {
      this.player.stopVideo()
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  watch: {
    dialog(val) {
      !val && this.stopVideo()
    }
  }
}
</script>

<style>

</style>
