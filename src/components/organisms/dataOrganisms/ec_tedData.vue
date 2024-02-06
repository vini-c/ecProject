<template>
    <section class="paybyTED">
                                    <!-- TED -->
                                    <!-- dados do TED -->
                                    <div class="checkoutTitleSection  mb-4">
                                        <h2>TED</h2>
                                        <p>Lembre-se que o pagamento deverá ser realizado em <b>até 3h depois da compra</b>, caso contrário, ela será cancelada.</p>
                                    </div>
                                    <v-select variant="outlined"
                                    label="Qual o seu banco?"
                                    :items="['Itaú', 'Nubank', 'Bradesco']"
                                    ></v-select>
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
  name: 'ec_tedData',
data: () => ({
    model: null,
}),
}

</script>