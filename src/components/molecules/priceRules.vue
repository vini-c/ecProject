<template>
    <h4>Políticas de alterações e cancelamentos</h4>
    <h5 class="pt-2">Alterações</h5>
    <v-row no-gutters v-if="exchanges === true"  align="center"><v-icon icon="mdi-check" class="mr-1 successIcon" size="x-small"></v-icon><p>Permite (com custo)</p></v-row>
    <v-row no-gutters v-if="exchanges === false" ><v-icon icon="mdi-close" class="mr-1 errorIcon" size="x-small"></v-icon><p>Não Permite alterações</p></v-row>
    <h5 class="pt-2">Cancelamento</h5>
    <v-row no-gutters v-if="refundable === true"   align="center"><v-icon icon="mdi-check" class="mr-1 successIcon" size="x-small"></v-icon><p>Reembolsável</p></v-row>
    <v-row no-gutters v-if="refundable === false" ><v-icon icon="mdi-close" class="mr-1 errorIcon" size="x-small"></v-icon><p>Não Reembolsável</p></v-row>
    <p class="text-caption mb-4 mt-2">*Caso o cancelamento seja solicitado 24 após a realizaçnao da compra e ao menos 7 dias antes da data do embarque, o reembolso será integral conforme Resoluções da ANAC<br> Confira as <a href="#" target="_blank">condições de compra, políticas de privacidade e políticas de alterações e cancelamentos.</a></p>
</template>
<script>
export default{
    name :"ec_priceRules",
    props: {
      exchanges: Boolean,
      refundable: Boolean,
      cancelationText: String,
    }
  }
</script>