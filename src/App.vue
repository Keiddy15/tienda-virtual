<template>
<<<<<<< Updated upstream
  <div id="app">
  
    <router-view/>
   
  </div>
=======
  <router-view name="main"/>
>>>>>>> Stashed changes
</template>

<script lang="ts">
import Vue from 'vue';

<<<<<<< Updated upstream

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
=======
export default Vue.extend({
  name: 'App'
});
</script>
>>>>>>> Stashed changes
