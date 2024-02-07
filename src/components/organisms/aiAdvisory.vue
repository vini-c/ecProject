<template>
        <div class="advisoryArea">
    <v-card elevation="0" class="advisoryComponent">
        <v-card-text>
            <v-window>  
            <div class="iaLogo">
                <img width="140" src="@/assets/ecIA.svg">
                <p>O Embarque Certo encontrou 532 opções e sugeriu as opções:</p>
            </div>
            <div class="options">
                    <ec_advisoryOptions v-bind:flightOptionData="flightOptionData"  />
            </div>
            </v-window>   
        </v-card-text>
    </v-card>
</div>
</template>


<script setup>
import ec_advisoryOptions from '@/components/molecules/advisoryOptions.vue'
</script>

<script>
import '@/assets/scss/advisoryAi.scss'
export default {
    name: 'ec_AIadvisory',
    props: { flightOptionData: Array },
    data: () => ({
        // tab: null,
    }),
}
</script>
