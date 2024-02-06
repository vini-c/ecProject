<template>
    <section class="payByCard">
      <div class="checkoutTitleSection creditCard  mb-4">
        <div class="">
          <h2 v-if="hasTitle">Cartão de crédito</h2>
          <p>Preencha os dados do cartão:</p>
        </div>
        <div>
        </div>
      </div>
      <v-text-field variant="outlined" type="number" label="Número do cartão de crédito"
        placeholder="0000 0000 0000 0000"></v-text-field>
      <v-text-field variant="outlined" label="Titular" placeholder="Maria R Silva">
  
      </v-text-field>
      <div>
        <v-text-field class="dueDateCard" variant="outlined" label="Vencimento" placeholder="MM/AA"></v-text-field>
        <v-text-field class="cardVerification" variant="outlined" label="Cod.Segurança" placeholder="123"></v-text-field>
      </div>
      <div class="divider"></div>
      <ec_cpf />
      <ec_phone />
      <ec_mail />
    </section>
  </template>
  
  
  
  <script setup>
  import ec_cpf from '@/components/atoms/dataInputs/ec_CPF_input.vue'
  import ec_mail from '@/components/atoms/dataInputs/ec_Email_input.vue'
  import ec_phone from '@/components/atoms/dataInputs/ec_Phone_input.vue'
  </script>
  
  

  <script>
  export default {
    name: 'ec_cardData',
    props:{
    hasTitle:Boolean
    }
  }
  </script>