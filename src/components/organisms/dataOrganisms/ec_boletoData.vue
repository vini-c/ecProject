<template>
    <section class="paybyBoleto">
        <!-- Cartão de crédito -->
        <!-- dados do cartão de crédito -->
        <div class="checkoutTitleSection  mb-4">
            <h2 v-if="hasTitle">Boleto</h2>
            <p>Insira os seus dados para o embarque certo gerar o boleto de pagamento da passagem</p>
        </div>
        <!-- dados do proprietario do cartão -->
        <ec_cpf />
        <ec_phone/>
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
  name: 'ec_boletoData',
  props:{
    hasTitle:Boolean
    }
}
</script>