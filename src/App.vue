<script setup>
import { ref, computed } from 'vue'
import Home from '@/components/screens/ec_homePage.vue'
import Results from '@/components/screens/ec_flightResultsPage.vue'
import Checkout from '@/components/screens/ec_checkoutPage.vue'
import Confirm from '@/components/screens/ec_confirmationPage.vue'
import NotFound from '@/components/screens/notFound.vue'
import Construction from '@/components/screens/ec_construction.vue'
import Account from '@/components/screens/ec_myAccount.vue'
import Login from '@/components/screens/ec_loginPage.vue'
import forgotPassword from '@/components/screens/ec_forgotPasswordPage.vue'
import newPassword from '@/components/screens/ec_newPasswordPage.vue'
import signUp from '@/components/screens/ec_signUp.vue'
import bookings from '@/components/screens/ec_mybookings.vue'
import helpcenter from '@/components/screens/ec_helpcenter.vue'
import attendance from '@/components/screens/ec_attendance.vue'
import cancelation from '@/components/screens/ec_cancelation.vue'



const routes = {
  '/': Home,
  '/checkout': Checkout,
  '/confirmation': Confirm,
  '/results': Results,
  '/construction': Construction,
  '/account': Account,
  '/login': Login,
  '/forgotPassword': forgotPassword,
  '/new-password': newPassword,
  '/sign-up': signUp,
  '/bookings': bookings,
  '/helpcenter': helpcenter,
  '/attendance': attendance,  
  '/cancelation': cancelation,  

}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<script>
// import { createApp } from 'vue';
// import App from './App.vue';
// import VueSplide from '@splidejs/vue-splide';

// const app = createApp( App );
// app.use( VueSplide );
// app.mount( '#app' );
</script>

<template>
  <component :is="currentView" />
</template>