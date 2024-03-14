<script setup>
import { ref, computed } from 'vue'
import Home from '@/components/screens/ec_homePage.vue'
import Results from '@/components/screens/ec_flightResultsPage.vue'
import Checkout from '@/components/screens/ec_checkoutPage.vue'
import Confirm from '@/components/screens/ec_confirmationPage.vue'
import NotFound from '@/components/screens/notFound.vue'
import Construction from '@/components/screens/ec_construction.vue'
import Account from '@/components/screens/ec_myAccount.vue'


const routes = {
  '/': Home,
  '/checkout': Checkout,
  '/confirmation': Confirm,
  '/results': Results,
  '/construction': Construction,
  '/account': Account,

}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <component :is="currentView" />
</template>