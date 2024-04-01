<template>
    <v-layout class="illustratedBG">
       <eC_mainNavBar />
       <div class="bg-body login">    
         <v-main>
            <ec_login />
           <ec_footer simplified/>
         </v-main>
       </div>
       </v-layout>
       
   </template>
   
   <script setup>
    import '@/components/organisms/login/scss/login.scss'
    import eC_mainNavBar from '@/components/organisms/nav/mainNavBar.vue'
    import ec_login from '@/components/organisms/login/loginContent.vue'
    import ec_footer from '@/components/organisms/nav/footer.vue'
   </script>