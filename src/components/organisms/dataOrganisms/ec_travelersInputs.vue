<template>
    <v-row no-gutters v-if="hasTitle">
        <v-col cols="10">
            <div class="checkoutTitleSection mb-4">
                <h2  v-if="hasTitle">{{title}}</h2>
                <p  v-if="hasTitle">Estes dados são necessário para a emissão da passagem.</p>
            </div>
        </v-col>
        <v-col cols="2">
            <v-row no-gutters justify="end" v-if="hasClose">
                <v-btn class="rounded-xl  font-weight-bold mr-4" icon="mdi-close" @click="sheet = !sheet" variant="outlined"
                    elevation="0"></v-btn>
            </v-row>
        </v-col>
    </v-row>
    <div class="rowDesktop">
    <v-text-field variant="outlined" hide-details label="Nome" placeholder="Maria"></v-text-field>
    <v-text-field variant="outlined" hide-details label="Último Sobrenome" placeholder="Silva"></v-text-field>
    </div>
    <!-- <div class="divider"></div> -->
    <div class="checkoutTitleSection hideDesktop mb-4">
        <h3>Documento</h3>
    </div>
    <div class="rowDesktop">
        <v-select variant="outlined" hide-details label="País de residência" :items="['Brasil']"></v-select>

    <v-row no-gutters>
        <v-col cols="4">
            <v-select variant="outlined" hide-details class="mr-4" label="Documento"
                :items="['CPF', 'Passaporte', 'RG']"></v-select></v-col>
        <v-col cols="8">
            <v-text-field variant="outlined" hide-details  label="Número" type="number" placeholder="000.000.000-00"></v-text-field>
        </v-col>
    </v-row>
    <!-- <div class="divider"></div> -->
    </div>
    <div class="rowDesktop">
        <v-text-field hide-details variant="outlined" class="" label="Data de nascimento" type="date"
            placeholder="00/00/0000"></v-text-field>
            <div class="choiceContent">
            <h5>Sexo:</h5>

            <v-radio-group inline hide-details>
                <v-radio class="mr-2" label="Feminino" value="Feminino"></v-radio>
  <v-radio label="Masculino" value="Masculino"></v-radio>
                
</v-radio-group>
</div>
    </div>
    <!-- <div class="divider"></div> -->
    
    <v-row no-gutters justify="end" v-if="hasButtons">
        <v-btn class="rounded-xl  font-weight-bold mr-4" variant="outlined" elevation="0">Limpar dados </v-btn>
        <v-btn class="rounded-xl main-btn font-weight-bold" @click="sheet = !sheet" elevation="0">Salvar
        </v-btn>
    </v-row>
</template>

<script>
export default {
    name: 'ec_travelersInputs',
    props: {
        title: String,
        hasTitle: Boolean,
        hasButtons: Boolean,
        hasClose: Boolean,
    }
}
</script>