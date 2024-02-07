<template>
  <v-layout>
    <v-main class="ec_defaultBG">
      <eC_mainNavBar />
      <v-container>
      <ec_notFoundContent notFound mainAction  title="Pagina não encontrada" subtitle="A página solicitada não está disponível, por favor tente outra página." mainActionName="voltar a Página Inicial" secondaryAction secondaryActionName="Tentar novamente"></ec_notFoundContent>
</v-container>
  <ec_footer/>
  </v-main>
</v-layout>
</template>

<script setup>
import ec_notFoundContent from '@/components/molecules/ec_notFoundContent.vue'
import eC_mainNavBar from '@/components/organisms/nav/mainNavBar.vue'
import ec_footer from '@/components/organisms/nav/footer.vue'

</script>

<script>
export default{
    name :"ec_priceRules",
  }
</script>