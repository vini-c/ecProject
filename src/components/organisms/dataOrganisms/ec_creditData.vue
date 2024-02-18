<template>
    <section class="payByCard">
      <div class="checkoutTitleSection creditCard  mb-4">
        <div class="">
          <h2 v-if="hasTitle">Cartão de crédito</h2>
          <p>Preencha os dados do cartão:</p>
        </div>
        <div class="cardBrands">
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" />
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" />
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png" />
          <img  src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg"/>
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hipercard_logo.svg/2560px-Hipercard_logo.svg.png" />
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/1024px-Elo_card_association_logo_-_black_text.svg.png" />
        </div>
        
      </div>
      <v-text-field variant="outlined" type="number" label="Número do cartão de crédito"
        placeholder="0000 0000 0000 0000"></v-text-field>
      <v-text-field variant="outlined" label="Titular" placeholder="Maria R Silva">
  
      </v-text-field>
      <div class="rowDesktop">
        <v-text-field class="dueDateCard" variant="outlined" label="Vencimento" placeholder="MM/AA"></v-text-field>
        <v-text-field class="cardVerification" variant="outlined" label="Cod.Segurança" placeholder="123"></v-text-field>
      </div>
      <div class="divider"></div>
      <div class="rowDesktop">
      <ec_cpf />
      <ec_phone />
      </div>
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