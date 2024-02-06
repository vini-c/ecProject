<template>
<section class="paybyPix">
    <!-- Pix -->
    <!-- dados do Pix -->
    <div class="checkoutTitleSection  mb-4">
        <h2>Pix</h2>
        <p>Informe os seus dados e ao finalizar a compra, copie ou escaneie o código QR. Para sua comodidade, também enviaremos o código por e-mail.</p>
    </div>
    <ec_cpf/>
    <v-text-field variant="outlined" label="Nome completo"
        placeholder="Maria R Silva"></v-text-field>
    <ec_phone></ec_phone>
    <ec_mail></ec_mail>
</section>
</template>
<script setup>
import ec_cpf from '@/components/atoms/dataInputs/ec_CPF_input.vue'
import ec_mail from '@/components/atoms/dataInputs/ec_Email_input.vue'
import ec_phone from '@/components/atoms/dataInputs/ec_Phone_input.vue'
</script>

<script>
export default {
  name: 'ec_pixData',
}
</script>