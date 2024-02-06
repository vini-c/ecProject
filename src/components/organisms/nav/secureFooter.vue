<template>
      <section class="secureFooter">
    <div class="checkoutPage">
      <v-row no-gutters justify="space-between" align="center" class="py-2 pl-4 ga-3">
        <div class="securityMessage">
            <v-row no-gutters justify="start" align="center" class="ga-3">

            <v-icon icon="mdi-shield-check-outline"></v-icon>
            <div class="content">
            <h5>Esse é um site seguro</h5>
            <p class="text-caption">Utilizamos conexões seguras para progeter suas informações.</p>
            </div>
            </v-row>
        </div>
        <div class="securityImages">
            <v-img
            :width="50" aspect-ratio="1/1"  src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Logotipo_ANAC_agencia_governamental.png"
            ></v-img>
        </div>
      </v-row>
    </div>
  </section>
</template>

<script>
import '@/components/organisms/nav/scss/footer.scss'

   export default {
  name: 'ec_secureFooter',
  }
</script>