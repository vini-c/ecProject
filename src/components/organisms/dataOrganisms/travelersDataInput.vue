<template>
    <v-btn v-if="filled === false" @click="sheet = !sheet" class="dataforFill px-2 main-btn" size="small" 
        rounded="xl" elevation="0">Preencher Dados</v-btn>
    <v-btn v-if="filled === true" @click="sheet = !sheet" class="dataforFill px-2" size="small" variant="outlined"
        rounded="xl" elevation="0">Alterar Dados</v-btn>

    <v-bottom-sheet v-model="sheet">
        <v-card>
            <v-container fluid>
                <v-row no-gutters v-if="!hasTitle">
                    <v-col cols="10">
                        <div class="checkoutTitleSection mb-4">
                            <h2>Dados do passageiro</h2>
                            <p>Estes dados são necessário para a emissão da passagem.</p>
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <v-row no-gutters justify="end">
                            <v-btn class="rounded-xl  font-weight-bold mr-4" icon="mdi-close" @click="sheet = !sheet" variant="outlined"
                                elevation="0"></v-btn>
                        </v-row>
                    </v-col>
                </v-row>
               <ec_travelersInputs :hasTitle="false" :hasButtons="true"></ec_travelersInputs>
            </v-container>
        </v-card>
    </v-bottom-sheet>
</template>


<script setup>
import ec_travelersInputs from '@/components/organisms/dataOrganisms/ec_travelersInputs.vue'
</script>
<script>

export default {
    name: 'ec_travelersDataInput',
    data: () => ({
        sheet: false,
    }),
    props: {
        cta: String,
        filled: Boolean
    }
}
</script>