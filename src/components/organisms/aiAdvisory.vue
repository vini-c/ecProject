<template>
        <div class="advisoryArea">
    <v-card elevation="0" class="advisoryComponent">
        <v-tabs class="tabsHeader" v-model="tab">
            <v-tab value="bestPrice">Melhor Preço</v-tab>
            <v-tab value="cheaper">Mais Barata</v-tab>
            <v-tab value="faster">Mais Rápida</v-tab>
            <div class="iaLogo">
                <img src="../../assets/ecIA.svg">
            </div>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="bestPrice">
                    <ec_advisoryOptions v-bind:flightOptionData="flightOptionData"  />
                </v-window-item>
                <v-window-item value="cheaper">
                    <ec_advisoryOptions v-bind:flightOptionData="flightOptionData"  />
                </v-window-item>
                <v-window-item value="faster">
                    <ec_advisoryOptions v-bind:flightOptionData="flightOptionData"  />
                </v-window-item>
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
        tab: null,
    }),
}
</script>
