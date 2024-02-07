<template>
    <v-sheet elevation="0">
        <v-slide-group v-model="model" class="" selected-class="advisoryChoosed" prev-icon="false" mext-icon="false">
            <v-slide-group-item v-for="(item, x) in flightOptionData" :key="x"
                v-slot="{ isSelected, toggle, selectedClass }">
                <v-card class="aiAdivisoryOption" elevation="0" :class="['ma-0', 'pa-0', selectedClass]" @click="toggle">
                    <div class="d-flex advisoryContent">
                        <div>
                            <p>Recomendada</p>
                        </div>
                        <div class="flightOptionAdvisory">
                            <img v-bind:src="item.ciaLogo" class="ciaLogo" />
                            <h3 class="pt-0 pb-0 font-weight-bold justify-end">{{ item.finalPrice }}</h3>
                        </div>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>
<script>

import '@/assets/scss/advisoryAi.scss'

export default {
    name: 'ec_advisoryOptions',
    props: { flightOptionData: Array, },
    data: () => ({
        model: null,
    }),
}
</script>