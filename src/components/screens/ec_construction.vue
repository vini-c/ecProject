<template>
    <v-layout>
      <v-main class="ec_containerConstruction">
           <ec_underConstructionContent class="middleScreen" :progressValue="63" />
    </v-main>
  </v-layout>
</template>
  

<script setup>
import ec_underConstructionContent from '@/components/organisms/underConstructionContent.vue'
</script>
  
  <script>
  export default{
      name :"ec_construction",
      
    }
  </script>