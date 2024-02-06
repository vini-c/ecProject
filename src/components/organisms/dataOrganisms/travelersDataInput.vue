<template>
    <v-btn v-if="filled === false" @click="sheet = !sheet" class="dataforFill px-2 main-btn" size="small" 
        rounded="xl" elevation="0">Preencher Dados</v-btn>
    <v-btn v-if="filled === true" @click="sheet = !sheet" class="dataforFill px-2" size="small" variant="outlined"
        rounded="xl" elevation="0">Alterar Dados</v-btn>

    <v-bottom-sheet v-model="sheet">

        <v-card>
            <v-container fluid>
                <v-row no-gutters>
                    <v-col cols="10">
                        <div class="checkoutTitleSection mb-4">
                            <h2>Insira os dados do viajante</h2>
                            <p>Estes dados são necessário para a emissão da passagem.</p>
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <v-row no-gutters justify="end">
                            <v-btn class="rounded-xl  font-weight-bold mr-4" icon="mdi-close" @click="sheet = !sheet"
                                variant="outlined" elevation="0"></v-btn>
                        </v-row>
                    </v-col>
                </v-row>
                <v-text-field variant="outlined" label="Nome" placeholder="Maria"></v-text-field>
                <v-text-field variant="outlined" label="Último nome" placeholder="Silva"></v-text-field>
                <!-- <div class="divider"></div> -->
                <div class="checkoutTitleSection mb-4">
                    <h3>Documento</h3>
                </div>
                <v-row no-gutters>
                    <v-col cols="4">
                        <v-select variant="outlined" class="mr-4" label="Tipo de Documento"
                            :items="['CPF', 'Passaporte', 'RG']"></v-select></v-col>
                    <v-col cols="8">
                        <v-text-field variant="outlined" label="Número" type="number"
                            placeholder="000.000.000-00"></v-text-field>
                    </v-col>
                </v-row>
                <!-- <div class="divider"></div> -->
                <v-select variant="outlined" label="País de residência" :items="['Brasil']"></v-select>
                <v-select variant="outlined" label="Sexo" :items="['Feminino', 'Masculino']"></v-select>
                <!-- <div class="divider"></div> -->
                <div class="checkoutTitleSection my-2">
                    <h3>Data de nascimento</h3>
                    <v-text-field variant="outlined" class="mt-2" label="Data de nascimento" type="date"
                        placeholder="00/00/0000"></v-text-field>
                </div>
                <v-row no-gutters justify="end">
                    <v-btn class="rounded-xl  font-weight-bold mr-4" variant="outlined" elevation="0">Limpar dados </v-btn>
                    <v-btn class="rounded-xl main-btn font-weight-bold" @click="sheet = !sheet" elevation="0">Salvar
                    </v-btn></v-row>
            </v-container>
        </v-card>
    </v-bottom-sheet>
</template>

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