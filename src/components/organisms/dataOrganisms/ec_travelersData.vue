<template>
    <section class="travelers">
        <!--esse componente não está puxando esse array de requerimentos-->
        <ec_flightRequirements requirements="Visto,Comprovante de vacína Covid-19" />

        <div class="checkoutTitleSection">
            <h2>Dados dos viajantes</h2>
        </div>
        <div class="ec_Container">
            <div class="travelerData">
                <!-- Espaço para array de dados de passageiros -->
                <v-row no-gutters align="center">
                    <v-col>
                        <div>
                            <h3>Nome</h3>
                        </div>
                        <v-row no-gutters justify="space-between" align="center">
                            <p>Documento</p>
                            <ec_travelersDataInput />
                        </v-row>
                    </v-col>
                </v-row>
                <!-- Fim de espaço para array de dados de passageiros -->
            </div>
        </div>
    </section>
</template>

<script setup>
import ec_flightRequirements from '@/components/molecules/flightRequirements.vue'
import ec_travelersDataInput from '@/components/organisms/dataOrganisms/travelersDataInput.vue'

</script>

<script>
export default {
    name: 'ec_travelersData'
}
</script>