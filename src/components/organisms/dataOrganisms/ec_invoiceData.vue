<template>
    <section class="notaFiscal">
        <!-- TED -->
        <!-- dados do TED -->
        <div class="checkoutTitleSection  mb-4">
            <h2>Dados para Nota Fiscal</h2>
        </div>

            <v-radio-group inline>
                <v-radio label="Pessoa Física" value="pessoa-fisica"></v-radio>
                <v-radio label="Pessoa Jurídica" value="pessoa-juridica"></v-radio>
            </v-radio-group>
            <v-text-field variant="outlined" label="Nome completo" placeholder="Maria Silva"></v-text-field>
            <ec_cpf />
            <ec_cnpj />
            <div class="divider"></div>
            <ec_adressData/>


    </section>
</template>


<script setup>
import ec_cpf from '@/components/atoms/dataInputs/ec_CPF_input.vue'
import ec_adressData from '@/components/organisms/dataOrganisms/ec_adressData.vue'
import ec_cnpj from '@/components/atoms/dataInputs/ec_cnpj_input.vue'

</script>

<script>
export default {
    name: 'ec_invoiceData',
}
</script>