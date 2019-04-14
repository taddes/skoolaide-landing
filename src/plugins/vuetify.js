import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#7A7A7A', 
    success: '#22B573',
    secondary:'#CEA955',
    accent: '#11465B'
  }
})

// Primary is gray body
// Success is green
// Secondary is gold
// Accent is blue