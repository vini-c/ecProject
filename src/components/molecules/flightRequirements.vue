<template>
    <div class="flightRequirements mb-4">
            <div class="title">
                <v-row no-gutters align="center">
                <v-icon class="pr-2" icon="mdi-alert" size="small"></v-icon>
                <h4>Documentos necessários</h4>
            </v-row>
            </div>
                <ul>
                    <!-- <li>{{requirements}}</li> -->
                    <li>Visto</li>
                    <li>Comprovante de Vacina Covid-19</li>

                </ul>
    </div>
</template>
<script setup>
import '@/assets/scss/flightRequirements.scss'
</script>
<script>
export default {
    name: 'ec_flightRequirements',
    props:{
        // requirements:Array
    }
}
</script>