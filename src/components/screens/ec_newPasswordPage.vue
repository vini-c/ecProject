<template>
    <v-layout class="illustratedBG">
       <eC_mainNavBar />
       <div class="bg-body login forgot newPassword">    
         <v-main>
            <ec_newPassword />
           <ec_footer simplified/>
         </v-main>
       </div>
    </v-layout>
</template>
   
<script setup>
   import '@/components/organisms/login/scss/login.scss'
   import eC_mainNavBar from '@/components/organisms/nav/mainNavBar.vue'
   import ec_newPassword from '@/components/organisms/login/newpassword.vue'
   import ec_footer from '@/components/organisms/nav/footer.vue'
</script>