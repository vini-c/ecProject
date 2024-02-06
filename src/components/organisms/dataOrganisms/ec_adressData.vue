<template>
    <v-text-field variant="outlined" label="CEP" placeholder="000000-000"></v-text-field>
            <v-text-field variant="outlined" label="Estado" placeholder="Insira o nome do estado"></v-text-field>
            <v-text-field variant="outlined" label="Cidade" placeholder="Insira o nome da cidade"></v-text-field>
            <v-text-field variant="outlined" label="Endereço" placeholder="Insira o endereço"></v-text-field>
            <div class="">
                <v-text-field variant="outlined" label="Número" placeholder="0000"></v-text-field>
                <v-text-field variant="outlined" label="Complemento" placeholder="Apto"></v-text-field>
            </div>
</template>

<script>
export default {
    name: 'ec_adressData',
}
</script>